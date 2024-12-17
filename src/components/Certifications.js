import aws from '../assets/aws.png';
import istqb from '../assets/istqb.png';
import jira from '../assets/jira.png';
import azure from '../assets/azure.png';
import agile from '../assets/agile.png';
import telecom from '../assets/telecom.png';
import selenium from '../assets/selenium.png';
import big_data from '../assets/big_data.png';
import cap_ocean from '../assets/cap_ocean.png';
import automation from '../assets/automation.png';
import python_icon from '../assets/python_icon.png';
import data_analysis from '../assets/data_analysis.png';
import selenium_java from '../assets/selenium_java.png';
import data_structures from '../assets/data_structures.png';
import data_science_icon from '../assets/data_science_icon.png';
import security_awareness from '../assets/security_awareness.png';

import AWS from '../assets/certificates/AWS.pdf';
import QAT from '../assets/certificates/QAT.pdf';
import Python from '../assets/certificates/Python.pdf';
import Agile from '../assets/certificates/Agile.pdf';
import Azure from '../assets/certificates/Azure.pdf';
import ISTQB from '../assets/certificates/ISTQB.pdf';
import Telecom from '../assets/certificates/Telecom.pdf';
import Selenium from '../assets/certificates/Selenium.pdf';
import Agile_Jira from '../assets/certificates/Agile_Jira.pdf';
import Selenium_Java from '../assets/certificates/Selenium_Java.pdf';
import Data_Science_Py from '../assets/certificates/Data_Science_Py.pdf';
import Data_Analysis_Py from '../assets/certificates/Data_Analysis_Py.pdf';
import Data_Structures_Py from '../assets/certificates/Data_Structures_Py.pdf';
import Security_Awareness from '../assets/certificates/Security_Awareness.pdf';
import Automation_Specialist from '../assets/certificates/Automation_Specialist.pdf';


