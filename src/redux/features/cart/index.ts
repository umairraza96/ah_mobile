import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../product/products.types';
import {CartItem} from './types';

interface ICartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

const initialState: ICartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const productIndex = state.items.findIndex(
        item => item.product.id === action.payload.id,
      );

      if (productIndex !== -1) {
        // Add Product Quantity
        state.items[productIndex].quantity++;
        state.totalItems++;
        state.totalPrice =
          state.totalPrice + state.items[productIndex].product.price;
      } else {
        // Add Product to the cart
        let newLength = state.items.push({
          product: action.payload,
          quantity: 1,
        });
        state.totalItems++;
        state.totalPrice =
          state.totalPrice + state.items[newLength - 1].product.price;
      }
    },

    removeFromCart: (state, action: PayloadAction<Product>) => {
      const productIndex = state.items.findIndex(
        item => item.product.id === action.payload.id,
      );

      if (productIndex === -1) return;

      if (state.items[productIndex].quantity === 1) {
        state.items.filter(item => item.product.id !== action.payload.id);
        state.totalPrice = state.totalPrice - action.payload.price;
        state.totalItems--;
      } else {
        state.items[productIndex].quantity--;
        state.totalPrice = state.totalPrice - action.payload.price;
        state.totalItems--;
      }
    },
  },
  extraReducers: builder => {},
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export default cartReducer;
