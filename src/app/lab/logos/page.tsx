import s from "./logos.module.css";

function Card({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className={s.logoCard}>
      <div className={s.logoLabel}>{label}</div>
      <div className={s.logoCanvas}>{children}</div>
    </div>
  );
}

export default function LogosPage() {
  return (
    <>
      <div className="lab-section-header">
        <h2 className="lab-section-title">
          Logos
          <span className="lab-section-count">(15)</span>
        </h2>
        <p className="lab-section-desc">
          Typographic lockups, wordmark + symbol combinations, and alternative
          typeface explorations for the Rare Earths wordmark.
        </p>
      </div>

      {/* ------------------------------------------------
          Typographic Lockups
          ------------------------------------------------ */}
      <div className="component-section">
        <h3 className="component-section-title">Typographic Lockups</h3>
        <div className={s.logoGrid}>
          {/* 1 — Heavy uppercase */}
          <Card label="01 — Heavy Uppercase">
            <div className={s.heavy}>Rare Earths</div>
          </Card>

          {/* 2 — Thin extended */}
          <Card label="02 — Thin Extended">
            <div className={s.thin}>Rare Earths</div>
          </Card>

          {/* 3 — Stacked */}
          <Card label="03 — Stacked">
            <div className={s.stacked}>
              Rare
              <br />
              Earths
            </div>
          </Card>

          {/* 4 — Mixed weight */}
          <Card label="04 — Mixed Weight">
            <div className={s.mixed}>
              <span className={s.mixedLight}>Rare </span>
              <span className={s.mixedBold}>Earths</span>
            </div>
          </Card>

          {/* 5 — With index accent */}
          <Card label="05 — With Index Accent">
            <div className={s.withAccent}>
              Rare Earths{" "}
              <span className={s.accentItalic}>(index)</span>
            </div>
          </Card>

          {/* 6 — Monogram */}
          <Card label="06 — Monogram">
            <div className={s.monogram}>RE</div>
          </Card>

          {/* 7 — Superscript 17 */}
          <Card label="07 — Superscript 17">
            <div className={s.superscript}>
              Rare Earths<span className={s.sup17}>17</span>
            </div>
          </Card>
        </div>
      </div>

      {/* ------------------------------------------------
          Wordmark + Symbol
          ------------------------------------------------ */}
      <div className="component-section">
        <h3 className="component-section-title">Wordmark + Symbol</h3>
        <div className={s.logoGrid}>
          {/* 8 — Atomic dot */}
          <Card label="08 — Atomic Dot">
            <div className={s.dotRing}>
              <div className={s.dotRingInner} />
            </div>
          </Card>

          {/* 9 — Element grid */}
          <Card label="09 — Element Grid">
            <div className={s.elementGrid}>
              <div className={s.gridIcon}>
                {Array.from({ length: 17 }).map((_, i) => (
                  <div key={i} className={s.gridCell} />
                ))}
                {/* fill remaining cells to complete 4x5 = 20 */}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={`e${i}`} className={s.gridCellLight} />
                ))}
              </div>
              <div className={s.elementGridText}>Rare Earths</div>
            </div>
          </Card>

          {/* 10 — Periodic badge */}
          <Card label="10 — Periodic Badge">
            <div className={s.periodicWrap}>
              <div className={s.periodicBadge}>
                <span className={s.periodicNumber}>57–71</span>
                <span className={s.periodicSymbol}>Re</span>
              </div>
              <div className={s.periodicText}>Rare Earths</div>
            </div>
          </Card>

          {/* 11 — Line divider */}
          <Card label="11 — Line Divider">
            <div className={s.lineDivider}>
              <div className={s.lineDividerTitle}>Rare Earths</div>
              <div className={s.lineDividerRule} />
              <div className={s.lineDividerSub}>17 Elements</div>
            </div>
          </Card>

          {/* 12 — Bracket frame */}
          <Card label="12 — Bracket Frame">
            <div className={s.bracket}>
              <span className={s.bracketChar}>[&nbsp;</span>
              Rare Earths
              <span className={s.bracketChar}>&nbsp;]</span>
            </div>
          </Card>
        </div>
      </div>

      {/* ------------------------------------------------
          Alternative Typefaces
          ------------------------------------------------ */}
      <div className="component-section">
        <h3 className="component-section-title">Alternative Typefaces</h3>
        <div className={s.logoGrid}>
          {/* 13 — PP Supply Sans */}
          <Card label="13 — PP Supply Sans">
            <div className={s.supplySans}>Rare Earths</div>
          </Card>

          {/* 14 — PP Neue Montreal */}
          <Card label="14 — PP Neue Montreal">
            <div className={s.neueMontreal}>Rare Earths</div>
          </Card>

          {/* 15 — Instrument Serif */}
          <Card label="15 — Instrument Serif Italic">
            <div className={s.instrumentSerif}>Rare Earths</div>
          </Card>
        </div>
      </div>
    </>
  );
}
