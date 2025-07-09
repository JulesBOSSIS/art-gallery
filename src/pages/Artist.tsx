import Reveal from "../components/animations/Reveal";
import ArtistCard from "../components/ui/ArtistCard";
import { artists } from "../data/artworks";
import "./Artist.scss";

const Artist = () => {
  return (
    <div className="artist">
      <Reveal>
        <section className="artist__header">
          <div className="container">
            <h1>Nos Artistes</h1>
            <p>Rencontrez les artistes talentueux de notre galerie</p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="artist__content">
          <div className="container">
            <div className="artist__grid">
              {artists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default Artist;
