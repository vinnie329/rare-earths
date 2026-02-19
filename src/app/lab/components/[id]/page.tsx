"use client";

import { use, useState } from "react";
import Link from "next/link";
import { elements } from "@/data/elements";
import Globe from "@/components/Globe";
import AbstractViz from "@/components/AbstractViz";
import AtomicStructure from "@/components/AtomicStructure";
import { ELECTRON_SHELLS, SHELL_NAMES } from "@/data/electron-shells";
import s from "../components.module.css";

const el = elements[5]; // Neodymium

function titleCase(str: string) {
  return str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}

const VARIANTS: Record<
  string,
  { label: string; wide?: boolean; render: () => React.ReactNode }
> = {
  "hero-a": {
    label: "Hero — Left-Aligned Oversized",
    render: () => (
      <div className={s.heroA}>
        <div className={s.heroALabel}>
          <span>{el.series}</span>
          <span>Ref. 060</span>
        </div>
        <h2 className={s.heroATitle}>
          {el.name}
          <span className={s.heroASup}>{el.atomicNumber}</span>
        </h2>
      </div>
    ),
  },
  "hero-b": {
    label: "Hero — Centered Watermark",
    render: () => (
      <div className={s.heroB}>
        <div className={s.heroBWatermark}>{el.symbol}</div>
        <div className={s.heroBLabel}>{el.series}</div>
        <h2 className={s.heroBTitle}>{el.name}</h2>
        <span className={s.heroBNumber}>
          No. {el.atomicNumber} &middot; {el.symbol}
        </span>
      </div>
    ),
  },
  "hero-c": {
    label: "Hero — Minimal Extreme",
    render: () => (
      <div className={s.heroC}>
        <h2 className={s.heroCTitle}>{el.name}</h2>
        <div className={s.heroCMeta}>
          <span>{el.symbol}</span>
          <span>{el.atomicNumber}</span>
          <span>{el.series}</span>
        </div>
      </div>
    ),
  },
  "grid-a": {
    label: "Data Grid — Structured Columns",
    wide: true,
    render: () => (
      <div className={s.gridA}>
        <div className={s.gridACell}>
          <span className={s.gridALabel}>Symbol</span>
          <span className={s.gridAValue}>{el.symbol}</span>
        </div>
        <div className={s.gridACell}>
          <span className={s.gridALabel}>Atomic Mass</span>
          <span className={`${s.gridAValue} mono`}>{el.atomicMass}</span>
          <span className={s.gridASub}>u</span>
        </div>
        <div className={s.gridACell}>
          <span className={s.gridALabel}>Config</span>
          <span className={`${s.gridAValue} mono`}>{el.electronConfig}</span>
        </div>
        <div className={s.gridACell}>
          <span className={s.gridALabel}>Abundance</span>
          <span className={`${s.gridAValue} mono`}>{el.abundance}</span>
          <span className={s.gridASub}>mg/kg</span>
        </div>
      </div>
    ),
  },
  "grid-b": {
    label: "Data Grid — Rounded Cards",
    wide: true,
    render: () => (
      <div className={s.gridB}>
        <div className={s.gridBCard}>
          <span className={s.gridBLabel}>Symbol</span>
          <span className={s.gridBValue}>{el.symbol}</span>
        </div>
        <div className={s.gridBCard}>
          <span className={s.gridBLabel}>Mass</span>
          <span className={`${s.gridBValue} mono`}>{el.atomicMass}</span>
          <span className={s.gridBSub}>u</span>
        </div>
        <div className={s.gridBCard}>
          <span className={s.gridBLabel}>Config</span>
          <span className={`${s.gridBValue} mono`}>{el.electronConfig}</span>
        </div>
        <div className={s.gridBCard}>
          <span className={s.gridBLabel}>Abundance</span>
          <span className={`${s.gridBValue} mono`}>{el.abundance}</span>
          <span className={s.gridBSub}>mg/kg</span>
        </div>
      </div>
    ),
  },
  "grid-c": {
    label: "Data Grid — Horizontal Scroll",
    wide: true,
    render: () => (
      <div className={s.gridC}>
        <div className={s.gridCCell}>
          <div className={s.gridCLabel}>Symbol</div>
          <span className={s.gridCValue}>{el.symbol}</span>
        </div>
        <div className={s.gridCCell}>
          <div className={s.gridCLabel}>Atomic Mass</div>
          <span className={`${s.gridCValue} mono`}>{el.atomicMass}</span>
          <span className={s.gridCSub}>u</span>
        </div>
        <div className={s.gridCCell}>
          <div className={s.gridCLabel}>Electron Config</div>
          <span className={`${s.gridCValue} mono`}>{el.electronConfig}</span>
        </div>
        <div className={s.gridCCell}>
          <div className={s.gridCLabel}>Abundance</div>
          <span className={`${s.gridCValue} mono`}>{el.abundance}</span>
          <span className={s.gridCSub}>mg/kg (Crustal)</span>
        </div>
      </div>
    ),
  },
  "nav-a": {
    label: "Navigation — Vertical List",
    render: () => (
      <div className={s.navA}>
        {elements.slice(0, 8).map((e, i) => (
          <div
            key={e.atomicNumber}
            className={i === 5 ? s.navAActive : s.navAItem}
          >
            <span className={s.navANum}>{e.atomicNumber}</span>
            <span className={s.navAName}>{e.name}</span>
            <span className={s.navASym}>{e.symbol}</span>
          </div>
        ))}
      </div>
    ),
  },
  "nav-b": {
    label: "Navigation — Symbol Grid",
    wide: true,
    render: () => (
      <div className={s.navB}>
        {elements.map((e, i) => (
          <div
            key={e.atomicNumber}
            className={i === 5 ? s.navBActive : s.navBCell}
          >
            <span className={s.navBSym}>{e.symbol}</span>
            <span className={s.navBNum}>{e.atomicNumber}</span>
          </div>
        ))}
      </div>
    ),
  },
  "nav-c": {
    label: "Navigation — Horizontal Pills",
    wide: true,
    render: () => (
      <div className={s.navC}>
        {elements.map((e, i) => (
          <button
            key={e.atomicNumber}
            className={i === 5 ? s.navCActive : s.navCPill}
          >
            {e.symbol}
          </button>
        ))}
      </div>
    ),
  },
  "map-a": {
    label: "Extraction — Dot Grid Overlay",
    render: () => (
      <div className={s.mapA}>
        <div className={s.mapAArea}>
          <div className={s.mapATag}>
            Primary Extraction: {el.primaryExtraction}
          </div>
          <div className={s.mapADots} />
          <div
            className={s.mapADot}
            style={{ top: "30%", left: "20%", width: 4, height: 4, border: "1px solid black" }}
          />
          <div
            className={s.mapADot}
            style={{ top: "40%", left: "60%", width: 8, height: 8, background: "black" }}
          />
          <div
            className={s.mapADot}
            style={{ top: "70%", left: "75%", width: 6, height: 6, background: "black" }}
          />
        </div>
        <div className={s.mapABar}>
          <div className={s.mapABarLabel}>Global Supply Chain Status</div>
          <div className={s.mapABarValue}>{el.supplyChainStatus}</div>
        </div>
      </div>
    ),
  },
  "map-b": {
    label: "Extraction — Regional Breakdown",
    render: () => (
      <div className={s.mapB}>
        <div className={s.mapBHeader}>
          <span>Extraction Regions</span>
          <span>Global Share</span>
        </div>
        <ul className={s.mapBList}>
          <li className={s.mapBRegion}>
            <div className={s.mapBDot} />
            <div className={s.mapBInfo}>
              <div className={s.mapBCountry}>China</div>
              <div className={s.mapBRole}>Primary Producer</div>
            </div>
            <span className={s.mapBShare}>60%</span>
          </li>
          <li className={s.mapBRegion}>
            <div className={s.mapBDot} />
            <div className={s.mapBInfo}>
              <div className={s.mapBCountry}>Australia</div>
              <div className={s.mapBRole}>Secondary Producer</div>
            </div>
            <span className={s.mapBShare}>12%</span>
          </li>
          <li className={s.mapBRegion}>
            <div className={s.mapBDotSecondary} />
            <div className={s.mapBInfo}>
              <div className={s.mapBCountry}>United States</div>
              <div className={s.mapBRole}>Emerging</div>
            </div>
            <span className={s.mapBShare}>3%</span>
          </li>
        </ul>
        <div className={s.mapBBar}>
          <span className={s.mapBStatus}>Supply Status</span>
          <span className={s.mapBStatusValue}>{el.supplyChainStatus}</span>
        </div>
      </div>
    ),
  },
  "map-c": {
    label: "Extraction — 3D Globe",
    render: () => (
      <div className={s.mapA}>
        <div className={s.mapAArea}>
          <div className={s.mapATag}>Extraction: {el.primaryExtraction}</div>
          <Globe extraction={el.primaryExtraction} />
        </div>
        <div className={s.mapABar}>
          <div className={s.mapABarLabel}>Global Supply Chain Status</div>
          <div className={s.mapABarValue}>{el.supplyChainStatus}</div>
        </div>
      </div>
    ),
  },
  "map-d": {
    label: "Extraction — Abstract Minimal",
    render: () => (
      <div className={s.mapC}>
        <div className={s.mapCVisual}>
          <div
            className={s.mapCCircle}
            style={{ width: 200, height: 200, top: "10%", right: "-20%" }}
          />
          <div
            className={s.mapCCircle}
            style={{ width: 120, height: 120, bottom: "-15%", left: "30%" }}
          />
          <div
            className={s.mapCCircle}
            style={{ width: 60, height: 60, top: "20%", left: "15%", background: "rgba(0,0,0,0.04)" }}
          />
          <div className={s.mapCRegionText}>
            China,<br />Australia
          </div>
        </div>
        <div className={s.mapCMeta}>
          <div className={s.mapCMetaCell}>
            <div className={s.mapCMetaLabel}>Extraction</div>
            <div className={s.mapCMetaValue}>{el.primaryExtraction}</div>
          </div>
          <div className={s.mapCMetaCell}>
            <div className={s.mapCMetaLabel}>Supply Status</div>
            <div className={s.mapCMetaValue}>{el.supplyChainStatus}</div>
          </div>
        </div>
      </div>
    ),
  },
  "viz-a": {
    label: "Abstract Viz — Neodymium",
    render: () => (
      <div className={s.mapA}>
        <div className={s.mapAArea}>
          <AbstractViz element={el} />
        </div>
      </div>
    ),
  },
  "viz-b": {
    label: "Abstract Viz — Erbium",
    render: () => (
      <div className={s.mapA}>
        <div className={s.mapAArea}>
          <AbstractViz element={elements[13]} />
        </div>
      </div>
    ),
  },
  "viz-c": {
    label: "Abstract Viz — Scandium",
    render: () => (
      <div className={s.mapA}>
        <div className={s.mapAArea}>
          <AbstractViz element={elements[0]} />
        </div>
      </div>
    ),
  },
  "supply-a": {
    label: "Supply Info — Side-by-Side Columns",
    wide: true,
    render: () => (
      <div style={{ padding: "2rem" }}>
        <div className={s.supplyA}>
          <div className={s.supplyACell}>
            <span className={s.supplyALabel}>Primary Extraction</span>
            <div className={s.supplyAValue}>{titleCase(el.primaryExtraction)}</div>
          </div>
          <div className={s.supplyACell}>
            <span className={s.supplyALabel}>Supply Chain Status</span>
            <div className={s.supplyAValue}>{el.supplyChainStatus}</div>
          </div>
        </div>
      </div>
    ),
  },
  "supply-b": {
    label: "Supply Info — Stacked Divider",
    render: () => (
      <div style={{ padding: "2rem" }}>
        <div className={s.supplyB}>
          <div className={s.supplyBRow}>
            <span className={s.supplyBLabel}>Primary Extraction</span>
            <div className={s.supplyBValue}>{titleCase(el.primaryExtraction)}</div>
          </div>
          <div className={s.supplyBRow}>
            <span className={s.supplyBLabel}>Supply Chain Status</span>
            <div className={s.supplyBValue}>{el.supplyChainStatus}</div>
          </div>
        </div>
      </div>
    ),
  },
  "supply-c": {
    label: "Supply Info — Inline Sentence",
    wide: true,
    render: () => (
      <div style={{ padding: "2rem" }}>
        <div className={s.supplyC}>
          Extracted from <span className={s.supplyCHighlight}>{titleCase(el.primaryExtraction)}</span>
          <span className={s.supplyCDivider}>·</span>
          <span className={s.supplyCHighlight}>{el.supplyChainStatus}</span>
        </div>
      </div>
    ),
  },
  "supply-d": {
    label: "Supply Info — Text + Status Pill",
    wide: true,
    render: () => (
      <div style={{ padding: "2rem" }}>
        <div className={s.supplyD}>
          <div className={s.supplyDLeft}>
            <span className={s.supplyDLabel}>Primary Extraction</span>
            <div className={s.supplyDValue}>{titleCase(el.primaryExtraction)}</div>
          </div>
          <div className={s.supplyDPill}>{el.supplyChainStatus}</div>
        </div>
      </div>
    ),
  },
  "supply-e": {
    label: "Supply Info — Two-Tone Split",
    wide: true,
    render: () => (
      <div style={{ padding: "2rem" }}>
        <div className={s.supplyE}>
          <div className={s.supplyELeft}>
            <span className={s.supplyELabel}>Primary Extraction</span>
            <div className={s.supplyEValue}>{titleCase(el.primaryExtraction)}</div>
          </div>
          <div className={s.supplyERight}>
            <span className={s.supplyELabel}>Supply Chain Status</span>
            <div className={s.supplyEValue}>{el.supplyChainStatus}</div>
          </div>
        </div>
      </div>
    ),
  },
  "supply-f": {
    label: "Supply Info — Minimal Open",
    wide: true,
    render: () => (
      <div style={{ padding: "2rem" }}>
        <div className={s.supplyF}>
          <div className={s.supplyFPair}>
            <span className={s.supplyFLabel}>Primary Extraction</span>
            <div className={s.supplyFValue}>{titleCase(el.primaryExtraction)}</div>
          </div>
          <div className={s.supplyFPair}>
            <span className={s.supplyFLabel}>Supply Chain Status</span>
            <div className={s.supplyFValue}>{el.supplyChainStatus}</div>
          </div>
        </div>
      </div>
    ),
  },
  "atom-a": {
    label: "Atomic Structure — Neodymium",
    render: () => (
      <div className={s.mapA}>
        <div className={s.mapAArea}>
          <AtomicStructure element={el} showSymbol />
        </div>
      </div>
    ),
  },
  "atom-b": {
    label: "Atomic Structure — Erbium",
    render: () => (
      <div className={s.mapA}>
        <div className={s.mapAArea}>
          <AtomicStructure element={elements[13]} showSymbol />
        </div>
      </div>
    ),
  },
  "atom-c": {
    label: "Atomic Structure — Scandium",
    render: () => (
      <div className={s.mapA}>
        <div className={s.mapAArea}>
          <AtomicStructure element={elements[0]} showSymbol />
        </div>
      </div>
    ),
  },
  "sound-a": { label: "Sound — Label Tag", render: () => <SoundVariantA /> },
  "sound-b": { label: "Sound — Pill + Dot", render: () => <SoundVariantB /> },
  "sound-c": { label: "Sound — Icon Circle", render: () => <SoundVariantC /> },
  "sound-d": { label: "Sound — Underline Link", render: () => <SoundVariantD /> },
  "sound-e": { label: "Sound — Filled / Outlined", render: () => <SoundVariantE /> },
  "sound-f": { label: "Sound — Icon + Slash", render: () => <SoundVariantF /> },
  "atom-d": {
    label: "Atomic Structure — Assembled (Shell Info)",
    render: () => (
      <div className={s.atomAssembled}>
        <div className={s.atomAssembledViz}>
          <div className={s.atomAssembledOverlay}>
            {(ELECTRON_SHELLS[el.atomicNumber] || []).length} Shells · {el.atomicNumber}e⁻
          </div>
          <AtomicStructure element={el} showSymbol={false} />
        </div>
        <div className={s.atomAssembledInfo}>
          <span className={s.atomAssembledLabel}>Electron Shell Structure</span>
          <div className={s.atomAssembledTags}>
            {(ELECTRON_SHELLS[el.atomicNumber] || []).map((count, i) => (
              <span key={i} className={s.atomAssembledTag}>
                {SHELL_NAMES[i]}: {count}e⁻
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
};

function SoundVariantA() {
  const [on, set] = useState(true);
  return <div className={s.soundDemo}><button className={s.soundA} onClick={() => set(v => !v)}>Sound {on ? "Off" : "On"}</button></div>;
}
function SoundVariantB() {
  const [on, set] = useState(true);
  return <div className={s.soundDemo}><button className={s.soundB} onClick={() => set(v => !v)}><span className={on ? s.soundBDot : s.soundBDotOff} />Sound {on ? "Off" : "On"}</button></div>;
}
function SoundVariantC() {
  const [on, set] = useState(true);
  return <div className={s.soundDemo}><button className={s.soundC} onClick={() => set(v => !v)}>{on ? "\u266A" : "\u2715"}</button></div>;
}
function SoundVariantD() {
  const [on, set] = useState(true);
  return <div className={s.soundDemo}><button className={s.soundD} onClick={() => set(v => !v)}>Sound {on ? "Off" : "On"}</button></div>;
}
function SoundVariantE() {
  const [on, set] = useState(true);
  return <div className={s.soundDemo}><button className={on ? s.soundEOn : s.soundEOff} onClick={() => set(v => !v)}>Sound {on ? "Off" : "On"}</button></div>;
}
function SoundVariantF() {
  const [on, set] = useState(true);
  return <div className={s.soundDemo}><button className={s.soundF} onClick={() => set(v => !v)}><span className={s.soundFIcon}>{"\u266A"}{!on && <span className={s.soundFSlash} />}</span>Sound {on ? "Off" : "On"}</button></div>;
}

export default function IsolatedComponent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const variant = VARIANTS[id];

  if (!variant) {
    return (
      <div className="isolate-shell">
        <p>Variant &ldquo;{id}&rdquo; not found.</p>
        <Link href="/lab/components" className="isolate-back">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="isolate-shell">
      <span className="isolate-label">{variant.label}</span>
      <Link href="/lab/components" className="isolate-back">
        &larr; Components
      </Link>
      <div className={variant.wide ? "isolate-component-wide" : "isolate-component"}>
        {variant.render()}
      </div>
    </div>
  );
}
