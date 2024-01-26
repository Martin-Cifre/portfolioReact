import React from "react";
import { getImgUrl } from "../../utils";
import styles from "./sobreMi.module.css";

export const SobreMi = () => {
  return (
    <section className={styles.container} id="sobremi">
      <h2 className={styles.title}>Sobre mi</h2>
      <div className={styles.content}>
        <img
          src={getImgUrl("SobreMi/pixarMe.png")}
          alt="Martin Cifre version Pixar"
          className={styles.SobreImg}
        />
        <ul className={styles.items}>
          <li className={styles.item}>
            <img
              src={getImgUrl("SobreMi/front.png")}
              alt="frontend"
              className={styles.itemsImg}
            />
            <div className={styles.itemsTxt}>
              <h3>Frontend</h3>
              <p>
                Conocimientos en React capaz de crear sitios completamente
                responsive.
              </p>
            </div>
          </li>

          <li className={styles.item}>
            <img
              src={getImgUrl("SobreMi/back.png")}
              alt="frontend"
              className={styles.itemsImg}
            />
            <div className={styles.itemsTxt}>
              <h3>Backend</h3>
              <p>
                Tengo conocimientos en Express, base de datos con mySQL y APIs.
              </p>
            </div>
          </li>

          <li className={styles.item}>
            <img
              src={getImgUrl("SobreMi/design.png")}
              alt="Diseño"
              className={styles.itemsImg}
            />
            <div>
              <h3>Diseño Grafico</h3>
              <p>
                Experiencia profesional en diseño grafico habiendo trabajado
                para Editorial Ivrea.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
