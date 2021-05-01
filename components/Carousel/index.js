import React from "react";
import styled from "../../styles/carousel/Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GrNext, GrPrevious } from "react-icons/gr";
import { StylesProvider } from "@material-ui/styles";

const HomeCarousel = () => {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
    outline: "none",
    border: "none",
    background: "none",
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
    <Carousel
      className={styled.carousel}
      // autoPlay={true}
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
            style={{ ...arrowStyles, left: 15 }}
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
            style={{ ...arrowStyles, right: 15 }}
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
      <div className={styled.item1}>
        <div className={styled.item1Container}>
          <div className={styled.item1Text}>
            <img className={styled.imgProp1} src="/cannon.png" alt="" />
            <h2>Ультраспиральная КТ с 80 рядами детекторов</h2>
            <p>
              Инновационная система Aquilion Prime SP — это аппарат КТ,
              обеспечивающий более быструю работу с пациентами, эффективное
              сканирование сердца и новые возможности в диагностике.
            </p>
            <button>Узнать подробнее</button>
          </div>
          <div className={styled.imgHolder1}>
            <img className={styled.imgProp1} src="/Image.png" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" />
      </div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2019/02/15/11/04/book-3998252__340.jpg" />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
