import React from 'react'

export const CarouselCards = ({slide}) => {
    return (
        <>
            {/* <div className="legend"> */}
            <div>
                <h3 className='slide-titulo'>{slide.titulo}</h3>
                <div className='slide-desc'>{slide.desc}</div>
                <div className='slide-tecnologies'>{slide.tecnologies}</div>

                <div className='slide-buttons-link'>
                    <a href={slide.url} target="_blank" rel="noopener noreferrer" >
                        <i className="far fa-eye slide-boton-card"></i>
                    </a>
        
                    <a href={slide.github} target="_blank" rel="noopener noreferrer" >
                        <i className="fab fa-github slide-boton-card "></i>
                    </a>

                </div>
            </div>
        </>
    )
}
