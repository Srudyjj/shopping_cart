import action from './types';
import api from '../../api/api';

export function getOrders() {
  return async function(dispatch) {
    const res = await api.get('orders');
    dispatch({
      type: action.GET_ORDERS,
      payload: res.data
    });
  };
}
