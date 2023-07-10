import React from "react";
import "./SplashGrid.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function SplashGrid({ isLoading, page, fetchImages,query }) {
  const images = useSelector((state) => state.images.images)

  const handleScroll = () => {
    const isBottom =
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) >=
      document.documentElement.offsetHeight - 20;
    if (isBottom && !isLoading) {
      fetchImages()
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);

  return (
    <div>
      <div id="splashgrid">
        <div className="container">
          <ul className="grid">
            {images?.length ? images?.map((image) => {
              return (
                <li className="grid__item">
                  <img
                    className="grid__image"
                    src={image.urls.regular}
                    alt=""
                  />
                </li>
              )
            }) : ""}
          </ul>
        </div>
      </div>
      {isLoading && <div style={{marginBottom:"10px",width:'100%',display:'flex',justifyContent:'center'}}><div class="loader"></div></div>}
    </div>
  );
}