const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">

        <div className="section-title">
          <h2>Certifications</h2>
        </div>

        {/* ISTQB */}
        <div className="container">
          <div className="row certifications-content">
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={istqb} className="img-fluid" alt="ISTQB" />
                  </div>
                  <p>ISTQB<sup>®</sup></p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>Certifié ISTQB<sup>®</sup> <br></br> CTFL v4.0</h5></p>
                    <p><h6>ISTQB<sup>®</sup> - International Software Testing Qualifications Board</h6></p>
                    <p><em>août 2024</em></p>
                    <p><a target="_blank" rel="noreferrer" href={ISTQB}>Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* SELENIUM */}
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={selenium} className="img-fluid" alt="Selenium" />
                  </div>
                  <p>Selenium</p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>Maîtriser XPath, les sélecteurs Css et autres localisateurs dans Selenium</h5></p>
                    <p><h6>Coursera Project Network</h6></p>
                    <p><em>août 2023</em></p>
                    <p><a target="_blank" rel="noreferrer" href={Selenium}>Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* SELENIUM JAVA */}
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={selenium_java} className="img-fluid" alt="Selenium Java" />
                  </div>
                  <p>Selenium et Java</p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>Premier script d'automatisation en utilisant Selenium et Java</h5></p>
                    <p><h6>Coursera Project Network</h6></p>
                    <p><em>août 2023</em></p>
                    <p><a target="_blank" rel="noreferrer" href={Selenium_Java}>Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* TELECOM */}
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={telecom} className="img-fluid" alt="Telecom Domain" />
                  </div>
                  <p>Domaine Telecom</p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>Fondation du domaine des télécommunications</h5></p>
                    <p><h6>Capgemini Université</h6></p>
                    <p><em>juil 2023</em></p>
                    <p><a target="_blank" rel="noreferrer" href={Telecom}>Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* QAT */}
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={cap_ocean} className="img-fluid" alt="Capgemini Ocean" />
                  </div>
                  <p>QE&T - QAT</p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>Certifié QE&T - QAT (niveau 2)</h5></p>
                    <p><h6>Capgemini</h6></p>
                    <p><em>jan 2022</em></p>
                    <p><a target="_blank" rel="noreferrer" href={QAT}>Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* AZURE */}
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={azure} className="img-fluid" alt="Azure" />
                  </div>
                  <p>Azure</p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>Principes de base de Microsoft Azure</h5></p>
                    <p><h6>Microsoft</h6></p>
                    <p><em>oct 2021</em></p>
                    <p><a target="_blank" rel="noreferrer" href={Azure}>Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* AUTOMATION */}
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={automation} className="img-fluid" alt="Automation" />
                  </div>
                  <p>Automation</p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>Spécialiste en Automation (niveau 2)</h5></p>
                    <p><h6>Tricentis School</h6></p>
                    <p><em>sept 2021</em></p>
                    <p><a target="_blank" rel="noreferrer" href={Automation_Specialist}>Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AGILE */}
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={security_awareness} className="img-fluid" alt="Sécurité" />
                  </div>
                  <p>Sensibilisation à la sécurité</p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>Fondamentaux de la sensibilisation à la sécurité</h5></p>
                    <p><h6>KnowBe4</h6></p>
                    <p><em>sept 2021</em></p>
                    <p><a target="_blank" rel="noreferrer" href={Security_Awareness}>Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* AWS */}
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={aws} className="img-fluid" alt="AWS" />
                  </div>
                  <p>AWS</p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>AWS Cloud Practitioner Essentials</h5></p>
                    <p><h6>AWS</h6></p>
                    <p><em>août 2021</em></p>
                    <p><a target="_blank" rel="noreferrer" href={AWS}>Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* AGILE AVEC JIRA */}
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={jira} className="img-fluid" alt="Agile avec Jira" />
                  </div>
                  <p>Agile avec Jira</p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>Agile avec Atlassian Jira</h5></p>
                    <p><h6>Université d'Atlassian</h6></p>
                    <p><em>fév 2021</em></p>
                    <p><a target="_blank" rel="noreferrer" href={Agile_Jira}>Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AGILE */}
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={agile} className="img-fluid" alt="Agile" />
                  </div>
                  <p>Agile</p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>Développement du Logiciel Agile</h5></p>
                    <p><h6>Université du Minnesota</h6></p>
                    <p><em>fév 2021</em></p>
                    <p><a target="_blank" rel="noreferrer" href={Agile}>Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* DATA ANALYSIS */}
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={data_analysis} className="img-fluid" alt="Data Analysis" />
                  </div>
                  <p>Data Analysis</p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>Analyse de données avec Python</h5></p>
                    <p><h6>IBM</h6></p>
                    <p><em>jan 2020</em></p>
                    <p><a target="_blank" rel="noreferrer" href={Data_Analysis_Py}>Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* DATA SCIENCE */}
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={data_science_icon} className="img-fluid" alt="Data science" />
                  </div>
                  <p>Data science</p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>Introduction à la data science en Python</h5></p>
                    <p><h6>Université du Michigan</h6></p>
                    <p><em>oct 2018</em></p>
                    <p><a target="_blank" rel="noreferrer" href={Data_Science_Py}>Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* DATA STRUCTURES */}
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={data_structures} className="img-fluid" alt="Data Structures" />
                  </div>
                  <p>Data Structures</p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>Python Data Structures</h5></p>
                    <p><h6>Université du Michigan</h6></p>
                    <p><em>juil 2018</em></p>
                    <p><a target="_blank" rel="noreferrer" href={Data_Structures_Py}>Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* BIG DATA */}
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={big_data} className="img-fluid" alt="Big Data" />
                  </div>
                  <p>Big Data</p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>Data Science et Big Data Analytics</h5></p>
                    <p><h6>Dell EMC</h6></p>
                    <p><em>mai 2018</em></p>
                    <p><a target="_blank" rel="noreferrer" href="https://www.certmetrics.com/dell/electronic_certificate.aspx?cert=652AAE2CF843C23023842A0D7B363180O3860AA76C097285A59F5E7E4C0AC7254">Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* PYTHON */}
            <div className="col-lg-3 col-md-6 col-sm-6 my-3">
              <div className="card card-flip">
                <div className="card-front">
                  <div className="card-body">
                    <img src={python_icon} className="img-fluid" alt="Python" />
                  </div>
                  <p>Python</p>
                </div>
                <div className="card-back">
                  <div className="card-body">
                    <p><h5>Programmation pour tous (Introduction à Python)</h5></p>
                    <p><h6>Université du Michigan</h6></p>
                    <p><em>mars 2018</em></p>
                    <p><a target="_blank" rel="noreferrer" href={Python}>Afficher la licence</a></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Certifications