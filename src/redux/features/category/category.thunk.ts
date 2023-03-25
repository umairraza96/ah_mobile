import HTTP from '../../../common/http';
import {createAppAsyncThunk} from '../../types';
import {CatgoriesResponseData} from './category.types';

export const getCategories = createAppAsyncThunk(
  'categories/get',
  async (_, {rejectWithValue}) => {
    try {
      const response = await HTTP<CatgoriesResponseData>({
        method: 'get',
        url: '/categories',
      });
      if (!response) {
        return rejectWithValue('No Categories Found');
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Something Went Wrong');
    }
  },
);
