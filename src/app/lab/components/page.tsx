"use client";

import { useState } from "react";
import Link from "next/link";
import { elements } from "@/data/elements";
import Globe from "@/components/Globe";
import AbstractViz from "@/components/AbstractViz";
import AtomicStructure from "@/components/AtomicStructure";
import { ELECTRON_SHELLS, SHELL_NAMES } from "@/data/electron-shells";
import s from "./components.module.css";

const el = elements[5]; // Neodymium as reference element

function titleCase(str: string) {
  return str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}

function CardLabel({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <Link
      href={`/lab/components/${id}`}
      target="_blank"
      className="component-card-label"
    >
      <span>{children}</span>
      <span className="component-card-label-icon">{"\u2197"}</span>
    </Link>
  );
}

export default function ComponentsPage() {
  return (
    <>
      <div className="lab-section-header">
        <h2 className="lab-section-title">
          Components
          <span className="lab-section-count">(08)</span>
        </h2>
        <p className="lab-section-desc">
          Isolated component explorations. Click any label to open the variant
          in a focused view. Each section shows variants with different
          structural and typographic approaches.
        </p>
      </div>

      {/* ------------------------------------------------
          Hero Section Variants
          ------------------------------------------------ */}
      <div className="component-section">
        <h3 className="component-section-title">Hero Section</h3>
        <div className="component-row">
          <div className="component-card">
            <CardLabel id="hero-a">A — Left-Aligned Oversized</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="hero-b">B — Centered Watermark</CardLabel>
            <div className="component-card-body">
              <div className={s.heroB}>
                <div className={s.heroBWatermark}>{el.symbol}</div>
                <div className={s.heroBLabel}>{el.series}</div>
                <h2 className={s.heroBTitle}>{el.name}</h2>
                <span className={s.heroBNumber}>
                  No. {el.atomicNumber} &middot; {el.symbol}
                </span>
              </div>
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="hero-c">C — Minimal Extreme</CardLabel>
            <div className="component-card-body">
              <div className={s.heroC}>
                <h2 className={s.heroCTitle}>{el.name}</h2>
                <div className={s.heroCMeta}>
                  <span>{el.symbol}</span>
                  <span>{el.atomicNumber}</span>
                  <span>{el.series}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------
          Data Grid Variants
          ------------------------------------------------ */}
      <div className="component-section">
        <h3 className="component-section-title">Data Grid</h3>
        <div className="component-row">
          <div className="component-card">
            <CardLabel id="grid-a">A — Structured Columns</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="grid-b">B — Rounded Cards</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="grid-c">C — Horizontal Scroll</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------
          Navigation Variants
          ------------------------------------------------ */}
      <div className="component-section">
        <h3 className="component-section-title">Element Navigation</h3>
        <div className="component-row">
          <div className="component-card">
            <CardLabel id="nav-a">A — Vertical List</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="nav-b">B — Symbol Grid</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="nav-c">C — Horizontal Pills</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------
          Extraction Map Variants
          ------------------------------------------------ */}
      <div className="component-section">
        <h3 className="component-section-title">Extraction Map</h3>
        <div className="component-row">
          <div className="component-card">
            <CardLabel id="map-a">A — Dot Grid Overlay</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="map-b">B — Regional Breakdown</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="map-c">C — 3D Globe</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="map-d">D — Abstract Minimal</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------
          Abstract Visualization Variants
          ------------------------------------------------ */}
      <div className="component-section">
        <h3 className="component-section-title">Abstract Visualization</h3>
        <div className="component-row">
          <div className="component-card">
            <CardLabel id="viz-a">A — Particle Network</CardLabel>
            <div className="component-card-body">
              <div className={s.mapA}>
                <div className={s.mapAArea}>
                  <AbstractViz element={el} />
                </div>
              </div>
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="viz-b">B — Particle Network (Erbium)</CardLabel>
            <div className="component-card-body">
              <div className={s.mapA}>
                <div className={s.mapAArea}>
                  <AbstractViz element={elements[13]} />
                </div>
              </div>
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="viz-c">C — Particle Network (Scandium)</CardLabel>
            <div className="component-card-body">
              <div className={s.mapA}>
                <div className={s.mapAArea}>
                  <AbstractViz element={elements[0]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------
          Supply Info Variants
          ------------------------------------------------ */}
      <div className="component-section">
        <h3 className="component-section-title">Supply Info</h3>
        <div className="component-row">
          <div className="component-card">
            <CardLabel id="supply-a">A — Side-by-Side Columns</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="supply-b">B — Stacked Divider</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="supply-c">C — Inline Sentence</CardLabel>
            <div className="component-card-body">
              <div style={{ padding: "2rem" }}>
                <div className={s.supplyC}>
                  Extracted from <span className={s.supplyCHighlight}>{titleCase(el.primaryExtraction)}</span>
                  <span className={s.supplyCDivider}>·</span>
                  <span className={s.supplyCHighlight}>{el.supplyChainStatus}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="supply-d">D — Text + Status Pill</CardLabel>
            <div className="component-card-body">
              <div style={{ padding: "2rem" }}>
                <div className={s.supplyD}>
                  <div className={s.supplyDLeft}>
                    <span className={s.supplyDLabel}>Primary Extraction</span>
                    <div className={s.supplyDValue}>{titleCase(el.primaryExtraction)}</div>
                  </div>
                  <div className={s.supplyDPill}>{el.supplyChainStatus}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="supply-e">E — Two-Tone Split</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="supply-f">F — Minimal Open</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------
          Atomic Structure Variants
          ------------------------------------------------ */}
      <div className="component-section">
        <h3 className="component-section-title">Atomic Structure</h3>
        <div className="component-row">
          <div className="component-card">
            <CardLabel id="atom-a">A — Neodymium (60)</CardLabel>
            <div className="component-card-body">
              <div className={s.mapA}>
                <div className={s.mapAArea}>
                  <AtomicStructure element={el} showSymbol />
                </div>
              </div>
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="atom-b">B — Erbium (68)</CardLabel>
            <div className="component-card-body">
              <div className={s.mapA}>
                <div className={s.mapAArea}>
                  <AtomicStructure element={elements[13]} showSymbol />
                </div>
              </div>
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="atom-c">C — Scandium (21)</CardLabel>
            <div className="component-card-body">
              <div className={s.mapA}>
                <div className={s.mapAArea}>
                  <AtomicStructure element={elements[0]} showSymbol />
                </div>
              </div>
            </div>
          </div>

          <div className="component-card">
            <CardLabel id="atom-d">D — Assembled (Shell Info)</CardLabel>
            <div className="component-card-body">
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
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------
          Sound Button Variants
          ------------------------------------------------ */}
      <SoundButtonVariants />
    </>
  );
}

