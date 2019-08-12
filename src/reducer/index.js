import { combineReducers } from 'redux';
import { auth, logOut,reducerRegister } from './auth';

export default combineReducers({
  auth,
  logOut,
  reducerRegister,
});
