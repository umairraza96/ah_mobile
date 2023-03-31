import HTTP from '../../../common/http';
import {createAppAsyncThunk} from '../../types';
import {cartActions} from '../cart';
import {OrderResponseData, OrdersResponseData} from './order.types';

export const getAllOrders = createAppAsyncThunk(
  'orders/get',
  async (_, {rejectWithValue, getState}) => {
    try {
      const accessToken = getState().user.user?.access_token;
      const response = await HTTP<OrdersResponseData>({
        method: 'get',
        url: '/orders',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response) {
        return rejectWithValue('Something Went Wrong');
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Something Went Wrong');
    }
  },
);

interface ICreateOrder {
  address: string;
  phone_no: string;
  alt_phone?: string;
  total_price: number;
  order_items: {product_id: string; quantity: number; price: number}[];
}

export const createOrder = createAppAsyncThunk(
  'order/create',
  async (order: ICreateOrder, {getState, dispatch, rejectWithValue}) => {
    try {
      const accessToken = getState().user.user?.access_token;
      const response = await HTTP<OrderResponseData, ICreateOrder>({
        method: 'post',
        url: '/orders',
        data: order,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response) {
        return rejectWithValue('Something Went Wrong');
      }

      dispatch(cartActions.clearCart());

      return response.data;
    } catch (error) {
      console.log('error');
      console.log(error);
      return rejectWithValue('Something Went Wrong');
    }
  },
);
