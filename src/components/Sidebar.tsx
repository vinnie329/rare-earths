"use client";

import { RareEarthElement } from "@/data/elements";

interface SidebarProps {
  elements: RareEarthElement[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export default function Sidebar({
  elements,
  selectedIndex,
  onSelect,
}: SidebarProps) {
  return (
    <aside>
      <div className="index-header">
        <div className="site-title">Rare Earth Index</div>
        <span className="index-subtitle label">
          17 Elements Critical to AI Infrastructure
        </span>
      </div>
      <ul className="element-list">
        {elements.map((el, i) => (
          <li key={el.atomicNumber} className="element-item">
            <button
              className={`element-link${i === selectedIndex ? " active" : ""}`}
              onClick={() => onSelect(i)}
            >
              <span className="element-number mono">
                {String(el.atomicNumber).padStart(2, "\u2007")}
              </span>
              <span className="element-name">{el.name}</span>
              <span className="element-symbol">{el.symbol}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
