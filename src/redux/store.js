import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './ImagesSlice';

const store = configureStore({
  reducer: rootReducer, // Pass the root reducer to configureStore
});

export default store;
