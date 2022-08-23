import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            {/* <div className="footer-info">
                <h1>Federico del Rincon</h1>
                <p>Cordoba - Argentina</p>
            </div> */}
                <div className="footer-contact">
                    <div className="footer-form">
                        <p className="form-text">
                            Whether you are interested in starting a project together, looking
                            for a junior developer to join your team, need a website, want to
                            know more about me or simply want to connect - feel free to reach
                            out via email
                            <a href="mailto:delrincon@gmail.com" className="email-color"> delrincon@gmail.com </a>
                            or here directly:
                        </p>
                        <form action="https://formsubmit.co/e3965af50f27da9c17c16785397a2033" method="POST">
                            <div>
                                <input className="field" type="text" placeholder="Name" name="fullName" required />
                            </div>
                            <div>
                                <input className="field" type="email" placeholder="Email" name="email" required />
                            </div>
                            <div>
                                <input className="field" type="subject" placeholder="Subject" name="subject" required />
                            </div>
                            <div>
                                <textarea className="field" cols="20" rows="5" placeholder="Your message..." name="description"></textarea>
                            </div>
                            <div >
                                <input className="button" type="submit" value="Send Message" />

                            </div>
                        </form>
                    </div>

                </div>
            <div className="design-by">Design by FDR</div>
        </footer>
    );
};

export default Footer;
