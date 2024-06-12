import "./Footer.css";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Nazee Consult</h3>
            <p className="footer-description">
              Something nice here. Something nice here. Something nice here.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-nav">
              <a href="#" className="footer-link">
                Home
              </a>
              <a href="#" className="footer-link">
                About
              </a>
              <a href="#" className="footer-link">
                Services
              </a>
              <a href="#" className="footer-link">
                Contact
              </a>
            </nav>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="footer-social">
              <a href="#" className="footer-social-link">
                <Facebook className="footer-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Twitter className="footer-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Linkedin className="footer-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Instagram className="footer-icon" />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <p className="footer-contact">
              123 Main Street
              <br />
              City, State 12345
              <br />
              Email: info@nazeeconsult.com
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; 2024 Nazee Consult. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
