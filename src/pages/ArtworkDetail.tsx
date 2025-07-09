import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/animations/Reveal";
import Button from "../components/ui/Button";
import { artworks, artists } from "../data/artworks";
import { useCart } from "../hooks/useCart";
import { useNotification } from "../hooks/useNotification";
import "./ArtworkDetail.scss";

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = artworks.find((art) => art.id === id);
  const { addToCart, isInCart } = useCart();
  const { showSuccess, showInfo } = useNotification();

  // Fonction pour trouver l'ID de l'artiste à partir de son nom
  const getArtistId = (artistName: string) => {
    const artist = artists.find((a) => a.name === artistName);
    return artist ? artist.id : null;
  };

  const handleAddToCart = () => {
    if (!artwork) return;

    if (isInCart(artwork.id)) {
      showInfo(
        "Déjà dans le panier",
        "Cette œuvre est déjà dans votre panier."
      );
      return;
    }

    addToCart(artwork);
    showSuccess(
      "Ajouté au panier",
      `"${artwork.title}" a été ajouté à votre panier.`
    );
  };

  const handleBuyNow = () => {
    if (!artwork) return;

    // Simulation d'un achat direct
    showSuccess(
      "Achat initié",
      `Redirection vers le paiement pour "${artwork.title}". Montant: ${artwork.price}€`
    );

    // Dans un vrai projet, vous redirigeriez vers une page de paiement
    // window.location.href = `/checkout?item=${artwork.id}&direct=true`;
  };

  if (!artwork) {
    return (
      <div className="artwork-detail">
        <div className="container">
          <motion.div
            className="artwork-detail__not-found"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Œuvre non trouvée</h1>
            <p>L'œuvre que vous recherchez n'existe pas ou a été supprimée.</p>
            <Link to="/gallery">
              <Button variant="primary">Retour à la galerie</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="artwork-detail">
      <Reveal>
        <section className="artwork-detail__hero">
          <div className="container">
            <motion.div
              className="artwork-detail__content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="artwork-detail__image">
                <motion.img
                  src={artwork.image}
                  alt={artwork.title}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>

              <div className="artwork-detail__info">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h1 className="artwork-detail__title">{artwork.title}</h1>
                  <p className="artwork-detail__artist">
                    Par{" "}
                    {getArtistId(artwork.artist) ? (
                      <Link
                        to={`/artist/${getArtistId(artwork.artist)}`}
                        className="artwork-detail__artist-link"
                      >
                        {artwork.artist}
                      </Link>
                    ) : (
                      <span className="artwork-detail__artist-name">
                        {artwork.artist}
                      </span>
                    )}
                  </p>

                  <div className="artwork-detail__specs">
                    <div className="spec">
                      <strong>Année :</strong> {artwork.year}
                    </div>
                    <div className="spec">
                      <strong>Technique :</strong> {artwork.medium}
                    </div>
                    <div className="spec">
                      <strong>Dimensions :</strong> {artwork.dimensions}
                    </div>
                    <div className="spec">
                      <strong>Prix :</strong>{" "}
                      <span className="price">{artwork.price}€</span>
                    </div>
                  </div>

                  <motion.p
                    className="artwork-detail__description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {artwork.description}
                  </motion.p>

                  <motion.div
                    className="artwork-detail__actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <Button
                      variant="primary"
                      size="large"
                      onClick={handleBuyNow}
                    >
                      Acheter maintenant
                    </Button>
                    <Button
                      variant={isInCart(artwork.id) ? "secondary" : "outline"}
                      size="large"
                      onClick={handleAddToCart}
                      disabled={isInCart(artwork.id)}
                    >
                      {isInCart(artwork.id)
                        ? "Déjà dans le panier"
                        : "Ajouter au panier"}
                    </Button>
                    <Link to="/gallery">
                      <Button variant="secondary">Retour à la galerie</Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default ArtworkDetail;
