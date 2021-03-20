// import React from 'react';
import './Footer.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <div className="footer-container">
          <section className="footer-subscription">
            <p className="footer-subscription-heading">
            SIGN UP FOR OUR NEWSLETTER 
            </p>
            <p className="footer-subscription-text">
            You can unsubscribe at any time.
            </p>
            <div className="input-area">
                <form>
                    <input type="email" name="email" placeholder="*Email Address" className="footer-input"/>
                </form>
                <Button buttonStyle="btn-outline" type="submit">Subscribe</Button>
            </div>
          </section>
          <div className="footer-links">
              <div className="footer-link-wrapper">
                  <div className="footer-link-items">
                      <h3>Customer services</h3>
                      <Link to="/help">Help</Link>
                      <Link to="/faq">FAQ</Link>
                      <Link to="/covid">COVID 19 Updates</Link>
                      <Link to="/cookies">Cookies Policy</Link>
                  </div>
              </div>
              <div className="footer-link-wrapper">
                  <div className="footer-link-items">
                      <h3>About Us</h3>
                      <Link to="/story">Our story</Link>
                      <Link to="/contact">Contact Us</Link>
                      <Link to="/stores">Find A Store</Link>
                      <Link to="/careers">Careers</Link>
                  </div>
              </div>
              <div className="footer-link-wrapper">
                  <div className="footer-link-items">
                      <h3>New Products</h3>
                      <Link to="/faq">--</Link>
                      <Link to="/clients">--</Link>
                      <Link to="/mission">--</Link>
                  </div>
              </div>
          </div>
            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            Casa de Aurora&reg;
                        </Link>
                    </div>
                    <small className="website-rights">
                         &copy; 2021 Casa de Aurora - All Rights Reserved
                    </small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label= "Facebook">
                            <i className="fab fa-facebook" />
                        </Link>
                        <a className="social-icon-link instagram"
                        target="_blank"
                        rel="noopener noreferrer" 
                        href="https://www.instagram.com/casa.de.aurora/?hl=bg"
                        aria-label= "Instagram">
                             <i className="fab fa-instagram" />
                        </a>
                        <a className="social-icon-link youtube"
                        target="_blank"
                        rel="noopener noreferrer" 
                        href="https://www.youtube.com/watch?v=na-CylyaJb0"
                        aria-label= "Youtube">
                             <i className="fab fa-youtube" />
                        </a>
                        {/* <Link className="social-icon-link youtube"
                        to="/"
                        target="_blank"
                        aria-label= "Youtube">
                            <i className="fab fa-youtube" />
                        </Link> */}
                        <Link className="social-icon-link linkedin"
                        to="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label= "Linkedin">
                            <i className="fab fa-linkedin" />
                        </Link>
                        <a className="social-icon-link github"
                        target="_blank"
                        rel="noopener noreferrer" 
                        href="https://github.com/lyudmila-ilieva/react-project"
                        aria-label= "Github">
                             <i className="fab fa-github" />
                        </a>
                        {/* <Link className="social-icon-link github"
                        to="/"
                        target="_blank"
                        aria-label= "Github">
                            <i className="fab fa-github" />
                        </Link> */}
                    </div>
                </div>
            </section>
      </div>
    )
}

export default Footer;