import { getPhotos, searchUrl } from "../../url/Url";
import axios from "axios";

export const SearchImage = async (query) => {
    return await axios.get(searchUrl + query + `&client_id=${process.env.REACT_APP_ACCESS_KEY}`).then((response) => response.data.results)
};

export const GetALlImages = async () => {
    return await axios
        .get(getPhotos)
        .then((response) => response.data)
};