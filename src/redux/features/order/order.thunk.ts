import HTTP from '../../../common/http';
import {createAppAsyncThunk} from '../../types';
import {OrdersResponseData} from './order.types';

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
