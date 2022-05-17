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
                                Soy autodidacta, me siento mas comodo en la parte front-end, aunque creo 
                                poder aportar en ambos lados del desarrollo ya que cuento con un poco de 
                                conocimiento pero tambien con muchas ganas de seguir aprendiendo. Me apasiona 
                                crear soluciones innovadoras con el objetivo de brindar experiencias de usuario 
                                fluidas, manteniendo una alta funcionalidad y prestando atención a los detalles. 
                                Me encanta la organización y la estructura y, por lo tanto, pongo un gran énfasis 
                                en hacer un código limpio, elegante y de facil lectura. 
                                <a 
                                    className="about-link"
                                    onClick={ () => handleReadMore(false) } >
                                    {` Read more...`}
                                </a>
                            </p>
                        </>
                    ) : (
                        <p>
                            Nací y crecí en Argentina. Siempre fui un fan de la tecnologia en general, tanto asi 
                            que por el 2009 comence mis estudios en Famaf donde permaneci casi 4 años pero por motivos 
                            economicos y el dia a dia tuve que abandonar, la vida me llevo a estudiar la carrera de 
                            corredor inmobiliario a distancia, pero si bien llege a recibirme y trabajar de ello un tiempo 
                            supe desde el comienzo que no es algo en lo que podia verme trabajando.

                            Entonces, cuando la pandemia golpeó por primera vez y la vida se desaceleró, me topé con 
                            algunos cursos en línea y al instante me decidí que quería aprender a programar pero esta 
                            vez buscando una oportunidad real de trabajar de esto, por lo que comence con cursos, el 
                            primero fue python, y despues pase por HTML, CSS, JS para llegar a cosas mas desafiantes 
                            como react, Next, Express, Mongo, entre otros

                            No creo tener grandes pasatiempos para compartir, aunque posiblemente aprender cosas de 
                            forma autodidacta se podria decir q es lo mio, por nombrar algunas cosas: tocar la guitarra, 
                            programar, conducir, aprender ingles, entre otros.
                            <a 
                                className="about-link"
                                onClick={ () => handleReadMore(true) } >
                                {` Go back`}
                            </a>
                        </p>
                    )
                }
                
            </div>
            <div className="about-img">
                <img
                src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
                alt="about"
                />
            </div>
        </div>
    );
};

export default About;
