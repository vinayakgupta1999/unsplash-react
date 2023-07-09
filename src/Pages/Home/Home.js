import React, {useEffect } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import SplashGrid from "../../components/SplashGrid/SplashGrid";
import { GetALlImages } from "../../components/api/api";
import { useDispatch } from "react-redux";
import { getImages } from "../../redux/ImagesSlice";


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const fetchImages = async () => {
    try {
      const data = await GetALlImages();
      console.log(data)
      dispatch(getImages(data))
    } catch (error) {
      console.log("Error fetching images:", error);
    }
  };
  return (
    <div id="home">
      <Header />
      <Main />
      <SplashGrid />
    </div>
  );
}
