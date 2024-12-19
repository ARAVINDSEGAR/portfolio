import { useTranslation } from "react-i18next";

const Resume = () => {

  const { t } = useTranslation();

  return (
    <div id="resume">
      <section className="resume">
        <div className="container">
          <div className="section-title">
            <h2>{t("resume_1")}</h2>
          </div>

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">

              <div className="resume-item pb-1">
                <h4>{t("work_1")}</h4>
                <h5>{t("year_1")}</h5>
                <p><em>Capgemini, Chennai, {t("india")}</em></p>
                <ul>
                  <li>{t("desc_work1_1")}</li>
                  <li>{t("desc_work1_2")} <strong>SIT, fonctionnel, Sanity, Smoke, UAT, Regression</strong> {t("and")} <strong>PDT</strong>.</li>
                  <li>{t("desc_work1_3")} <strong>SDLC</strong> {t("desc_work1_4")} <strong>Agile (Scrum)</strong> {t("and")} <strong>Waterfall</strong>, {t("desc_work1_5")}.</li>
                  <li><strong>{t("desc_work1_6")}</strong> {t("desc_work1_7")}.</li>
                  <li>{t("desc_work1_8")}</li>
                  <li>{t("desc_work1_9")} <strong>Selenium</strong> {t("and")} <strong>Katalon Studio</strong>.</li>
                  <li>{t("desc_work1_10")}<strong>API REST</strong> {t("and")} <strong>SOAP</strong>.</li>
                  <li>{t("desc_work1_11")} <strong>Git, Bitbucket</strong> {t("and")} <strong>Jenkins</strong> {t("desc_work1_12")}.</li>
                  <li>{t("desc_work1_13")} <strong>SQL</strong> {t("desc_work1_14")} <strong>Linux</strong> {t("desc_work1_15")}.</li>
                  <li>{t("desc_work1_16")} <strong>JIRA, Xray</strong> {t("and")} <strong>Zephyr</strong>.</li>
                  <li>{t("desc_work1_17")} <strong>{t("desc_work1_18")}</strong>, {t("desc_work1_19")}.</li>
                  <li>{t("desc_work1_20")}</li>
                  <li>{t("desc_work1_21")}</li>
                </ul>
              </div>

              <div className="resume-item pb-1">
                <h4>{t("work_2")}</h4>
                <h5>{t("year_2")}</h5>
                <p><em>Rashtriya Ispat Nigam Limited, Vizag Steel Plant, Vishakhapatnam, {t("india")}</em></p>
                <p>{t("desc_work2_1")} <strong>Machine learning {t("with")} Python</strong>.</p>
                <ul className="my-auto">
                  <li>{t("desc_work2_2")}</li>
                  <li>{t("desc_work2_3")}</li>
                  <li>{t("desc_work2_4")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="resume">
        <div className="container">

          <div className="section-title">
            <h2>{t("resume_2")}</h2>
          </div>

          <div className="row">

            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">

              <div className="resume-item">
                <h4>{t("edu_1")}</h4>
                <h5>2024 - 2025</h5>
                <p><em>EFOR, Goussainville, France</em></p>
                <ul>
                  <li>{t("edu_desc_1")}</li>
                  <li>{t("edu_desc_2")}</li>
                  <li>{t("edu_desc_3")}</li>
                  <li>{t("edu_desc_4")}</li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>{t("edu_2")}</h4>
                <h5>2017 - 2019</h5>
                <p><em>{t("edu_place_2")}, {t("india")}</em></p>
              </div>

              <div className="resume-item">
                <h4>{t("edu_3")}</h4>
                <h5>2014 - 2017</h5>
                <p><em>{t("edu_place_3")}, {t("india")}</em></p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Resume;
