import {combineReducers} from '@reduxjs/toolkit';
import counterReducer from '../features/cart';
import userReducer from '../features/user';

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default reducer;
