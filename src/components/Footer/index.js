import {Link} from 'react-router-dom'
import {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faLinkedin,
  faWhatsapp,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

class Footer extends Component {
  render() {
    return (
      <div className="foot-container-main">
        <div className="foot-container ">
          <div className="boxes">
            <div>
              <h1 className="f-head">About Us</h1>
              <hr className="h" />
              <p className="about-para">
                We, RamaKrishna Dental Clinic Services, situated at Machilipatnam,
                Andhra Pradesh aim to deliver premium dental treatments at
                affordable rates. Your perfect smiles are our responsibility and
                will be provided under utmost comfort and diligence.
              </p>
            </div>
          </div>
          <div className="boxes">
            <div>
              <h1 className="f-head">Treatments</h1>

              <hr className="h" />
              <ul className="ui">
                <Link to="/services">
                  <li className="li">
                    <div className="li-cont">
                      <FontAwesomeIcon
                        className="font-ic"
                        icon={faArrowRight}
                      />
                      <p className="f-para">Cosmetic Dentistry</p>
                    </div>
                  </li>
                </Link>
                <Link to="/services">
                  <li className="li">
                    <div className="li-cont">
                      <FontAwesomeIcon
                        className="font-ic"
                        icon={faArrowRight}
                      />
                      <p className="f-para">Dental Implants</p>
                    </div>
                  </li>
                </Link>
                <Link to="/services">
                  <li className="li">
                    <div className="li-cont">
                      <FontAwesomeIcon
                        className="font-ic"
                        icon={faArrowRight}
                      />
                      <p className="f-para">Dental Bridgesy</p>
                    </div>
                  </li>
                </Link>
                <Link to="/services">
                  <li className="li">
                    <div className="li-cont">
                      <FontAwesomeIcon
                        className="font-ic"
                        icon={faArrowRight}
                      />
                      <p className="f-para">Teeth Whiteningy</p>
                    </div>
                  </li>
                </Link>
                <Link to="/services">
                  {' '}
                  <li className="li">
                    <div className="li-cont">
                      <FontAwesomeIcon
                        className="font-ic"
                        icon={faArrowRight}
                      />
                      <p className="f-para">Clear Aligners</p>
                    </div>
                  </li>
                </Link>
                <Link to="/services">
                  <li className="li">
                    <div className="li-cont">
                      <FontAwesomeIcon
                        className="font-ic"
                        icon={faArrowRight}
                      />
                      <p className="f-para">Root Canal</p>
                    </div>
                  </li>{' '}
                </Link>
              </ul>
            </div>
          </div>

          <div className="boxes">
            <div>
              <h1 className="f-head">Machilipatnam Location</h1>
              <hr className="h" />
                 <div>
                <iframe
                  className="iframe"
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.4815334253184!2d81.12894649889131!3d16.184180257469755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a49e78885fa6821%3A0x6ad4f34ab186d226!2sRamakrishna%20Dental%20clinic!5e0!3m2!1sen!2sin!4v1725870779440!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{border: '0'}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="icon-cont">
          <h1 className="about-para">
            © 2024 RamaKrishna Dental Clinic All Rights Reserved{' '}
          </h1>
          <div className="social-icons">
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="icon facebook"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="icon linkedin"
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9573080560"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="2x"
                className="icon whatsapp"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="icon instagram"
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer


