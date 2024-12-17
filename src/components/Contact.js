
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';  /* FONT AWESOME ICONS */

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row" data-aos="fade-in">

          <div className="col-md-6 col-sm-12">
            <div className="info">
              <div className="email pb-2">
                <div className="contact-icons"><FaEnvelope /></div>
                <p><a href="mailto:aravindsg02@gmail.com">aravindsg02@gmail.com</a></p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="info">
              <div className="phone pb-2">
                <div className="contact-icons"><FaPhoneAlt /></div>
                <p>+33 6 65 61 95 40</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>

  )
}

export default Contact