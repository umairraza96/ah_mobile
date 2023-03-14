import axios, {AxiosError} from 'axios';
import {createAppAsyncThunk} from '../../types';

interface Credentials {
  email: string;
  password: string;
}

export const signIn = createAppAsyncThunk(
  'user/signIn',
  async (credentials: Credentials, {rejectWithValue}) => {
    try {
      console.log(credentials);
      const response: any = await axios.post(
        'http://192.168.100.27:4040/api/v1/auth/login',
        credentials,
      );

      console.log(response);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue('Something went wrong');
    }
  },
);
