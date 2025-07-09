import Reveal from "../components/animations/Reveal";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <Reveal>
        <section className="about__header">
          <div className="container">
            <h1>À propos</h1>
            <p>Découvrez l'histoire de notre galerie</p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="about__content">
          <div className="container">
            <div className="about__story">
              <h2>Notre Histoire</h2>
              <p>
                Fondée en 2003, notre galerie d'art s'est donnée pour mission de
                promouvoir l'art contemporain et de soutenir les artistes
                émergents. Située au cœur de la ville, nous offrons un espace
                d'exposition unique où se rencontrent tradition et modernité.
              </p>

              <h2>Notre Mission</h2>
              <p>
                Nous croyons que l'art a le pouvoir de transformer les
                perspectives et d'enrichir la vie. Notre équipe passionnée
                s'efforce de créer des expériences artistiques mémorables et de
                rendre l'art accessible à tous.
              </p>

              <h2>Notre Équipe</h2>
              <p>
                Composée de curateurs expérimentés, d'experts en art et de
                passionnés, notre équipe sélectionne avec soin chaque œuvre
                présentée dans notre galerie. Nous accompagnons également les
                collectionneurs dans leurs acquisitions.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default About;
