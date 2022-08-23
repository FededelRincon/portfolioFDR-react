import React from 'react';
import './Slider.css';

const slidesInfo = [
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1653086366/Portfolio/TesloStore3_x53qqr.jpg',
        alt: 'TesloShop',
        desc: 'TesloShop - Ecommerce',
        url: 'https://teslo-shop-next-js.vercel.app/',
        tecnologies: 'Next - MaterialUI - Mongo',
        github: 'https://github.com/FededelRincon/teslo-shop-nextJs',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887869/Portfolio/buscadorPeliculas_small2_kixpjz.jpg',
        alt: 'BuscadorPeliculas',
        desc: 'Buscador peliculas',
        url: 'https://buscadorpeliculas-materialui-fdr.netlify.app/',
        tecnologies: 'React - MaterialUI',
        github: 'https://github.com/FededelRincon/BuscadorPeliculasReactMaterialUI',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652885878/Portfolio/musicHouse_small_a9rniw.jpg',
        alt: 'MusicHouse',
        desc: 'MusicHouse - Ecommerce',
        url: 'https://music-house-next.vercel.app/',
        tecnologies: 'Next - Strapi - Mongo',
        github: 'https://github.com/FededelRincon/music-house-next',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887675/Portfolio/buscar_imagenes_small2_zcqk3w.jpg',
        alt: 'BuscadorImagenes',
        desc: 'Buscador imagenes',
        url: 'https://pixabay-react-fdr.netlify.app/',
        tecnologies: 'React - Bootswatch',
        github: 'https://github.com/FededelRincon/BuscadorImagenesPixabay-React',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652885878/Portfolio/BienesRaices_small_dddtyf.jpg',
        alt: 'BienesRaices',
        desc: 'Bienes Raices - LandingPage',
        url: 'https://bienesraices-gatsby-fdr.netlify.app/',
        tecnologies: 'Gatsby - Strapi',
        github: 'https://github.com/FededelRincon/bienesRaices-strapi',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887061/Portfolio/citas_Small_ii3zq5.jpg',
        alt: 'MiCachorrito',
        desc: 'Mi cachorrito - Todo App',
        url: 'https://citasmascotas-react-fdr.netlify.app/',
        tecnologies: 'React - Tailwind',
        github: 'https://github.com/FededelRincon/citasMiCachorrito-react',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887061/Portfolio/citas_Small_ii3zq5.jpg',
        alt: 'fdrMaps',
        desc: 'Maps - App de mapas',
        url: 'https://maps-fdr.netlify.app/',
        tecnologies: 'React - Bootstrap',
        github: 'https://github.com/FededelRincon/maps-vite-mapbox',
    },
    // agregar el de gifExpert
];

const slides = slidesInfo.map((slide) => {
    return (
        <div className="slide-container" >
            <img src={slide.src} alt={slide.desc} />

            <div className="slide-tecnologies">
                <span>{slide.tecnologies}</span>
            </div>
            
            <div className="slide-desc">
                <span>{slide.desc}</span>
            </div>
                
            <div className="slide-buttons-container">
                <a 
                    className="slide-button" 
                    href={slide.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >Demostracion</a>
                    
                <a 
                    className='slide-button' 
                    href={slide.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >Codigo</a>
            </div>
        </div>
    )
});

export default slides;
