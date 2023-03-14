import {createSlice} from '@reduxjs/toolkit';
import {signIn} from './user.thunk';

interface IUserState {
  user: Object;
  pending: boolean;
  error: string | null;
}

const initialState: IUserState = {
  user: {},
  pending: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signIn.pending, (state, action) => {
      state.pending = true;
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      console.log(action.payload);
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
