// Electron shell occupancy for all 17 rare earth elements
// Each array represents [K, L, M, N, O, P] shells
export const ELECTRON_SHELLS: Record<number, number[]> = {
  21: [2, 8, 9, 2],           // Scandium
  39: [2, 8, 18, 9, 2],       // Yttrium
  57: [2, 8, 18, 18, 9, 2],   // Lanthanum
  58: [2, 8, 18, 19, 9, 2],   // Cerium
  59: [2, 8, 18, 21, 8, 2],   // Praseodymium
  60: [2, 8, 18, 22, 8, 2],   // Neodymium
  61: [2, 8, 18, 23, 8, 2],   // Promethium
  62: [2, 8, 18, 24, 8, 2],   // Samarium
  63: [2, 8, 18, 25, 8, 2],   // Europium
  64: [2, 8, 18, 25, 9, 2],   // Gadolinium
  65: [2, 8, 18, 27, 8, 2],   // Terbium
  66: [2, 8, 18, 28, 8, 2],   // Dysprosium
  67: [2, 8, 18, 29, 8, 2],   // Holmium
  68: [2, 8, 18, 30, 8, 2],   // Erbium
  69: [2, 8, 18, 31, 8, 2],   // Thulium
  70: [2, 8, 18, 32, 8, 2],   // Ytterbium
  71: [2, 8, 18, 32, 9, 2],   // Lutetium
};

export const SHELL_NAMES = ["K", "L", "M", "N", "O", "P"];
