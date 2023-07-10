import { combineReducers, createSlice } from '@reduxjs/toolkit';
const initialState = {
  // Define your initial state here
  images: '',
};

const imageSlice = createSlice({
  name: 'Images',
  initialState,
  reducers: {
    searchImages: (state, action) => {
      state.images = [...state.images,...action.payload];
    },
    getImages: (state, action) => {
        state.images = [...state.images,...action.payload];
      },
  },
});

export const { searchImages ,getImages} = imageSlice.actions; // Export the action creator

const rootReducer = combineReducers({
    images: imageSlice.reducer,
  });
  
  export default rootReducer;
