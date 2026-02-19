"use client";

import { useEffect, useRef } from "react";
import type { RareEarthElement } from "@/data/elements";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  phase: number;
  orbitRadius: number;
  orbitSpeed: number;
  anchorX: number;
  anchorY: number;
}

interface AbstractVizProps {
  element: RareEarthElement;
}

// Derive visual parameters from element properties
function getVizParams(el: RareEarthElement) {
  const n = el.atomicNumber;
  const mass = el.atomicMass;

  // Particle count: 30–80 based on atomic number
  const count = Math.floor(30 + (n / 71) * 50);

  // Connection distance: heavier elements = longer reach
  const connectionDist = 60 + (mass / 175) * 60;

  // Movement style: even atomic numbers are more structured, odd more organic
  const structured = n % 2 === 0 ? 0.7 : 0.3;

  // Speed factor: lighter elements move faster
  const speed = 0.3 + (1 - mass / 175) * 0.5;

  // Pulse frequency based on electron shells
  const pulseFreq = 0.005 + (n % 10) * 0.001;

  // Dot size range
  const minRadius = 1;
  const maxRadius = 2 + (n / 71) * 2;

  // Line opacity
  const lineAlpha = 0.08 + structured * 0.07;

  // Node opacity
  const nodeAlpha = 0.25 + structured * 0.2;

  return {
    count,
    connectionDist,
    structured,
    speed,
    pulseFreq,
    minRadius,
    maxRadius,
    lineAlpha,
    nodeAlpha,
  };
}

// Seeded pseudo-random for deterministic patterns per element
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export default function AbstractViz({ element }: AbstractVizProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const params = getVizParams(element);
    const rand = seededRandom(element.atomicNumber * 137);

    let width = 0;
    let height = 0;
    let dpr = 1;

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
    }

    function initParticles() {
      const particles: Particle[] = [];
      for (let i = 0; i < params.count; i++) {
        const x = rand() * width;
        const y = rand() * height;
        const angle = rand() * Math.PI * 2;
        const speed = (rand() * 0.3 + 0.1) * params.speed;
        const r =
          params.minRadius + rand() * (params.maxRadius - params.minRadius);

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: r,
          baseRadius: r,
          phase: rand() * Math.PI * 2,
          orbitRadius: rand() * 30 * params.structured + 5,
          orbitSpeed: (rand() * 0.5 + 0.5) * params.speed * 0.02,
          anchorX: x,
          anchorY: y,
        });
      }
      particlesRef.current = particles;
    }

    resize();
    initParticles();

    let time = 0;

    function animate() {
      if (!ctx) return;
      time += 1;
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const pointer = pointerRef.current;

      // Update particles
      for (const p of particles) {
        if (params.structured > 0.5) {
          // More structured: orbital motion around anchor
          p.x =
            p.anchorX +
            Math.cos(time * p.orbitSpeed + p.phase) * p.orbitRadius;
          p.y =
            p.anchorY +
            Math.sin(time * p.orbitSpeed + p.phase) * p.orbitRadius;

          // Slowly drift anchors
          p.anchorX += p.vx * 0.3;
          p.anchorY += p.vy * 0.3;
        } else {
          // More organic: free movement with gentle noise
          p.x += p.vx;
          p.y += p.vy;

          // Slight sinusoidal drift
          p.x += Math.sin(time * 0.01 + p.phase) * 0.15;
          p.y += Math.cos(time * 0.013 + p.phase * 1.3) * 0.15;
        }

        // Pulse radius
        p.radius =
          p.baseRadius *
          (1 + Math.sin(time * params.pulseFreq + p.phase) * 0.3);

        // Pointer interaction: gentle repulsion
        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = (120 - dist) / 120;
            const ax = (dx / dist) * force * 0.8;
            const ay = (dy / dist) * force * 0.8;
            p.x += ax;
            p.y += ay;
            if (params.structured > 0.5) {
              p.anchorX += ax * 0.3;
              p.anchorY += ay * 0.3;
            }
          }
        }

        // Wrap at edges with padding
        const pad = 20;
        if (p.x < -pad) {
          p.x = width + pad;
          p.anchorX = p.x;
        }
        if (p.x > width + pad) {
          p.x = -pad;
          p.anchorX = p.x;
        }
        if (p.y < -pad) {
          p.y = height + pad;
          p.anchorY = p.y;
        }
        if (p.y > height + pad) {
          p.y = -pad;
          p.anchorY = p.y;
        }
      }

      // Draw connections
      ctx.strokeStyle = `rgba(26, 26, 26, ${params.lineAlpha})`;
      ctx.lineWidth = 0.5;
      const distSq = params.connectionDist * params.connectionDist;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < distSq) {
            const alpha =
              params.lineAlpha * (1 - Math.sqrt(d2) / params.connectionDist);
            ctx.strokeStyle = `rgba(26, 26, 26, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.fillStyle = `rgba(26, 26, 26, ${params.nodeAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw pointer influence ring
      if (pointer.active) {
        ctx.strokeStyle = "rgba(26, 26, 26, 0.04)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 120, 0, Math.PI * 2);
        ctx.stroke();
      }

      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);

    // Pointer tracking
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current.x = e.clientX - rect.left;
      pointerRef.current.y = e.clientY - rect.top;
      pointerRef.current.active = true;
    };

    const onPointerLeave = () => {
      pointerRef.current.active = false;
    };

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", resize);
    };
  }, [element]);

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
          cursor: "crosshair",
        }}
      />
    </div>
  );
}
