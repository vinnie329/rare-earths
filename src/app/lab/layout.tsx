import Link from "next/link";
import "./lab.css";

export const metadata = {
  title: "Lab — Rare Earth Index",
};

export default function LabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lab-shell">
      <div className="lab-bar">
        <div className="lab-bar-left">
          <span className="lab-title">Lab</span>
          <nav className="lab-nav">
            <Link href="/lab/layouts">Layouts</Link>
            <Link href="/lab/components">Components</Link>
            <Link href="/lab/fonts">Fonts</Link>
          </nav>
        </div>
        <Link href="/" className="lab-back">
          &larr; Back to App
        </Link>
      </div>
      {children}
    </div>
  );
}
