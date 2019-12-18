import action from '../actions/types';

const initialState = {
  list: [],
  isEditMode: false,
  initialFormState: {
    id: 0,
    email: '',
    name: '',
    surname: '',
    phone: '',
    position: '',
    type: 'Розница',
    provider: 'Поставщик 1',
    date: '',
    comment: ''
  }
};

const orderReducer = Object.freeze({
  [action.GET_ORDERS]: (state, payload) => {
    return { ...state, list: payload };
  },
  [action.ADD_ORDER]: (state, payload) => {
    return { ...state, list: [...state.list, payload] };
  },
  [action.EDIT_ORDER]: (state, payload) => {
    return { ...state, initialFormState: payload };
  },
  [action.EDIT_MODE]: (state, payload) => {
    return { ...state, isEditMode: payload };
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
