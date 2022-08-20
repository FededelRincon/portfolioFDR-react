import React from 'react';
import './Slider.css';

const slidesInfo = [
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1653086366/Portfolio/TesloStore3_x53qqr.jpg',
        alt: 'TesloShop',
        desc: 'TesloShop - Ecommerce',
        url: 'https://teslo-shop-next-js.vercel.app/',
        tecnologies: 'Next - Mui - Mongo',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887869/Portfolio/buscadorPeliculas_small2_kixpjz.jpg',
        alt: 'BuscadorPeliculas',
        desc: 'Buscador peliculas',
        url: 'https://buscadorpeliculas-materialui-fdr.netlify.app/',
        tecnologies: 'React - Mui',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652885878/Portfolio/musicHouse_small_a9rniw.jpg',
        alt: 'MusicHouse',
        desc: 'MusicHouse - Ecommerce',
        url: 'https://music-house-next.vercel.app/',
        tecnologies: 'Next - Strapi - Mongo',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887675/Portfolio/buscar_imagenes_small2_zcqk3w.jpg',
        alt: 'BuscadorImagenes',
        desc: 'Buscador imagenes',
        url: 'https://pixabay-react-fdr.netlify.app/',
        tecnologies: 'React - Bootswatch',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652885878/Portfolio/BienesRaices_small_dddtyf.jpg',
        alt: 'BienesRaices',
        desc: 'Bienes Raices - LandingPage',
        url: 'https://bienesraices-gatsby-fdr.netlify.app/',
        tecnologies: 'Gatsby - Strapi',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887061/Portfolio/citas_Small_ii3zq5.jpg',
        alt: 'MiCachorrito',
        desc: 'Mi cachorrito - Todo App',
        url: 'https://citasmascotas-react-fdr.netlify.app/',
        tecnologies: 'React - Tailwind',
    },
];

const slides = slidesInfo.map((slide) => {
    return (
        <div className="slide-container" >
            <a 
                className='link-decoration'
                href={slide.url}
                target="_blank"
                rel="noopener noreferrer"    
            >
                <img src={slide.src} alt={slide.desc} />

                <div className="slide-tecnologies">
                    <span>{slide.tecnologies}</span>
                </div>
                
                <div className="slide-desc">
                    <span>{slide.desc}</span>
                </div>
                
            </a>
        </div>
    )
});

export default slides;
