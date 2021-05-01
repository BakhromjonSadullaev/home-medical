import styled from "../../styles/BrandsCarousel/BrandsCarousel.module.css";
import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { useMediaQuery } from "react-responsive";

const SponsorCarousel = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 1250px)",
  });
  const mobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  return (
    <div
      className="car"
      style={{
        backgroundColor: "#FBFBFB",
        padding: "4rem 0",
        width: "100%",
        margin: "auto",
      }}
    >
      <Carousel
        className={styled.check}
        style={{ width: "90%", margin: "auto" }}
        pagination={false}
        itemsToShow={mobile ? 1 : isTabletOrMobileDevice ? 2 : isTablet ? 4 : 7}
      >
        <img style={{ padding: "0 1rem" }} src="/planet.png" alt="" />
        <img src="/umbrella.png" alt="" />
        <img src="/Ingen.png" alt="" />
        <img src="/Stark.png" alt="" />
        <img src="/Capsule.png" alt="" />
        <img src="/umbrella.png" alt="" />
        <img src="/planet.png" alt="" />
        <img src="/Capsule.png" alt="" />
        <img src="/Capsule.png" alt="" />
        <img src="/Capsule.png" alt="" />
        <img src="/Capsule.png" alt="" />
      </Carousel>
    </div>
  );
};

export default SponsorCarousel;
