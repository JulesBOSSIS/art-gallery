import { type Artwork } from '../components/ui/ArtworkCard';
import { type Artist } from '../components/ui/ArtistCard';

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Marie Dubois',
    bio: 'Artiste peintre spécialisée dans l\'art abstrait contemporain.',
    birthYear: 1985,
    nationality: 'Française',
    style: 'Art abstrait',
    image: '/images/artists/marie-dubois.jpg',
    artworksCount: 12
  },
  {
    id: '2',
    name: 'Jean Martinez',
    bio: 'Sculpteur reconnu pour ses œuvres monumentales en bronze.',
    birthYear: 1978,
    nationality: 'Espagnol',
    style: 'Sculpture contemporaine',
    image: '/images/artists/jean-martinez.jpg',
    artworksCount: 8
  },
  {
    id: '3',
    name: 'Sarah Kim',
    bio: 'Photographe artistique explorant les thèmes urbains.',
    birthYear: 1990,
    nationality: 'Coréenne',
    style: 'Photographie artistique',
    image: '/images/artists/sarah-kim.jpg',
    artworksCount: 15
  }
];

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Symphonie en Bleu',
    artist: 'Marie Dubois',
    year: 2023,
    medium: 'Huile sur toile',
    dimensions: '120 x 80 cm',
    price: 2500,
    image: '/images/artworks/symphonie-bleu.jpg',
    description: 'Une œuvre abstraite qui capture l\'essence de la mélancolie à travers des nuances de bleu profondes.'
  },
  {
    id: '2',
    title: 'Fragments de Mémoire',
    artist: 'Marie Dubois',
    year: 2023,
    medium: 'Acrylique sur toile',
    dimensions: '100 x 70 cm',
    price: 1800,
    image: '/images/artworks/fragments-memoire.jpg',
    description: 'Exploration des souvenirs fragmentés à travers des formes géométriques colorées.'
  },
  {
    id: '3',
    title: 'L\'Éveil',
    artist: 'Jean Martinez',
    year: 2022,
    medium: 'Bronze patiné',
    dimensions: '180 x 60 x 40 cm',
    price: 8500,
    image: '/images/artworks/leveil.jpg',
    description: 'Sculpture représentant l\'éveil de la conscience humaine, symbole de transformation.'
  },
  {
    id: '4',
    title: 'Métropole Nocturne',
    artist: 'Sarah Kim',
    year: 2023,
    medium: 'Photographie numérique',
    dimensions: '80 x 60 cm',
    price: 650,
    image: '/images/artworks/metropole-nocturne.jpg',
    description: 'Capture poétique des lumières urbaines dans le silence de la nuit.'
  },
  {
    id: '5',
    title: 'Résonance',
    artist: 'Marie Dubois',
    year: 2022,
    medium: 'Technique mixte',
    dimensions: '150 x 100 cm',
    price: 3200,
    image: '/images/artworks/resonance.jpg',
    description: 'Œuvre explorant les vibrations sonores traduites en formes visuelles.'
  },
  {
    id: '6',
    title: 'Équilibre Fragile',
    artist: 'Jean Martinez',
    year: 2023,
    medium: 'Acier et verre',
    dimensions: '200 x 80 x 50 cm',
    price: 12000,
    image: '/images/artworks/equilibre-fragile.jpg',
    description: 'Installation questionnant l\'équilibre précaire de notre société moderne.'
  },
  {
    id: '7',
    title: 'Reflets Urbains',
    artist: 'Sarah Kim',
    year: 2023,
    medium: 'Photographie argentique',
    dimensions: '70 x 50 cm',
    price: 480,
    image: '/images/artworks/reflets-urbains.jpg',
    description: 'Série photographique sur les reflets architecturaux en milieu urbain.'
  },
  {
    id: '8',
    title: 'Horizon Infini',
    artist: 'Marie Dubois',
    year: 2023,
    medium: 'Huile sur toile',
    dimensions: '200 x 120 cm',
    price: 4500,
    image: '/images/artworks/horizon-infini.jpg',
    description: 'Paysage abstrait évoquant l\'immensité et la liberté des grands espaces.'
  }
];
