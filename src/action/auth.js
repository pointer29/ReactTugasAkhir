import axios from 'axios';

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LIST_MUSIC = 'LIST_MUSIC';
export const REGISTER_SUBMIT = 'REGISTER_SUBMIT';

export function loginOnRequest(data) {
  return {
    type: LOGIN_SUBMIT,
    data,
  };
}

export function RegisterOnRequest(data) {
  return {
    type: REGISTER_SUBMIT,
    data,
  };
}

export function ListMusicRequest(data) {
  return {
    type: LIST_MUSIC,
    data,
  };
}


export function postLogin(data) {
  return (dispatch) => {
    //   console.log('data', data)
    axios.post('http://18.223.162.119:3008/api/login', {email: data.username, password: data.password}).then(({data}) => {
        console.log('res', data)
        dispatch(loginOnRequest(data))
    });
  };
}

export function postRegister(data) {
  return (dispatch) => {
      console.log('data', data)
    axios.post('http://18.223.162.119:3008/api/users', {
      email: data.username, 
      password: data.password,
      jenis_kelamin:data.jenis_kelamin,
      ttl:data.ttl
    }).then(({data}) => {
        console.log('res', data)
        dispatch(RegisterOnRequest(data))
    });
  };
}

export function getMusic(data) {
  return (dispatch) => {
    //   console.log('data', data)
    axios.get('http://18.223.162.119:3000/album', {}).then(({data}) => {
        //console.log('res', data)
        dispatch(ListMusicRequest(data))
    });
  };
}
