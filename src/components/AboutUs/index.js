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
                Dr. Rama Krishna <span className='doc-qual'>MDS, BDS</span>
              </h1>
              <p>
                Welcome to RamaKrishna Dental, where innovation meets expertise.
                I'm Dr. Rama Krishna, leading a cutting-edge clinic specializing
                in Conservative Dentistry and Endodontics. With a passion for
                research-driven, evidence-based practices and a focus on
                Biomimetic Dentistry, I'm dedicated to providing
                state-of-the-art care. Recognized for my contributions to
                dentistry, I strive to offer the best services, ensuring each
                patient receives the highest quality treatment in a hygienic
                environment.
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