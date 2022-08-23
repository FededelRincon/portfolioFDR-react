import React, { useState, useEffect, Suspense } from "react";
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
            <div>
                <Suspense fallback={<div>loading...</div>}>

                    <Navbar isScrolling={scrollHeight} />

                    <Cover />

                    <Info />

                    <Slider />

                    <About />

                    <Footer />

                </Suspense>
            </div>
        </div>
    );
}

export default App;
