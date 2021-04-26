import React from "react";
import Head from "next/head";
import Header from "../components/Header/index";
import HomeCarousel from "../components/Carousel/index.js";
import Advantage from "../components/Advantage/index";

import styles from "../styles/Home.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function Home() {
  return (
    <div className={styles.homePage}>
      <HomeCarousel />
      <Advantage />
    </div>
  );
}

export default Home;
