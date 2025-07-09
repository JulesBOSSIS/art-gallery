import Reveal from "../components/animations/Reveal";
import ArtworkCard from "../components/ui/ArtworkCard";
import { artworks } from "../data/artworks";
import "./Gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery">
      <Reveal>
        <section className="gallery__header">
          <div className="container">
            <h1>Galerie d'œuvres</h1>
            <p>Découvrez notre collection complète d'œuvres d'art</p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="gallery__content">
          <div className="container">
            <div className="gallery__grid">
              {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default Gallery;
