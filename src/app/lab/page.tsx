import Link from "next/link";

export default function LabIndex() {
  return (
    <div className="lab-index">
      <h1 className="lab-index-title">Design Lab</h1>
      <p className="lab-index-sub">
        Explore layout and component variants side by side. Compare
        approaches before committing to a direction.
      </p>
      <div className="lab-index-links">
        <Link href="/lab/layouts">
          Layouts <span style={{ opacity: 0.4 }}>(05)</span>
        </Link>
        <Link href="/lab/components">
          Components <span style={{ opacity: 0.4 }}>(08)</span>
        </Link>
        <Link href="/lab/fonts">
          Fonts <span style={{ opacity: 0.4 }}>(20)</span>
        </Link>
      </div>
    </div>
  );
}
