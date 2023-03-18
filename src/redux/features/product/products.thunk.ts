import HTTP from '../../../common/http';
import {createAppAsyncThunk} from '../../types';
import {ProductsResponseData} from './products.types';

export const getProducts = createAppAsyncThunk(
  'products/get',
  async (_, {rejectWithValue}) => {
    try {
      const response = await HTTP<ProductsResponseData>({
        method: 'get',
        url: '/products',
      });

      if (!response) {
        return rejectWithValue('Products fetch failed');
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Products fetch failed');
    }
  },
);
