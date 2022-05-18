import React from "react";
import "./Slider.css";

const slidesInfo = [
    {
        src:
        "https://res.cloudinary.com/dqh7edrn7/image/upload/v1652885878/Portfolio/musicHouse_small_a9rniw.jpg",
        alt: "Project 1",
        desc: "MusicHouse - Ecommerce",
    },
    {
        src:
        "https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887869/Portfolio/buscadorPeliculas_small2_kixpjz.jpg",
        alt: "Project 3",
        desc: "Buscador peliculas",
    },
    {
        src:
        "https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887675/Portfolio/buscar_imagenes_small2_zcqk3w.jpg",
        alt: "Project 4",
        desc: "Buscador imagenes",
    },
    {
        src:
        "https://res.cloudinary.com/dqh7edrn7/image/upload/v1652885878/Portfolio/BienesRaices_small_dddtyf.jpg",
        alt: "Project 5",
        desc: "Bienes raices - LandingPage",
    },
    {
        src:
        "https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887061/Portfolio/citas_Small_ii3zq5.jpg",
        alt: "Project 6",
        desc: "Citas - TodoApp",
    },
    {
        src:
        "https://res.cloudinary.com/dqh7edrn7/image/upload/v1652886856/Portfolio/TesloStore2_ssfdcn.jpg",
        alt: "Project 2",
        desc: "TesloShop - Ecommerce",
    },
];

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));

export default slides;
