import React from "react";
import { motion } from "motion/react";

import { CarouselCards } from "./CarouselCards";
import { slidesInfo } from "../../data/data";
import { useLang } from "../../context/LanguageContext";

import "./Carousel.css";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export const CarouselComponent = () => {
    const { t } = useLang();

    return (
        <section className="projects" id="projects">
            <h3 className="Carousel-title">{t.projects.title}</h3>

            <motion.div
                className="projects-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                {slidesInfo.map((slide) => (
                    <CarouselCards key={slide.titulo} slide={slide} />
                ))}
            </motion.div>
        </section>
    );
};
