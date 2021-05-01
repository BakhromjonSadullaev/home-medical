import React from "react";

import { GrNext, GrPrevious } from "react-icons/gr";
import { FaQuoteLeft } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import styles from "../../styles/Testimonials/Testimonials.module.css";
const Testimonials = () => {
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
    <div className={styles.testimonials}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "1rem",
          padding: "4rem",
          textTransform: "uppercase",
          fontWeight: "600",
        }}
      >
        отзывы
      </h2>
      <Carousel
        // autoPlay={true}
        showIndicators={true}
        interval={3000}
        showArrows={false}
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
        <div className={styles.testimonial}>
          <div className={styles.commentContainer}>
            <img src="/profile_user_1.png" alt="" />
            <div className={styles.comment}>
              <FaQuoteLeft
                style={{
                  color: "#BBBBC2",
                  fontSize: "21px",
                  marginBottom: "10px",
                }}
              />
              <p>
                Обширный ряд интегрированных приложений обеспечивает легкое и
                быстрое внедрение последних КТ-технологий в вашу клиническую
                практику. Система Aquilion Prime SP может автоматизировать
                сложные исследования, предоставляя высококачественные данные.
              </p>
              <h4>Joe Bloggs</h4>
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.commentContainer}>
            <img src="/profile_user_1.png" alt="" />
            <div className={styles.comment}>
              <FaQuoteLeft
                style={{
                  color: "#BBBBC2",
                  fontSize: "21px",
                  marginBottom: "10px",
                }}
              />
              <p>
                Обширный ряд интегрированных приложений обеспечивает легкое и
                быстрое внедрение последних КТ-технологий в вашу клиническую
                практику. Система Aquilion Prime SP может автоматизировать
                сложные исследования, предоставляя высококачественные данные.
              </p>
              <h4>ALex Mond</h4>
            </div>
          </div>
        </div>
        <div>slide3</div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
