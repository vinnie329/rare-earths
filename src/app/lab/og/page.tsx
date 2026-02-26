const SANS =
  "'ABC Monument Grotesk', 'Helvetica Neue', Helvetica, sans-serif";
const MONO = "'DM Mono', 'SF Mono', 'Consolas', monospace";
const SERIF = SANS;

/* Palette */
const WARM_BG = "#DDDAD4";
const SITE_BG = "#f2f2f0";
const FG = "#1A1A1A";
const FG_MID = "#6B6760";
const FG_LIGHT = "#9E9A93";
const RED = "#C4392F";

export default function OGLab() {
  return (
    <>
      <div style={{ padding: "1.5rem" }}>
        <div
          className="lab-section-header"
          style={{ padding: "0 0 1.5rem" }}
        >
          <h2 className="lab-section-title">
            Open Graph Image
            <span className="lab-section-count">(12)</span>
          </h2>
          <p className="lab-section-desc">
            Social preview card — 1200&times;630. Shown at ~300–500px wide in
            most contexts. Only large type reads at thumbnail scale.
          </p>
        </div>

        {/* ---- Thumbnail previews ---- */}
        <div style={{ marginTop: "1.5rem", marginBottom: "3rem" }}>
          <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8c8c88", marginBottom: "1.25rem" }}>
            Thumbnail Preview — actual social media sizes
          </div>

          {(["L", "M"] as const).map((v) => (
            <div key={v} style={{ marginBottom: "2rem" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 500, marginBottom: "0.75rem" }}>Variant {v}</div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-end", flexWrap: "wrap" }}>
                {[
                  { label: "Twitter / X", w: 504, h: 264 },
                  { label: "Slack", w: 400, h: 210 },
                  { label: "iMessage", w: 300, h: 157 },
                  { label: "Discord", w: 400, h: 210 },
                ].map((size) => (
                  <div key={`${v}-${size.label}`}>
                    <div style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "#8c8c88", marginBottom: "0.4rem" }}>
                      {size.label} — {size.w}&times;{size.h}
                    </div>
                    <div style={{
                      width: `${size.w}px`,
                      height: `${size.h}px`,
                      borderRadius: "6px",
                      overflow: "hidden",
                      border: "1px solid #dcdcdc",
                      position: "relative",
                    }}>
                      <div style={{
                        width: "1200px",
                        height: "630px",
                        transform: `scale(${size.w / 1200})`,
                        transformOrigin: "top left",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}>
                        {v === "L" ? <VariantL /> : <VariantM />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #dcdcdc", paddingTop: "2rem", marginBottom: "0.5rem", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8c8c88" }}>
          All variants — full size
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
            marginTop: "1.5rem",
          }}
        >
          <OGVariant label="A" name="Declassified Index" desc="Weight contrast, inset border, light metadata texture">
            <VariantA />
          </OGVariant>
          <OGVariant label="B" name="Specimen Card" desc="Dark bg, centered, restrained">
            <VariantB />
          </OGVariant>
          <OGVariant label="C" name="Broken Editorial" desc="Off-axis, structural grid lines">
            <VariantC />
          </OGVariant>
          <OGVariant label="D" name="Commodity Brief" desc="Warm stone, sans + italic serif, report framing">
            <VariantD />
          </OGVariant>
          <OGVariant label="E" name="Dark Dossier" desc="Near-black, red accent, mono metadata">
            <VariantE />
          </OGVariant>
          <OGVariant label="F" name="Weight Tension" desc="Medium vs thin, same scale, confrontational space">
            <VariantF />
          </OGVariant>
          <OGVariant label="G" name="Element Catalog" desc="17 symbols as composition, one highlighted">
            <VariantG />
          </OGVariant>
          <OGVariant label="H" name="Signal Map" desc="Concentric arcs, title left, coordinates">
            <VariantH />
          </OGVariant>
          <OGVariant label="I" name="Registry Entry" desc="Horizontal rules, labeled data fields, document feel">
            <VariantI />
          </OGVariant>
          <OGVariant label="J" name="Cropped Letterform" desc="Oversized letters bleeding edges, space between strokes">
            <VariantJ />
          </OGVariant>
          <OGVariant label="K" name="Red Field" desc="Red band cutting through, high contrast split">
            <VariantK />
          </OGVariant>
          <OGVariant label="L" name="Signal Registry" desc="H + I — concentric arcs as texture behind structured document fields">
            <VariantL />
          </OGVariant>
          <OGVariant label="M" name="Signal Registry (no border)" desc="L without the inset border — rings float free">
            <VariantM />
          </OGVariant>
        </div>
      </div>
    </>
  );
}

/* ---- Shared wrapper ---- */
function OGVariant({
  label,
  name,
  desc,
  children,
}: {
  label: string;
  name: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "0.75rem",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}
        >
          <span style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8c8c88" }}>
            ({label})
          </span>
          <span style={{ fontSize: "0.85rem", fontWeight: 500 }}>{name}</span>
        </div>
        <span style={{ fontSize: "0.65rem", color: "#8c8c88", textTransform: "uppercase", letterSpacing: "0.04em" }}>
          {desc}
        </span>
      </div>
      <div style={{ border: "1px solid #dcdcdc", borderRadius: "8px", overflow: "hidden", background: "#fff" }}>
        <div style={{ width: "100%", aspectRatio: "1200 / 630", position: "relative", overflow: "hidden" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ================================================
   A — Declassified Index
   Medium weight title, light contrast. Inset border.
   ================================================ */
function VariantA() {
  return (
    <div style={{ width: "100%", height: "100%", background: SITE_BG, position: "relative", fontFamily: SANS, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: "16px", border: "1px solid #d0d0cc", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "28px", left: "32px", fontSize: "8px", textTransform: "uppercase", letterSpacing: "0.12em", color: FG_LIGHT, fontFamily: MONO }}>
        REE-INDEX-2026
      </div>
      <div style={{ position: "absolute", top: "28px", right: "32px", fontSize: "8px", textTransform: "uppercase", letterSpacing: "0.12em", color: FG_LIGHT, fontFamily: MONO, textAlign: "right" }}>
        17 ELEMENTS
      </div>
      <div style={{ position: "absolute", top: "50%", left: "32px", transform: "translateY(-58%)", lineHeight: 0.85 }}>
        <div style={{ fontSize: "min(14vw, 180px)", fontWeight: 700, letterSpacing: "-0.04em", color: FG }}>RARE</div>
        <div style={{ fontSize: "min(14vw, 180px)", fontWeight: 300, letterSpacing: "-0.04em", color: FG }}>EARTHS</div>
      </div>
      <div style={{ position: "absolute", bottom: "28px", left: "32px", fontSize: "8px", textTransform: "uppercase", letterSpacing: "0.1em", color: FG_LIGHT, fontFamily: MONO }}>
        CRITICAL MINERALS FOR AI INFRASTRUCTURE
      </div>
      <div style={{ position: "absolute", bottom: "28px", right: "32px", fontSize: "9px", letterSpacing: "0.08em", color: FG_LIGHT }}>(01)</div>
    </div>
  );
}

/* ================================================
   B — Specimen Card (dark)
   ================================================ */
function VariantB() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#1a1a1a", position: "relative", fontFamily: SANS, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", inset: "16px", border: "1px solid #2a2a2a", pointerEvents: "none" }} />
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#555", marginBottom: "20px", fontFamily: MONO }}>(17)</div>
        <div style={{ lineHeight: 0.88 }}>
          <div style={{ fontSize: "min(10vw, 120px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#e8e8e6" }}>RARE EARTH</div>
          <div style={{ fontSize: "min(5vw, 56px)", fontWeight: 300, letterSpacing: "0.2em", color: "#e8e8e6", marginTop: "8px" }}>ELEMENTS</div>
        </div>
        <div style={{ width: "40px", height: "1px", background: "#333", margin: "20px auto" }} />
        <div style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#555", fontFamily: MONO }}>
          CRITICAL MINERALS / AI INFRASTRUCTURE
        </div>
      </div>
    </div>
  );
}

/* ================================================
   C — Broken Editorial
   ================================================ */
function VariantC() {
  return (
    <div style={{ width: "100%", height: "100%", background: SITE_BG, position: "relative", fontFamily: SANS, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "38%", top: "16px", bottom: "16px", width: "1px", background: "#dcdcdc" }} />
      <div style={{ position: "absolute", top: "65%", left: "16px", right: "16px", height: "1px", background: "#dcdcdc" }} />
      <div style={{ position: "absolute", top: "-8%", left: "5%", fontSize: "min(18vw, 220px)", fontWeight: 700, letterSpacing: "-0.05em", color: FG, lineHeight: 0.85, opacity: 0.06 }}>RARE</div>
      <div style={{ position: "absolute", top: "22%", left: "42%", lineHeight: 0.9 }}>
        <div style={{ fontSize: "min(8vw, 96px)", fontWeight: 700, letterSpacing: "-0.03em", color: FG }}>RARE</div>
        <div style={{ fontSize: "min(8vw, 96px)", fontWeight: 300, letterSpacing: "-0.03em", color: FG }}>EARTHS</div>
      </div>
      <div style={{ position: "absolute", top: "30%", left: "5%", width: "30%", fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.1em", lineHeight: 2.4 }}>
        17 ELEMENTS<br />LANTHANIDE SERIES<br />CRITICAL MINERAL
      </div>
      <div style={{ position: "absolute", bottom: "8%", right: "5%", fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.12em", textAlign: "right" }}>
        AI INFRASTRUCTURE
      </div>
    </div>
  );
}

/* ================================================
   D — Commodity Brief
   Warm stone, medium sans + italic serif.
   ================================================ */
function VariantD() {
  return (
    <div style={{ width: "100%", height: "100%", background: WARM_BG, position: "relative", fontFamily: SANS, overflow: "hidden" }}>
      <Grain />

      {/* Title — medium weight + italic serif */}
      <div style={{ position: "absolute", top: "28%", left: "40px" }}>
        <div style={{ fontSize: "min(12vw, 140px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.88, color: FG }}>
          RARE<br />EARTHS
        </div>
        <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "min(4.5vw, 48px)", color: FG_MID, marginTop: "4px", marginLeft: "4px" }}>
          ( index )
        </div>
      </div>

      {/* Red accent dot */}
      <div style={{ position: "absolute", top: "78%", left: "40px", width: "5px", height: "5px", borderRadius: "50%", background: RED }} />

      {/* Bottom bar */}
      <div style={{ position: "absolute", bottom: "28px", left: "40px", right: "40px", borderTop: "1px solid rgba(26,26,26,0.1)", paddingTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          17 Elements — Lanthanides + Sc, Y
        </div>
        <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "13px", color: FG_MID }}>Rare Earths Index</div>
      </div>
    </div>
  );
}

/* ================================================
   E — Dark Dossier
   Near-black, thin red accent, restrained.
   ================================================ */
function VariantE() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#111110", position: "relative", fontFamily: SANS, overflow: "hidden" }}>
      {/* Thin red accent — left edge */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: RED, opacity: 0.8 }} />

      {/* Title */}
      <div style={{ position: "absolute", top: "50%", left: "40px", transform: "translateY(-55%)" }}>
        <div style={{ fontSize: "9px", fontFamily: MONO, color: "#555", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "16px" }}>(17) ELEMENTS</div>
        <div style={{ fontSize: "min(12vw, 150px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.85, color: "#e8e8e6" }}>
          RARE<br />EARTHS
        </div>
      </div>

      {/* Bottom metadata */}
      <div style={{ position: "absolute", bottom: "28px", left: "40px", right: "40px", borderTop: "1px solid #222", paddingTop: "12px", display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: "8px", fontFamily: MONO, color: "#444", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Critical Minerals — AI Infrastructure
        </div>
        <div style={{ fontSize: "8px", fontFamily: MONO, color: "#444", letterSpacing: "0.1em" }}>026 / 2026</div>
      </div>
    </div>
  );
}

/* ================================================
   F — Weight Tension
   Medium vs thin at the same scale. Space carries it.
   ================================================ */
function VariantF() {
  return (
    <div style={{ width: "100%", height: "100%", background: WARM_BG, position: "relative", fontFamily: SANS, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Grain />
      <div style={{ textAlign: "center", lineHeight: 0.88 }}>
        <div style={{ fontSize: "min(14vw, 160px)", fontWeight: 500, letterSpacing: "-0.04em", color: FG }}>RARE</div>
        <div style={{ fontSize: "min(14vw, 160px)", fontWeight: 100, letterSpacing: "-0.04em", color: FG }}>EARTHS</div>
      </div>
      <div style={{ position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)", fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, letterSpacing: "0.15em", textTransform: "uppercase" }}>
        17 Elements
      </div>
    </div>
  );
}

/* ================================================
   G — Element Catalog
   17 symbols as visual grid with title.
   ================================================ */
function VariantG() {
  const symbols = [
    { s: "Sc", n: "21" }, { s: "Y", n: "39" }, { s: "La", n: "57" },
    { s: "Ce", n: "58" }, { s: "Pr", n: "59" }, { s: "Nd", n: "60" },
    { s: "Pm", n: "61" }, { s: "Sm", n: "62" }, { s: "Eu", n: "63" },
    { s: "Gd", n: "64" }, { s: "Tb", n: "65" }, { s: "Dy", n: "66" },
    { s: "Ho", n: "67" }, { s: "Er", n: "68" }, { s: "Tm", n: "69" },
    { s: "Yb", n: "70" }, { s: "Lu", n: "71" },
  ];

  return (
    <div style={{ width: "100%", height: "100%", background: WARM_BG, position: "relative", fontFamily: SANS, overflow: "hidden" }}>
      <Grain />

      {/* Left title block */}
      <div style={{ position: "absolute", top: "28px", left: "40px", bottom: "28px", width: "28%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: "min(5.5vw, 60px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.9, color: FG }}>RARE<br />EARTHS</div>
          <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "min(2.2vw, 24px)", color: FG_MID, marginTop: "6px" }}>( 17 elements )</div>
        </div>
        <div style={{ fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Lanthanide Series + Sc, Y
        </div>
      </div>

      {/* Vertical divider */}
      <div style={{ position: "absolute", top: "28px", bottom: "28px", left: "33%", width: "1px", background: "rgba(26,26,26,0.08)" }} />

      {/* Element grid */}
      <div style={{ position: "absolute", top: "28px", left: "36%", right: "40px", bottom: "28px", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridTemplateRows: "repeat(3, 1fr)", gap: "1px" }}>
        {symbols.map((el, i) => (
          <div key={el.s} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontSize: "6px", fontFamily: MONO, color: FG_LIGHT, letterSpacing: "0.08em", marginBottom: "3px" }}>{el.n}</div>
            <div style={{ fontSize: "min(3vw, 32px)", fontWeight: i === 5 ? 700 : 400, letterSpacing: "-0.01em", color: i === 5 ? RED : FG, opacity: i < 6 ? 0.8 : i < 12 ? 0.45 : 0.25 }}>{el.s}</div>
          </div>
        ))}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px", fontFamily: MONO, color: FG_LIGHT }}>(01)</div>
      </div>
    </div>
  );
}

/* ================================================
   H — Signal Map
   Concentric arcs offset right, title left.
   ================================================ */
function VariantH() {
  return (
    <div style={{ width: "100%", height: "100%", background: SITE_BG, position: "relative", fontFamily: SANS, overflow: "hidden" }}>
      <svg viewBox="0 0 1200 630" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
        <circle cx="820" cy="320" r="500" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity={0.04} />
        <circle cx="820" cy="320" r="380" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity={0.06} />
        <circle cx="820" cy="320" r="260" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity={0.08} />
        <circle cx="820" cy="320" r="150" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity={0.1} />
        <circle cx="820" cy="320" r="60" stroke="#1a1a1a" strokeWidth="0.6" fill="none" opacity={0.12} />
        <path d="M 820 20 A 300 300 0 0 0 540 200" stroke={RED} strokeWidth="1.2" fill="none" opacity={0.4} strokeLinecap="round" />
        <circle cx="820" cy="20" r="2.5" fill={RED} opacity={0.5} />
      </svg>

      {/* Title — left side */}
      <div style={{ position: "absolute", top: "22%", left: "40px" }}>
        <div style={{ fontSize: "min(10vw, 110px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.88, color: FG }}>RARE<br />EARTHS</div>
        <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "min(2.8vw, 30px)", color: FG_MID, marginTop: "6px" }}>( supply mapping )</div>
      </div>

      {/* Bottom corners */}
      <div style={{ position: "absolute", bottom: "28px", left: "40px", fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.1em" }}>
        17 Elements — Lanthanides + Sc, Y
      </div>
      <div style={{ position: "absolute", bottom: "28px", right: "40px", fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, letterSpacing: "0.08em" }}>026 / 2026</div>
    </div>
  );
}

/* ================================================
   I — Registry Entry
   Horizontal rules, data fields, document feel.
   Readable fields even at small size.
   ================================================ */
function VariantI() {
  return (
    <div style={{ width: "100%", height: "100%", background: WARM_BG, position: "relative", fontFamily: SANS, overflow: "hidden" }}>
      <Grain />
      <div style={{ position: "absolute", inset: "20px", border: "1px solid rgba(26,26,26,0.08)", pointerEvents: "none" }} />

      {/* Top header */}
      <div style={{ position: "absolute", top: "32px", left: "36px", right: "36px", display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.15em" }}>REGISTRY</div>
        <div style={{ fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, letterSpacing: "0.1em" }}>026 / 2026</div>
      </div>

      <div style={{ position: "absolute", top: "56px", left: "36px", right: "36px", height: "1px", background: "rgba(26,26,26,0.08)" }} />

      {/* Main title + classification */}
      <div style={{ position: "absolute", top: "72px", left: "36px", right: "36px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: "min(8vw, 86px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.88, color: FG }}>RARE<br />EARTHS</div>
        </div>
        <div style={{ textAlign: "right", marginTop: "12px" }}>
          <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "22px", color: FG_MID }}>Critical Minerals</div>
          <div style={{ fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "6px" }}>17 Elements</div>
        </div>
      </div>

      {/* Mid rule + red dot */}
      <div style={{ position: "absolute", top: "62%", left: "36px", right: "36px", height: "1px", background: "rgba(26,26,26,0.08)" }} />
      <div style={{ position: "absolute", top: "62%", left: "36px", width: "4px", height: "4px", borderRadius: "50%", background: RED, transform: "translateY(-50%)" }} />

      {/* Data fields — only the ones large enough to read */}
      <div style={{ position: "absolute", top: "66%", left: "36px", right: "36px", display: "flex" }}>
        {[
          { label: "COUNT", value: "17" },
          { label: "SERIES", value: "Ln + 2 TM" },
          { label: "RANGE", value: "21 — 71" },
          { label: "ORIGIN", value: "CN 70%" },
        ].map((field) => (
          <div key={field.label} style={{ flex: 1 }}>
            <div style={{ fontSize: "7px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "5px" }}>{field.label}</div>
            <div style={{ fontSize: "14px", fontWeight: 500, color: FG, letterSpacing: "-0.01em" }}>{field.value}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: "32px", left: "36px", fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        Rare Earths Index
      </div>
    </div>
  );
}

/* ================================================
   J — Cropped Letterform
   Oversized letters bleeding edges.
   ================================================ */
function VariantJ() {
  return (
    <div style={{ width: "100%", height: "100%", background: SITE_BG, position: "relative", fontFamily: SANS, overflow: "hidden" }}>
      {/* Ghost background layer */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-52%, -48%)", fontSize: "min(55vw, 640px)", fontWeight: 700, letterSpacing: "-0.06em", color: FG, lineHeight: 0.78, opacity: 0.04, whiteSpace: "nowrap" }}>
        RE
      </div>

      {/* Foreground — cropped at left edge */}
      <div style={{ position: "absolute", top: "50%", left: "-2%", transform: "translateY(-52%)", fontSize: "min(36vw, 420px)", fontWeight: 700, letterSpacing: "-0.05em", color: FG, lineHeight: 0.82 }}>
        REE
      </div>

      {/* Readable text in the open space */}
      <div style={{ position: "absolute", top: "24px", right: "32px", fontSize: "9px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.1em", textAlign: "right", lineHeight: 1.7 }}>
        Rare Earth<br />Elements Index
      </div>
      <div style={{ position: "absolute", bottom: "24px", right: "32px", fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, letterSpacing: "0.1em" }}>(17) — 2026</div>
    </div>
  );
}

/* ================================================
   K — Red Field
   Red band cutting through, high contrast.
   ================================================ */
function VariantK() {
  return (
    <div style={{ width: "100%", height: "100%", background: WARM_BG, position: "relative", fontFamily: SANS, overflow: "hidden" }}>
      <Grain />

      {/* Red horizontal band */}
      <div style={{ position: "absolute", top: "44%", left: 0, right: 0, height: "18%", background: RED }} />

      {/* Title above the band */}
      <div style={{ position: "absolute", top: "10%", left: "40px" }}>
        <div style={{ fontSize: "min(10vw, 110px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.88, color: FG }}>RARE</div>
      </div>

      {/* "EARTHS" crossing into the red band */}
      <div style={{ position: "absolute", top: "32%", left: "40px" }}>
        <div style={{ fontSize: "min(10vw, 110px)", fontWeight: 300, letterSpacing: "-0.04em", lineHeight: 0.88, color: FG }}>EARTHS</div>
      </div>

      {/* Text inside the red band — right side */}
      <div style={{ position: "absolute", top: "48%", right: "40px", fontSize: "9px", fontFamily: MONO, color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.12em", textAlign: "right" }}>
        17 CRITICAL MINERALS
      </div>

      {/* Bottom */}
      <div style={{ position: "absolute", bottom: "28px", left: "40px", right: "40px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          026 / Feb 2026
        </div>
        <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "14px", color: FG_MID }}>Rare Earths Index</div>
      </div>
    </div>
  );
}

/* ================================================
   L — Signal Registry (H + I)
   Concentric arcs as background texture,
   document structure in the foreground.
   ================================================ */
function VariantL() {
  return (
    <div style={{ width: "100%", height: "100%", background: WARM_BG, position: "relative", fontFamily: SANS, overflow: "hidden" }}>
      <Grain />

      {/* Concentric circles — offset right, behind everything */}
      <svg viewBox="0 0 1200 630" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
        <circle cx="860" cy="340" r="480" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity={0.14} />
        <circle cx="860" cy="340" r="360" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity={0.17} />
        <circle cx="860" cy="340" r="240" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity={0.21} />
        <circle cx="860" cy="340" r="140" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity={0.26} />
        <circle cx="860" cy="340" r="55" stroke="#1a1a1a" strokeWidth="0.6" fill="none" opacity={0.3} />
      </svg>

      {/* Inset border */}
      <div style={{ position: "absolute", inset: "20px", border: "1px solid rgba(26,26,26,0.15)", pointerEvents: "none" }} />

      {/* Top header row */}
      <div style={{ position: "absolute", top: "32px", left: "36px", right: "36px", display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.15em" }}>REE-INDEX</div>
        <div style={{ fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, letterSpacing: "0.1em" }}>026 / 2026</div>
      </div>

      {/* Title + italic classification — left side */}
      <div style={{ position: "absolute", top: "72px", left: "36px" }}>
        <div style={{ fontSize: "min(10vw, 110px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.88, color: FG }}>RARE<br />EARTHS</div>
        <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "min(2.8vw, 28px)", color: FG_MID, marginTop: "8px" }}>( index )</div>
      </div>

      {/* Mid horizontal rule */}
      <div style={{ position: "absolute", top: "64%", left: "36px", right: "36px", height: "1px", background: "rgba(26,26,26,0.15)" }} />
      {/* Accent dot at rule intersection */}
      <div style={{ position: "absolute", top: "64%", left: "36px", width: "4px", height: "4px", borderRadius: "50%", background: FG, transform: "translateY(-50%)", opacity: 0.35 }} />

      {/* Data fields below the rule */}
      <div style={{ position: "absolute", top: "68%", left: "36px", right: "36px", display: "flex" }}>
        {[
          { label: "COUNT", value: "17" },
          { label: "SERIES", value: "Ln + 2 TM" },
          { label: "RANGE", value: "21 — 71" },
          { label: "ORIGIN", value: "CN 70%" },
        ].map((field) => (
          <div key={field.label} style={{ flex: 1 }}>
            <div style={{ fontSize: "7px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "5px" }}>{field.label}</div>
            <div style={{ fontSize: "14px", fontWeight: 500, color: FG, letterSpacing: "-0.01em" }}>{field.value}</div>
          </div>
        ))}
      </div>

      {/* Bottom-right decorative — element symbol stack */}
      <div style={{ position: "absolute", bottom: "32px", right: "36px", fontFamily: MONO, fontSize: "7px", color: FG_LIGHT, letterSpacing: "0.12em", lineHeight: 1.9, textAlign: "right", opacity: 0.5 }}>
        Nd · Dy · Ce<br />La · Pr · Sm
      </div>

      {/* Bottom footer */}
      <div style={{ position: "absolute", bottom: "32px", left: "36px", fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.08em" }}>
        Lanthanides + Sc, Y
      </div>
    </div>
  );
}

/* ================================================
   M — Signal Registry without border
   Same as L but no inset border.
   ================================================ */
function VariantM() {
  return (
    <div style={{ width: "100%", height: "100%", background: WARM_BG, position: "relative", fontFamily: SANS, overflow: "hidden" }}>
      <Grain />

      {/* Concentric circles — offset right, behind everything */}
      <svg viewBox="0 0 1200 630" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
        <circle cx="860" cy="340" r="480" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity={0.14} />
        <circle cx="860" cy="340" r="360" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity={0.17} />
        <circle cx="860" cy="340" r="240" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity={0.21} />
        <circle cx="860" cy="340" r="140" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity={0.26} />
        <circle cx="860" cy="340" r="55" stroke="#1a1a1a" strokeWidth="0.6" fill="none" opacity={0.3} />
      </svg>

      {/* Top header row */}
      <div style={{ position: "absolute", top: "32px", left: "36px", right: "36px", display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.15em" }}>REE-INDEX</div>
        <div style={{ fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, letterSpacing: "0.1em" }}>026 / 2026</div>
      </div>

      {/* Title + italic classification — left side */}
      <div style={{ position: "absolute", top: "72px", left: "36px" }}>
        <div style={{ fontSize: "min(10vw, 110px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.88, color: FG }}>RARE<br />EARTHS</div>
        <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "min(2.8vw, 28px)", color: FG_MID, marginTop: "8px" }}>( index )</div>
      </div>

      {/* Mid horizontal rule */}
      <div style={{ position: "absolute", top: "64%", left: "36px", right: "36px", height: "1px", background: "rgba(26,26,26,0.15)" }} />
      {/* Accent dot at rule intersection */}
      <div style={{ position: "absolute", top: "64%", left: "36px", width: "4px", height: "4px", borderRadius: "50%", background: FG, transform: "translateY(-50%)", opacity: 0.35 }} />

      {/* Data fields below the rule */}
      <div style={{ position: "absolute", top: "68%", left: "36px", right: "36px", display: "flex" }}>
        {[
          { label: "COUNT", value: "17" },
          { label: "SERIES", value: "Ln + 2 TM" },
          { label: "RANGE", value: "21 — 71" },
          { label: "ORIGIN", value: "CN 70%" },
        ].map((field) => (
          <div key={field.label} style={{ flex: 1 }}>
            <div style={{ fontSize: "7px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "5px" }}>{field.label}</div>
            <div style={{ fontSize: "14px", fontWeight: 500, color: FG, letterSpacing: "-0.01em" }}>{field.value}</div>
          </div>
        ))}
      </div>

      {/* Bottom-right decorative — element symbol stack */}
      <div style={{ position: "absolute", bottom: "32px", right: "36px", fontFamily: MONO, fontSize: "7px", color: FG_LIGHT, letterSpacing: "0.12em", lineHeight: 1.9, textAlign: "right", opacity: 0.5 }}>
        Nd · Dy · Ce<br />La · Pr · Sm
      </div>

      {/* Bottom footer */}
      <div style={{ position: "absolute", bottom: "32px", left: "36px", fontSize: "8px", fontFamily: MONO, color: FG_LIGHT, textTransform: "uppercase", letterSpacing: "0.08em" }}>
        Lanthanides + Sc, Y
      </div>
    </div>
  );
}

/* ---- Shared grain overlay ---- */
function Grain() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        opacity: 0.03,
        pointerEvents: "none",
        zIndex: 20,
      }}
    />
  );
}
