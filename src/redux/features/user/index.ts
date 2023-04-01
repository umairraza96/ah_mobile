import {createSlice} from '@reduxjs/toolkit';
import {signIn, signUp} from './user.thunk';
import {User} from './user.types';

interface IUserState {
  user: User | null;
  pending: boolean;
  error: string | null;
}

const initialState: IUserState = {
  user: null,
  pending: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signOut: state => {
      state.user = null;
      state.pending = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(signUp.pending, (state, action) => {
      state.pending = true;
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.pending = false;
      state.user = action.payload;
    });

    builder.addCase(signUp.rejected, (state, action) => {
      state.pending = false;
      state.error = action.payload || 'Something went wrong';
    });

    builder.addCase(signIn.pending, (state, action) => {
      state.pending = true;
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.pending = false;
      state.user = action.payload;
    });

    builder.addCase(signIn.rejected, (state, action) => {
      state.pending = false;
      state.error = action.payload || 'Something went wrong';
    });
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
