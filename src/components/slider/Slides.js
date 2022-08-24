import React from 'react';
import './Slider.css';

const slidesInfo = [
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1661267925/prueba_c8jbbn.jpg',
        // 'https://res.cloudinary.com/dqh7edrn7/image/upload/v1653086366/Portfolio/TesloStore3_x53qqr.jpg',
        alt: 'TesloShop',
        titulo: 'TesloShop',
        desc: 'Simil Ecommerce basado en Tesla Shop ',
        url: 'https://teslo-shop-next-js.vercel.app/',
        tecnologies: 'Next - MaterialUI - Mongo',
        github: 'https://github.com/FededelRincon/teslo-shop-nextJs',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1661267925/prueba_c8jbbn.jpg',
        // 'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887869/Portfolio/buscadorPeliculas_small2_kixpjz.jpg',
        alt: 'BuscadorPeliculas',
        titulo: 'Buscador peliculas',
        desc: 'App de reseñas usando la API de AMDB',
        url: 'https://buscadorpeliculas-materialui-fdr.netlify.app/',
        tecnologies: 'React - MaterialUI',
        github: 'https://github.com/FededelRincon/BuscadorPeliculasReactMaterialUI',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1661267925/prueba_c8jbbn.jpg',
        // 'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652885878/Portfolio/musicHouse_small_a9rniw.jpg',
        alt: 'MusicHouse',
        titulo: 'MusicHouse',
        desc: 'Simil Ecommerce de tienda de musica',
        url: 'https://music-house-next.vercel.app/',
        tecnologies: 'Next - Strapi - Mongo',
        github: 'https://github.com/FededelRincon/music-house-next',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1661267925/prueba_c8jbbn.jpg',
        // 'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887675/Portfolio/buscar_imagenes_small2_zcqk3w.jpg',
        alt: 'BuscadorImagenes',
        titulo: 'Buscador Imagenes',
        desc: 'Simil Adobe Stock usando la Api de Pixabay',
        url: 'https://pixabay-react-fdr.netlify.app/',
        tecnologies: 'React - Bootswatch',
        github: 'https://github.com/FededelRincon/BuscadorImagenesPixabay-React',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1661267925/prueba_c8jbbn.jpg',
        // 'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652885878/Portfolio/BienesRaices_small_dddtyf.jpg',
        alt: 'BienesRaices',
        titulo: 'Bienes Raices',
        desc: 'Landing Page para una inmobiliaria',
        url: 'https://bienesraices-gatsby-fdr.netlify.app/',
        tecnologies: 'Gatsby - Strapi',
        github: 'https://github.com/FededelRincon/bienesRaices-strapi',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1661267925/prueba_c8jbbn.jpg',
        // 'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887061/Portfolio/citas_Small_ii3zq5.jpg',
        alt: 'MiCachorrito',
        titulo: 'Mi Cachorrito',
        desc: 'App de Crud para gestion de veternaria.',
        url: 'https://citasmascotas-react-fdr.netlify.app/',
        tecnologies: 'React - Tailwind',
        github: 'https://github.com/FededelRincon/citasMiCachorrito-react',
    },
    {
        src:
        'https://res.cloudinary.com/dqh7edrn7/image/upload/v1661267925/prueba_c8jbbn.jpg',
        // 'https://res.cloudinary.com/dqh7edrn7/image/upload/v1652887061/Portfolio/citas_Small_ii3zq5.jpg',
        alt: 'fdrMaps',
        titulo: 'Maps',
        desc: 'Clon de google Maps usando Mapbox',
        url: 'https://maps-fdr.netlify.app/',
        tecnologies: 'React - Bootstrap',
        github: 'https://github.com/FededelRincon/maps-vite-mapbox',
    },
    // agregar el de gifExpert
];

const slides = slidesInfo.map((slide) => {
    return (
        <div className="slide-container" >
            {/* <img src={slide.src} alt={slide.alt} />

            {/* titulo */}
            <div className="slide-titulo">
                <span>{slide.titulo}</span>
            </div>

            {/* descripcion */}
            <div className="slide-desc">
                <span>{slide.desc}</span>
            </div>
                
            {/* tecnologias */}
            <div className="slide-tecnologies">
                <span>{slide.tecnologies}</span>
            </div>
            
            {/* botones */}
            <div className='slide-buttons-container'>
                <a 
                    className='slide-buttons-link'
                    href={slide.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="far fa-eye slide-boton-card"></i>
                </a>
    
                <a 
                    className='slide-buttons-link'
                    href={slide.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github slide-boton-card "></i>
                </a>
            </div> */}
        </div>
    )
});

export default slides;
