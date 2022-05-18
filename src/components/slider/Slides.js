import React from 'react';
import './Slider.css';

const slidesInfo = [
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652885878/Portfolio/musicHouse_small_a9rniw.jpg',
        alt: 'MusicHouse',
        desc: 'MusicHouse - Ecommerce',
        url: 'https://music-house-next.vercel.app/',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887869/Portfolio/buscadorPeliculas_small2_kixpjz.jpg',
        alt: 'BuscadorPeliculas',
        desc: 'Buscador peliculas',
        url: 'https://buscadorpeliculas-materialui-fdr.netlify.app/',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887675/Portfolio/buscar_imagenes_small2_zcqk3w.jpg',
        alt: 'BuscadorImagenes',
        desc: 'Buscador imagenes',
        url: 'https://pixabay-react-fdr.netlify.app/',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652885878/Portfolio/BienesRaices_small_dddtyf.jpg',
        alt: 'BienesRaices',
        desc: 'Bienes Raices - LandingPage',
        url: 'https://bienesraices-gatsby-fdr.netlify.app/',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887061/Portfolio/citas_Small_ii3zq5.jpg',
        alt: 'Citas',
        desc: 'Citas - TodoApp',
        url: 'https://citasmascotas-react-fdr.netlify.app/',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652886856/Portfolio/TesloStore2_ssfdcn.jpg',
        alt: 'TesloShop',
        desc: 'TesloShop - Ecommerce',
        url: 'https://teslo-shop-next-js.vercel.app/',
    },
];

const slides = slidesInfo.map((slide) => {
    return (
        <div className="slide-container" >
            <a 
                href={slide.url}
                target="_blank"
                rel="noopener noreferrer"    
            >
                <img src={slide.src} alt={slide.desc} />
                
                <div className="slide-desc">
                    <span>{slide.desc}</span>
                </div>
                
            </a>
        </div>
    )
});

export default slides;
