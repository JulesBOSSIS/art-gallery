import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./Button";
import { useCart } from "../../hooks/useCart";
import { useNotification } from "../../hooks/useNotification";
import "./ArtworkCard.scss";

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number;
  medium: string;
  dimensions: string;
  price: number;
  image: string;
  description: string;
}

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard = ({ artwork }: ArtworkCardProps) => {
  const { addToCart, isInCart } = useCart();
  const { showSuccess, showInfo } = useNotification();

  const handleAddToCart = () => {
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
  return (
    <motion.div
      className="artwork-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <div className="artwork-card__image">
        <motion.img
          src={artwork.image}
          alt={artwork.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <motion.div
          className="artwork-card__overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="artwork-card__content">
        <motion.h3
          className="artwork-card__title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {artwork.title}
        </motion.h3>
        <motion.p
          className="artwork-card__artist"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Par {artwork.artist}
        </motion.p>
        <motion.p
          className="artwork-card__year"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          {artwork.year}
        </motion.p>
        <motion.p
          className="artwork-card__medium"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          {artwork.medium}
        </motion.p>
        <motion.p
          className="artwork-card__dimensions"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          {artwork.dimensions}
        </motion.p>
        <motion.p
          className="artwork-card__price"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4, type: "spring" }}
        >
          {artwork.price}€
        </motion.p>

        <motion.div
          className="artwork-card__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <Link to={`/artwork/${artwork.id}`}>
            <Button variant="primary" size="small">
              Voir détails
            </Button>
          </Link>
          <Button
            variant={isInCart(artwork.id) ? "secondary" : "outline"}
            size="small"
            onClick={handleAddToCart}
            disabled={isInCart(artwork.id)}
          >
            {isInCart(artwork.id) ? "Dans le panier" : "Ajouter au panier"}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ArtworkCard;
