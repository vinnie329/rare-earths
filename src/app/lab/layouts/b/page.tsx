"use client";

import { useState, useRef, useEffect } from "react";
import { elements } from "@/data/elements";
import s from "./b.module.css";

export default function LayoutB() {
  const [selectedIndex, setSelectedIndex] = useState(5);
  const el = elements[selectedIndex];
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stripRef.current) return;
    const active = stripRef.current.querySelector(
      `.${s.stripItemActive}`
    ) as HTMLElement;
    if (active) {
      active.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [selectedIndex]);

  return (
    <div className={s.shell}>
      {/* Top nav */}
      <div className={s.topNav}>
        <span className={s.navTitle}>Rare Earth Index</span>
        <span className={s.navMeta}>
          {selectedIndex + 1} / {elements.length} Elements
        </span>
      </div>

      {/* Hero */}
      <section className={s.hero}>
        <div className={s.heroSymbol}>{el.symbol}</div>
        <div className={s.heroLabel}>{el.series}</div>
        <h1 className={s.heroName}>
          {el.name}
          <span className={s.heroNumber}>{el.atomicNumber}</span>
        </h1>
      </section>

      {/* Horizontal element strip */}
      <div className={s.strip} ref={stripRef}>
        {elements.map((e, i) => (
          <button
            key={e.atomicNumber}
            className={i === selectedIndex ? s.stripItemActive : s.stripItem}
            onClick={() => setSelectedIndex(i)}
          >
            <span className={s.stripNumber}>
              {String(e.atomicNumber).padStart(2, "\u2007")}
            </span>
            <span className={s.stripName}>{e.name}</span>
            <span className={s.stripSymbol}>{e.symbol}</span>
          </button>
        ))}
      </div>

      {/* Data row */}
      <section className={s.dataRow}>
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
          <div className={s.contentLabel}>Overview</div>
          {el.overview.map((p, i) => (
            <p key={i} className={s.contentText}>{p}</p>
          ))}
          <div className={s.contentLabel} style={{ marginTop: "1rem" }}>
            Primary Applications
          </div>
          <ul className={s.appsList}>
            {el.applications.map((app, i) => (
              <li key={i} className={s.appsItem}>
                <span>{app}</span>
                <span className={s.appsNumber}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.contentRight}>
          <div className={s.mapArea}>
            <div className={s.mapTag}>
              Extraction: {el.primaryExtraction}
            </div>
            <div className={s.mapDots} />
          </div>
          <div className={s.supplyBar}>
            <div className={s.supplyLabel}>Supply Chain Status</div>
            <div className={s.supplyValue}>{el.supplyChainStatus}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
