import { useState, useMemo } from 'react';
import { piecesAuto, getCategories, getPiecesByCategorie, TAXES } from './data/piecesAuto';
import type { PieceAuto } from './data/piecesAuto';

interface PieceSelectionnee {
  piece: PieceAuto;
  quantite: number;
  prixUtilise: number;
}

interface LigneMainOeuvre {
  id: string;
  description: string;
  heures: number;
  tauxHoraire: number;
}

function App() {
  // Etat pour les pieces selectionnees
  const [piecesSelectionnees, setPiecesSelectionnees] = useState<PieceSelectionnee[]>([]);

  // Etat pour la main d'oeuvre
  const [lignesMainOeuvre, setLignesMainOeuvre] = useState<LigneMainOeuvre[]>([
    { id: '1', description: 'Main d\'oeuvre generale', heures: 1, tauxHoraire: 85 }
  ]);

  // Etat pour la selection en cours
  const [categorieSelectionnee, setCategorieSelectionnee] = useState<string>('');
  const [pieceSelectionnee, setPieceSelectionnee] = useState<string>('');

  // Etat pour les informations client
  const [nomClient, setNomClient] = useState('');
  const [vehicule, setVehicule] = useState('');

  const categories = getCategories();
  const piecesCategorie = categorieSelectionnee ? getPiecesByCategorie(categorieSelectionnee) : [];

  // Ajouter une piece
  const ajouterPiece = () => {
    if (!pieceSelectionnee) return;

    const piece = piecesAuto.find(p => p.id === pieceSelectionnee);
    if (!piece) return;

    // Verifier si deja ajoutee
    const existe = piecesSelectionnees.find(p => p.piece.id === piece.id);
    if (existe) {
      setPiecesSelectionnees(prev =>
        prev.map(p => p.piece.id === piece.id
          ? { ...p, quantite: p.quantite + 1 }
          : p
        )
      );
    } else {
      setPiecesSelectionnees(prev => [...prev, {
        piece,
        quantite: 1,
        prixUtilise: piece.prixMoyen
      }]);
    }

    setPieceSelectionnee('');
  };

  // Supprimer une piece
  const supprimerPiece = (id: string) => {
    setPiecesSelectionnees(prev => prev.filter(p => p.piece.id !== id));
  };

  // Modifier quantite
  const modifierQuantite = (id: string, quantite: number) => {
    if (quantite < 1) return;
    setPiecesSelectionnees(prev =>
      prev.map(p => p.piece.id === id ? { ...p, quantite } : p)
    );
  };

  // Modifier prix utilise
  const modifierPrix = (id: string, prix: number) => {
    setPiecesSelectionnees(prev =>
      prev.map(p => p.piece.id === id ? { ...p, prixUtilise: prix } : p)
    );
  };

  // Ajouter ligne main d'oeuvre
  const ajouterLigneMainOeuvre = () => {
    const newId = (Math.max(...lignesMainOeuvre.map(l => parseInt(l.id)), 0) + 1).toString();
    setLignesMainOeuvre(prev => [...prev, {
      id: newId,
      description: '',
      heures: 1,
      tauxHoraire: 85
    }]);
  };

  // Supprimer ligne main d'oeuvre
  const supprimerLigneMainOeuvre = (id: string) => {
    if (lignesMainOeuvre.length <= 1) return;
    setLignesMainOeuvre(prev => prev.filter(l => l.id !== id));
  };

  // Modifier ligne main d'oeuvre
  const modifierLigneMainOeuvre = (id: string, field: keyof LigneMainOeuvre, value: string | number) => {
    setLignesMainOeuvre(prev =>
      prev.map(l => l.id === id ? { ...l, [field]: value } : l)
    );
  };

  // Calculs
  const calculs = useMemo(() => {
    const sousTotalPieces = piecesSelectionnees.reduce(
      (acc, p) => acc + (p.prixUtilise * p.quantite), 0
    );

    const sousTotalMainOeuvre = lignesMainOeuvre.reduce(
      (acc, l) => acc + (l.heures * l.tauxHoraire), 0
    );

    const sousTotalAvantTaxes = sousTotalPieces + sousTotalMainOeuvre;
    const tps = sousTotalAvantTaxes * TAXES.TPS;
    const tvq = sousTotalAvantTaxes * TAXES.TVQ;
    const total = sousTotalAvantTaxes + tps + tvq;

    return {
      sousTotalPieces,
      sousTotalMainOeuvre,
      sousTotalAvantTaxes,
      tps,
      tvq,
      total
    };
  }, [piecesSelectionnees, lignesMainOeuvre]);

  const formatPrix = (prix: number) => {
    return prix.toLocaleString('fr-CA', { style: 'currency', currency: 'CAD' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">EstimaAuto Quebec</h1>
              <p className="text-xs text-blue-300">Estimation de reparation automobile</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Colonne gauche - Formulaire */}
          <div className="lg:col-span-2 space-y-6">

            {/* Info Client */}
            <section className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Information Client
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Nom du client</label>
                  <input
                    type="text"
                    value={nomClient}
                    onChange={(e) => setNomClient(e.target.value)}
                    placeholder="Jean Tremblay"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Vehicule</label>
                  <input
                    type="text"
                    value={vehicule}
                    onChange={(e) => setVehicule(e.target.value)}
                    placeholder="Honda Civic 2019"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  />
                </div>
              </div>
            </section>

            {/* Selection Pieces */}
            <section className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Pieces Requises
              </h2>

              {/* Selecteurs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Categorie</label>
                  <select
                    value={categorieSelectionnee}
                    onChange={(e) => {
                      setCategorieSelectionnee(e.target.value);
                      setPieceSelectionnee('');
                    }}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                  >
                    <option value="" className="bg-slate-800">-- Choisir --</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat} className="bg-slate-800">{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Piece</label>
                  <select
                    value={pieceSelectionnee}
                    onChange={(e) => setPieceSelectionnee(e.target.value)}
                    disabled={!categorieSelectionnee}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400 disabled:opacity-50"
                  >
                    <option value="" className="bg-slate-800">-- Choisir --</option>
                    {piecesCategorie.map(p => (
                      <option key={p.id} value={p.id} className="bg-slate-800">
                        {p.piece} - {formatPrix(p.prixMoyen)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    onClick={ajouterPiece}
                    disabled={!pieceSelectionnee}
                    className="w-full bg-green-600 hover:bg-green-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    + Ajouter
                  </button>
                </div>
              </div>

              {/* Liste pieces selectionnees */}
              {piecesSelectionnees.length > 0 && (
                <div className="mt-4 space-y-2">
                  <div className="grid grid-cols-12 gap-2 text-xs text-blue-300 font-medium px-2">
                    <div className="col-span-5">Piece</div>
                    <div className="col-span-2 text-center">Qte</div>
                    <div className="col-span-2 text-center">Prix unit.</div>
                    <div className="col-span-2 text-right">Total</div>
                    <div className="col-span-1"></div>
                  </div>
                  {piecesSelectionnees.map((item) => (
                    <div key={item.piece.id} className="grid grid-cols-12 gap-2 items-center bg-white/5 rounded-lg p-2">
                      <div className="col-span-5">
                        <p className="text-white text-sm font-medium truncate">{item.piece.piece}</p>
                        <p className="text-blue-300 text-xs">{item.piece.marque}</p>
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          min="1"
                          value={item.quantite}
                          onChange={(e) => modifierQuantite(item.piece.id, parseInt(e.target.value) || 1)}
                          className="w-full bg-white/10 border border-white/20 rounded px-2 py-1 text-white text-center text-sm"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          step="0.01"
                          value={item.prixUtilise}
                          onChange={(e) => modifierPrix(item.piece.id, parseFloat(e.target.value) || 0)}
                          className="w-full bg-white/10 border border-white/20 rounded px-2 py-1 text-white text-center text-sm"
                        />
                      </div>
                      <div className="col-span-2 text-right text-white font-medium">
                        {formatPrix(item.prixUtilise * item.quantite)}
                      </div>
                      <div className="col-span-1 text-right">
                        <button
                          onClick={() => supprimerPiece(item.piece.id)}
                          className="text-red-400 hover:text-red-300 p-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {piecesSelectionnees.length === 0 && (
                <div className="text-center py-8 text-blue-300/60">
                  <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <p>Aucune piece selectionnee</p>
                </div>
              )}
            </section>

            {/* Main d'oeuvre */}
            <section className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Main d'Oeuvre
                </h2>
                <button
                  onClick={ajouterLigneMainOeuvre}
                  className="text-sm bg-orange-600 hover:bg-orange-500 text-white px-3 py-1 rounded-lg transition-colors"
                >
                  + Ajouter ligne
                </button>
              </div>

              <div className="space-y-3">
                {lignesMainOeuvre.map((ligne) => (
                  <div key={ligne.id} className="grid grid-cols-12 gap-3 items-center bg-white/5 rounded-lg p-3">
                    <div className="col-span-5">
                      <input
                        type="text"
                        value={ligne.description}
                        onChange={(e) => modifierLigneMainOeuvre(ligne.id, 'description', e.target.value)}
                        placeholder="Description du travail"
                        className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-white placeholder-white/40 text-sm"
                      />
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          step="0.5"
                          min="0.5"
                          value={ligne.heures}
                          onChange={(e) => modifierLigneMainOeuvre(ligne.id, 'heures', parseFloat(e.target.value) || 0.5)}
                          className="w-full bg-white/10 border border-white/20 rounded px-2 py-2 text-white text-center text-sm"
                        />
                        <span className="text-blue-300 text-xs">h</span>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          step="5"
                          min="0"
                          value={ligne.tauxHoraire}
                          onChange={(e) => modifierLigneMainOeuvre(ligne.id, 'tauxHoraire', parseFloat(e.target.value) || 0)}
                          className="w-full bg-white/10 border border-white/20 rounded px-2 py-2 text-white text-center text-sm"
                        />
                        <span className="text-blue-300 text-xs">$/h</span>
                      </div>
                    </div>
                    <div className="col-span-2 text-right text-white font-medium">
                      {formatPrix(ligne.heures * ligne.tauxHoraire)}
                    </div>
                    <div className="col-span-1 text-right">
                      <button
                        onClick={() => supprimerLigneMainOeuvre(ligne.id)}
                        disabled={lignesMainOeuvre.length <= 1}
                        className="text-red-400 hover:text-red-300 disabled:opacity-30 disabled:cursor-not-allowed p-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Colonne droite - Resume */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 sticky top-6">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                </svg>
                Resume Estimation
              </h2>

              {/* Info client resume */}
              {(nomClient || vehicule) && (
                <div className="mb-4 pb-4 border-b border-white/10">
                  {nomClient && <p className="text-white font-medium">{nomClient}</p>}
                  {vehicule && <p className="text-blue-300 text-sm">{vehicule}</p>}
                </div>
              )}

              {/* Details */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-300">Pieces ({piecesSelectionnees.length})</span>
                  <span className="text-white">{formatPrix(calculs.sousTotalPieces)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-300">Main d'oeuvre</span>
                  <span className="text-white">{formatPrix(calculs.sousTotalMainOeuvre)}</span>
                </div>

                <div className="border-t border-white/10 pt-3">
                  <div className="flex justify-between">
                    <span className="text-blue-300">Sous-total</span>
                    <span className="text-white">{formatPrix(calculs.sousTotalAvantTaxes)}</span>
                  </div>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-blue-300/70">TPS (5%)</span>
                  <span className="text-white/70">{formatPrix(calculs.tps)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-blue-300/70">TVQ (9.975%)</span>
                  <span className="text-white/70">{formatPrix(calculs.tvq)}</span>
                </div>

                <div className="border-t border-white/10 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold text-lg">TOTAL</span>
                    <span className="text-2xl font-bold text-green-400">{formatPrix(calculs.total)}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 space-y-2">
                <button
                  onClick={() => window.print()}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Imprimer
                </button>
                <button
                  onClick={() => {
                    setPiecesSelectionnees([]);
                    setLignesMainOeuvre([{ id: '1', description: 'Main d\'oeuvre generale', heures: 1, tauxHoraire: 85 }]);
                    setNomClient('');
                    setVehicule('');
                  }}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Nouvelle estimation
                </button>
              </div>

              {/* Note */}
              <p className="mt-4 text-xs text-blue-300/60 text-center">
                Taxes Quebec incluses (TPS + TVQ)
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center text-blue-300/60 text-sm">
          <p>EstimaAuto Quebec - Prototype v1.0</p>
          <p className="mt-1">Donnees basees sur le marche quebecois des pieces automobiles</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
