import React, {useState} from "react";
import styles from "./navbar.module.css";
import { getImgUrl } from "../../utils.js";

export const Navbar = () => {
    return (
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          Martin Cifre
        </a>

        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={getImgUrl("nav/desplegable.png")}
            alt="boton menu"
          />
          <ul className={styles.menuItems}>
            <li>
              <a href="#sobremi">Sobre mi</a>
            </li>
            <li>
              <a href="#experiencia">Experiencia</a>
            </li>
            <li>
              <a href="#tecnologias">Tecnologias</a>
            </li>
            <li>
              <a href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    );
};
