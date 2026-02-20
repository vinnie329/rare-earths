"use client";

import { use } from "react";
import dynamic from "next/dynamic";

const layouts: Record<string, ReturnType<typeof dynamic>> = {
  a: dynamic(() => import("@/app/lab/layouts/a/page")),
  b: dynamic(() => import("@/app/lab/layouts/b/page")),
  c: dynamic(() => import("@/app/lab/layouts/c/page")),
  d: dynamic(() => import("@/app/lab/layouts/d/page")),
  e: dynamic(() => import("@/app/lab/layouts/e/page")),
};

const fonts: Record<string, string> = {
  helvetica: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  supply: '"PP Supply Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  montreal: '"PP Neue Montreal", "Helvetica Neue", Helvetica, Arial, sans-serif',
  monument: '"ABC Monument Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif',
};

export default function FontPreview({
  params,
}: {
  params: Promise<{ font: string; layout: string }>;
}) {
  const { font, layout } = use(params);
  const LayoutComponent = layouts[layout];
  const fontFamily = fonts[font];

  if (!LayoutComponent || !fontFamily) {
    return <div style={{ padding: "2rem" }}>Not found</div>;
  }

  return (
    <div
      style={{
        // Override the CSS variable so all components inherit the new font
        ["--font-family" as string]: fontFamily,
        height: "100vh",
      }}
    >
      <LayoutComponent />
    </div>
  );
}
