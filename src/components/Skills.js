import { FaTools, FaLaptopCode } from 'react-icons/fa';  /* FONT AWESOME ICONS */
import { useTranslation } from "react-i18next";

const Skills = () => {

  const { t } = useTranslation();

  return (
    <section id="skills" className="assets">

      <div className="container">

        <div className="section-title">
          <h2>{t("skill_title")}</h2>
        </div>

        <div className="row">
          <div className="col-md-6 icon-box" data-aos="fade-up">
            <div className="icon"><FaLaptopCode /></div>
            <h4 className="title">{t("skill")}</h4>
            <p className="description">
                Javascript - GraphQL - API - Agile - UNIX - SQL - Java
                <br></br>
                DevOps - SDLC - STLC - Python - Machine Learning
            </p>
          </div>
          <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><FaTools /></div>
            <h4 className="title">{t("tool")}</h4>
            <p className="description">
              Cypress - Katalon Studio - Selenium - Oracle SQL
              <br></br>
              Putty - Bitbucket - Git - Postman - Jenkins
              <br></br>
              Jira - Confluence - Waterfall - Notion - AI tools & MCPs
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Skills