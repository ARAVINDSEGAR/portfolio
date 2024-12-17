
import profile from '../assets/profile.jpg'
import { FaMobileAlt, FaUserFriends, FaMale, FaEnvelopeOpen, FaGlobeEurope, FaPlaneDeparture } from 'react-icons/fa';  /* FONT AWESOME ICONS */

const About = () => {
    return (
        <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>Profile</h2>
          <p className="text-justify">
            Testeur QA certifié <strong>ISTQB</strong> avec plus de <strong>3 ans d'expérience</strong> en <strong>tests manuels</strong> et <strong>automatisés</strong>, avec
            une expérience prouvée dans l'obtention de meilleurs résultats dans un environnement de
            travail en évolution rapide. Expérience de la direction d'une équipe dans la conception et
            l'exécution de scripts d'automatisation utilisant <strong>Katalon Studio</strong> et <strong>Selenium</strong>.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={profile} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Ingénieur QA / Testeur logiciel</h3>
            <p className="font-italic text-justify">
            Mon rôle consiste à garantir la qualité des logiciels en concevant et en exécutant des tests, en identifiant les anomalies et en collaborant avec les équipes de développement afin de garantir des livrables fiables et conformes aux exigences.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><strong><FaMobileAlt /> </strong> +33 6 65 61 95 40</li>
                  <li><strong><FaMale /> </strong> 27 ans</li>
                  <li><strong><FaGlobeEurope /> </strong> Indien</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><strong><FaEnvelopeOpen /> </strong><a href="mailto:aravindsg02@gmail.com"> aravindsg02@gmail.com</a></li>
                  <li><strong><FaUserFriends /> </strong> Marié</li>
                  <li><strong><FaPlaneDeparture /> </strong> Île-de-France</li>
                </ul>
              </div>
            </div>
            <p className="text-justify">
              Expertise en outils de test et méthodologies avec une forte capacité à identifier et résoudre les anomalies pour optimiser l'expérience utilisateur et réduire les bugs en production.
            </p>
          </div>
        </div>

      </div>
    </section>
    )
}


export default About;