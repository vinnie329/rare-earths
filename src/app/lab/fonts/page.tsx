import Link from "next/link";

const layoutVariants = [
  { id: "a", name: "Sidebar Index" },
  { id: "b", name: "Horizontal Strip" },
  { id: "c", name: "Editorial Grid" },
  { id: "d", name: "Abstract Visualization" },
  { id: "e", name: "Atomic Structure Hero" },
];

const fontFamilies = [
  { id: "helvetica", name: "Helvetica Neue", label: "Current" },
  { id: "monument", name: "ABC Monument Grotesk", label: "Dinamo" },
  { id: "supply", name: "PP Supply Sans", label: "Pangram Pangram" },
  { id: "montreal", name: "PP Neue Montreal", label: "Pangram Pangram" },
];

export default function FontsPage() {
  return (
    <>
      <div className="lab-section-header">
        <h2 className="lab-section-title">
          Fonts
          <span className="lab-section-count">
            ({String(fontFamilies.length * layoutVariants.length).padStart(2, "0")})
          </span>
        </h2>
        <p className="lab-section-desc">
          Each layout rendered with a different typeface. Compare how PP Supply
          Sans and PP Neue Montreal feel across the full range of structural
          approaches. Open full-screen to interact.
        </p>
      </div>

      {fontFamilies.map((font) => (
        <div key={font.id}>
          <div className="component-section">
            <h3 className="component-section-title">{font.name}</h3>
          </div>
          <div className="variant-grid">
            {layoutVariants.map((layout) => (
              <div key={layout.id} className="variant-card">
                <div className="variant-preview">
                  <iframe
                    src={`/lab/fonts/preview/${font.id}/${layout.id}`}
                    title={`${font.name} — ${layout.name}`}
                    loading="lazy"
                  />
                </div>
                <div className="variant-meta">
                  <div>
                    <div className="variant-name">{layout.name}</div>
                    <div className="variant-label" style={{ marginTop: "0.2rem" }}>
                      {font.name}
                    </div>
                  </div>
                  <Link
                    href={`/lab/fonts/preview/${font.id}/${layout.id}`}
                    className="variant-open"
                    target="_blank"
                  >
                    Open
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
