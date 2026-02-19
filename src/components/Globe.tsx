"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const COORDS: Record<string, [number, number]> = {
  CHINA: [35.86, 104.2],
  AUSTRALIA: [-25.27, 133.78],
  RUSSIA: [61.52, 105.32],
  UKRAINE: [48.38, 31.17],
  INDIA: [20.59, 78.96],
  BRAZIL: [-14.24, -51.93],
  MYANMAR: [21.91, 95.96],
  "UNITED STATES": [37.09, -95.71],
  USA: [37.09, -95.71],
};

function parseLocations(
  extraction: string
): { location: [number, number]; size: number }[] {
  const parts = extraction.split(",").map((s) => s.trim().toUpperCase());
  return parts
    .map((country, i) => {
      const clean = country.replace(/\(.*\)/, "").trim();
      const coord = COORDS[clean];
      if (!coord) return null;
      return { location: coord, size: i === 0 ? 0.1 : 0.06 };
    })
    .filter(Boolean) as { location: [number, number]; size: number }[];
}

function getInitialPhi(extraction: string): number {
  const first = extraction
    .split(",")[0]
    .trim()
    .toUpperCase()
    .replace(/\(.*\)/, "")
    .trim();
  const coord = COORDS[first];
  if (!coord) return 0;
  return ((coord[1] + 90) * Math.PI) / 180;
}

function getInitialTheta(extraction: string): number {
  const first = extraction
    .split(",")[0]
    .trim()
    .toUpperCase()
    .replace(/\(.*\)/, "")
    .trim();
  const coord = COORDS[first];
  if (!coord) return 0.2;
  return (coord[0] * Math.PI) / 180;
}

interface GlobeProps {
  extraction: string;
}

export default function Globe({ extraction }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerDown = useRef(false);
  const pointerX = useRef(0);
  const phiRef = useRef(getInitialPhi(extraction));
  const autoRotateSpeed = useRef(0.002);
  const dragVelocity = useRef(0);

  useEffect(() => {
    phiRef.current = getInitialPhi(extraction);
  }, [extraction]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const markers = parseLocations(extraction);
    const targetTheta = getInitialTheta(extraction);

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi: phiRef.current,
      theta: targetTheta,
      dark: 1,
      diffuse: 0.4,
      mapSamples: 20000,
      mapBrightness: 1.8,
      baseColor: [0.85, 0.85, 0.83],
      markerColor: [0.1, 0.1, 0.1],
      glowColor: [0, 0, 0],
      scale: 1,
      offset: [0, 0],
      markers,
      onRender: (state) => {
        if (pointerDown.current) {
          // Dragging — no auto-rotate
          autoRotateSpeed.current = 0;
        } else {
          // Ease back to auto-rotate
          autoRotateSpeed.current += (0.002 - autoRotateSpeed.current) * 0.05;
        }

        // Apply drag velocity with friction
        if (!pointerDown.current && Math.abs(dragVelocity.current) > 0.0001) {
          phiRef.current += dragVelocity.current;
          dragVelocity.current *= 0.92;
        } else {
          phiRef.current += autoRotateSpeed.current;
        }

        state.phi = phiRef.current;
      },
    });

    // Pointer events for drag interaction
    const canvas = canvasRef.current;

    const onPointerDown = (e: PointerEvent) => {
      pointerDown.current = true;
      pointerX.current = e.clientX;
      dragVelocity.current = 0;
      canvas.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!pointerDown.current) return;
      const dx = e.clientX - pointerX.current;
      pointerX.current = e.clientX;
      const sensitivity = 0.005;
      phiRef.current += dx * sensitivity;
      dragVelocity.current = dx * sensitivity;
    };

    const onPointerUp = () => {
      pointerDown.current = false;
      canvas.style.cursor = "grab";
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    canvas.style.cursor = "grab";

    return () => {
      globe.destroy();
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [extraction]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "min(100%, 400px)",
          aspectRatio: "1",
          contain: "layout paint size",
        }}
      />
    </div>
  );
}
