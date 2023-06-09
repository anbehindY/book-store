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

const initialState = {
  booksArray: [],
  isLoading: false,
  error: undefined,
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
      state.booksArray = state.booksArray.filter((item) => item.item_id !== itemID);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.booksArray = Object.entries(payload).flatMap(([key, value]) => value.map((item) => ({
          ...item,
          item_id: key,
          title: item.title,
          author: item.author,
        })));
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.booksArray.push(action.payload);
      })
      .addCase(postBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBooks.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
