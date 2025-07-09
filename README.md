# Art Gallery

Bienvenue dans le projet **Art Gallery**. Ce dépôt contient le code source d'une galerie d'art moderne en React/TypeScript avec des animations avancées et un système de panier intégré.

## Sommaire

- [Présentation](#présentation)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Technologies](#technologies)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Présentation

Art Gallery est une galerie d'art moderne et interactive construite avec React et TypeScript. L'application offre une expérience immersive avec des animations fluides, un système de panier fonctionnel, et une interface utilisateur moderne pour découvrir et acheter des œuvres d'art.

## Fonctionnalités

- **Galerie interactive** avec filtres avancés (catégorie, artiste, prix)
- **Pages détaillées** pour chaque œuvre et artiste
- **Système de panier** complet avec gestion des quantités
- **Animations fluides** avec Framer Motion
- **Interface responsive** adaptée mobile et desktop
- **Notifications** en temps réel pour les actions utilisateur
- **Navigation dynamique** entre œuvres et artistes
- **Design moderne** avec thème sombre artistique

## Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/JulesBOSSIS/art-gallery.git
cd art-gallery
```

2. Installez les dépendances :

```bash
npm install
```

3. Configurez les variables d'environnement si nécessaire.

## Utilisation

Lancez l'application en mode développement :

```bash
npm run dev
```

Accédez à [http://localhost:5175](http://localhost:5175) dans votre navigateur.

## Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── animations/      # Composants d'animation
│   ├── layout/          # Header, Footer, Layout
│   └── ui/              # Boutons, cartes, icônes
├── contexts/            # Contextes React (Panier, Notifications)
├── hooks/               # Hooks personnalisés
├── pages/               # Pages de l'application
├── routes/              # Configuration du routage
├── styles/              # Variables et styles globaux
└── data/                # Données des œuvres et artistes
```

## Technologies

- **Frontend :** React 19, TypeScript, Vite
- **Styling :** SCSS, CSS Modules
- **Animations :** Framer Motion
- **Routing :** React Router DOM
- **State Management :** React Hooks, Context API
- **Build Tool :** Vite
- **Package Manager :** npm

## Contribuer

Les contributions sont les bienvenues !  
Merci de lire le fichier [CONTRIBUTING.md](CONTRIBUTING.md) pour plus d'informations.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

© 2025 Art Gallery - Projet de galerie d'art moderne avec React et TypeScript
