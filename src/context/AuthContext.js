import React, {useReducer} from 'react';
import createDataContext from './createDataContext';
import api from '../api/api';

const initialState = {
  isLoading: true,
  email: '',
  userToken: '',
};
const loginReducer = (prevState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...prevState,
        email: '',
        userToken: '',
        isLoading: false,
      };
  }
};
const signIn = dispatch => {
  return async (email, pass) => {
    // const res = await fetch(
    //   'http://54.93.207.96/server/datagate.php?type=login',
    //   {
    //     method: 'POST',

    //     body: {
    //       email,
    //       pass,
    //     },
    //   },
    // );
    const res = await api.post('/datagate.php?type=login', {
      email,
      pass,
      v: 2.4,
    });
    console.log(res.data.token);
    console.log(typeof res.data);
    // let json = await res.json();
    // console.log(json);
    dispatch({type: 'LOGIN', token: '122'});
  };
};
const signUp = () => {
  console.log('hi');
};
const signOut = dispatch => {
  return () => {
    dispatch({type: 'LOGOUT'});
  };
};

export const {Context, Provider} = createDataContext(
  loginReducer,
  {signIn, signOut},
  initialState,
);
