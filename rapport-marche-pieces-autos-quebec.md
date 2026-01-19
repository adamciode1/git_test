# RAPPORT COMPLET : MARCHE DES PIECES D'AUTOS AU QUEBEC

## Guide d'Integration API - Application d'Estimation de Reparation

---

## 1. PRINCIPAUX FOURNISSEURS AU QUEBEC

### NAPA Pieces d'Auto (UAP/Uni-Select)
- **Position dominante** : ~600 magasins au Canada, leader du marche
- Catalogue de plus de 500 000 pieces
- Propriete de UAP Inc., filiale de Uni-Select (maintenant partie du groupe LKQ)
- Reseau incluant NAPA AutoCare, NAPA/CMAX (carrosserie)

### LKQ Canada (Keystone)
- Specialiste en pieces recyclees, similaires, reusinees et neuves
- Reseau pancanadien de plus de 130 installations
- Connecte a plus de 80 recycleurs au Quebec et Ontario
- Focus sur pieces de collision et alternatives OEM

### Autres distributeurs importants au Quebec :
- **Bumper to Bumper (Groupe Poulin)** - Quebec et Beauce
- **Pieces d'Auto Economiques** - 9 succursales, 50+ ans d'experience
- **Transbec** - 30 000+ articles, distribution Amerique du Nord
- **SUPRA-Z** - En ligne, 60 000+ clients fideles
- **Altrom/Auto-Camping** - Specialiste pieces importees europeennes/asiatiques

---

## 2. OPTIONS D'INTEGRATION ET BASES DE DONNEES

### A) NAPA - Solutions Professionnelles

#### NAPA PROLink - GRATUIT
- Connexion en temps reel au catalogue NAPA
- Accessible 24/7
- Recherche par VIN, description, numero de piece
- Plus de 500 000 pieces dans le catalogue
- Verification de disponibilite en temps reel
- Application mobile disponible (iOS/Android)
- **Avantage** : Totalement gratuit pour les comptes commerciaux

#### NAPA Integrations (NAPAIBiz)
- Permet l'integration avec systemes de gestion de garage tiers
- Compatible avec Mitchell Manager, RO Writer, NAPA TRACS
- Commande directe depuis le systeme de gestion
- Automatisation des estimations et bons de reparation
- **Cout** : Gratuit (service inclus)

#### NAPA TRACS (Systeme complet de gestion)
| Plan | Prix | Fonctionnalites |
|------|------|-----------------|
| Silver | 109 $/mois | Estimations illimitees, inventaire, calendrier |
| Gold | 219 $/mois | Marketing, systeme de temps, email |
| Gold Plus | 249 $/mois | Utilisateurs illimites, SMS marketing |

### B) PartsTech - RECOMMANDE POUR GARAGES

#### Version GRATUITE (0 $/mois)
- Acces a 15+ millions de pieces
- 30 000+ emplacements fournisseurs
- 50+ fournisseurs de pneus
- Recherche multi-fournisseurs en une seule requete
- Prix et disponibilite en temps reel
- Integration avec 35+ systemes de gestion

#### PartsTech Plus : 50 $/mois (45-50 USD)
- Matrice de prix pour surveiller profits
- Priorisation automatique des marques
- Support prioritaire

#### PartsTech Complete : 95 $/mois (85-95 USD)
- Analyse detaillee par type de piece
- Workflows de reparation sequentiels
- Support prioritaire avance

#### API PartsTech : GRATUITE
- Integration complete dans votre systeme
- Catalogue e-commerce complet
- Support dedie pour developpeurs
- Pas de frais pour les clients

### C) LKQ/Keystone

#### eKeystone Portal
- Plateforme transactionnelle pour jobbers
- Versions Trial et Premium disponibles
- Interactive Garage (visualisation 3D)
- Catalogue de pieces collision/aftermarket
- **Cout** : Contactez LKQ pour tarification specifique

---

## 3. SYSTEMES DE GESTION DE GARAGE COMPATIBLES

Systemes populaires au Canada avec integration pieces :

