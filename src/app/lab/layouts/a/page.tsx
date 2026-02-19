"use client";

import { useState } from "react";
import { elements } from "@/data/elements";
import Sidebar from "@/components/Sidebar";
import ElementProfile from "@/components/ElementProfile";

export default function LayoutA() {
  const [selectedIndex, setSelectedIndex] = useState(5);

  return (
    <div className="app-shell" style={{ height: "100vh" }}>
      <Sidebar
        elements={elements}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
      />
      <main>
        <ElementProfile element={elements[selectedIndex]} />
      </main>
    </div>
  );
}
