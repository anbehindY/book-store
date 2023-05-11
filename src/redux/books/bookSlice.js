import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ahKLwWtKdReKXlOj4Dwm/books';
export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await axios.get(BOOKS_URL);
    return response.data;
  },
);

export const postBooks = createAsyncThunk(
  'books/postBooks',
  async (payload) => {
    const response = await axios.post(BOOKS_URL, payload);
    return response.data;
  },
);

export const deleteBooks = createAsyncThunk(
  'books/deleteBooks',
  async (payload) => {
    const response = await axios.delete(`${BOOKS_URL}/${payload}`);
    return response.data;
  },
);

const bookSlice = createSlice({
  name: 'allBooks',
  initialState: {
    booksArray: [],
    isLoading: false,
    error: undefined,
    added: '',
    deleted: '',
  },
  reducers: {
    addBook: (state, action) => {
      state.booksArray.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemID = action.payload;
      state.booksArray = state.booksArray.filter((item) => item.item_id !== itemID);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state) => {
        state.isLoading = false;
        state.booksArray = Object.values(getBooks).flat();
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
