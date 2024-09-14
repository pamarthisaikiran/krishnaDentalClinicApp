import { Component } from "react";

import "./index.css";

class CountactUs extends Component {
  render() {
    return (
      <div className="contact-main">
        <h1 className="head-contact">Contact-Us</h1>
        
          <div className="contact-content">
          
              <div className="contact-text">
                <h1 className="f-head-contact">Machilipatnam Location</h1>
                <p className="contact-para">
                  Chalarasta center, Gandhi bomma-Shivalayam Street ,Near
                  Nagamani eye hospital ,Machilipatnam-521001 contact numbers:
                  9573080560, 9666818973
                </p>
              </div>

              <div>
                <iframe
                  className="iframe-cont"
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.4815334253184!2d81.12894649889131!3d16.184180257469755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a49e78885fa6821%3A0x6ad4f34ab186d226!2sRamakrishna%20Dental%20clinic!5e0!3m2!1sen!2sin!4v1725870779440!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            
          </div>
        
      </div>
    );
  }
}

export default CountactUs;
