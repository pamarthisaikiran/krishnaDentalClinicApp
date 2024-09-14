import {Component} from 'react' 

import "./index.css"

class AboutUs extends Component {

    render(){
        return(
            <div className='aboutUs'>
                <h1 className='head-about'>About Us</h1>
            <div className="doc">
          
          <div className='doc-content'>
          <div className='text-center'>
              <img
                src="https://i.postimg.cc/wMR4YpSk/meett.jpg"
                alt="Doctor Img"  className='about-image'
              />
            </div>
            <div className='doc-text'>
              <h1>Chief Dentist</h1>
              <h1 className='doc-name'>
                Dr.S. Ramakrishna Managing Director & Chief Dentist  </h1>
              <p className='doc-qual'>BDS, L.I.F.E, fellowship in Implantology</p>
              <p>
              Welcome to Ramakrishna Dental. We have 5 years of experience in the field of dentistry. We provide dental treatments and services ranging from Teeth Cleaning, Teeth Filling, Root Canal Treatment, Smile Designing, Dental Crowns and Bridges, Extractions, Teeth Whitening, Braces, Clear Aligners, Dentures, and Dental Implants.
Our professional staff provides a friendly and safe environment for patients.
We aim to deliver premium dental treatments at affordable rates. Your perfect smiles are our responsibility, and they will be provided with utmost comfort and diligence.
                 {/*where innovation meets expertise.
                I'm Dr. Rama Krishna, leading a cutting-edge clinic specializing
                in Conservative Dentistry and Endodontics. With a passion for
                research-driven, evidence-based practices and a focus on
                Biomimetic Dentistry, I'm dedicated to providing
                state-of-the-art care. Recognized for my contributions to
                dentistry, I strive to offer the best services, ensuring each
                patient receives the highest quality treatment in a hygienic
                environment. */}
              </p>
            </div>
            
          </div>
        </div>
        <div>
          
          <img className='about-img'  alt="abt-pics" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725875591/Chamundi_wf6idh.jpg"/>
          <img  className='about-img'  alt="abt-pics" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725875590/DENTAL-CHAIR_btwjw6.jpg"/>
          <img  className='about-img'  alt="abt-pics" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725876007/4_nqsajj.jpg"/>
        </div>
        </div>
        )
    }



    
}

export default  AboutUs