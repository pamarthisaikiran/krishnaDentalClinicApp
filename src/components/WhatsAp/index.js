import './index.css' // Ensure this is the correct path to your CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'

const WhatsApp = () => (
  <div>
    <a
      href="https://wa.me/9573080560"
      className="whatsapp-icon"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fab fa-whatsapp" />
    </a>
  </div>
)
export default WhatsApp
