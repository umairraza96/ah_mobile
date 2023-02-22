import {combineReducers} from '@reduxjs/toolkit';
import counter from '../features/cart';

const reducer = combineReducers({
  counter: counter,
});

export default reducer;
