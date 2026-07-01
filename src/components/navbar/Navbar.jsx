import React from "react";
import "./Navbar.css";
import { useLang } from "../../context/LanguageContext";

const Navbar = ({ isScrolling }) => {
    const { lang, setLang, t } = useLang();

    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const scrollTo = (id) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-flex">
                <div className={`navbar-left ${isScrolling > 20 ? 'show' : 'notShow'}`} onClick={toTheTop}>
                    Federico del Rincon
                </div>

                <div className="navbar-center">
                    <div className="navbar-links">
                        <button type="button" className="navbar-link" onClick={() => scrollTo("about")}>
                            {t.nav.about}
                        </button>
                        <button type="button" className="navbar-link" onClick={() => scrollTo("projects")}>
                            {t.nav.projects}
                        </button>
                        <button type="button" className="navbar-link" onClick={() => scrollTo("tech")}>
                            {t.nav.tech}
                        </button>
                        <button type="button" className="navbar-link" onClick={() => scrollTo("contact")}>
                            {t.nav.contact}
                        </button>
                    </div>
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
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
