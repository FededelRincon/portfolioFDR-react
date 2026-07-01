import React from "react";
import "./Footer.css";
import { useLang } from "../../context/LanguageContext";

const Footer = () => {
    const { t } = useLang();

    return (
        <footer className="footer" id="contact">

            <h3 className='footer-title'>{t.footer.title}</h3>
                <div className="footer-contact">
                    <p className="form-text">{t.footer.text}</p>

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
            <div className="design-by">{t.footer.design}</div>
        </footer>
    );
};

export default Footer;