| Systeme | Integration | Notes |
|---------|-------------|-------|
| AutoLeap | PartsTech, Nexpart, TireHub | - |
| Tekmetric | PartsTech | Tres bien note (4.9/5) |
| Shop-Ware | Solutions professionnelles | - |
| Shopmonkey | Cloud-based | Moderne |
| GEM-CAR | NAPA PROLink | Quebecois |
| Mitchell Manager | NAPA | - |
| NAPA TRACS | Systeme proprietaire | NAPA |

---

## 4. COUTS ESTIMES POUR UN GARAGE (5 JOURS/SEMAINE, 8H/JOUR)

### Scenario 1 : Solution Budget Minimal
| Element | Cout |
|---------|------|
| PartsTech GRATUIT | 0 $/mois |
| NAPA PROLink GRATUIT | 0 $/mois |
| Systeme de gestion de base | 50-100 $/mois |
| **TOTAL** | **50-100 $/mois** |

### Scenario 2 : Solution Intermediaire - RECOMMANDE
| Element | Cout |
|---------|------|
| PartsTech Plus | 50 $/mois |
| NAPA PROLink | 0 $/mois (gratuit) |
| Systeme gestion (AutoLeap/Tekmetric) | 150-250 $/mois |
| Integrations API | 0 $/mois (inclus) |
| **TOTAL** | **200-300 $/mois** |

### Scenario 3 : Solution Complete Professionnelle
| Element | Cout |
|---------|------|
| PartsTech Complete | 95 $/mois |
| NAPA TRACS Gold | 219 $/mois |
| Integrations multiples | incluses |
| Support technique premium | inclus |
| **TOTAL** | **315-400 $/mois** |

### Analyse de rentabilite

Pour un garage travaillant 40h/semaine (160h/mois) :

**Economies de temps avec integration automatique :**
- Recherche manuelle de pieces : ~15-20 min/reparation
- Avec integration : ~2-3 min/reparation
- **Economie** : 12-17 min par job

**Pour 20 reparations/semaine (80/mois) :**
- Temps economise : ~16-23 heures/mois
- Valeur au taux horaire mecanicien (50 $/h) : **800-1150 $/mois**
- **ROI** : Le systeme se paie 2-4x par les economies de temps

---

## 5. RECOMMANDATIONS SPECIFIQUES QUEBEC

### Configuration Optimale pour Garage Quebecois :

#### 1. Compte NAPA PROLink (Gratuit)
- Incontournable au Quebec (reseau le plus dense)
- 600 magasins, livraison rapide
- Support en francais

#### 2. PartsTech (Gratuit ou Plus a 50$/mois)
- Compare TOUS les fournisseurs en une recherche
- Economie substantielle sur les prix
- Disponible au Canada

#### 3. Systeme de gestion bilingue
- GEM-CAR (Quebecois, francais/anglais)
- AutoLeap ou Tekmetric (support Canada)
- NAPA TRACS (si principalement NAPA)

#### 4. Fournisseurs locaux a connecter :
- NAPA (principal)
- Pieces d'Auto Economiques (prix competitifs)
- Bumper to Bumper (reseau Quebec)
- Transbec (importation)

### Avantages cles :
- Acces en temps reel a l'inventaire
- Comparaison de prix automatique
- Reduction erreurs de commande (VIN scan)
- Gain de temps significatif
- Tracabilite complete
- Support bilingue (francais/anglais)

### Points d'attention :
- Verifier la disponibilite NAPA PROLink Canada (parfois problemes de mise a jour)
- Negocier tarifs preferentiels avec fournisseurs locaux
- Formation du personnel sur les outils (1-2 semaines)
- Connexion Internet stable requise

---

## 6. GUIDE D'INTEGRATION API - APPLICATION D'ESTIMATION

### Architecture proposee pour l'application d'estimation

```
+------------------+     +-------------------+     +------------------+
|   Interface      |     |   Serveur         |     |   APIs Externes  |
|   Utilisateur    |<--->|   Application     |<--->|                  |
|                  |     |                   |     | - NAPA PROLink   |
| - Entree VIN     |     | - Logique metier  |     | - PartsTech      |
| - Selection      |     | - Calcul estim.   |     | - LKQ/Keystone   |
| - Affichage      |     | - Cache donnees   |     | - TecDoc         |
+------------------+     +-------------------+     +------------------+
```

