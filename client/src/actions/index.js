import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  return function (dispatch) {
    axios
      .get('/api/check-current-user')
      .then((res) => dispatch({ type: FETCH_USER, payload: res }));
  };
};
