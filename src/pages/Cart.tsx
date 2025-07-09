import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../components/animations/Reveal";
import Button from "../components/ui/Button";
import { useCart } from "../hooks/useCart";
import { useNotification } from "../hooks/useNotification";
import { type CartItem } from "../contexts/CartContext";
import "./Cart.scss";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = useCart();
  const { showSuccess, showWarning } = useNotification();

  const handleRemoveItem = (id: string, title: string) => {
    removeFromCart(id);
    showSuccess("Supprimé", `"${title}" a été retiré de votre panier.`);
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    updateQuantity(id, quantity);
  };

  const handleClearCart = () => {
    clearCart();
    showWarning(
      "Panier vidé",
      "Tous les articles ont été supprimés de votre panier."
    );
  };

  const handleCheckout = () => {
    // Simulation du processus de commande
    showSuccess(
      "Commande initiée",
      `Redirection vers le paiement. Total: ${getTotalPrice()}€`
    );

    // Dans un vrai projet, vous redirigeriez vers une page de paiement
    // window.location.href = `/checkout`;
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <Reveal>
          <div className="container">
            <motion.div
              className="cart__empty"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="cart__empty-icon">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="m1 1 4 4 2.3 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"></path>
                </svg>
              </div>
              <h1>Votre panier est vide</h1>
              <p>
                Découvrez nos œuvres d'art exceptionnelles et ajoutez-les à
                votre collection.
              </p>
              <Link to="/gallery">
                <Button variant="primary" size="large">
                  Parcourir la galerie
                </Button>
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="cart">
      <Reveal>
        <div className="container">
          <motion.div
            className="cart__header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Mon Panier</h1>
            <p>
              {cartItems.length} œuvre{cartItems.length > 1 ? "s" : ""} dans
              votre panier
            </p>
          </motion.div>

          <div className="cart__content">
            <motion.div
              className="cart__items"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {cartItems.map((item: CartItem, index: number) => (
                <motion.div
                  key={item.id}
                  className="cart__item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="cart__item-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="cart__item-details">
                    <h3 className="cart__item-title">
                      <Link to={`/artwork/${item.id}`}>{item.title}</Link>
                    </h3>
                    <p className="cart__item-artist">Par {item.artist}</p>
                    <div className="cart__item-specs">
                      <span>{item.year}</span>
                      <span>{item.medium}</span>
                      <span>{item.dimensions}</span>
                    </div>
                  </div>

                  <div className="cart__item-quantity">
                    <label>Quantité:</label>
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cart__item-price">
                    <span className="unit-price">{item.price}€</span>
                    {item.quantity > 1 && (
                      <span className="total-price">
                        Total: {(item.price * item.quantity).toFixed(2)}€
                      </span>
                    )}
                  </div>

                  <button
                    className="cart__item-remove"
                    onClick={() => handleRemoveItem(item.id, item.title)}
                    aria-label="Supprimer cet article"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" />
                    </svg>
                  </button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="cart__summary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="cart__summary-content">
                <h3>Résumé de la commande</h3>

                <div className="cart__summary-line">
                  <span>Sous-total:</span>
                  <span>{getTotalPrice()}€</span>
                </div>

                <div className="cart__summary-line">
                  <span>Frais de port:</span>
                  <span>Gratuit</span>
                </div>

                <div className="cart__summary-line cart__summary-total">
                  <span>Total:</span>
                  <span>{getTotalPrice()}€</span>
                </div>

                <div className="cart__actions">
                  <Button
                    variant="primary"
                    size="large"
                    onClick={handleCheckout}
                    className="cart__checkout-btn"
                  >
                    Passer la commande
                  </Button>

                  <Button
                    variant="outline"
                    onClick={handleClearCart}
                    className="cart__clear-btn"
                  >
                    Vider le panier
                  </Button>
                </div>

                <Link to="/gallery" className="cart__continue-shopping">
                  ← Continuer les achats
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Cart;
