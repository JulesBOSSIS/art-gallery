import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>Galerie d'Arts</h3>
            <p>Découvrez des œuvres d'art exceptionnelles et des artistes talentueux.</p>
          </div>
          
          <div className="footer__section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/gallery">Galerie</a></li>
              <li><a href="/artist">Artistes</a></li>
              <li><a href="/boutique">Boutique</a></li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h4>Contact</h4>
            <p>Email: contact@galerie-arts.com</p>
            <p>Téléphone: +33 1 23 45 67 89</p>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>&copy; 2025 Galerie d'Arts. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
