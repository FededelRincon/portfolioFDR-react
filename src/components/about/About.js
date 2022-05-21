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
                            <h3>{`< About Me >`}</h3>
                            <p>
                                I was a Famaf student for 4 years, but if I have to describe myself, I feel more like a self-taught developer, always open to 
                                new challenges and willing to keep on learning. I feel more comfortable at the front-end than the back-end, although, I have 
                                both knowledge, so I can contribute to both sides of the development process. As I mentioned before, I am be glad to continue learning.
                                I put all my effort to create innovative solutions, focus on achieving the best user experiences, always thinking in a high 
                                functionality and paying attention to all detail. I love organization and structure when I work, so I place a great emphasis 
                                on making code clean, elegant, and easy to read. 
                                <span 
                                    className="about-link"
                                    onClick={ () => handleReadMore(false) } >
                                    {` Read more...`}
                                </span>
                            </p>
                            <p>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3>{`< About Me >`}</h3>
                            <p>
                                I was born and raised in Argentina. When I stopped my studies at Famaf, for different reasons of life, I started to study Real 
                                Estate Broker's career. I finished it and also I'd the opportunity to worked in this profession for a while, but I knew from 
                                the beginning that it was not for me. So when the pandemic strike us, my life slowed down, and I stumbled upon some online 
                                courses and instantly decided I wanted to learn to program, but this time looking for a real working opportunity. I took courses 
                                of different kinds of technologies like Python, HTML, CSS, JS, TS, and also take challenges studying react, Next, Express, Mongo, 
                                among others. I consider that I don't have any crazy passions or super cool hobbies, but if I have to describe what makes me 
                                happiest are playing guitar, reading a good book, eating a slice of pizza, traveling, and of course, learn new things.
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
                        onClick={ () => window.open('./FedericoDelRinconResume.pdf') }
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
