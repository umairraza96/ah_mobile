import axios, {AxiosError} from 'axios';
import HTTP from '../../../common/http';
import {createAppAsyncThunk} from '../../types';
import {User, UserResponseData} from './user.types';

interface Credentials {
  email: string;
  password: string;
}

interface RegisterForm {
  email: string;
  password: string;
  username: string;
  firstname: string;
  lastname: string;
}

export const signIn = createAppAsyncThunk(
  'user/signIn',
  async (credentials: Credentials, {rejectWithValue}) => {
    try {
      const response = await HTTP<UserResponseData, Credentials>({
        method: 'post',
        url: '/auth/signin',
        data: credentials,
      });
      if (!response) return rejectWithValue('Invalid Credentials');

      return response.data;
    } catch (error: any) {
      console.log(error.message);
      return rejectWithValue(error.message || 'Sign In Failed');
    }
  },
);

export const signUp = createAppAsyncThunk(
  'user/signUp',
  async (registerForm: RegisterForm, {rejectWithValue}) => {
    try {
      const response = await HTTP<UserResponseData, RegisterForm>({
        method: 'post',
        url: '/auth/signup',
        data: registerForm,
      });

      if (!response) return rejectWithValue('Registration failed');

      return response.data;
    } catch (error) {
      return rejectWithValue('Registeration failed');
    }
  },
);
