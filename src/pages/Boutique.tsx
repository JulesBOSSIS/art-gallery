import { useState } from "react";
import Reveal from "../components/animations/Reveal";
import ArtworkCard from "../components/ui/ArtworkCard";
import Button from "../components/ui/Button";
import { artworks } from "../data/artworks";
import "./Boutique.scss";

const getUnique = (arr: string[]) => Array.from(new Set(arr));

const Boutique = () => {
  // Filtres d'état
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [selectedArtist, setSelectedArtist] = useState<string>("Tous");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  // Catégories dynamiques (medium)
  const categories = [
    "Tous",
    ...getUnique(artworks.map((a) => a.medium.split(" ")[0])),
  ];
  // Artistes dynamiques
  const artistNames = ["Tous", ...getUnique(artworks.map((a) => a.artist))];

  // Application des filtres
  const filteredArtworks = artworks.filter((artwork) => {
    if (artwork.price <= 0) return false;
    if (
      selectedCategory !== "Tous" &&
      !artwork.medium.startsWith(selectedCategory)
    )
      return false;
    if (selectedArtist !== "Tous" && artwork.artist !== selectedArtist)
      return false;
    if (minPrice && artwork.price < parseFloat(minPrice)) return false;
    if (maxPrice && artwork.price > parseFloat(maxPrice)) return false;
    return true;
  });

  return (
    <div className="boutique">
      <Reveal>
        <section className="boutique__header">
          <div className="container">
            <h1>Boutique</h1>
            <p>Achetez des œuvres d'art exceptionnelles</p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="boutique__filters">
          <div className="container">
            <div className="boutique__filter-bar">
              {/* Filtres catégorie */}
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "primary" : "outline"}
                  size="small"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
            <div className="boutique__filter-bar">
              {/* Filtres artiste */}
              <label htmlFor="artist-select">Artiste :</label>
              <select
                id="artist-select"
                value={selectedArtist}
                onChange={(e) => setSelectedArtist(e.target.value)}
              >
                {artistNames.map((artist) => (
                  <option key={artist} value={artist}>
                    {artist}
                  </option>
                ))}
              </select>
              {/* Filtres prix */}
              <label htmlFor="min-price">Prix min :</label>
              <input
                id="min-price"
                type="number"
                min={0}
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Min"
                className="price-input"
              />
              <label htmlFor="max-price">Prix max :</label>
              <input
                id="max-price"
                type="number"
                min={0}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Max"
                style={{ width: 80 }}
              />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.4}>
        <section className="boutique__content">
          <div className="container">
            <div className="boutique__grid">
              {filteredArtworks.length === 0 ? (
                <div className="boutique__empty">
                  Aucune œuvre ne correspond à vos filtres.
                </div>
              ) : (
                filteredArtworks.map((artwork) => (
                  <ArtworkCard key={artwork.id} artwork={artwork} />
                ))
              )}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default Boutique;
