"use client";

import { RareEarthElement } from "@/data/elements";
import { ELECTRON_SHELLS, SHELL_NAMES } from "@/data/electron-shells";
import AtomicStructure from "@/components/AtomicStructure";

interface ElementProfileProps {
  element: RareEarthElement;
  onBack?: () => void;
}

function titleCase(str: string) {
  return str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ElementProfile({ element, onBack }: ElementProfileProps) {
  const refNumber = String(element.atomicNumber).padStart(3, "0");
  const shells = ELECTRON_SHELLS[element.atomicNumber] || [];

  return (
    <div className="profile-container">
      {/* Mobile back button */}
      <div className="mobile-back">
        <button className="back-button" onClick={onBack}>
          <span className="back-arrow">&larr;</span>
          <span>Index</span>
        </button>
        <span className="label mono" style={{ marginBottom: 0 }}>
          {element.symbol}
        </span>
      </div>

      {/* Hero */}
      <section className="element-hero">
        <div className="hero-top-data">
          <span className="label">{element.series}</span>
          <span className="label mono">Ref. {refNumber}</span>
        </div>
        <h1 className="hero-title">
          {element.name}
          <span className="superscript">{element.atomicNumber}</span>
        </h1>
      </section>

      {/* Data Grid */}
      <section className="data-grid">
        <div className="data-cell">
          <span className="label">Symbol</span>
          <span className="data-value">{element.symbol}</span>
        </div>
        <div className="data-cell">
          <span className="label">Atomic Mass</span>
          <span className="data-value mono">{element.atomicMass}</span>
          <span className="data-sub">u</span>
        </div>
        <div className="data-cell">
          <span className="label">Electron Config</span>
          <span className="data-value mono">{element.electronConfig}</span>
        </div>
        <div className="data-cell">
          <span className="label">Abundance</span>
          <span className="data-value mono">
            {element.abundance === 0 ? "Trace" : element.abundance}
          </span>
          <span className="data-sub">
            {element.abundance === 0 ? "(Synthetic)" : "mg/kg (Crustal)"}
          </span>
        </div>
      </section>

      {/* Content Split */}
      <section className="content-split">
        {/* Left: Overview + Applications + Extraction + Supply */}
        <div className="content-col">
          <span className="label" style={{ marginBottom: "var(--space-md)" }}>
            Overview
          </span>
          {element.overview.map((paragraph, i) => (
            <p key={i} className="editorial-text">
              {paragraph}
            </p>
          ))}

          <div style={{ marginTop: "var(--space-lg)" }}>
            <span className="label">Primary Applications</span>
            <ul className="uses-list">
              {element.applications.map((app, i) => (
                <li key={i} className="uses-item">
                  <span>{app}</span>
                  <span className="mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="supply-split">
            <div className="supply-split-left">
              <span className="label">Primary Extraction</span>
              <div className="supply-split-value">{titleCase(element.primaryExtraction)}</div>
            </div>
            <div className="supply-split-right">
              <span className="label">Supply Chain Status</span>
              <div className="supply-split-value">{element.supplyChainStatus}</div>
            </div>
          </div>
        </div>

        {/* Right: Atomic Structure + Electron Shell Breakdown */}
        <div className="content-col">
          <div className="map-container">
            <div className="map-overlay">
              {shells.length} Shells · {element.atomicNumber}e⁻
            </div>
            <AtomicStructure element={element} showSymbol={false} />
          </div>
          <div className="supply-status">
            <span className="label">Electron Shell Structure</span>
            <div className="shell-tags">
              {shells.map((count, i) => (
                <span key={i} className="shell-tag">
                  {SHELL_NAMES[i]}: {count}e⁻
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
