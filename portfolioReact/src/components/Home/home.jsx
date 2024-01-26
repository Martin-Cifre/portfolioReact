import React from "react";
import { getImgUrl } from "../../utils";
import styles from "./home.module.css";


export const Home = () => {
    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hola, soy Martin Cifre</h1>
          <p className={styles.description}>
            Soy un programador web Full-Stack con gran capacidad de aprendizaje.
            Mi objetivo es contribuir al éxito de proyectos digitales mediante
            el trabajo colaborativo y la constante adaptación a las tendencias
            tecnológicas emergentes.
          </p>
          <a href="mailto:martin.cifre@outlook.com" className={styles.contact}>
            Contactame
          </a>
        </div>
        <img
          src={getImgUrl("Home/homePfp.png")}
          alt="Imagen de perfil"
          className={styles.homeImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    );}