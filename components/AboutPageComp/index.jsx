import { styled } from "@material-ui/core";
import React from "react";
import styles from "../../styles/AboutPageComp/AboutPageComp.module.css";

const AboutPageComp = () => {
  return (
    <div>
      <div className={styles.AboutPageComp}>
        <img src="/business-strategy.png" alt="" />
        <div className={styles.AboutPageCompContainer}>
          <h3>Наша миссия</h3>
          <p>
            Предварительные выводы неутешительны: сложившаяся структура
            организации создаёт предпосылки для новых принципов формирования
            материально-технической и кадровой базы. Идейные соображения высшего
            порядка, а также социально-экономическое развитие предполагает.
          </p>
        </div>
      </div>
      <div className={styles.aboutContainer2}>
        <div className={styles.AboutPageCompContainer2}>
          <h3>Наше видение</h3>
          <p>
            Высокий уровень вовлечения представителей целевой аудитории является
            четким доказательством простого факта: постоянное
            информационно-пропагандистское обеспечение нашей деятельности
            представляет собой интересный эксперимент проверки первоочередных
            требований.
          </p>
          <p>
            Современные технологии достигли такого уровня, что консультация с
            широким активом однозначно фиксирует необходимость экономической
            целесообразности принимаемых решений.
          </p>
        </div>
        <div className={styles.aboutImageContainer2}>
          <img src="/image1.png" alt="" />
          <img className={styles.img2} src="/image2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutPageComp;
