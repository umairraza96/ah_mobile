import {combineReducers} from '@reduxjs/toolkit';
import counterReducer from '../features/cart';
import categoryReducer from '../features/categoy';
import productReducer from '../features/product';
import userReducer from '../features/user';

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  product: productReducer,
  categories: categoryReducer,
});

export default reducer;
