import React, { useRef } from "react";
import styles from "../../styles/PageStyles/AboutPage.module.css";

import { AiOutlineHome } from "react-icons/ai";
import AboutPageComp from "../../components/AboutPageComp";

import Contact from "../../components/Contact/index";

const About = () => {
  const ref = useRef();
  console.log(ref);
  return (
    <div ref={ref}>
      <div className={styles.aboutPage}>
        <div className={styles.aboutPageRouter}>
          <AiOutlineHome />
          <p>&gt;</p>
          <p>О компании</p>
        </div>
        <AboutPageComp />
      </div>
      <Contact />
    </div>
  );
};

export default About;
