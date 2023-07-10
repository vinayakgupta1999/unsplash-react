import React, {  useState } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import SplashGrid from "../../components/SplashGrid/SplashGrid";
import { GetALlImages, SearchImage } from "../../components/api/api";
import { useDispatch } from "react-redux";
import { getImages, searchImages } from "../../redux/ImagesSlice";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1)

  const fetchImages = async () => {
    setIsLoading(true)
    if (query) {
      try {
        const data = await SearchImage(query, page);
        if (data) {
          setPage(page + 1);
          dispatch(searchImages(data))
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Error fetching images:", error);
        setIsLoading(false);
      }
    } else {
      try {
        const data = await GetALlImages(page);
        if (data) {
          setPage(page + 1);
          dispatch(getImages(data));
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Error fetching images:", error);
        setIsLoading(false);
      }
    }
  };


  return (
    <div id="home">
      <Header />
      <Main page={page} setPage={setPage} query={query} setQuery={setQuery} fetchImages={() => fetchImages()} />
      <SplashGrid fetchImages={() => fetchImages()} isLoading={isLoading} setIsLoading={setIsLoading} page={page} query={query} />
    </div>
  );
}
