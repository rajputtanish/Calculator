import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-col">
                    <h4>About Tanish Rajput</h4>
                    <div className="underline"></div>
                    <p>Artisan coffee roasters dedicated to quality, sustainability, and the perfect cup.</p>
                    <div className="social-links">
                        <a href="https://www.facebook.com" className='active' target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <div className="underline"></div>
                    <ul className="contact-info">
                        <li><i className="fas fa-map-marker-alt"></i>Rajput Vihar Colony, Dhampur, Bijnor</li>
                        <li><i className="fas fa-phone-alt"></i>+91 847 054 331</li>
                        <li><i className="fas fa-envelope"></i>hello@rajputtanish.com</li>
                        <li><i className="far fa-clock"></i>Mon-Sat 7am-6pm</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Tanish Rajput. All rights reserved.</p>
            </div>
        </footer >
    )
}
export default Footer;