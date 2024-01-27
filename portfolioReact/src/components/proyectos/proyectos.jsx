import React from "react";
import { getImgUrl } from "../../utils";
import projects from "../../data/projects.json";
//import styles from "./proyectos.module.css";

export const Proyectos = () => {
  return (
    <section>
      <h2>Proyectos</h2>
      <div>
        {projects.map((projects, id) => {
          return (
            <div key={id}>
              <img
                src={getImgUrl(projects.imgSrc)}
                alt={`imagen de ${projects.title}`}
              />
              <h3>{projects.title}</h3>
              <p>{projects.description} </p>
              <ul>
                {projects.skills.map((skill, id) => {
                  <li key={id}>{skill}</li>;
                })}
              </ul>

              <div>
                <a href={projects.link}>Link</a>
                <a href={projects.repositorio}>Repositorio</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