function SoundButtonVariants() {
  const [onA, setA] = useState(true);
  const [onB, setB] = useState(true);
  const [onC, setC] = useState(true);
  const [onD, setD] = useState(true);
  const [onE, setE] = useState(true);
  const [onF, setF] = useState(true);

  return (
    <div className="component-section">
      <h3 className="component-section-title">Sound Toggle</h3>
      <div className="component-row">
        <div className="component-card">
          <CardLabel id="sound-a">A — Label Tag</CardLabel>
          <div className="component-card-body">
            <div className={s.soundDemo}>
              <button className={s.soundA} onClick={() => setA((v) => !v)}>
                Sound {onA ? "Off" : "On"}
              </button>
            </div>
          </div>
        </div>

        <div className="component-card">
          <CardLabel id="sound-b">B — Pill + Dot</CardLabel>
          <div className="component-card-body">
            <div className={s.soundDemo}>
              <button className={s.soundB} onClick={() => setB((v) => !v)}>
                <span className={onB ? s.soundBDot : s.soundBDotOff} />
                Sound {onB ? "Off" : "On"}
              </button>
            </div>
          </div>
        </div>

        <div className="component-card">
          <CardLabel id="sound-c">C — Icon Circle</CardLabel>
          <div className="component-card-body">
            <div className={s.soundDemo}>
              <button className={s.soundC} onClick={() => setC((v) => !v)}>
                {onC ? "\u266A" : "\u2715"}
              </button>
            </div>
          </div>
        </div>

        <div className="component-card">
          <CardLabel id="sound-d">D — Underline Link</CardLabel>
          <div className="component-card-body">
            <div className={s.soundDemo}>
              <button className={s.soundD} onClick={() => setD((v) => !v)}>
                Sound {onD ? "Off" : "On"}
              </button>
            </div>
          </div>
        </div>

        <div className="component-card">
          <CardLabel id="sound-e">E — Filled / Outlined</CardLabel>
          <div className="component-card-body">
            <div className={s.soundDemo}>
              <button className={onE ? s.soundEOn : s.soundEOff} onClick={() => setE((v) => !v)}>
                Sound {onE ? "Off" : "On"}
              </button>
            </div>
          </div>
        </div>

        <div className="component-card">
          <CardLabel id="sound-f">F — Icon + Slash</CardLabel>
          <div className="component-card-body">
            <div className={s.soundDemo}>
              <button className={s.soundF} onClick={() => setF((v) => !v)}>
                <span className={s.soundFIcon}>
                  {"\u266A"}
                  {!onF && <span className={s.soundFSlash} />}
                </span>
                Sound {onF ? "Off" : "On"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
