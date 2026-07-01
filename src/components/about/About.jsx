import React from "react";
import "./About.css";
import { useLang } from "../../context/LanguageContext";

const About = () => {
  const { t } = useLang();

  return (
    <div className="about-container" id="about">
      <div className="about-desc">
        <h3>{t.about.title}</h3>
        <p>{t.about.whoami}</p>
        {t.about.bio.map((par, i) => (
          <p key={i}>{par}</p>
        ))}
      </div>
      <div className="about-img">
        <img
          className="img-circular"
          src="https://res.cloudinary.com/dqh7edrn7/image/upload/v1782941648/yo-charla_gkac1i.png"
          alt="Federico del Rincón"
        />

        <p>
          <i className="location fas fa-map-marker-alt"></i> {t.about.location}
        </p>

        <div>
          <input
            className="button-about"
            type="submit"
            value={t.about.downloadCv}
            onClick={() =>
              window.open("./Federico-del-Rincon-cv-Fullstack.pdf")
            }
            target="_blank"
          />

          <input
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="button-about"
            type="submit"
            value={t.about.contact}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
