
import { LOGOUT_SUCCESS, LOGIN_SUBMIT,LIST_MUSIC,REGISTER_SUBMIT } from '../action/auth';

export function auth(state = {
  data: { isValid: false },
}, action) {
  //console.log('AUTH', action);
  switch (action.type) {
    case LOGIN_SUBMIT:
      console.log('AUTH-Logina', action);
      return Object.assign({}, state, {
        //isValid: true,
        data: action.data
        
      });
    case LIST_MUSIC:
          return Object.assign({}, state, {
            data: action.data,
          });
    default:
      return state;
  }
}

export function reducerRegister(state = {
   RegisterSuccess: false ,
}, action) {
  
  switch (action.type) {
    case REGISTER_SUBMIT:
      console.log('REGISTER_SUBMIT', action);
      return Object.assign({}, state, {
        RegisterSuccess: true,
        data: action.data,
      });
    default:
      return state;
  }
}

export function getTodos(state = {
  data: { isValid: false },
}, action) {

  console.log('LOGIN_SUBMIT2', action);
  switch (action.type) {
    case LOGIN_SUBMIT:
      return Object.assign({}, state, {
        data: action.data,
        
      });
    default:
      return state;
  }
}

export function logOut(state = {
  isLogout: false,
}, action) {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isLogout: action.isLogout,
      });
    default:
      return state;
  }
}
