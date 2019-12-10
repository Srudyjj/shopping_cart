import React, { useReducer } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const TYPE = {
  EMAIL: 'EMAIL',
  NAME: 'NAME',
  SURNAME: 'SURNAME',
  PHONE: 'PHONE',
  POSITION: 'POSITION',
  TYPE: 'TYPE',
  PROVIDER: 'PROVIDER',
  ORDERID: 'ORDERID',
  DATE: 'DATE',
  COMMENT: 'COMMENT'
};

const initialState = {
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
};

const OrderForm = props => {
  const { onSubmit } = props;

  const formReducer = (state, action) => {
    const reducers = {
      [TYPE.EMAIL]: (state, payload) => {
        return { ...state, email: payload };
      },
      [TYPE.NAME]: (state, payload) => {
        return { ...state, name: payload };
      },
      [TYPE.SURNAME]: (state, payload) => {
        return { ...state, surname: payload };
      },
      [TYPE.PHONE]: (state, payload) => {
        return { ...state, phone: payload };
      },
      [TYPE.POSITION]: (state, payload) => {
        return { ...state, position: payload };
      },
      [TYPE.TYPE]: (state, payload) => {
        return { ...state, type: payload };
      },
      [TYPE.PROVIDER]: (state, payload) => {
        return { ...state, provider: payload };
      },
      [TYPE.ORDERID]: (state, payload) => {
        return { ...state, orderId: payload };
      },
      [TYPE.DATE]: (state, payload) => {
        return { ...state, date: payload };
      },
      [TYPE.COMMENT]: (state, payload) => {
        return { ...state, comment: payload };
      }
    };

    return reducers[action.type](state, action.payload);
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const internalOnSubmit = e => {
    e.preventDefault();
    onSubmit(state);
  };

  const emailChange = e => {
    dispatch({ type: TYPE.EMAIL, payload: e.target.value });
  };

  const nameChange = e => {
    dispatch({ type: TYPE.NAME, payload: e.target.value });
  };

  const surnameChange = e => {
    dispatch({ type: TYPE.SURNAME, payload: e.target.value });
  };

  const phoneChange = e => {
    dispatch({ type: TYPE.PHONE, payload: e.target.value });
  };

  const positionChange = e => {
    dispatch({ type: TYPE.POSITION, payload: e.target.value });
  };

  const typeChange = e => {
    dispatch({ type: TYPE.TYPE, payload: e.target.value });
  };

  const providerChange = e => {
    dispatch({ type: TYPE.PROVIDER, payload: e.target.value });
  };

  const idChange = e => {
    dispatch({ type: TYPE.ORDERID, payload: e.target.value });
  };

  const dateChange = e => {
    dispatch({ type: TYPE.DATE, payload: e.target.value });
  };

  const commentChange = e => {
    dispatch({ type: TYPE.COMMENT, payload: e.target.value });
  };

  return (
    <Form onSubmit={internalOnSubmit}>
      <div className="shadow-sm">
        <h3>Заказчик</h3>
      </div>
      <FormGroup>
        <Label for="emailInput">Email</Label>
        <Input
          type="email"
          name="email"
          id="emailInput"
          placeholder="Ваш имейл"
          value={state.email}
          onChange={emailChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="nameInput">Имя</Label>
        <Input
          type="text"
          name="name"
          id="nameInput"
          placeholder="Ваше имя"
          value={state.name}
          onChange={nameChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="surnameInput">Фамилия</Label>
        <Input
          type="text"
          name="surname"
          id="surnameInput"
          placeholder="Вашa фамилия"
          value={state.surname}
          onChange={surnameChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="phoneInput">Телефон</Label>
        <Input
          type="tel"
          name="phone"
          id="phoneInput"
          placeholder="Ваш телефон"
          value={state.phone}
          onChange={phoneChange}
        />
      </FormGroup>
      <div className="shadow-sm">
        <h3>Заказ</h3>
      </div>
      <FormGroup>
        <Label for="positionInput">Позиция</Label>
        <Input
          type="text"
          name="position"
          id="positionInput"
          placeholder="Шариковые ручки"
          value={state.position}
          onChange={positionChange}
        />
        <div className="pt-3">
          <Button outline color="secondary">
            Добавить позицию
          </Button>
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="typeInput">Тип</Label>
        <Input
          type="select"
          name="type"
          id="typeInput"
          value={state.type}
          onChange={typeChange}
        >
          <option>Опт</option>
          <option>Розница</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="providerInput">Поставщий</Label>
        <Input
          type="select"
          name="provider"
          id="providerInput"
          value={state.provider}
          onChange={providerChange}
        >
          <option>Поставщий 1</option>
          <option>Поставщий 2</option>
          <option>Поставщий 3</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="orderId">Ваш ID заказа</Label>
        <Input
          disabled
          type="text"
          name="orderId"
          id="orderId"
          value={state.orderId}
          onChange={idChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="dateInput">Дата выполнения заказа</Label>
        <Input
          type="date"
          name="dateInput"
          id="dateInput"
          placeholder="Дата заказа"
          value={state.date}
          onChange={dateChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="commentInput">Коментарий</Label>
        <Input
          type="textarea"
          name="commentInput"
          id="commentInput"
          placeholder="Ваш коментарий"
          value={state.comment}
          onChange={commentChange}
        />
      </FormGroup>
      <div className="d-flex justify-content-center">
        <Button color="primary">Отправить</Button>
        <Button className="ml-3" outline color="secondary" type="reset">
          Сброс
        </Button>
      </div>
    </Form>
  );
};

export default OrderForm;
