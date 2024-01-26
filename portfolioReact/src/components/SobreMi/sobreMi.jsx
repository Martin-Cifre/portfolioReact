import React from "react";
import { getImgUrl } from "../../utils";
import styles from "./sobreMi.module.css";

export const SobreMi = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.sobre}>Sobre Mi</h1>
        <img
          src={getImgUrl("SobreMi/pixarMe.png")}
          alt="ilustracion"
          className={styles.SobreImg}
        />
      </div>
      <div>
        <div className={styles.items}>
          <img
            src={getImgUrl("SobreMi/front.png")}
            alt="front"
            className={styles.itemsImg}
          />
          <div>
            <h3 className={styles.itemsTitle}>Front</h3>
            <p className={styles.itemsTxt}>
              Conocimientos en React capaz de crear sitios completamente responsive.
            </p>
          </div>
        </div>

        <div className={styles.items}>
          <img
            src={getImgUrl("SobreMi/back.png")}
            alt="back"
            className={styles.itemsImg}
          />
          <div>
            <h3 className={styles.itemsTitle}>Back</h3>
            <p className={styles.itemsTxt}>
              Tengo conocimientos en React, base de datos con mySQL y APIs.
            </p>
          </div>
        </div>

        <div className={styles.items}>
          <img
            src={getImgUrl("SobreMi/design.png")}
            alt="diseño"
            className={styles.itemsImg}
          />
          <div>
            <h3 className={styles.itemsTitle}>Diseño Grafico</h3>
            <p className={styles.itemsTxt}>
              Experiencia profesional en diseño grafico habiendo trabajado para
              Editorial Ivrea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
