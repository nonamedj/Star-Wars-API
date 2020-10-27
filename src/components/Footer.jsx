import React from "react";
import { Link } from "react-router-dom";
import { Menu} from "semantic-ui-react";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links">
        <Link to="/join-us" className="footer-link">
            <Menu.Item name="join us" />
          </Link>
          <Link to="/order66" className="footer-link">
            <Menu.Item name="order66" />
          </Link>
          <Link to="/returns" className="footer-link">
            <Menu.Item name="returns of the jedi" />
          </Link>
          <Link to="/about-us" className="footer-link">
            <Menu.Item name="about us" />
          </Link>
          <Link to="/careers" className="footer-link">
            <Menu.Item name="careers" />
          </Link>
          <Link to="/policies" className="footer-link">
            <Menu.Item name="policies" />
          </Link>
        </div>
        
        <h3 className="follow-us">Follow Us: </h3>
        <div className="footer-social-icons">
          <a href="https://www.facebook.com/groups/748563438630077" target="_blank" className="social-icon" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://hu.pinterest.com/search/pins/?q=star%20wars&rs=typed&term_meta[]=star%7Ctyped&term_meta[]=wars%7Ctyped" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="https://www.instagram.com/starwarspg/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.snapchat.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-snapchat-ghost"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
