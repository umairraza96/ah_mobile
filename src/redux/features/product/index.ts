import {createSlice} from '@reduxjs/toolkit';
import {findLastValidBreakpoint} from 'native-base/lib/typescript/theme/tools';
import {products} from '../../../data';
import {convertArrayToIdMap} from '../../../utils';
import {getProducts} from './products.thunk';
import {Product} from './products.types';

interface IProductState {
  products: Product[];
  productsMap: Record<string, Product>;
  pending: boolean;
  error: string | null;
}

const initialState: IProductState = {
  products: [],
  productsMap: {},
  pending: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProducts.pending, state => {
      state.pending = true;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.pending = false;
      state.products = action.payload;
      state.productsMap = convertArrayToIdMap(action.payload);
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.pending = false;
      state.error = action.payload || 'Something Went Wrong';
    });
  },
});

export const productsActions = productSlice.actions;
export const productReducer = productSlice.reducer;
export default productReducer;
