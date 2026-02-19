import Link from "next/link";

const variants = [
  {
    id: "a",
    name: "Sidebar Index",
    label: "Current",
    description: "Fixed sidebar navigation with scrolling detail view",
  },
  {
    id: "b",
    name: "Horizontal Strip",
    label: "Exploration",
    description: "Full-bleed hero with horizontal element scroll",
  },
  {
    id: "c",
    name: "Editorial Grid",
    label: "Exploration",
    description: "Magazine-style dense layout with floating navigation",
  },
  {
    id: "d",
    name: "Abstract Visualization",
    label: "Exploration",
    description: "Animated particle network replaces map, data consolidated left",
  },
  {
    id: "e",
    name: "Atomic Structure Hero",
    label: "Exploration",
    description: "Animated electron orbital diagram as full-bleed hero, horizontal element strip",
  },
];

export default function LayoutsPage() {
  return (
    <>
      <div className="lab-section-header">
        <h2 className="lab-section-title">
          Layouts
          <span className="lab-section-count">(05)</span>
        </h2>
        <p className="lab-section-desc">
          Full-page layout explorations. Each variant presents the same data
          with a fundamentally different structural approach. Open full-screen
          to interact.
        </p>
      </div>
      <div className="variant-grid">
        {variants.map((v) => (
          <div key={v.id} className="variant-card">
            <div className="variant-preview">
              <iframe
                src={`/lab/layouts/${v.id}`}
                title={v.name}
                loading="lazy"
              />
            </div>
            <div className="variant-meta">
              <div>
                <div className="variant-name">{v.name}</div>
                <div className="variant-label" style={{ marginTop: "0.2rem" }}>
                  {v.description}
                </div>
              </div>
              <Link
                href={`/lab/layouts/${v.id}`}
                className="variant-open"
                target="_blank"
              >
                Open
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
