"use client";

import { useState } from "react";
import { elements } from "@/data/elements";
import AbstractViz from "@/components/AbstractViz";
import s from "./d.module.css";

export default function LayoutD() {
  const [selectedIndex, setSelectedIndex] = useState(5);
  const el = elements[selectedIndex];
  const refNumber = String(el.atomicNumber).padStart(3, "0");

  return (
    <div className={s.shell}>
      {/* Sidebar */}
      <div className={s.sidebar}>
        <div className={s.sidebarHeader}>
          <div className={s.sidebarTitle}>Rare Earth Index</div>
        </div>
        <ul className={s.elementList}>
          {elements.map((e, i) => (
            <li key={e.atomicNumber} className={s.elementItem}>
              <button
                className={
                  i === selectedIndex ? s.elementBtnActive : s.elementBtn
                }
                onClick={() => setSelectedIndex(i)}
              >
                <span className={s.elementNum}>
                  {String(e.atomicNumber).padStart(2, "\u2007")}
                </span>
                <span className={s.elementName}>{e.name}</span>
                <span className={s.elementSym}>{e.symbol}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main */}
      <div className={s.main}>
        <div className={s.container}>
          {/* Hero */}
          <section className={s.hero}>
            <div className={s.heroMeta}>
              <span className={s.heroLabel}>{el.series}</span>
              <span className={`${s.heroLabel} mono`}>Ref. {refNumber}</span>
            </div>
            <h1 className={s.heroTitle}>
              {el.name}
              <span className={s.heroSup}>{el.atomicNumber}</span>
            </h1>
          </section>

          {/* Data Grid */}
          <section className={s.dataGrid}>
            <div className={s.dataCell}>
              <span className={s.dataCellLabel}>Symbol</span>
              <span className={s.dataCellValue}>{el.symbol}</span>
            </div>
            <div className={s.dataCell}>
              <span className={s.dataCellLabel}>Atomic Mass</span>
              <span className={`${s.dataCellValue} mono`}>
                {el.atomicMass}
              </span>
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

          {/* Content Split */}
          <section className={s.contentSplit}>
            {/* Left: Overview + Apps + Extraction + Supply */}
            <div className={s.contentLeft}>
              <span
                className={s.sectionLabel}
                style={{ marginBottom: "2.5rem" }}
              >
                Overview
              </span>
              {el.overview.map((p, i) => (
                <p key={i} className={s.editorialText}>
                  {p}
                </p>
              ))}

              <div style={{ marginTop: "4rem" }}>
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

              {/* Extraction — moved here from right panel */}
              <div className={s.extractionSection}>
                <span className={s.sectionLabel}>Primary Extraction</span>
                <div className={s.extractionRegions}>
                  {el.primaryExtraction}
                </div>
              </div>

              {/* Supply chain status */}
              <div className={s.supplyCard}>
                <span className={s.sectionLabel}>
                  Global Supply Chain Status
                </span>
                <div className={s.supplyValue}>{el.supplyChainStatus}</div>
              </div>
            </div>

            {/* Right: Abstract visualization */}
            <div className={s.contentRight}>
              <div className={s.vizContainer}>
                <div className={s.vizLabel}>
                  Elemental Signature &middot; {el.symbol}
                </div>
                <div className={s.vizElementLabel}>{el.symbol}</div>
                <AbstractViz element={el} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
