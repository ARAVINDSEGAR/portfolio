import { FaInfinity, FaProjectDiagram, FaSearch, FaAward, FaStar } from 'react-icons/fa';  /* FONT AWESOME ICONS */

import { useTranslation } from "react-i18next";

const Assets = () => {

    const { t } = useTranslation();

    return (
        <div id="assets">
            <section className="assets">
                <div className="container">

                    <div className="section-title">
                        <h2>{t("interest")}</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                            <div className="icon"><FaInfinity /></div>
                            <h4 className="title">DevOps</h4>
                            <p className="description">{t("interest_1")}</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><FaProjectDiagram /></div>
                            <h4 className="title">{t("interest_tit_2")}</h4>
                            <p className="description">{t("interest_2")}</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon"><FaSearch /></div>
                            <h4 className="title">{t("interest_tit_3")}</h4>
                            <p className="description">{t("interest_3")}</p>
                        </div>
                    </div>


                    <div className="section-title">
                        <h2>Acclamations</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-6 icon-box" data-aos="fade-up">
                            <div className="icon"><FaStar /></div>
                            <h4 className="title">{t("acclaim_tit_1")}</h4>
                            <p className="description">{t("acclaim_1")}</p>
                        </div>
                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><FaAward /></div>
                            <h4 className="title">Promotion</h4>
                            <p className="description">{t("acclaim_2")}</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="assets">
                <div className="container">

                    <div className="section-title">
                        <h2>{t("lang_head")}</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-4 icon-box" data-aos="fade-up">
                            <div className="icon"><i className="fa fa-language"></i></div>
                            <h4 className="title"><strong> {t("lang_eng")}</strong></h4>
                            <p className="description"><span><em> - {t("lang_eng_lvl")}</em></span></p>
                        </div>
                        <div className="col-md-4 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><i className="fa fa-language"></i></div>
                            <h4 className="title"><strong> {t("lang_fra")}</strong></h4>
                            <p className="description"><span><em> - {t("lang_fra_lvl")} <br></br> ( {t("certified_with")} <u>DELF A2</u> )</em></span></p>
                        </div>
                        <div className="col-md-4 icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><i className="fa fa-language"></i></div>
                            <h4 className="title"><strong> {t("lang_tam")}</strong></h4>
                            <p className="description"><span><em> - {t("lang_tam_lvl")}</em></span></p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Assets