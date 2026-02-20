"use client";

import { use } from "react";
import Link from "next/link";
import { elements } from "@/data/elements";
import s from "../fonts.module.css";

const el = elements[5]; // Neodymium

const SAMPLE = "Neodymium";

const SUPPLY_WEIGHTS = [
  { label: "Thin · 100", cls: s.w100 },
  { label: "Ultralight · 200", cls: s.w200 },
  { label: "Light · 300", cls: s.w300 },
  { label: "Regular · 400", cls: s.w400 },
  { label: "Medium · 500", cls: s.w500 },
  { label: "Semibold · 600", cls: s.w600 },
  { label: "Bold · 700", cls: s.w700 },
  { label: "Black · 900", cls: s.w900 },
];

const MONTREAL_WEIGHTS = [
  { label: "Thin · 100", cls: s.w100 },
  { label: "Light · 300", cls: s.w300 },
  { label: "Book · 350", cls: s.w350 },
  { label: "Regular · 400", cls: s.w400 },
  { label: "Medium · 500", cls: s.w500 },
  { label: "Semibold · 600", cls: s.w600 },
  { label: "Bold · 700", cls: s.w700 },
];

function HeroVariant({ fontClass, weightClass }: { fontClass: string; weightClass: string }) {
  return (
    <div className={`${s.isolateContent} ${fontClass}`}>
      <div className={s.isolateHero}>
        <div className={s.isolateHeroLabel}>
          <span>{el.series}</span>
          <span>ND 060</span>
        </div>
        <h2 className={`${s.isolateHeroTitle} ${weightClass}`}>
          {el.name}
          <span className={s.isolateHeroSup}>{el.atomicNumber}</span>
        </h2>
      </div>
    </div>
  );
}

function BodyVariant({ fontClass, label }: { fontClass: string; label: string }) {
  return (
    <div className={`${s.isolateContent} ${fontClass}`}>
      <div className={s.isolateBody}>
        <div className={s.isolateBodyLabel}>{label}</div>
        <p className={s.isolateBodyText}>{el.overview[0]}</p>
      </div>
    </div>
  );
}

function DataVariant({ fontClass }: { fontClass: string }) {
  return (
    <div className={`${s.isolateContent} ${fontClass}`}>
      <div style={{ padding: "2rem" }}>
        <div className={s.dataGrid}>
          <div className={s.dataCell}>
            <div className={s.dataCellLabel}>Symbol</div>
            <div className={s.dataCellValue}>{el.symbol}</div>
          </div>
          <div className={s.dataCell}>
            <div className={s.dataCellLabel}>Atomic Mass</div>
            <div className={s.dataCellValue}>
              {el.atomicMass}
              <span className={s.dataCellSub}>u</span>
            </div>
          </div>
          <div className={s.dataCell}>
            <div className={s.dataCellLabel}>Config</div>
            <div className={s.dataCellValue}>{el.electronConfig}</div>
          </div>
          <div className={s.dataCell}>
            <div className={s.dataCellLabel}>Abundance</div>
            <div className={s.dataCellValue}>
              {el.abundance}
              <span className={s.dataCellSub}>mg/kg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecimenVariant({
  fontClass,
  weights,
}: {
  fontClass: string;
  weights: { label: string; cls: string }[];
}) {
  return (
    <div className={`${s.isolateContent} ${fontClass}`}>
      <div className={s.isolateSpecimen}>
        {weights.map((w) => (
          <div key={w.label} className={s.isolateSpecimenRow}>
            <span className={s.isolateSpecimenWeight}>{w.label}</span>
            <span className={`${s.isolateSpecimenText} ${w.cls}`}>
              {SAMPLE}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const VARIANTS: Record<
  string,
  { label: string; wide?: boolean; render: () => React.ReactNode }
> = {
  // Supply Sans — Hero
  "supply-hero-light": {
    label: "PP Supply Sans — Display Light",
    render: () => <HeroVariant fontClass={s.supply} weightClass={s.w300} />,
  },
  "supply-hero-regular": {
    label: "PP Supply Sans — Display Regular",
    render: () => <HeroVariant fontClass={s.supply} weightClass={s.w400} />,
  },
  // Neue Montreal — Hero
  "montreal-hero-light": {
    label: "PP Neue Montreal — Display Light",
    render: () => <HeroVariant fontClass={s.montreal} weightClass={s.w300} />,
  },
  "montreal-hero-regular": {
    label: "PP Neue Montreal — Display Regular",
    render: () => <HeroVariant fontClass={s.montreal} weightClass={s.w400} />,
  },
  // Body
  "body-supply": {
    label: "PP Supply Sans — Body",
    wide: true,
    render: () => <BodyVariant fontClass={s.supply} label="PP Supply Sans · Regular" />,
  },
  "body-montreal": {
    label: "PP Neue Montreal — Body",
    wide: true,
    render: () => <BodyVariant fontClass={s.montreal} label="PP Neue Montreal · Book" />,
  },
  "body-helvetica": {
    label: "Helvetica Neue — Body (Current)",
    wide: true,
    render: () => (
      <div className={s.bodyHelvetica}>
        <div className={s.isolateBody}>
          <div className={s.isolateBodyLabel}>Helvetica Neue · Regular</div>
          <p className={s.isolateBodyText}>{el.overview[0]}</p>
        </div>
      </div>
    ),
  },
  // Data Grid
  "data-supply": {
    label: "PP Supply Sans — Data Grid",
    render: () => <DataVariant fontClass={s.supply} />,
  },
  "data-montreal": {
    label: "PP Neue Montreal — Data Grid",
    render: () => <DataVariant fontClass={s.montreal} />,
  },
  // Weight Specimens
  "specimen-supply": {
    label: "PP Supply Sans — Weight Ramp",
    wide: true,
    render: () => <SpecimenVariant fontClass={s.supply} weights={SUPPLY_WEIGHTS} />,
  },
  "specimen-montreal": {
    label: "PP Neue Montreal — Weight Ramp",
    wide: true,
    render: () => <SpecimenVariant fontClass={s.montreal} weights={MONTREAL_WEIGHTS} />,
  },
};

export default function IsolatedFont({
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
        <Link href="/lab/fonts" className="isolate-back">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="isolate-shell">
      <span className="isolate-label">{variant.label}</span>
      <Link href="/lab/fonts" className="isolate-back">
        &larr; Fonts
      </Link>
      <div
        className={
          variant.wide ? "isolate-component-wide" : "isolate-component"
        }
      >
        {variant.render()}
      </div>
    </div>
  );
}
