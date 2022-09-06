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
                            I was a Famaf student for 4 years, but if I had to describe myself as a 
                            developer, I would say I am more self-taught, always open to new challenges, 
                            receptive and versatile. Although I feel more comfortable at the front-end 
                            than the back-end, I am always eager to keep on learning  so I can contribute 
                            to both sides of the development process. I specialize in creating innovative 
                            solutions and achieving the best user experience by always seeking functionality 
                            and paying close attention to detail. I have strong organizational and planning 
                            skills, therefore I place a great emphasis on making code clean, elegant, and 
                            easy to read.
                                <br></br>
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
                            I was born and raised in Argentina. After studying at Famaf for 4 years, 
                            I decided to pursue a career in Real Estate. However, I soon realized I 
                            was not passionate about it, so when the pandemic broke out, I had time 
                            to reflect upon my professional goals. I took some online programming 
                            courses and I instantly decided I wanted to become a programmer, but this 
                            time, focusing on real job opportunities. I have since then taken courses 
                            on several programming topics like Python, HTML, CSS, JS, TS, React, 
                            Express and Mongo, and especially challenging frameworks, such as Next 
                            and React-Native. As regards my passions and hobbies, I absolutely love 
                            traveling and playing the guitar, but I also enjoy simple things, 
                            like reading an interesting book, eating a good slice of pizza, 
                            and of course, learning new things.
                                <br></br>
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
