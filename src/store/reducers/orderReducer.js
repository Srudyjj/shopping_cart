import action from '../actions/types';

const initialState = {
  list: []
};

const orderReducer = Object.freeze({
  [action.GET_ORDERS]: (state, payload) => {
    return { ...state, list: payload };
  }
});

export default function reducer(state = initialState, action) {
  if (orderReducer[action.type]) {
    return orderReducer[action.type](state, action.payload);
  } else {
    console.error(`Action ${action.type} not found!`);
  }
  return state;
}
