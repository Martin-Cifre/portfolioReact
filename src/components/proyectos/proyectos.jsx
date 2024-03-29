import React from "react";
import { getImgUrl } from "../../utils";
import projects from "../../data/projects.json";
import styles from "./proyectos.module.css";

export const Proyectos = () => {
  return (
    <section className={styles.container} id="proyectos">
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.projects}>
        {projects.map((projects, id) => {
          return (
            <div className={styles.cardContainer} key={id}>
              <img
                className={styles.img}
                src={getImgUrl(projects.imgSrc)}
                alt={`imagen de ${projects.title}`}
              />
              <h3 className={styles.cardTitle}>{projects.title}</h3>
              <p className={styles.description}>{projects.description} </p>
              <ul className={styles.skills}>
                {projects.skills.map((skill, id) => {
                  return (
                    <li className={styles.skill} key={id}>
                      {skill}
                    </li>
                  );
                })}
              </ul>

              <div className={styles.links}>
                <a
                  className={styles.link}
                  href={projects.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={getImgUrl("contacto/link.png")} alt="link" />
                  Link
                </a>
                <a className={styles.link} href={projects.repositorio}>
                  <img src={getImgUrl("contacto/github.png")} alt="github" />
                  Repositorio
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
