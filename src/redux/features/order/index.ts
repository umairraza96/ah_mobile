import {createSlice} from '@reduxjs/toolkit';
import {createOrder, getAllOrders} from './order.thunk';
import {Order} from './order.types';

interface IOrderState {
  orders: Order[];
  pending: boolean;
  error: null | string;
}

const initialState: IOrderState = {
  orders: [],
  pending: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllOrders.pending, state => {
      state.pending = true;
    });

    builder.addCase(getAllOrders.fulfilled, (state, action) => {
      state.pending = false;
      state.orders = action.payload;
    });

    builder.addCase(getAllOrders.rejected, (state, action) => {
      state.pending = false;
      state.error = action.payload || 'Something Went Wrong';
    });

    builder.addCase(createOrder.pending, (state, action) => {
      state.pending = true;
    });

    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.pending = false;
      state.orders.push(action.payload);
    });

    builder.addCase(createOrder.rejected, (state, action) => {
      state.pending = false;
      state.error = action.payload || 'Something Went Wrong';
    });
  },
});

export const orderActions = orderSlice.actions;
export const orderReducer = orderSlice.reducer;

export default orderReducer;
