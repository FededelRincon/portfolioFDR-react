import React from "react";
import "@brainhubeu/react-carousel/lib/style.css";

import Carousel from "@brainhubeu/react-carousel";
import Slides from "./Slides";

import "./Slider.css";

const Slider = () => {

    return (
        <div className="carousel-background">
            <div className="carousel-title">
                <h2>My Projects</h2>
            </div>

            <div className="carousel-container">
                <Carousel
                    draggable
                    arrows
                    slidesPerPage={3}
                    infinite
                    animationSpeed={200}
                    centered
                    offset={30}
                    itemWidth={380}
                    // itemWidth={ window.innerWidth < 960 ? 400 : 960 }   // el 1ero para celu, 2do para pc
                    slides={Slides}
                    // breakpoints={{
                    //     960: {
                    //     slidesPerPage: 1,
                    //     arrows: false,
                    //     itemWidth: 250,
                    //     },
                    // }}
                />

            </div>
        </div>
    );
};

export default Slider;
