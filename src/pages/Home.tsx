import Reveal from "../components/animations/Reveal";
import Typewriter from "../components/animations/Typewriter";
import ArtworkCard from "../components/ui/ArtworkCard";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";
import { artworks } from "../data/artworks";
import "./Home.scss";

const Home = () => {
  const featuredArtworks = artworks.slice(0, 3);

  return (
    <div className="home">
      <Reveal>
        <section className="home__hero">
          <div className="container">
            <Typewriter
              text="Découvrez l'Art sous toutes ses formes"
              className="home__title"
              delay={0.5}
            />
            <motion.p
              className="home__subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Une collection exceptionnelle d'œuvres d'art contemporaines et
              classiques
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.6, type: "spring" }}
            >
              <Button
                variant="primary"
                size="large"
                onClick={() => {
                  window.location.href = "/gallery";
                }}
              >
                Explorer la galerie
              </Button>
            </motion.div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2} distance={50}>
        <section className="home__featured">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Œuvres en vedette
            </motion.h2>
            <motion.div
              className="home__featured-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                staggerChildren: 0.2,
              }}
              viewport={{ once: true }}
            >
              {featuredArtworks.map((artwork, index) => (
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

      <Reveal delay={0.4} distance={40}>
        <section className="home__about">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
            >
              À propos de notre galerie
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Depuis plus de 20 ans, notre galerie présente des œuvres
              d'artistes émergents et confirmés. Nous vous invitons à découvrir
              l'art sous toutes ses formes dans un cadre d'exception.
            </motion.p>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default Home;
