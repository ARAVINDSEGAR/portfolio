import './App.css';
import AOS from "aos";
import 'aos/dist/aos.css';
import $ from 'jquery';

import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Assets from './components/Assets';
import Contact from './components/Contact';

import { FaBars, FaTimes, FaAngleUp, FaHome, FaUser, FaFile, FaToolbox, FaTools, FaHeart } from 'react-icons/fa';  /* FONT AWESOME ICONS */

import * as Scroll from 'react-scroll';
import profile from './assets/profile-thumbnail.jpg'

const App = () => {

  // Init AOS 
  const aos_init = () => {
    AOS.init({
      duration: 1000,
      once: true
    });
    AOS.refresh();
  }
  aos_init();

  // React Scroll
  let Link = Scroll.Link;
  let scroll = Scroll.animateScroll;

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  // Back To Top
  $(document).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  // Toggle Menu Bar 
  const openMenu = () => {
    $('body').toggleClass('mobile-nav-active');
    $("#bar-active").show();
    $("#close-active").hide();
  }
  const closeMenu = () => {
    $('body').toggleClass('mobile-nav-active');
    $("#close-active").show();
    $("#bar-active").hide();
  }

  return (
    <div className="App">

      <div className="mobile-nav-toggle d-xl-none">
        <span id="bar-active" onClick={closeMenu}><FaBars /></span>
        <span id="close-active" onClick={openMenu}><FaTimes /></span>
      </div>

      <header id="header">
        <div className="d-flex flex-column">

          <div className="profile">
            <img src={profile} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">Aravind SEGAR</a></h1>
            <div className="social-btns mt-3 text-center">
              <a className="btn linkedin" href="https://www.linkedin.com/in/aravind-segar-qa/" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin"></i>
              </a>
              <a className="btn github" href="https://github.com/ARAVINDSEGAR" target="_blank" rel="noreferrer">
                <i className="fa fa-github"></i>
              </a>
              <a className="btn instagram" href="https://www.instagram.com/aravind_aravi02/" target="_blank" rel="noreferrer">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>

          <nav className="nav-menu">
            <ul>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <span><FaUser /> Profile</span>
              </Link>

              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <span><FaTools /> Compétences</span>
              </Link>

              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <span><FaFile /> Resume</span>
              </Link>

              <Link
                to="certifications"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <span><FaToolbox /> Certifications</span>
              </Link>

              <Link
                to="assets"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <span><FaTools /> Atouts</span>
              </Link>

              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <span><FaHome /> Contact</span>
              </Link>

            </ul>
          </nav>

        </div>
      </header>

      <section id="home" className="d-flex flex-column justify-content-center align-items-center">
        <div className="home-container" data-aos="fade-in">
          <h1>Aravind SEGAR</h1>
          <p>Ingénieur QA / Testeur logiciel</p>
        </div>
      </section>

      <main id="main">

        <About />
        <Skills />
        <Resume />
        <Certifications />
        <Assets />
        <Contact />

      </main>

      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright - Aravind SEGAR
      </div>
          <div className="credits d-flex">
            Réalisé avec agilité <div className="heart-beat pl-2 h-50"><FaHeart /></div>

          </div>
        </div>
      </footer>

      <button onClick={scrollToTop} className="btn back-to-top"><FaAngleUp /></button>

    </div>
  );
}

export default App;
