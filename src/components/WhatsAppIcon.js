// src/components/WhatsAppIcon.js
import React from 'react';
import '.src/WhatsAppIcon.css'; // Import the CSS file for styling

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with your WhatsApp number
      className="whatsapp-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppIcon;
