import React, { useRef, useState } from "react";
import "./SplashGrid.scss";
import useIntersectionObserver from "../../hooks/userIntersectionObserver";
import { useSelector } from "react-redux";

export default function SplashGrid() {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = useRef();
  const images = useSelector((state) => state.images.images)

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    },
  });

  return (
    <section id="splashgrid" ref={ref}>
      <div className="container">
        <ul className="grid">
          {images ? (
            images.map((image) => (
              <li className="grid__item">
                {isVisible && (
                  <img
                    className="grid__image"
                    src={image.urls.regular}
                    alt=""
                  />
                )}
              </li>
            ))
          ) : (
            <h2>Loading</h2>
          )}
        </ul>
      </div>
    </section>
  );
}
