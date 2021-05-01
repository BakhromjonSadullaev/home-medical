import React, { useState } from "react";
import Map from "../Map/index";
import styles from "../../styles/Contact/Contact.module.css";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.form}>
        <h3>Свяжись с нами</h3>
        <form>
          <div className={styles.name}>
            <label>Имя *</label>
            <input placeholder="Адам Джонсон" type="text" />
          </div>
          <div className={styles.name}>
            <label>Адрес электронной почты *</label>
            <input placeholder="hopemedical@gmail.com" type="email" />
          </div>
          <div className={styles.name}>
            <label>Сообщение *</label>
            <textarea
              placeholder="Сообщение"
              name="comment"
              rows="5"
            ></textarea>
          </div>
          <button>Отправить</button>
        </form>
      </div>
      <div className={styles.map}>
        <Map />
      </div>
    </div>
  );
};

export default Contact;
