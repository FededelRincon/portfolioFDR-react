import React, { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";
import { DemoCarousel } from "./components/demoCarousel/DemoCarousel";
import { Loading } from "./components/loading/Loading";


const Cover = lazy( () => import('./components/cover/Cover') );
const Navbar = lazy( () => import('./components/navbar/Navbar') );
const About = lazy( () => import('./components/about/About') );
const Slider = lazy( () => import('./components/slider/Slider') );
const Info = lazy( () => import('./components/info/Info') );
const Footer = lazy( () => import('./components/footer/Footer') );


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
                <Suspense fallback={ <Loading /> }>

                    <Navbar isScrolling={scrollHeight} />

                    <Cover />

                    <Info />

                    {/* <Slider /> */}

                    <DemoCarousel/>

                    <About />

                    <Footer />

                </Suspense>
            </div>
        </div>
    );
}

export default App;
