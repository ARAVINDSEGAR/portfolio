import { FaInfinity, FaProjectDiagram, FaSearch, FaAward, FaStar } from 'react-icons/fa';  /* FONT AWESOME ICONS */

const Assets = () => {
    return (
        <div id="assets">
            <section className="assets">
                <div className="container">

                    <div className="section-title">
                        <h2>Centres d'intérêt</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                            <div className="icon"><FaInfinity /></div>
                            <h4 className="title">DevOps</h4>
                            <p className="description">Optimiser les tests de logiciels dans le cadre de DevOps grâce à l'intégration CI/CD, aux cadres de tests automatisés et à la surveillance des performances pour une exécution sans faille.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><FaProjectDiagram /></div>
                            <h4 className="title">Gestion de projet</h4>
                            <p className="description">Planification des tests, l'affectation des ressources, la gestion des risques, l'assurance qualité, le respect des délais et la communication avec les parties concernées.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon"><FaSearch /></div>
                            <h4 className="title">Architecte de solutions</h4>
                            <p className="description">Stratégies d'automatisation des tests, optimisation des performances, cadres de tests d'intégration, évaluations de l'évolutivité et validation de la sécurité et de la conformité.</p>
                        </div>
                    </div>


                    <div className="section-title">
                        <h2>Acclamations</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-6 icon-box" data-aos="fade-up">
                            <div className="icon"><FaStar /></div>
                            <h4 className="title">Récompense</h4>
                            <p className="description">Reçu le Spotlight & Rock Start Awards de Sogeti pour mes performances exceptionnelles en 2022-2023.</p>
                        </div>
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><FaAward /></div>
                            <h4 className="title">Promotion</h4>
                            <p className="description">Grâce à mes excellentes performances, j'ai été promu responsable des tests en deux ans.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="assets">
                <div className="container">

                    <div className="section-title">
                        <h2>Langues</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-4 icon-box" data-aos="fade-up">
                            <div className="icon"><i className="fa fa-language"></i></div>
                            <h4 className="title"><strong> Anglais</strong></h4>
                            <p className="description"><span><em> - Courant</em></span></p>
                        </div>
                        <div className="col-md-4 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><i className="fa fa-language"></i></div>
                            <h4 className="title"><strong> Français</strong></h4>
                            <p className="description"><span><em> - Niveau avancé <br></br> ( Certifié avec <u>DELF A2</u> )</em></span></p>
                        </div>
                        <div className="col-md-4 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><i className="fa fa-language"></i></div>
                            <h4 className="title"><strong> Tamoul</strong></h4>
                            <p className="description"><span><em> - Langue maternelle</em></span></p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Assets