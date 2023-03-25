import {createSlice} from '@reduxjs/toolkit';
import {getCategories} from './category.thunk';
import {Category} from './category.types';

interface ICategoryState {
  categories: Category[];
  pending: boolean;
  error: string | null;
}

const initialState: ICategoryState = {
  categories: [],
  pending: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCategories.pending, state => {
      state.pending = true;
    });

    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.pending = false;
      state.categories = action.payload;
    });

    builder.addCase(getCategories.rejected, (state, action) => {
      state.pending = false;
      state.error = action.payload || 'Something went wrong';
    });
  },
});

export const categoryActions = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
export default categoryReducer;
