import action from './types';
import api from '../../api/api';

export function addOrder(data) {
  return async function(dispatch) {
    const res = await api.post('orders', data);
    dispatch({
      type: action.ADD_ORDER,
      payload: res.data
    });
  };
}
