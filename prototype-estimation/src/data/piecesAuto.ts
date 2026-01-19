// Base de donnees des pieces d'auto - Marche Quebec
export interface PieceAuto {
  id: string;
  categorie: string;
  piece: string;
  marque: string;
  prixMin: number;
  prixMax: number;
  prixMoyen: number;
}

export const piecesAuto: PieceAuto[] = [
  {
    id: "filtre-huile-std",
    categorie: "Filtre",
    piece: "Filtre a huile (Standard)",
    marque: "Ecogard",
    prixMin: 2.70,
    prixMax: 5.50,
    prixMoyen: 4.10
  },
  {
    id: "filtre-huile-premium",
    categorie: "Filtre",
    piece: "Filtre a huile (Premium)",
    marque: "Amsoil",
    prixMin: 24.40,
    prixMax: 24.40,
    prixMoyen: 24.40
  },
  {
    id: "plaquettes-frein",
    categorie: "Freins",
    piece: "Plaquettes de frein (Ensemble arriere)",
    marque: "Raybestos",
    prixMin: 52.00,
    prixMax: 52.00,
    prixMoyen: 52.00
  },
  {
    id: "disque-frein-arriere",
    categorie: "Freins",
    piece: "Disque de frein (Arriere)",
    marque: "Raybestos",
    prixMin: 81.90,
    prixMax: 81.90,
    prixMoyen: 81.90
  },
  {
    id: "disque-frein-oe",
    categorie: "Freins",
    piece: "Disque de frein (Qualite OE+)",
    marque: "ProSeries",
    prixMin: 55.24,
    prixMax: 55.24,
    prixMoyen: 55.24
  },
  {
    id: "etrier-frein",
    categorie: "Freins",
    piece: "Etrier de frein (Usage/Recycle)",
    marque: "Partsupick",
    prixMin: 32.05,
    prixMax: 32.05,
    prixMoyen: 32.05
  },
  {
    id: "batterie-35",
    categorie: "Electrique",
    piece: "Batterie (Groupe 35)",
    marque: "NAPA / Certified",
    prixMin: 139.95,
    prixMax: 155.00,
    prixMoyen: 147.48
  },
  {
    id: "batterie-24-26",
    categorie: "Electrique",
    piece: "Batterie (Groupe 24 ou 26)",
    marque: "BOLT / NAPA",
    prixMin: 159.95,
    prixMax: 189.95,
    prixMoyen: 174.95
  },
  {
    id: "alternateur",
    categorie: "Electrique",
    piece: "Alternateur (Usage/Recycle)",
    marque: "Partsupick",
    prixMin: 60.54,
    prixMax: 60.54,
    prixMoyen: 60.54
  },
  {
    id: "amortisseur-arriere",
    categorie: "Suspension",
    piece: "Amortisseur (Arriere)",
    marque: "TMC",
    prixMin: 65.76,
    prixMax: 89.45,
    prixMoyen: 77.61
  },
  {
    id: "bras-suspension",
    categorie: "Suspension",
    piece: "Bras de suspension avec rotule",
    marque: "NAPA",
    prixMin: 109.00,
    prixMax: 109.00,
    prixMoyen: 109.00
  },
  {
    id: "bague-suspension",
    categorie: "Suspension",
    piece: "Bague de bras de suspension (Paire)",
    marque: "TOR",
    prixMin: 64.88,
    prixMax: 64.88,
    prixMoyen: 64.88
  },
  {
    id: "sonde-o2",
    categorie: "Moteur",
    piece: "Sonde a oxygene (Downstream)",
    marque: "Denso",
    prixMin: 200.24,
    prixMax: 200.24,
    prixMoyen: 200.24
  },
  {
    id: "pompe-essence",
    categorie: "Moteur",
    piece: "Pompe a essence (Electrique)",
    marque: "Bosch",
    prixMin: 281.47,
    prixMax: 281.47,
    prixMoyen: 281.47
  },
  {
    id: "huile-synthetique",
    categorie: "Fluides",
    piece: "Huile synthetique (Bidon 5L)",
    marque: "ProSeries / Liqui Moly",
    prixMin: 30.99,
    prixMax: 89.99,
    prixMoyen: 60.49
  }
];

// Obtenir les categories uniques
export const getCategories = (): string[] => {
  return [...new Set(piecesAuto.map(p => p.categorie))];
};

// Filtrer les pieces par categorie
export const getPiecesByCategorie = (categorie: string): PieceAuto[] => {
  return piecesAuto.filter(p => p.categorie === categorie);
};

// Taxes Quebec
export const TAXES = {
  TPS: 0.05,    // 5%
  TVQ: 0.09975, // 9.975%
  TOTAL: 0.14975 // 14.975%
};
