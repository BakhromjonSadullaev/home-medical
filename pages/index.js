import React from "react";
import Head from "next/head";
import Header from "../components/Header/index";
import HomeCarousel from "../components/Carousel/index.js";
import Advantage from "../components/Advantage/index";
import Products from "../components/Products/index";
import SponsorCarousel from "../components/SponsorCarousel/index";
import Podkluch from "../components/Podkluch";
import styles from "../styles/Home.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import VideoCarousel from "../components/VideoCarousel";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className={styles.homePage}>
      <HomeCarousel />
      <Advantage />
      <Products />
      <SponsorCarousel />
      <Podkluch />
      {/* <VideoCarousel /> */}
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
