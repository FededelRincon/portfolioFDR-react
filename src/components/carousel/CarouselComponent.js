import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { CarouselCards } from './CarouselCards';
import { slidesInfo } from '../../data/data';

import "./Carousel.css";



export const CarouselComponent = () => {
    return (
        <div className='carousel'>
            <Carousel 
                width={ window.innerWidth > 380 ? 400 : 340 }
                infiniteLoop={true}
                emulateTouch={true}
                autoPlay={true}
                interval={3000}
                renderArrowPrev={() => false}
                renderArrowNext={() => false}
                autoFocus={false}
                thumbWidth={80}
                showIndicators={false}
            >
                {
                    slidesInfo.map( (slide) => (
                        <div
                            key={slide.titulo}
                            className='card-container'
                        >
                            <img src={slide.src} alt={slide.alt} />
                            {/* <img src="https://res.cloudinary.com/dqh7edrn7/image/upload/v1661267925/prueba_c8jbbn.jpg" /> */}
                            <CarouselCards slide={slide} />

                        </div>
                    ))
                }
                
            </Carousel>
        </div>

    )
}
