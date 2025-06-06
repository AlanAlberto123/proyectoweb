import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './funciones/posts/postsSlice';

export const store = configureStore({
  reducer: { posts: postsReducer },
});