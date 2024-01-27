import React from "react";
import { getImgUrl } from "../../utils";
import styles from "./home.module.css";


export const Home = () => {
    return (
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hola, soy Martin</h1>
          <p className={styles.description}>
            Desarrollador Full-Stack apasionado por impulsar el éxito de
            proyectos digitales mediante esfuerzos colaborativos y curioso por
            aprender las últimas tendencias tecnológicas.
          </p>
          <a href="mailto:martin.cifre@outlook.com" className={styles.contact}>
            Contáctame
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