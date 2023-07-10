import { getPhotos, searchUrl } from "../../url/Url";
import axios from "axios";

export const SearchImage = async (query,page) => {
    return await axios.get(searchUrl(page) + query + `&client_id=${process.env.REACT_APP_ACCESS_KEY}`).then((response) => response.data.results)
};

export const GetALlImages = async (page) => {
    return await axios
        .get(getPhotos(page))
        .then((response) => response.data)
};