### Integration NAPA PROLink

#### Methode d'integration :
NAPA PROLink s'integre principalement via :
1. **Application web** : napaprolink.com
2. **Integration systeme** : Via NAPA IBiz pour systemes de gestion
3. **Partenaires certifies** : GEM-CAR, AutoFluent, etc.

#### Configuration requise :
```
Compte commercial NAPA requis
Contact : Representant NAPA local
URL : https://napaprolink.com
```

#### Fonctionnalites disponibles :
- Recherche par VIN
- Recherche par numero de piece
- Verification disponibilite
- Prix en temps reel
- Commande directe

### Integration PartsTech API

#### Inscription developpeur :
```
URL : https://partstech.com/api
Type : REST API
Authentification : OAuth 2.0 / API Key
Format : JSON
```

#### Endpoints principaux :
```
GET  /api/v1/parts/search          - Recherche de pieces
GET  /api/v1/parts/{id}            - Details d'une piece
GET  /api/v1/vehicles/decode/{vin} - Decodage VIN
GET  /api/v1/availability          - Disponibilite
POST /api/v1/orders                - Creer commande
```

#### Exemple de requete :
```json
{
  "vin": "1HGBH41JXMN109186",
  "category": "brakes",
  "part_type": "brake_pads"
}
```

### APIs Open Source / Alternatives gratuites

#### 1. Car API (carapi.app)
```
- Base de donnees vehicules gratuite
- Decodage VIN
- Specifications techniques
- Limite : 1000 requetes/jour gratuit
```

#### 2. NHTSA VIN Decoder API (Gratuit)
```
URL : https://vpic.nhtsa.dot.gov/api/
Limite : Illimite
Usage : Decodage VIN gouvernemental US
```

#### 3. TecDoc (via RapidAPI)
```
- Catalogue pieces aftermarket
- Standard europeen
- Payant mais complet
```

### Structure de donnees pour l'estimation

#### Modele de donnees :
```json
{
  "estimation": {
    "id": "EST-2024-001",
    "date": "2024-01-15",
    "vehicule": {
      "vin": "1HGBH41JXMN109186",
      "marque": "Honda",
      "modele": "Civic",
      "annee": 2021
    },
    "pieces": [
      {
        "nom": "Plaquettes de frein avant",
        "numero": "BC-1234",
        "fournisseur": "NAPA",
        "prix_unitaire": 52.00,
        "quantite": 1,
        "disponibilite": "En stock"
      }
    ],
    "main_oeuvre": {
      "taux_horaire": 85.00,
      "heures_estimees": 1.5,
      "total": 127.50
    },
    "totaux": {
      "sous_total_pieces": 52.00,
      "sous_total_main_oeuvre": 127.50,
      "taxes_tps": 8.98,
      "taxes_tvq": 17.91,
      "total": 206.39
    }
  }
}
```

### Formule de calcul d'estimation

```
TOTAL = (Prix_Pieces * Marge) + (Heures * Taux_Horaire) + Taxes

Ou:
- Prix_Pieces = Somme des prix des pieces
- Marge = 1.25 a 1.50 (25% a 50% de markup standard)
- Heures = Temps de travail estime
- Taux_Horaire = Cout horaire du mecanicien (entre manuellement)
- Taxes = TPS (5%) + TVQ (9.975%) au Quebec
```

### Code exemple - Calcul d'estimation (Python)

