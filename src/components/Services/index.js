
import {Component} from "react"

import Accordion from 'react-bootstrap/Accordion';


import "./index.css" 



class Services extends Component{
    render(){
        return(
            <div>
            <div className="ser-cont">
                
                <h1 className="head">Services</h1>
                

            </div>
            <div className="box">
                
                    <div className="li-con">
                        
                        <h1>Cosmetic Dentistry</h1>
                        <p>If you are worried about your smile because of bad alignment, 
                            forwardly placed teeth, spaces between your teeth, 
                            or high gum visibility, contact our professionals who focus on 
                            improving the appearance of your mouth, teeth and gums, 
                            so that you can smile confidently among your peers, friends, family and relatives.</p>
                            <div className="img-container">
                                <img className="img" alt="img" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725611770/A1_mk68is.jpg"/>
                               <img className="img" alt="img" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725612231/metal-transjpeg_y1x8mj.jpg"/>
                             <img className="img" alt="img" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725610196/mob-service-png_byuipd.png" />
                            </div>
                    </div>


                    <div className="li-con">
                        
                        <h1>Dental Implants</h1>
                        <p>Have you lost your teeth due to gross decay, a bad fall or because of a cinematic punch to the face? Try our latest Dental implants which are the best replacements for natural teeth and affordable. Our expert surgeon will painlessly place a Dental Implant in the jaw, and place the perfect crown over it. The best part is you 
                            don’t need to disturb adjacent natural teeth and you can have your favourite food again in no time without any worry.</p>
                            <div className="img-container">
                                <img className="img" alt="img" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725617921/dental-implants-in-south-delhi-banner-the-dental-roots_w90e8c.jpg"/>
                               <img className="img" alt="img" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725618126/723ebb64-9c2d-421a-8c30-d8e6b6b492dd_eb1b38.jpg"/>
                             
                            </div>
                    </div>
                    <div className="li-con">
                        
                        <h1>Teeth Whitening</h1>
                        <p>No one prefers a yellow smile. Select our Tooth whitening procedures for a perfect and bedazzled smile to boost your confidence. The procedure is an effective and proven method of lightening the natural colour of your teeth without removing any of the tooth surface.</p>
                            <div className="img-container">
                                <img className="img" alt="img" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725618333/white_teethjpeg_x4xnvc.jpg"/>
                               <img className="img" alt="img" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725618492/smiling-young-woman-cosmetological-teeth-whitening-dental-clinic-selection-tone-implant-tooth_g7u4fm.jpg"/>
                             
                            </div>
                    </div>

                    <div className="li-con">
                        
                        <h1>Dental Bridges</h1>
                        <p>If you are afraid of dental drills and titanium screws, but still require teeth replacements, opt for dental bridges which come in all shades of white. Modern materials like Zirconium, Ceramic, Metal ceramic, Emax are used to provide strong biting and chewing functions along with top quality aesthetics.</p>
                            <div className="img-container">
                                <img className="img" alt="img" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725618764/dental_bridge_jffrhw.jpg"/>
                               <img className="img" alt="img" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725618769/Marco_Banner.001_z0vpt5.png"/>
                             
                            </div>
                    </div>

                    <div className="li-con">
                        
                        <h1>Aligners</h1>
                        <p>Persistence, Patience and Perfection is the hallmark of our dental treatments.
                            
                             Clear Aligners or Invisible Braces are the latest addition to our speciality which 
                             are affordable and can be done from the comfort of your homes. If you are troubled by minor crowding or spaces between your teeth and do not like the idea of wires placed in your mouth, choose our Clear Aligners. All you have to do is visit us for your first appointment so that our orthodontist can collect your dental impressions and send you sets of clear aligners. We will assist you throughout the treatment and guide you towards the perfect smile you wish for.</p>
                            <div className="img-container">
                                <img className="img" alt="img" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725619099/aligners_abncde.jpg"/>
                               <img className="img" alt="img" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725619100/From_Braces_to_Aligners_Finding_Your_Perfect_Orthodontic_Option_q2frs0.jpg"/>
                             
                            </div>
                    </div>
                    <div className="li-con">
                        
                        <h1>Root Canal Treatment</h1>
                        <p>Are you suffering from severe pain while eating or sleeping , Relieve the pain with our professional root canal treatments in a few minutes at minimal rates. Our dentist will remove the infected parts of your tooth and fill it with medicated materials, giving you an immediate relief. Consult our dentist for a healthy and pain-free root canal procedure.</p>
                            <div className="img-container">
                                <img className="img" alt="img" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725619331/Root-Canal-Treatment_bg8k4q.jpg"/>
                               <img className="img" alt="img" src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725619330/root_ysrg2k.jpg"/>
                             
                            </div>
                    </div>
                
                
            </div>
            <div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
            </div>
        )
    }
}

export default Services