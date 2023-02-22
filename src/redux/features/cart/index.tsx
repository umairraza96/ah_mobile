import {createSlice} from '@reduxjs/toolkit';
import {CounterState} from './types';

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const ccounterActions = counterSlice.actions;
export default counterSlice.reducer;
