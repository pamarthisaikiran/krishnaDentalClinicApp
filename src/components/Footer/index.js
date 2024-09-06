import {Link } from "react-router-dom"
import {Component} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css"


class Fotter extends Component {
    render(){
        return(

            <div>
           
            <div className="foot-container " >
                <div className="boxes">
                   {/*<h1 className="f-head-main">Krishna Dental</h1> */}
                   <div>
                    <h1 className="f-head">About Us</h1>
                    <hr className="h"/>
                    <p className="f-para">
                    We, Krishna Dental Clinic Services, situated at Machilipatnam, Andhra Pradesh aim to deliver premium dental treatments at affordable rates. 
                    Your perfect smiles are our responsibility and will be provided under utmost comfort and diligence.
                    </p>
                </div>
                </div>
                <div className="boxes">
                    <div>
                    <h1 className="f-head">Services</h1>
                    
                    <hr className="h"/>
                    <ul className="ui">
                       <Link to="/services"><li className="li"> 
                            <div className="li-cont">
                            <FontAwesomeIcon className="font-ic" icon={faArrowRight} />
                             <p className="f-para">Cosmetic Dentistry</p>
                             </div>
                        </li></Link> 
                        <Link  to="/services"><li className="li"> 
                            <div className="li-cont">
                            <FontAwesomeIcon className="font-ic" icon={faArrowRight} />
                             <p className="f-para">Dental Implants</p>
                             </div>
                        </li></Link>
                        <Link  to="/services"><li className="li"> 
                            <div className="li-cont">
                            <FontAwesomeIcon className="font-ic" icon={faArrowRight} />
                             <p className="f-para">Dental Bridgesy</p>
                             </div>
                        </li></Link>
                        <Link  to="/services"><li className="li"> 
                            <div className="li-cont">
                            <FontAwesomeIcon className="font-ic" icon={faArrowRight} />
                             <p className="f-para">Teeth Whiteningy</p>
                             </div>
                        </li></Link>
                        <Link  to="/services"> <li className="li"> 
                            <div className="li-cont">
                            <FontAwesomeIcon className="font-ic" icon={faArrowRight} />
                             <p className="f-para">Clear Aligners</p>
                             </div>
                        </li></Link>
                        <Link  to="/services"><li className="li"> 
                            <div className="li-cont">
                            <FontAwesomeIcon className="font-ic" icon={faArrowRight} />
                             <p className="f-para">Root Canal</p>
                             </div>
                        </li> </Link>
                        

                       
                        </ul>
                </div>
                </div>

                <div className="boxes">
                  <div>
                    
                    <h1 className="f-head">Machilipatnam Location</h1>
                    
                    <div>
                    <iframe className="iframe"
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30653.16367565296!2d81.12256997318761!3d16.187223654809948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a49e7d47039bde5%3A0xb922d7fff248bf38!2sKrishna%20Dental%20%26%20Cosmetology%20Clinic!5e0!3m2!1sen!2sin!4v1725604268940!5m2!1sen!2sin" 
                     width="600" height="450" style={{ border:"0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    </div>
                </div>
                <hr />
                </div>
                
               <div className="icon-cont">
               <h1 className="f-para">© 2024 Krishna Dental Clinic All Rights Reserved </h1>
               <div className="social-icons">
      {/* Facebook */}
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" className="icon facebook" />
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon linkedin" />
      </a>

      {/* WhatsApp */}
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" className="icon whatsapp" />
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" className="icon instagram" />
      </a>
    </div>
    </div>
               </div>
           
        )
    }
}

export default Fotter
