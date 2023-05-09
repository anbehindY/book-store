import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryArray: [],
  status: 'Under construction',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.status) ;
    },
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
