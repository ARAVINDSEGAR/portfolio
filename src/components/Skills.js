import { FaTools, FaLaptopCode } from 'react-icons/fa';  /* FONT AWESOME ICONS */

const Skills = () => {

  return (
    <section id="skills" className="assets">

      <div className="container">

        <div className="section-title">
          <h2>Compétences et Outils</h2>
        </div>

        <div className="row">
          <div className="col-6 icon-box" data-aos="fade-up">
            <div className="icon"><FaLaptopCode /></div>
            <h4 className="title">Compétences</h4>
            <p className="description">
                Selenium - Java - Agile - UNIX - SQL - API - Azure
                <br></br>
                DevOps - SDLC - STLC - Python - Machine Learning
            </p>
          </div>
          <div className="col-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><FaTools /></div>
            <h4 className="title">Outils</h4>
            <p className="description">
              Katalon Studio - Oracle SQL - Putty - Git - Bitbucket 
              <br></br>
              Jenkins - Waterfall - Jira - Confluence - Microsoft Office
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Skills