import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useLang } from "../../context/LanguageContext";

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

// Cuánto se inclina la card (en grados) al mover el mouse
const TILT = 10;

export const CarouselCards = ({ slide }) => {
    const { lang, t } = useLang();

    // Posición del mouse dentro de la card (0..1)
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // Suavizado del movimiento
    const springConfig = { stiffness: 150, damping: 15 };
    const rotateX = useSpring(
        useTransform(mouseY, [0, 1], [TILT, -TILT]),
        springConfig
    );
    const rotateY = useSpring(
        useTransform(mouseX, [0, 1], [-TILT, TILT]),
        springConfig
    );

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    return (
        <motion.article
            className="project-card"
            variants={cardVariants}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            whileHover={{ scale: 1.03 }}
        >
            <div className="project-image">
                <img src={slide.src} alt={slide.alt} loading="lazy" />
            </div>

            <div className="project-body">
                <h3 className="slide-titulo">{slide.titulo}</h3>
                <div className="slide-desc">
                    {typeof slide.desc === "string" ? slide.desc : slide.desc[lang]}
                </div>
                <div className="slide-tecnologies">{slide.tecnologies}</div>

                <div className="slide-buttons-link">
                    {slide.url && (
                        <a
                            href={slide.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver demo de ${slide.titulo}`}
                        >
                            <i className="far fa-eye slide-boton-card"></i>
                            <span>{t.projects.demo}</span>
                        </a>
                    )}

                    {slide.github && (
                        <a
                            href={slide.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver código de ${slide.titulo} en GitHub`}
                        >
                            <i className="fab fa-github slide-boton-card"></i>
                            <span>{t.projects.code}</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
};
