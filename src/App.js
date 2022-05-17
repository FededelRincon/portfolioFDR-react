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

            {/* Portada: puede ser el video o  */}
            <Cover />

            {/* Sobre mi / estudios */}
            <About />

            {/* Carrousel */}
            <Slider />

            {/* Tecnologias */}
            <Info />

            {/* Contacto */}
            <Footer />
        </div>
    );
}

export default App;
