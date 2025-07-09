import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/animations/Reveal";
import ArtworkCard from "../components/ui/ArtworkCard";
import Button from "../components/ui/Button";
import { artists } from "../data/artworks";
import { artworks } from "../data/artworks";
import "./ArtistDetail.scss";

const ArtistDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artist = artists.find((art) => art.id === id);

  // Récupérer les œuvres de cet artiste
  const artistArtworks = artworks.filter(
    (artwork) => artwork.artist === artist?.name
  );

  if (!artist) {
    return (
      <div className="artist-detail">
        <div className="container">
          <motion.div
            className="artist-detail__not-found"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Artiste non trouvé</h1>
            <p>L'artiste que vous recherchez n'existe pas.</p>
            <Link to="/artist">
              <Button variant="primary">Retour aux artistes</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="artist-detail">
      <Reveal>
        <section className="artist-detail__hero">
          <div className="container">
            <motion.div
              className="artist-detail__content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="artist-detail__image">
                <motion.img
                  src={artist.image}
                  alt={artist.name}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>

              <div className="artist-detail__info">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h1 className="artist-detail__name">{artist.name}</h1>

                  <div className="artist-detail__specs">
                    <div className="spec">
                      <strong>Nationalité :</strong> {artist.nationality}
                    </div>
                    <div className="spec">
                      <strong>Né en :</strong> {artist.birthYear}
                    </div>
                    <div className="spec">
                      <strong>Style :</strong> {artist.style}
                    </div>
                    <div className="spec">
                      <strong>Œuvres :</strong> {artist.artworksCount} dans
                      notre collection
                    </div>
                  </div>

                  <motion.p
                    className="artist-detail__bio"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {artist.bio}
                  </motion.p>

                  <motion.div
                    className="artist-detail__actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Link to="/artist">
                      <Button variant="secondary">Retour aux artistes</Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </Reveal>

      {artistArtworks.length > 0 && (
        <Reveal delay={0.4}>
          <section className="artist-detail__artworks">
            <div className="container">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Œuvres de {artist.name}
              </motion.h2>

              <motion.div
                className="artist-detail__artworks-grid"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  staggerChildren: 0.2,
                }}
                viewport={{ once: true }}
              >
                {artistArtworks.map((artwork, index) => (
                  <motion.div
                    key={artwork.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <ArtworkCard artwork={artwork} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </Reveal>
      )}
    </div>
  );
};

export default ArtistDetail;
