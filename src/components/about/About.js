import React, { useState } from "react";
import "./About.css";

const About = () => {

    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>{`< About Me >`}</h3>
                <p>Who am I?...</p>
                <p>
                    I'm Fede, a curious soul with a passion for exploration. Traveling and playing the guitar are my loves, 
                    but I also find joy in reading, savoring a good slice of pizza, and learning new things.
                    Originally from Argentina, I studied at Famaf for 4 years before embarking on a career in Real Estate. 
                    However, the pandemic prompted me to reassess my professional path. Taking online programming courses, 
                    I discovered my true passion and decided to pursue programming as a self-taught individual. I've since 
                    dived into various programming languages like Python, HTML, CSS, JS, TS, and frameworks like React, Angular
                    Express, and Mongo.
                    Always open to new challenges, I strive to grow as a programmer and embrace the ever-evolving tech world.
                    In short, I'm Fede, an adventurous self-learner, passionate about programming and driven to excel.
                </p>
                
            </div>
            <div className="about-img">
                <img
                    className="img-circular"
                    src="https://res.cloudinary.com/dqh7edrn7/image/upload/v1652927127/Portfolio/Yo_BN_omkcml.jpg"
                    alt="about"
                />

                <p><i className="location fas fa-map-marker-alt"></i> Cordoba, Argentina</p>

                <div >
                    <input 
                        className="button-about" 
                        type="submit" 
                        value="Download resume" 
                        onClick={ () => window.open('./FedericoDelRinconResume.pdf') }
                        target="_blank" />

                    <input 
                        onClick={ () => window.scroll({ top: 5000, behavior: 'smooth' }) }
                        className="button-about" 
                        type="submit" 
                        value="Contact Me" />
                </div>

            </div>


        </div>
    );
};

export default About;
