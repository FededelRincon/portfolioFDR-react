import React from "react";
import "./Info.css";
import { technologies } from "../../data/technologies";

const Info = () => {
    // Oculta cualquier categoría que quede sin tecnologías
    const visible = technologies.filter((cat) => cat.items.length > 0);

    return (
        <div className="main-container">
            <h3 className="info-title">{`< Technologies >`}</h3>

            <div className="tech-container">
                {visible.map((cat) => (
                    <div className="tech-category" key={cat.category}>
                        <h3 className="tech-category-title">{cat.category}</h3>

                        <div className="tech-items">
                            {cat.items.map(({ name, Icon, color }) => (
                                <div className="tech-item" key={name}>
                                    {Icon && (
                                        <Icon
                                            className="tech-icon"
                                            style={{ color }}
                                            aria-hidden="true"
                                        />
                                    )}
                                    <span className="tech-name">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Info;
