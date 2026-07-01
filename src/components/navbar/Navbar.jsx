import React from "react";
import "./Navbar.css";
import { useLang } from "../../context/LanguageContext";

const Navbar = ({ isScrolling }) => {
    const { lang, setLang } = useLang();

    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-flex">
                <div className={`navbar-left ${isScrolling > 20 ? 'show' : 'notShow'}`} onClick={toTheTop}>
                    Federico del Rincon
                </div>

                <div className="navbar-right">
                    <div className="lang-toggle" role="group" aria-label="Idioma / Language">
                        <button
                            type="button"
                            className={`lang-btn ${lang === "es" ? "lang-active" : ""}`}
                            onClick={() => setLang("es")}
                            aria-pressed={lang === "es"}
                        >
                            ES
                        </button>
                        <button
                            type="button"
                            className={`lang-btn ${lang === "en" ? "lang-active" : ""}`}
                            onClick={() => setLang("en")}
                            aria-pressed={lang === "en"}
                        >
                            EN
                        </button>
                    </div>

                    <a href="https://www.linkedin.com/in/federico-del-rincon/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin boton-navbar"></i>
                    </a>
                    <a href="https://github.com/FededelRincon" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github boton-navbar"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
