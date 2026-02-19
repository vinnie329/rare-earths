"use client";

import { useState } from "react";
import { elements } from "@/data/elements";
import Sidebar from "@/components/Sidebar";
import ElementProfile from "@/components/ElementProfile";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(5);
  const [mobileShowDetail, setMobileShowDetail] = useState(false);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setMobileShowDetail(true);
  };

  const handleBack = () => {
    setMobileShowDetail(false);
  };

  return (
    <div className={`app-shell${mobileShowDetail ? " show-detail" : ""}`}>
      <Sidebar
        elements={elements}
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
      />
      <main>
        <ElementProfile
          element={elements[selectedIndex]}
          onBack={handleBack}
        />
      </main>
    </div>
  );
}
