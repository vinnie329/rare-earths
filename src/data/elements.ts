export interface RareEarthElement {
  atomicNumber: number;
  name: string;
  symbol: string;
  atomicMass: number;
  electronConfig: string;
  series: string;
  abundance: number; // mg/kg crustal
  overview: string[];
  applications: string[];
  primaryExtraction: string;
  supplyChainStatus: string;
}

export const elements: RareEarthElement[] = [
  {
    atomicNumber: 21,
    name: "Scandium",
    symbol: "Sc",
    atomicMass: 44.956,
    electronConfig: "[Ar] 3d1 4s2",
    series: "Transition Metal",
    abundance: 22,
    overview: [
      "Scandium is a lightweight rare earth element prized for its ability to strengthen aluminum alloys. When added in small quantities, it produces alloys with exceptional strength-to-weight ratios that outperform traditional aerospace materials.",
      "For AI infrastructure, scandium-aluminum alloys are increasingly used in lightweight structural frames for server racks and cooling system components, enabling more efficient data center designs with reduced material mass."
    ],
    applications: [
      "Aluminum-Scandium Alloys",
      "Solid Oxide Fuel Cells",
      "Aerospace Components",
      "Stadium Lighting"
    ],
    primaryExtraction: "CHINA, RUSSIA, UKRAINE",
    supplyChainStatus: "Limited Supply / Emerging Strategic Value"
  },
  {
    atomicNumber: 39,
    name: "Yttrium",
    symbol: "Y",
    atomicMass: 88.906,
    electronConfig: "[Kr] 4d1 5s2",
    series: "Transition Metal",
    abundance: 33,
    overview: [
      "Yttrium is a silvery-metallic element essential in producing phosphors, ceramics, and superconductors. Its compounds are critical for creating the red color in display technologies and for high-temperature superconducting materials.",
      "In AI systems, yttrium-based phosphors are used in LED lighting for data centers, while yttrium barium copper oxide (YBCO) superconductors are being explored for quantum computing interconnects and ultra-efficient power transmission."
    ],
    applications: [
      "LED Phosphors",
      "Superconductor Materials",
      "Laser Crystals",
      "Ceramic Capacitors"
    ],
    primaryExtraction: "CHINA, INDIA, BRAZIL",
    supplyChainStatus: "Moderate Supply / Strategic Value"
  },
  {
    atomicNumber: 57,
    name: "Lanthanum",
    symbol: "La",
    atomicMass: 138.905,
    electronConfig: "[Xe] 5d1 6s2",
    series: "Lanthanide Metal",
    abundance: 39,
    overview: [
      "Lanthanum is the namesake of the lanthanide series and is one of the most abundant rare earth elements. It is highly reactive and is used extensively in catalytic processes, optical lenses, and battery technology.",
      "For AI infrastructure, lanthanum is critical in nickel-metal hydride batteries used for backup power systems in data centers, and in high-refractive-index optical glass for fiber-optic communication networks."
    ],
    applications: [
      "NiMH Batteries",
      "Optical Glass",
      "Fluid Catalytic Cracking",
      "Hydrogen Storage"
    ],
    primaryExtraction: "CHINA, UNITED STATES, AUSTRALIA",
    supplyChainStatus: "Adequate Supply / Moderate Strategic Value"
  },
  {
    atomicNumber: 58,
    name: "Cerium",
    symbol: "Ce",
    atomicMass: 140.116,
    electronConfig: "[Xe] 4f1 5d1 6s2",
    series: "Lanthanide Metal",
    abundance: 66.5,
    overview: [
      "Cerium is the most abundant rare earth element in the Earth's crust. Its unique ability to switch between Ce3+ and Ce4+ oxidation states makes it an exceptional catalyst and polishing agent.",
      "In AI manufacturing, cerium oxide is the primary compound used for chemical-mechanical planarization (CMP) of semiconductor wafers\u2014the precision polishing step essential for producing the advanced chips that power AI computation."
    ],
    applications: [
      "Semiconductor Polishing",
      "Catalytic Converters",
      "Glass Decolorization",
      "UV-Absorbing Glass"
    ],
    primaryExtraction: "CHINA, BRAZIL, INDIA",
    supplyChainStatus: "Adequate Supply / High Industrial Value"
  },
  {
    atomicNumber: 59,
    name: "Praseodymium",
    symbol: "Pr",
    atomicMass: 140.908,
    electronConfig: "[Xe] 4f3 6s2",
    series: "Lanthanide Metal",
    abundance: 9.2,
    overview: [
      "Praseodymium produces a distinctive yellow-green color in glass and ceramics and is a key component in high-strength permanent magnets when alloyed with neodymium. It significantly improves magnet performance at elevated temperatures.",
      "For AI hardware, praseodymium is co-alloyed with neodymium in the permanent magnets used in data center cooling fans, precision actuators, and the electric motors driving the robotics systems increasingly integrated into AI workflows."
    ],
    applications: [
      "NdFeB Magnet Alloys",
      "Aircraft Engine Components",
      "Fiber Optic Amplifiers",
      "Welding Goggles"
    ],
    primaryExtraction: "CHINA, MYANMAR, AUSTRALIA",
    supplyChainStatus: "Constrained Supply / High Strategic Value"
  },
  {
    atomicNumber: 60,
    name: "Neodymium",
    symbol: "Nd",
    atomicMass: 144.242,
    electronConfig: "[Xe] 4f4 6s2",
    series: "Lanthanide Metal",
    abundance: 38,
    overview: [
      "Neodymium is the most critical rare earth element for modern high-performance magnet applications. While it oxidizes quickly in air, its utility in creating permanent magnetic fields is unmatched in industrial scaling.",
      "In the context of AI infrastructure, Neodymium magnets (NdFeB) are essential components in the cooling pumps and hard disk drive actuators that power massive data centers."
    ],
    applications: [
      "High-Strength Magnets",
      "EV Motors",
      "Data Center Actuators",
      "Laser Crystallography"
    ],
    primaryExtraction: "CHINA, AUSTRALIA",
    supplyChainStatus: "Restricted / High Strategic Value"
  },
  {
    atomicNumber: 61,
    name: "Promethium",
    symbol: "Pm",
    atomicMass: 145,
    electronConfig: "[Xe] 4f5 6s2",
    series: "Lanthanide Metal",
    abundance: 0,
    overview: [
      "Promethium is the only radioactive element in the lanthanide series with no stable isotopes. It is extremely rare in nature and is primarily produced synthetically in nuclear reactors through uranium fission.",
      "While not directly used in AI hardware, promethium-147 beta radiation is used in specialized thickness gauges for quality control in semiconductor wafer manufacturing, and its luminescent properties power self-sustaining signal systems."
    ],
    applications: [
      "Nuclear Batteries",
      "Thickness Gauges",
      "Luminous Paint",
      "Research Applications"
    ],
    primaryExtraction: "SYNTHETIC (NUCLEAR REACTORS)",
    supplyChainStatus: "Extremely Scarce / Specialized Use"
  },
  {
    atomicNumber: 62,
    name: "Samarium",
    symbol: "Sm",
    atomicMass: 150.36,
    electronConfig: "[Xe] 4f6 6s2",
    series: "Lanthanide Metal",
    abundance: 7.05,
    overview: [
      "Samarium is best known for samarium-cobalt (SmCo) magnets, which maintain their magnetic properties at temperatures up to 700\u00b0C\u2014far exceeding neodymium magnets. This thermal stability makes them irreplaceable in extreme environments.",
      "For AI infrastructure, SmCo magnets are used in high-temperature server components, military-grade computing systems, and the precision sensors within satellite communication networks that support distributed AI processing."
    ],
    applications: [
      "SmCo Permanent Magnets",
      "Cancer Treatment (Sm-153)",
      "Neutron Absorbers",
      "Precision Guided Systems"
    ],
    primaryExtraction: "CHINA, BRAZIL, INDIA",
    supplyChainStatus: "Moderate Supply / High Strategic Value"
  },
  {
    atomicNumber: 63,
    name: "Europium",
    symbol: "Eu",
    atomicMass: 151.964,
    electronConfig: "[Xe] 4f7 6s2",
    series: "Lanthanide Metal",
    abundance: 2,
    overview: [
      "Europium is the most reactive rare earth element and produces brilliant red and blue phosphorescence. It is the key ingredient in the red phosphors used in display screens and LED lighting technologies.",
      "In AI applications, europium-doped phosphors enable the high-color-accuracy displays used for visual AI training data annotation, and europium compounds serve as anti-counterfeiting markers in secure chip packaging."
    ],
    applications: [
      "Display Phosphors",
      "LED Lighting",
      "Anti-Counterfeiting Marks",
      "Nuclear Control Rods"
    ],
    primaryExtraction: "CHINA, RUSSIA",
    supplyChainStatus: "Scarce Supply / Critical Strategic Value"
  },
  {
    atomicNumber: 64,
    name: "Gadolinium",
    symbol: "Gd",
    atomicMass: 157.25,
    electronConfig: "[Xe] 4f7 5d1 6s2",
    series: "Lanthanide Metal",
    abundance: 6.2,
    overview: [
      "Gadolinium possesses the highest neutron absorption cross-section of any known element and exhibits unique magnetocaloric properties\u2014it heats up when placed in a magnetic field and cools when removed.",
      "For AI infrastructure, gadolinium's magnetocaloric effect is being developed for next-generation magnetic refrigeration systems in data centers, promising 30-40% greater energy efficiency than conventional vapor-compression cooling."
    ],
    applications: [
      "MRI Contrast Agents",
      "Magnetic Refrigeration",
      "Neutron Shielding",
      "Magnetostrictive Sensors"
    ],
    primaryExtraction: "CHINA, UNITED STATES, AUSTRALIA",
    supplyChainStatus: "Moderate Supply / Growing Strategic Value"
  },
  {
    atomicNumber: 65,
    name: "Terbium",
    symbol: "Tb",
    atomicMass: 158.925,
    electronConfig: "[Xe] 4f9 6s2",
    series: "Lanthanide Metal",
    abundance: 1.2,
    overview: [
      "Terbium produces intense green phosphorescence and is critical for magnetostrictive alloys that change shape in response to magnetic fields. It is one of the rarest and most expensive of the commercially used rare earths.",
      "In AI systems, terbium-doped materials are used in magneto-optical storage media and in the green phosphors of high-resolution displays. Terbium alloys also enable precise actuators in robotic systems supporting AI manufacturing."
    ],
    applications: [
      "Green Phosphors",
      "Magnetostrictive Alloys",
      "Solid-State Devices",
      "Sonar Systems"
    ],
    primaryExtraction: "CHINA, MYANMAR",
    supplyChainStatus: "Critical Scarcity / Very High Strategic Value"
  },
  {
    atomicNumber: 66,
    name: "Dysprosium",
    symbol: "Dy",
    atomicMass: 162.5,
    electronConfig: "[Xe] 4f10 6s2",
    series: "Lanthanide Metal",
    abundance: 5.2,
    overview: [
      "Dysprosium is indispensable for maintaining the coercivity of NdFeB magnets at high temperatures. Without dysprosium additions, neodymium magnets would demagnetize in the operating conditions found in motors and generators.",
      "For AI infrastructure, dysprosium-enhanced magnets are essential in the high-performance cooling fans, precision hard drive motors, and EV powertrains that support the physical infrastructure of AI data centers and autonomous vehicles."
    ],
    applications: [
      "NdFeB Magnet Stabilizer",
      "Laser Materials",
      "Nuclear Reactor Controls",
      "Data Storage Devices"
    ],
    primaryExtraction: "CHINA, MYANMAR, AUSTRALIA",
    supplyChainStatus: "Critical Scarcity / Highest Strategic Value"
  },
  {
    atomicNumber: 67,
    name: "Holmium",
    symbol: "Ho",
    atomicMass: 164.93,
    electronConfig: "[Xe] 4f11 6s2",
    series: "Lanthanide Metal",
    abundance: 1.3,
    overview: [
      "Holmium possesses the highest magnetic moment of any naturally occurring element, making it valuable for creating exceptionally strong magnetic fields. It also has unique optical absorption properties.",
      "In AI-adjacent applications, holmium is used in YAG lasers for fiber-optic communications and in magnetic flux concentrators. Its extreme magnetic properties are being explored for next-generation magnetic memory storage."
    ],
    applications: [
      "Magnetic Flux Concentrators",
      "Fiber Optic Lasers",
      "Medical Lasers",
      "Nuclear Industry"
    ],
    primaryExtraction: "CHINA, MYANMAR",
    supplyChainStatus: "Limited Supply / Moderate Strategic Value"
  },
  {
    atomicNumber: 68,
    name: "Erbium",
    symbol: "Er",
    atomicMass: 167.259,
    electronConfig: "[Xe] 4f12 6s2",
    series: "Lanthanide Metal",
    abundance: 3.5,
    overview: [
      "Erbium's distinctive pink color and unique optical properties make it essential for fiber-optic communication. Erbium-doped fiber amplifiers (EDFAs) are the backbone of long-distance internet infrastructure.",
      "For AI, erbium is arguably the most connectivity-critical rare earth: EDFAs amplify optical signals across the global fiber networks that connect distributed AI data centers, enabling the massive data transfers required for model training."
    ],
    applications: [
      "Fiber Optic Amplifiers",
      "Laser Technology",
      "Nuclear Technology",
      "Metallurgical Additive"
    ],
    primaryExtraction: "CHINA, AUSTRALIA, UNITED STATES",
    supplyChainStatus: "Moderate Supply / Critical Infrastructure Value"
  },
  {
    atomicNumber: 69,
    name: "Thulium",
    symbol: "Tm",
    atomicMass: 168.934,
    electronConfig: "[Xe] 4f13 6s2",
    series: "Lanthanide Metal",
    abundance: 0.52,
    overview: [
      "Thulium is the second-rarest naturally occurring lanthanide. Despite its scarcity, it has unique properties as a radiation source and in high-temperature superconductors that make it valuable for specialized applications.",
      "In AI-related contexts, thulium-doped fiber lasers operate at eye-safe wavelengths ideal for LIDAR systems powering autonomous vehicles, and thulium compounds are used in portable X-ray devices for non-destructive testing of computing hardware."
    ],
    applications: [
      "Portable X-Ray Sources",
      "LIDAR Systems",
      "High-Temp Superconductors",
      "Laser Surgery"
    ],
    primaryExtraction: "CHINA, AUSTRALIA",
    supplyChainStatus: "Very Scarce / Niche Strategic Value"
  },
  {
    atomicNumber: 70,
    name: "Ytterbium",
    symbol: "Yb",
    atomicMass: 173.045,
    electronConfig: "[Xe] 4f14 6s2",
    series: "Lanthanide Metal",
    abundance: 3.2,
    overview: [
      "Ytterbium has a unique electronic structure with a complete 4f shell, giving it distinctive optical and metallurgical properties. It improves the mechanical properties of stainless steel and is increasingly important in laser technology.",
      "For AI infrastructure, ytterbium-doped fiber lasers are used in precision manufacturing of semiconductor components, and ytterbium atomic clocks provide the ultra-precise timing synchronization required across distributed AI computing networks."
    ],
    applications: [
      "Industrial Fiber Lasers",
      "Atomic Clocks",
      "Stress Gauges",
      "Metallurgical Alloys"
    ],
    primaryExtraction: "CHINA, AUSTRALIA, BRAZIL",
    supplyChainStatus: "Moderate Supply / Growing Strategic Value"
  },
  {
    atomicNumber: 71,
    name: "Lutetium",
    symbol: "Lu",
    atomicMass: 174.967,
    electronConfig: "[Xe] 4f14 5d1 6s2",
    series: "Lanthanide Metal",
    abundance: 0.8,
    overview: [
      "Lutetium is the heaviest and hardest of the rare earth elements. It is the rarest and most expensive naturally occurring lanthanide, but its density and stability make it valuable in specialized high-technology applications.",
      "In AI-relevant applications, lutetium oxyorthosilicate (LSO) crystals are used in PET scanners and advanced radiation detectors. Lutetium is also being explored as a substrate material for next-generation semiconductor devices."
    ],
    applications: [
      "PET Scan Detectors",
      "Petroleum Refining Catalysts",
      "LED Phosphors",
      "Semiconductor Research"
    ],
    primaryExtraction: "CHINA, UNITED STATES",
    supplyChainStatus: "Very Scarce / High Research Value"
  }
];
