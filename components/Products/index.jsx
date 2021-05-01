import React from "react";

import styled from "../../styles/Products/Products.module.css";

import { Carousel } from "react-responsive-carousel";
import { GrNext, GrPrevious } from "react-icons/gr";

const Products = () => {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    padding: "2rem 2rem 2rem 1rem",

    // width: 30,
    // height: 30,
    cursor: "pointer",
    outline: "none",
    border: "none",
    background:
      "linear-gradient(264.2deg, rgba(18, 158, 71, 0.2) 2.5%, rgba(16, 105, 171, 0.2) 101.82%)",
    fontSize: "25px",
  };

  const indicatorStyles = {
    background: "#DCDCDC",
    width: 35,
    height: 5,
    display: "inline-block",
    margin: "0 8px",
    cursor: "pointer",
  };
  return (
    <div>
      <div className={styled.head}>
        <h2>продукты</h2>
      </div>
      <div className={styled.brands}>
        <img src="/cannon.png" alt="" />
        <img src="/Product_logo.png" alt="" />
        <img src="/belomont.png" alt="" />
        <img src="/og_logo.png" alt="" />
        <img src="/IXM.png" alt="" />
      </div>
      <Carousel
        className={styled.productsCarousel}
        // autoPlay={true}
        showIndicators={false}
        interval={3000}
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                ...arrowStyles,
                left: 0,
                borderBottomRightRadius: "50%",
                borderTopRightRadius: "50%",
              }}
            >
              <GrPrevious />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                ...arrowStyles,
                right: 0,
                borderBottomLeftRadius: "50%",
                borderTopLeftRadius: "50%",
              }}
            >
              <GrNext />
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <>
                <li
                  style={{ ...indicatorStyles, background: "#129E47" }}
                  aria-label={`Selected: ${label} ${index + 1}`}
                  title={`Selected: ${label} ${index + 1}`}
                />
              </>
            );
          }
          return (
            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        <div className={styled.cannon}>
          <div className={styled.cannonContainer}>
            <div className={styled.choices}>
              <button>Computed Tomography</button>
              <button>Magnetic Resonance</button>
              <button>Ultrasound</button>
              <button>X-Ray</button>
            </div>
            <div>
              <img src="/cannon1.png" alt="" />
              <div className={styled.cannonText}>
                <h2>
                  Больше клинических возможностей Повышение продуктивности
                  Получение экономической
                </h2>
                <p>
                  Инновационная система Aquilion Prime SP — это аппарат КТ,
                  обеспечивающий олее быструю работу с пациентами, эффективное
                  сканирование сердца и новые возможности в диагностике.
                </p>
              </div>
              <div className={styled.cannonButtons}>
                <button>Cкачать PDF</button>
                <a style={{ color: "#129E47" }}>Узнать подробнее &gt; </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>slider 2</h2>
          {/* <img src="https://cdn.pixabay.com/photo/2019/02/15/11/04/book-3998252__340.jpg" /> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Products;
