import { configureStore } from '@testing-library/react';
import bookReducer from './books/bookSlice';
import categoryReducer from './category/categorySlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});

export default store;
