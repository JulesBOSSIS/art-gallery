import { useState } from 'react';
import Reveal from '../components/animations/Reveal';
import Button from '../components/ui/Button';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log('Formulaire envoyé:', formData);
  };

  return (
    <div className="contact">
        <Reveal>
          <section className="contact__header">
            <div className="container">
              <h1>Contact</h1>
              <p>Contactez-nous pour plus d'informations</p>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.2}>
          <section className="contact__content">
            <div className="container">
              <div className="contact__grid">
                <div className="contact__info">
                  <h2>Informations</h2>
                  <div className="contact__details">
                    <div className="contact__item">
                      <h3>Adresse</h3>
                      <p>123 Rue de l'Art<br />75001 Paris, France</p>
                    </div>
                    
                    <div className="contact__item">
                      <h3>Téléphone</h3>
                      <p>+33 1 23 45 67 89</p>
                    </div>
                    
                    <div className="contact__item">
                      <h3>Email</h3>
                      <p>contact@galerie-arts.com</p>
                    </div>
                    
                    <div className="contact__item">
                      <h3>Horaires</h3>
                      <p>
                        Lundi - Vendredi: 10h - 19h<br />
                        Samedi: 10h - 18h<br />
                        Dimanche: 14h - 18h
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact__form">
                  <h2>Envoyez-nous un message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Nom</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject">Sujet</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" variant="primary">
                      Envoyer
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
  );
};

export default Contact;
