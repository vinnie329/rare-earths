"use client";

import { useState, useRef, useEffect } from "react";
import { elements } from "@/data/elements";
import { ELECTRON_SHELLS, SHELL_NAMES } from "@/data/electron-shells";
import AtomicStructure from "@/components/AtomicStructure";
import s from "./e.module.css";

export default function LayoutE() {
  const [selectedIndex, setSelectedIndex] = useState(5);
  const el = elements[selectedIndex];
  const shells = ELECTRON_SHELLS[el.atomicNumber] || [];
  const refNumber = String(el.atomicNumber).padStart(3, "0");
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stripRef.current) return;
    const active = stripRef.current.querySelector(
      `.${s.stripBtnActive}`
    ) as HTMLElement;
    if (active) {
      active.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedIndex]);

  return (
    <div className={s.shell}>
      {/* Top bar */}
      <div className={s.topBar}>
        <span className={s.topTitle}>Rare Earth Index</span>
        <span className={s.topMeta}>{el.series}</span>
      </div>

      {/* Hero — orbital diagram */}
      <section className={s.hero}>
        <div className={s.heroOrbitals}>
          <AtomicStructure element={el} showSymbol />
        </div>

        <div className={s.heroText}>
          <div className={s.heroSeries}>{el.series}</div>
          <h1 className={s.heroName}>
            {el.name}
            <span className={s.heroSup}>{el.atomicNumber}</span>
          </h1>
        </div>

        <div className={s.heroRef}>Ref. {refNumber}</div>
      </section>

      {/* Horizontal element strip */}
      <div className={s.strip} ref={stripRef}>
        {elements.map((e, i) => (
          <button
            key={e.atomicNumber}
            className={i === selectedIndex ? s.stripBtnActive : s.stripBtn}
            onClick={() => setSelectedIndex(i)}
          >
            <span className={s.stripSym}>{e.symbol}</span>
            <span className={s.stripNum}>{e.atomicNumber}</span>
          </button>
        ))}
      </div>

      {/* Data grid */}
      <section className={s.dataGrid}>
        <div className={s.dataCell}>
          <span className={s.dataCellLabel}>Symbol</span>
          <span className={s.dataCellValue}>{el.symbol}</span>
        </div>
        <div className={s.dataCell}>
          <span className={s.dataCellLabel}>Atomic Mass</span>
          <span className={`${s.dataCellValue} mono`}>{el.atomicMass}</span>
          <span className={s.dataCellSub}>u</span>
        </div>
        <div className={s.dataCell}>
          <span className={s.dataCellLabel}>Electron Config</span>
          <span className={`${s.dataCellValue} mono`}>
            {el.electronConfig}
          </span>
        </div>
        <div className={s.dataCell}>
          <span className={s.dataCellLabel}>Abundance</span>
          <span className={`${s.dataCellValue} mono`}>
            {el.abundance === 0 ? "Trace" : el.abundance}
          </span>
          <span className={s.dataCellSub}>
            {el.abundance === 0 ? "(Synthetic)" : "mg/kg (Crustal)"}
          </span>
        </div>
      </section>

      {/* Content */}
      <section className={s.content}>
        <div className={s.contentLeft}>
          <span className={s.sectionLabel}>Overview</span>
          {el.overview.map((p, i) => (
            <p key={i} className={s.editorialText}>
              {p}
            </p>
          ))}

          <div style={{ marginTop: "3rem" }}>
            <span className={s.sectionLabel}>Primary Applications</span>
            <ul className={s.appsList}>
              {el.applications.map((app, i) => (
                <li key={i} className={s.appsItem}>
                  <span>{app}</span>
                  <span className={s.appsNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={s.contentRight}>
          {/* Extraction */}
          <div className={s.extractionBlock}>
            <span className={s.sectionLabel}>Primary Extraction</span>
            <div className={s.extractionValue}>{el.primaryExtraction}</div>
          </div>

          {/* Supply chain */}
          <div className={s.supplyCard}>
            <span className={s.sectionLabel} style={{ marginBottom: "0.25rem" }}>
              Global Supply Chain Status
            </span>
            <div className={s.supplyValue}>{el.supplyChainStatus}</div>
          </div>

          {/* Electron shell breakdown */}
          <div className={s.electronConfig}>
            <span className={s.sectionLabel}>Electron Shell Structure</span>
            <div className={s.shellGrid}>
              {shells.map((count, i) => (
                <span key={i} className={s.shellTag}>
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
