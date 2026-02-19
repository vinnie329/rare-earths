"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import type { RareEarthElement } from "@/data/elements";
import { ELECTRON_SHELLS, SHELL_NAMES } from "@/data/electron-shells";

interface AtomicStructureProps {
  element: RareEarthElement;
  showSymbol?: boolean;
}

interface ShellState {
  angle: number;
  speed: number;
  visibleCount: number;
}

export default function AtomicStructure({
  element,
  showSymbol = true,
}: AtomicStructureProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const hoveredShell = useRef<number>(-1);
  const introProgress = useRef(0);
  const startTime = useRef(0);
  const prevElement = useRef(element.atomicNumber);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const lastChimeShell = useRef<number>(-1);
  const [soundOn, setSoundOn] = useState(false);
  const soundOnRef = useRef(false);

  const getShells = useCallback(() => {
    return ELECTRON_SHELLS[element.atomicNumber] || [2, 8, 8, 2];
  }, [element.atomicNumber]);

  useEffect(() => {
    soundOnRef.current = soundOn;
  }, [soundOn]);

  useEffect(() => {
    // Reset intro animation when element changes
    if (prevElement.current !== element.atomicNumber) {
      introProgress.current = 0;
      startTime.current = 0;
      prevElement.current = element.atomicNumber;
    }
  }, [element.atomicNumber]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let cx = 0;
    let cy = 0;

    // Build per-shell rotation state
    const shells = ELECTRON_SHELLS[element.atomicNumber] || [2, 8, 8, 2];
    const shellStates: ShellState[] = shells.map((count, s) => ({
      angle: s * 0.4, // stagger initial angles
      speed: 0.008 + (shells.length - s) * 0.004, // inner faster, outer slower
      visibleCount: Math.min(count, 12),
    }));

    function resize() {
      if (!canvas || !container || !ctx) return;
      dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = width / 2;
      cy = height / 2;
    }

    resize();

    function getShellRadius(shellIndex: number): number {
      const maxRadius = Math.min(cx, cy) * 0.85;
      const minRadius = 24;
      const step = (maxRadius - minRadius) / shells.length;
      return minRadius + step * (shellIndex + 1);
    }

    function animate(timestamp: number) {
      if (!ctx) return;
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;

      // Intro: 0 to 1 over ~2 seconds
      introProgress.current = Math.min(1, elapsed / 2000);
      const intro = introProgress.current;

      ctx.clearRect(0, 0, width, height);

      const hovered = hoveredShell.current;

      // Draw nucleus
      const nucleusOpacity = Math.min(1, intro * 3);
      ctx.fillStyle = `rgba(26, 26, 26, ${0.7 * nucleusOpacity})`;
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fill();

      // Draw shells (concentric circles)
      for (let s = 0; s < shells.length; s++) {
        // Stagger shell appearance
        const shellIntro = Math.max(
          0,
          Math.min(1, (intro - s * 0.1) / 0.3)
        );
        if (shellIntro <= 0) continue;

        const r = getShellRadius(s);
        const isHovered = hovered === s;
        const ringAlpha = isHovered ? 0.3 : 0.1;

        // Draw ring with draw-in effect
        ctx.strokeStyle = `rgba(26, 26, 26, ${ringAlpha * shellIntro})`;
        ctx.lineWidth = isHovered ? 1.5 : 0.75;
        ctx.beginPath();

        if (shellIntro < 1) {
          // Partial arc draw-in
          const sweep = shellIntro * Math.PI * 2;
          ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + sweep);
        } else {
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
        }
        ctx.stroke();

        // Hover: show shell label (centered below ring)
        if (isHovered && shellIntro >= 1) {
          ctx.font = "10px 'Helvetica Neue', Helvetica, Arial, sans-serif";
          ctx.textBaseline = "middle";

          const label = `${SHELL_NAMES[s]} Shell · ${shells[s]}e⁻`;
          const textWidth = ctx.measureText(label).width;

          const px = 8;
          const pillW = textWidth + px * 2;
          const pillH = 18;
          const pillR = 9;
          const labelX = cx - pillW / 2;
          const labelY = cy + r + 16;

          ctx.fillStyle = "rgba(26, 26, 26, 0.85)";
          ctx.beginPath();
          ctx.moveTo(labelX + pillR, labelY - pillH / 2);
          ctx.lineTo(labelX + pillW - pillR, labelY - pillH / 2);
          ctx.arcTo(labelX + pillW, labelY - pillH / 2, labelX + pillW, labelY, pillR);
          ctx.arcTo(labelX + pillW, labelY + pillH / 2, labelX + pillW - pillR, labelY + pillH / 2, pillR);
          ctx.lineTo(labelX + pillR, labelY + pillH / 2);
          ctx.arcTo(labelX, labelY + pillH / 2, labelX, labelY, pillR);
          ctx.arcTo(labelX, labelY - pillH / 2, labelX + pillR, labelY - pillH / 2, pillR);
          ctx.fill();

          ctx.textAlign = "left";
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.fillText(label, labelX + px, labelY + 1);
        }
      }

      // Update and draw electrons (rigid rotation per shell)
      for (let si = 0; si < shellStates.length; si++) {
        const ss = shellStates[si];
        const shellIntro = Math.max(
          0,
          Math.min(1, (intro - si * 0.1 - 0.15) / 0.25)
        );
        if (shellIntro <= 0) continue;

        ss.angle += ss.speed;
        const r = getShellRadius(si);
        const isShellHovered = hovered === si;
        const dotRadius = isShellHovered ? 3 : 2;
        const alpha = isShellHovered ? 0.8 * shellIntro : 0.5 * shellIntro;

        ctx.fillStyle = `rgba(26, 26, 26, ${alpha})`;
        const step = (Math.PI * 2) / ss.visibleCount;
        for (let e = 0; e < ss.visibleCount; e++) {
          const angle = ss.angle + e * step;
          const ex = cx + Math.cos(angle) * r;
          const ey = cy + Math.sin(angle) * r;
          ctx.beginPath();
          ctx.arc(ex, ey, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);

    // Hover detection
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const dist = Math.sqrt((mx - cx) ** 2 + (my - cy) ** 2);

      let closest = -1;
      let closestDist = 15; // Snap distance in px

      for (let s = 0; s < shells.length; s++) {
        const r = getShellRadius(s);
        const d = Math.abs(dist - r);
        if (d < closestDist) {
          closestDist = d;
          closest = s;
        }
      }

      hoveredShell.current = closest;
      canvas.style.cursor = closest >= 0 ? "pointer" : "default";

      // Play chime when entering a new shell
      if (closest !== lastChimeShell.current && closest >= 0) {
        lastChimeShell.current = closest;
        playChime(closest);
      } else if (closest < 0) {
        lastChimeShell.current = -1;
      }
    };

    // Pentatonic scale starting from C5, ascending per shell
    const CHIME_FREQUENCIES = [523, 587, 659, 784, 880, 988, 1047, 1175];

    function playChime(shellIndex: number) {
      if (!soundOnRef.current) return;
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state !== "running") return;

      const freq = CHIME_FREQUENCIES[shellIndex] || CHIME_FREQUENCIES[CHIME_FREQUENCIES.length - 1];
      const now = ctx.currentTime;

      // Main tone — sine for a pure, bell-like quality
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;

      // Harmonic overtone for shimmer
      const osc2 = ctx.createOscillator();
      osc2.type = "sine";
      osc2.frequency.value = freq * 2.5;

      // Gain envelope — quick attack, gentle decay
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      const gain2 = ctx.createGain();
      gain2.gain.setValueAtTime(0, now);
      gain2.gain.linearRampToValueAtTime(0.04, now + 0.01);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      osc.connect(gain).connect(ctx.destination);
      osc2.connect(gain2).connect(ctx.destination);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + 1.5);
      osc2.stop(now + 1);
    }

    const onPointerLeave = () => {
      hoveredShell.current = -1;
      lastChimeShell.current = -1;
    };

    // Create AudioContext eagerly; browser will suspend until first user gesture
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }

    // Resume on any user gesture so hovers work immediately after
    const resumeAudio = () => {
      if (audioCtxRef.current?.state === "suspended") {
        audioCtxRef.current.resume();
      }
    };

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("pointerdown", resumeAudio);
    document.addEventListener("pointermove", resumeAudio, { once: true });
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("pointerdown", resumeAudio);
      document.removeEventListener("pointermove", resumeAudio);
      window.removeEventListener("resize", resize);
    };
  }, [element, getShells]);

  const shells = getShells();

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />

      {/* Sound toggle — pill + dot */}
      <button
        onClick={() => setSoundOn((v) => !v)}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: "none",
          border: "1px solid var(--line-color)",
          borderRadius: "100px",
          padding: "0.4rem 1rem",
          fontSize: "0.6rem",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          cursor: "pointer",
          color: "var(--text-color)",
          fontFamily: "inherit",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: soundOn ? "var(--text-color)" : "var(--accent-color)",
            opacity: soundOn ? 1 : 0.4,
          }}
        />
        Sound {soundOn ? "On" : "Off"}
      </button>

      {showSymbol && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "clamp(4rem, 12vw, 10rem)",
                fontWeight: 300,
                letterSpacing: "0.15em",
                color: "rgba(26, 26, 26, 0.06)",
                lineHeight: 1,
                textTransform: "uppercase",
                fontFamily:
                  "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              {element.symbol}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
