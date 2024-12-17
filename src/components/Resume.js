const Resume = () => {
  return (
    <div id="resume">
      <section className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Expériences professionnelles</h2>
          </div>

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">

              <div className="resume-item pb-1">
                <h4>Consultant Informatique / Ingénieur logiciel</h4>
                <h5>jan. 2021 - avr. 2024</h5>
                <p><em>Capgemini, Chennai, Inde</em></p>
                <ul>
                  <li>Expertise dans la rédaction de stratégies de test, la préparation et la mise en oeuvre de plans de test, la conception de cas de test, l'utilisation d'outils de test, l'exécution de tests, la gestion et le suivi des défauts.</li>
                  <li>Expérience approfondie de différents types de tests tels que <strong>SIT, fonctionnel, Sanity, Smoke, UAT, Regression et PDT</strong>.</li>
                  <li>Expérience des méthodologies <strong>SDLC</strong> telles que les modèles <strong>Agile (Scrum)</strong> et <strong>Waterfall</strong>, le cycle de vie des tests logiciels (STLC) et le cycle de vie des bugs.</li>
                  <li>A dirigé <strong>une équipe de trois analystes</strong> de l'assurance qualité, améliorant l'efficacité de l'équipe en établissant de nouveaux protocoles de test et en organisant des sessions régulières de partage des connaissances.</li>
                  <li>Capacité à établir et à maintenir des relations positives avec les parties prenantes, y compris les clients, les membres de l'équipe et les fournisseurs.</li>
                  <li>Expérience dans la conception et l'exécution de scripts de test réutilisables à l'aide de <strong>Selenium</strong> et <strong>Katalon Studio</strong>.</li>
                  <li>Expérience de base dans les tests <strong>d'API REST</strong> et <strong>SOAP</strong>.</li>
                  <li>Expérience dans l'utilisation de <strong>Git, Bitbucket</strong> et <strong>Jenkins</strong> pour les pipelines CI/CD</li>
                  <li>Maîtrise de l'écriture de requêtes <strong>SQL</strong> pour récupérer des données et des validations, et de l'exécution de commandes <strong>Linux</strong> pour le démarrage de serveurs et les activités de backend.</li>
                  <li>Maîtrise des outils de gestion des tests tels que <strong>JIRA, Xray</strong> et <strong>Zephyr</strong>.</li>
                  <li>Réalisation de <strong>plus de 60 tâches</strong> d'assurance qualité, y compris des projets critiques, des versions, des CCN et des correctifs.</li>
                  <li>Collaboration avec l'équipe de développement pour mettre en oeuvre des tests automatisés, ce qui a permis de réduire la durée des tests de 30% et d'améliorer la précision globale des tests de 25%.</li>
                  <li>Maintien d'une documentation de test complète, assurant une traçabilité complète du processus de test et facilitant les audits de projet.</li>
                </ul>
              </div>

              <div className="resume-item pb-1">
                <h4>Stagiaire technique</h4>
                <h5>déc. 2018 - avr. 2019</h5>
                <p><em>Rashtriya Ispat Nigam Limited, Vizag Steel Plant, Vishakhapatnam, Inde</em></p>
                <p>Résoudre les problèmes en temps réel avec des solutions modernes en utilisant des techniques <strong>Machine learning avec Python</strong>.</p>
                <ul className="my-auto">
                  <li>Ce projet vise à analyser les données de production des barres d'acier câblées et à prédire les valeurs de production futures à l'aide de techniques de Machine Learning. J'ai utilisé le modèle SARIMA dans l'analyse des séries temporelles pour prédire les valeurs futures.</li>
                  <li>L'objectif de la « Lecture automatisée de plaques d'immatriculation (LAPI) » est de reconnaître les plaques d'immatriculation des voitures des employés de l'aciérie de Visakhapatnam. Le logiciel développé peut être utilisé pour détecter la plaque d'immatriculation de la voiture de l'employé à la porte d'entrée en utilisant des algorithmes et des techniques de Machine Learning. </li>
                  <li>L'objectif du Chat Bot est de créer un bot pour informer les employés du département IT de l'aciérie de Vizag. J'ai utilisé la plateforme « BotPress » pour créer les bots.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="resume">
        <div className="container">

          <div className="section-title">
            <h2>Formations</h2>
          </div>

          <div className="row">

            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">

              <div className="resume-item">
                <h4>Parcours d'entrée dans l'emploi (PEE)</h4>
                <h5>2024 - 2025</h5>
                <p><em>EFOR, Goussainville, France</em></p>
                <ul>
                  <li>Élaborer un projet professionnel</li>
                  <li>Stages en entreprise et découvrir des métiers</li>
                  <li>Technologies de l’information et de la communication</li>
                  <li>Atelier de recherche de solutions</li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Master en Informatique</h4>
                <h5>2017 - 2019</h5>
                <p><em>Université de Pondichéry, Pondichéry, Inde</em></p>
              </div>

              <div className="resume-item">
                <h4>Licence en Applications Informatiques </h4>
                <h5>2014 - 2017</h5>
                <p><em>Saradha Gangadharan College, Pondichéry, Inde</em></p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Resume;