```python
class EstimationReparation:
    TPS = 0.05  # 5%
    TVQ = 0.09975  # 9.975%

    def __init__(self, taux_horaire: float):
        self.taux_horaire = taux_horaire
        self.pieces = []
        self.heures_travail = 0
        self.marge_pieces = 1.30  # 30% markup par defaut

    def ajouter_piece(self, nom: str, prix: float, quantite: int = 1):
        self.pieces.append({
            'nom': nom,
            'prix': prix,
            'quantite': quantite,
            'total': prix * quantite * self.marge_pieces
        })

    def set_heures_travail(self, heures: float):
        self.heures_travail = heures

    def calculer_total(self) -> dict:
        sous_total_pieces = sum(p['total'] for p in self.pieces)
        sous_total_main_oeuvre = self.heures_travail * self.taux_horaire
        sous_total = sous_total_pieces + sous_total_main_oeuvre

        tps = sous_total * self.TPS
        tvq = sous_total * self.TVQ
        total = sous_total + tps + tvq

        return {
            'pieces': sous_total_pieces,
            'main_oeuvre': sous_total_main_oeuvre,
            'sous_total': sous_total,
            'tps': round(tps, 2),
            'tvq': round(tvq, 2),
            'total': round(total, 2)
        }

# Exemple d'utilisation
estimation = EstimationReparation(taux_horaire=85.00)
estimation.ajouter_piece("Plaquettes frein arriere", 52.00)
estimation.ajouter_piece("Disque frein arriere", 81.90, 2)
estimation.set_heures_travail(2.5)

resultat = estimation.calculer_total()
print(f"Total estimation: {resultat['total']} $")
```

### Code exemple - Integration API (JavaScript)

```javascript
class PartsAPIClient {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.partstech.com/v1';
    }

    async searchParts(vin, category) {
        const response = await fetch(
            `${this.baseUrl}/parts/search?vin=${vin}&category=${category}`,
            {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.json();
    }

    async getAvailability(partNumber, location) {
        const response = await fetch(
            `${this.baseUrl}/availability?part=${partNumber}&location=${location}`,
            {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.json();
    }

    async decodeVIN(vin) {
        // Utilise NHTSA API gratuit comme fallback
        const response = await fetch(
            `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
        );
        return response.json();
    }
}

// Exemple d'utilisation
const client = new PartsAPIClient('votre-api-key');

async function creerEstimation(vin, pieces, heuresTravail, tauxHoraire) {
    const vehicule = await client.decodeVIN(vin);

    let totalPieces = 0;
    const detailsPieces = [];

    for (const piece of pieces) {
        const disponibilite = await client.getAvailability(
            piece.numero,
            'QC'
        );

        detailsPieces.push({
            ...piece,
            disponibilite: disponibilite.status,
            prix: disponibilite.price
        });

        totalPieces += disponibilite.price * piece.quantite;
    }

    const mainOeuvre = heuresTravail * tauxHoraire;
    const sousTotal = totalPieces + mainOeuvre;
    const tps = sousTotal * 0.05;
    const tvq = sousTotal * 0.09975;

    return {
        vehicule,
        pieces: detailsPieces,
        mainOeuvre,
        totalPieces,
        tps,
        tvq,
        total: sousTotal + tps + tvq
    };
}
```

---

## 7. WORKFLOW COMPLET D'INTEGRATION

### Etape 1 : Configuration initiale
1. Creer compte commercial NAPA
2. S'inscrire a PartsTech (gratuit)
3. Obtenir cles API necessaires

### Etape 2 : Integration base de donnees
1. Importer catalogue pieces (CSV fourni)
2. Configurer connexion APIs
3. Synchroniser inventaire

### Etape 3 : Interface utilisateur
1. Formulaire saisie VIN
2. Selection type de reparation
3. Liste pieces avec prix temps reel
4. Entree taux horaire manuel
5. Calcul automatique total

### Etape 4 : Generation estimation
1. Recherche pieces via API
2. Verification disponibilite
3. Calcul avec taxes Quebec
4. Generation PDF/impression

---

## CONCLUSION

Pour un garage quebecois travaillant 5 jours/semaine, la meilleure approche est :

**Investissement initial** : 200-300 $/mois
- PartsTech (gratuit ou Plus)
- NAPA PROLink (gratuit)
- Systeme de gestion moderne avec integrations

**Retour sur investissement** : Immediat
- Economie de 15-20h/mois en temps de recherche
- Meilleurs prix via comparaison automatique (5-15% d'economie)
- Reduction des erreurs de commande
- Satisfaction client amelioree (delais reduits)

Le marche quebecois est bien desservi avec des options gratuites (NAPA PROLink, PartsTech gratuit) permettant de demarrer sans investissement majeur.

---

*Document genere pour l'analyse du marche des pieces d'autos au Quebec*
*Donnees de prix disponibles dans le fichier CSV associe*
