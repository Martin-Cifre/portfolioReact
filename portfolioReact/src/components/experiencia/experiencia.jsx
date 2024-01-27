import React from "react";
import { getImgUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
//import styles from "./experiencia.module.css";

export const Experiencia = () => {
  return (
    <section id="experiencia">
      <h2>Experiencia</h2>
      <div>
        <div>
          {skills.map((skill, id) => (
            <div key={id}>
              <div>
                <img src={getImgUrl(skill.imgSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
              <ul>
                  {
                      history.map((historyItem, id) => {
                          return (
                            <li key={id}>
                              <img
                                src={getImgUrl(historyItem.imgSrc)}
                                alt={`${historyItem.organisation} Logo`}
                              />
                              <div>
                                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                                <p>
                                  {historyItem.experiences}
                                </p>
                              </div>
                            </li>
                          );
                      })
                  }
        </ul>
      </div>
    </section>
  );
};


