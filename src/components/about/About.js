import React, { useState } from "react";
import "./About.css";

const About = () => {

    const [readMore, setReadMore] = useState(true);

    const handleReadMore = () => {
        setReadMore(!readMore)
    }

    return (
        <div className="about-container">
            <div className="about-desc">
                {
                    readMore ? (
                        <>
                            {/* about se va a la derecha */}
                            <h3>{`< About Me >`}</h3>
                            <p>
                                I was a famaf student for 4 years, but i feel more a selt-taught developer, eager to keep on learning. 
                                I feel more comfortable in the front-end than the back-end, but I think I can contribute to both sides 
                                of the development process because I have some knowledge in both sides and i have a lot of desire to continue learning. 
                                I try to create innovative solutions with the goal of delivering seamless user experiences while maintaining high 
                                functionality and paying attention to passionate detail. 
                                I love organization and structure and therefore I place a great emphasis on making code clean, elegant and easy to read.
                                <span 
                                    className="about-link"
                                    onClick={ () => handleReadMore(false) } >
                                    {` Read more...`}
                                </span>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3>{`< About Me >`}</h3>
                            <p>
                                I was born and raised in Argentina. After i left famaf, the life led me to study the real estate broker career, but even though I got to graduate and work on it for a while, I knew from the beginning that it is not something I could see myself working on.
                                So when the pandemic strike us, my life slowed down and I stumbled upon some online courses and instantly decided I wanted to learn programming, but this time looking trying to get a real working opportunity. I took courses of many things like Python, HTML, CSS, JS, TS, to get to more challenging things like react, Next, Express, Mongo, among others.
                                I don't have any crazy passions or super-cool hobbies, but what makes me happiest are playing the guitar, a good book, a slice of pizza, travelling, and learn a new things.
                                <span 
                                    className="about-link"
                                    onClick={ () => handleReadMore(true) } >
                                    {` Go back...`}
                                </span>
                            </p>
                        </>
                    )
                }
                
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
                        className="button" 
                        type="submit" 
                        value="Download resume" 
                        onClick={ () => window.open('./prueba.pdf') }
                        target="_blank" />

                    <input 
                        onClick={ () => window.scroll({ top: 5000, behavior: 'smooth' }) }
                        className="button" 
                        type="submit" 
                        value="Contact Me" />
                </div>

            </div>


        </div>
    );
};

export default About;
