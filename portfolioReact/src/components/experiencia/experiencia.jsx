import React from "react";
import { getImgUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./experiencia.module.css";

export const Experiencia = () => {
  return (
    <section className={styles.container} id="experiencia">
      <h2 className={styles.title}>Experiencia</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div className={styles.skill} key={id}>
              <div className={styles.skillImgContainer}>
                <img src={getImgUrl(skill.imgSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImgUrl(historyItem.imgSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p
                    className={styles.historyItemDates}
                  >{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                  <p>{historyItem.experiences}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};


