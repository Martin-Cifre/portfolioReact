import React from "react";
import { getImgUrl } from "../../utils";
import styles from "./contacto.module.css";

export const Contacto = () => {
  return (
    <footer id="contacto" className={styles.container}>
      <div className={styles.text}>
        <h2>Contacto</h2>
        <p>¡Hablemos de futuros proyectos!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            className={styles.img}
            src={getImgUrl("contacto/mail.png")}
            alt="icono de mail"
          />
          <a href="mailto:martin.cifre@outlook.com">martin.cifre@outlook.com</a>
        </li>

        <li className={styles.link}>
          <img
            className={styles.img}
            src={getImgUrl("contacto/linkedin.png")}
            alt="icono de linkedin"
          />
          <a href="https://www.linkedin.com/in/martin-rodriguez-cifre/">
            LinkedIn
          </a>
        </li>

        <li className={styles.link}>
          <img
            className={styles.img}
            src={getImgUrl("contacto/github.png")}
            alt="icono de github"
          />
          <a href="https://github.com/Martin-Cifre">Github</a>
        </li>
      </ul>
    </footer>
  );
};


