import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <div className="footer-container">
          <section className="footer-subscription">
            <p className="footer-subscription-heading">
            Join our newsletter to be the first to know 
            </p>
            <p className="footer-subscription-text">
            You can unsubscribe at any time
            </p>
            <div className="input-area">
                <form>
                    <input type="email" name="email" placeholder="Your email here" className="footer-input"/>
                </form>
            </div>
          </section>
          <div className="footer-links">
              <div className="footer-link-wrapper">
                  <div className="footer-link-items">
                      <h3>Information:</h3>
                      <Link to="/faq">FAQ</Link>
                      <Link to="/clients">Our clients</Link>
                      <Link to="/mission">Mission</Link>
                  </div>
              </div>
              <div className="footer-link-wrapper">
                  <div className="footer-link-items">
                      <h3>Information:</h3>
                      <Link to="/faq">FAQ</Link>
                      <Link to="/clients">Our clients</Link>
                      <Link to="/mission">Mission</Link>
                  </div>
              </div>
              <div className="footer-link-wrapper">
                  <div className="footer-link-items">
                      <h3>Information:</h3>
                      <Link to="/faq">FAQ</Link>
                      <Link to="/clients">Our clients</Link>
                      <Link to="/mission">Mission</Link>
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
                        <Link className="social-icon-link facevook"
                        to="/"
                        target="_blank"
                        aria-label= "Facebook">
                            <i class="fab fa-facebook"></i>
                        </Link>
                    </div>
                </div>
            </section>
      </div>
    )
}

export default Footer;