import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import CartIcon from "../ui/CartIcon";
import "./Header.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  const navigationLinks = [
    { to: "/", label: "Accueil" },
    { to: "/gallery", label: "Galerie" },
    { to: "/artist", label: "Artistes" },
    { to: "/boutique", label: "Boutique" },
    { to: "/about", label: "À propos" },
    { to: "/contact", label: "Contact" },
  ];

  // Fermer le menu mobile quand on redimensionne la fenêtre
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Fermer le menu mobile avec la touche Échap
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className={`header ${isScrolled ? "header--scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <motion.div
          className="header__content"
          animate={{
            padding: isScrolled ? "0.75rem 0" : "1.5rem 0",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Link to="/" className="header__logo">
            <motion.h1
              animate={{
                fontSize: isScrolled ? "1.5rem" : "2rem",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              Galerie d'Arts
            </motion.h1>
          </Link>

          {/* Menu hamburger pour mobile */}
          <button
            className={`header__mobile-toggle ${
              isMobileMenuOpen ? "header__mobile-toggle--active" : ""
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Actions du header */}
          <div className="header__actions">
            <CartIcon />
          </div>

          {/* Menu desktop */}
          <nav className="header__nav">
            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <Link to={link.to} className="header__nav-link">
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>{" "}
        {/* Menu mobile */}
        <motion.nav
          className={`header__mobile-nav ${
            isMobileMenuOpen ? "header__mobile-nav--open" : ""
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="header__mobile-nav-content">
            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{
                  delay: isMobileMenuOpen ? index * 0.1 : 0,
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <Link
                  to={link.to}
                  className="header__mobile-nav-link"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>
        {/* Overlay pour fermer le menu mobile */}
        {isMobileMenuOpen && (
          <motion.div
            className="header__mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMobileMenu}
          />
        )}
      </div>
    </motion.header>
  );
};

export default Header;
