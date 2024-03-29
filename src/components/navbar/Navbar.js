import React from "react";
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
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
                    <a href="https://www.linkedin.com/in/federico-del-rincon/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin boton-navbar"></i>
                    </a>
                    <a href="https://github.com/FededelRincon" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github boton-navbar"></i>
                    </a>
                    <a href="https://www.instagram.com/fede_dr21/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram boton-navbar"></i>
                    </a>
                    <a href="https://www.facebook.com/federico.delrincon/" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook facebook boton-navbar"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
