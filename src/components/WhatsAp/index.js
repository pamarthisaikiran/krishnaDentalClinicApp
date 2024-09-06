import React from 'react';
import "./index.css"; // Ensure this is the correct path to your CSS file

const WhatsApp = () => {
  return (
    <div>
      {/* Other content */}
      
      <a href="https://wa.me/9347183447" 
         className="whatsapp-icon" 
         target="_blank" 
         rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default WhatsApp;