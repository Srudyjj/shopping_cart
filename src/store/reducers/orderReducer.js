import action from '../actions/types';

const initialState = {
  list: [],
  initialFormState: {
    id: 0,
    email: '',
    name: '',
    surname: '',
    phone: '',
    position: '',
    type: '',
    provider: '',
    orderId: '',
    date: '',
    comment: ''
  }
};

const orderReducer = Object.freeze({
  [action.GET_ORDERS]: (state, payload) => {
    return { ...state, list: payload };
  },
  [action.ADD_ORDER]: (state, payload) => {
    console.log('TCL: payload', payload);

    return { ...state, list: [...state.list, payload] };
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
