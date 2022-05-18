import React, { useState, useEffect } from "react";
import "./App.css";

import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";

function App() {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [scrollHeight]);

    return (
        <div className="App">
            {/* Navbar */}
            <Navbar isScrolling={scrollHeight} />
            {/* hay que hacer el linkedin !!!!!!!!!!!!!! */}

            {/* Portada: puede ser el video */}
            <Cover />
            {/* quizas ver de cambiar el video */}

            {/* Sobre mi / estudios */}
            <About />
            {/* necesita un lavado de cara, sobretodo la parte del readme */}

            {/* Carrousel */}
            <Slider />
            {/* creo que done */}

            {/* Tecnologias */}
            <Info />
            {/* Incompleto */}

            {/* Contacto */}
            <Footer />
            {/* creo q esta */}
        </div>
    );
}

export default App;
