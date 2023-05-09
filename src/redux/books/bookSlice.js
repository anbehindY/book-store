import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArray: [],
};

const bookSlice = createSlice({
  name: 'allBooks',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksArray.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemID = action.payload;
      state.booksArray.filter((item) => item.id !== itemID);
    },
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
