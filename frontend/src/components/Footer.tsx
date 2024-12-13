import '../styles/footer.css'
import { FaFacebook,FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdPhone,MdEmail } from "react-icons/md";
export default function Footer(){
    return (
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-info">
              <p><MdPhone/> <strong>Teléfono:</strong> +1 800 123 4567</p>
              <p><MdEmail/> <strong>Email:</strong> contacto@empresa.com</p>
            </div>
    
            <div className="footer-social-links">
            
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaFacebook />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                <FaSquareXTwitter/>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                <FaInstagram/>
              </a>
            </div>
    
            <div className="footer-additional-info">
              <p>&copy; 2024 LogicLords, Todos los derechos reservados</p>
            </div>
          </div>
        </footer>
      );
}