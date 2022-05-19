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
                                I am self-taught, but I feel more comfortable in the front-end than the back-end, but I think I can contribute to both sides of the development process because I have some knowledge in both sides and i have a lot of desire to continue learning. I create innovative solutions with the goal of delivering seamless user experiences while maintaining high functionality and paying attention to passionate detail. I love organization and structure and therefore. I place a great emphasis on making code clean, elegant and easy to read.
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
                                I was born and raised in Argentina. I was always a fan of technology, so much so that in 2009 I started my studies at Famaf where I studied for almost 4 years but for economic reasons and day to day I had to leave. Life led me to study the real estate broker career remotely, but even though I got to graduate and work on it for a while, I knew from the beginning that it is not something I could see myself working on.

                                So when the pandemic first hit and life slowed down I stumbled upon some online courses and instantly decided I wanted to learn programming but this time looking for a real working opportunity so I started with courses. . The first course was python, and then I went through HTML, CSS, JS to get to more challenging things like react, Next, Express, Mongo, among others.
                                I don't think I have great hobbies to share, although possibly learning things self-taught could be said to be my thing, to name a few things: playing the guitar, programming, driving, learning English, among others.
                                <span 
                                    className="about-link"
                                    onClick={ () => handleReadMore(true) } >
                                    {` Go back`}
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
            </div>
        </div>
    );
};

export default About;
