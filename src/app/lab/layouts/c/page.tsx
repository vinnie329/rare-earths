"use client";

import { useState } from "react";
import { elements } from "@/data/elements";
import s from "./c.module.css";

export default function LayoutC() {
  const [selectedIndex, setSelectedIndex] = useState(5);
  const el = elements[selectedIndex];

  const prev = () => setSelectedIndex((i) => Math.max(0, i - 1));
  const next = () =>
    setSelectedIndex((i) => Math.min(elements.length - 1, i + 1));

  return (
    <div className={s.shell}>
      {/* Floating nav with prev/next selector */}
      <nav className={s.floatNav}>
        <span className={s.floatTitle}>Rare Earth Index</span>
        <div className={s.selector}>
          <button
            className={s.selectorBtn}
            onClick={prev}
            disabled={selectedIndex === 0}
          >
            &larr;
          </button>
          <span className={s.selectorCurrent}>
            {selectedIndex + 1} / {elements.length}
          </span>
          <button
            className={s.selectorBtn}
            onClick={next}
            disabled={selectedIndex === elements.length - 1}
          >
            &rarr;
          </button>
        </div>
      </nav>

      {/* Asymmetric hero */}
      <section className={s.heroGrid}>
        <div className={s.heroLeft}>
          <div className={s.watermark}>{el.symbol}</div>
          <div className={s.heroSeries}>{el.series}</div>
          <h1 className={s.heroName}>
            {el.name}
            <span className={s.heroSup}>{el.atomicNumber}</span>
          </h1>
        </div>
        <div className={s.heroRight}>
          <div className={s.heroData}>
            <span className={s.heroDataLabel}>Atomic Mass</span>
            <span className={s.heroDataValue}>{el.atomicMass}</span>
            <span className={s.heroDataSub}>u</span>
          </div>
          <div className={s.heroData}>
            <span className={s.heroDataLabel}>Electron Configuration</span>
            <span className={s.heroDataValue}>{el.electronConfig}</span>
          </div>
        </div>
      </section>

      {/* Additional data */}
      <section className={s.configStrip}>
        <div className={s.configCell}>
          <span className={s.configLabel}>Symbol</span>
          <span className={s.configValue}>{el.symbol}</span>
        </div>
        <div className={s.configCell}>
          <span className={s.configLabel}>Crustal Abundance</span>
          <span className={s.configValue}>
            {el.abundance === 0 ? "Trace" : `${el.abundance} mg/kg`}
          </span>
        </div>
      </section>

      {/* Dense content grid */}
      <section className={s.contentGrid}>
        <div className={s.editorial}>
          <div className={s.editorialLabel}>Overview</div>
          {el.overview.map((p, i) => (
            <p key={i} className={s.editorialText}>
              {p}
            </p>
          ))}
        </div>

        <div className={s.applications}>
          <div className={s.appsHeader}>Applications</div>
          {el.applications.map((app, i) => (
            <div key={i} className={s.appItem}>
              <span>{app}</span>
              <span className={s.appNum}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        <div className={s.extraction}>
          <div className={s.extractHeader}>Extraction</div>
          <div className={s.extractMap}>
            <div className={s.extractDots} />
            <div className={s.extractTag}>{el.primaryExtraction}</div>
          </div>
          <div className={s.supplyRow}>
            <div className={s.supplyLabel}>Supply Chain Status</div>
            <div className={s.supplyValue}>{el.supplyChainStatus}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
