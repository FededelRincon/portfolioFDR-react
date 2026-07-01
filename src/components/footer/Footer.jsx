import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer" id="contact">

            <h3 className='footer-title'>{`< Contact >`}</h3>
                <div className="footer-contact">
                    <p className="form-text">
                        Whether you are interested in starting a project together, looking
                        for a developer to join your team, want to know more about me or
                        simply want to connect - let's talk. Reach out through LinkedIn or
                        GitHub:
                    </p>

                    <div className="social-links">
                        <a
                            href="https://www.linkedin.com/in/federico-del-rincon/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>

                        <a
                            href="https://github.com/FededelRincon"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <i className="fab fa-github"></i>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            <div className="design-by">Design by FDR</div>
        </footer>
    );
};

export default Footer;
