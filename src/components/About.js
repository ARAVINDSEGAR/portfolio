
import profile from '../assets/profile.jpg'
import { FaMobileAlt, FaUserFriends, FaMale, FaEnvelopeOpen, FaGlobeEurope, FaPlaneDeparture } from 'react-icons/fa';  /* FONT AWESOME ICONS */
import { useTranslation } from "react-i18next";

const About = () => {

    const { t } = useTranslation();

    return (
        <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>{t("profile")}</h2>
          <p className="text-justify">
            {t("desc_1")}
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={profile} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{t("role")}</h3>
            <p className="font-italic text-justify">
            {t("desc_2")}
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><strong><FaMobileAlt /> </strong> +33 6 65 61 95 40</li>
                  <li><strong><FaMale /> </strong> {Number((new Date().getFullYear())-1997)} {t("age")}</li>
                  <li><strong><FaGlobeEurope /> </strong> {t("nationality")}</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><strong><FaEnvelopeOpen /> </strong><a href="mailto:aravindsg02@gmail.com"> aravindsg02@gmail.com</a></li>
                  <li><strong><FaUserFriends /> </strong> {t("status")}</li>
                  <li><strong><FaPlaneDeparture /> </strong> Île-de-France</li>
                </ul>
              </div>
            </div>
            <p className="text-justify">
              {t("desc_3")}
            </p>
          </div>
        </div>

      </div>
    </section>
    )
}


export default About;