export const searchUrl = `${process.env.REACT_APP_BASE_URL}/search/photos?per_page=50&query=`;
export const getPhotos = `https://api.unsplash.com/photos/random/?count=50&client_id=${process.env.REACT_APP_ACCESS_KEY}`;