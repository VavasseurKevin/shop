import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer
  // Add other reducers as needed
});

export default rootReducer;
