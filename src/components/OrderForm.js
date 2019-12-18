//Core
import React from 'react';
// Redux
import { connect } from 'react-redux';
//Actions
import { addOrder } from '../store/actions/orderFormActions';
// Actions
import { toggleEditMode } from '../store/actions/tableActions';
//Components
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { orderStatus } from './orderFormStatus';
//Hooks
import useFormValidation from '../hooks/useFormValidation';
//Validators
import validator from '../validation/formValidator';
//Router
import { useHistory } from 'react-router-dom';

//

const OrderForm = props => {
  let history = useHistory();

  const { initialState, isEditMode, addOrder } = props;

  const onSubmit = values => {
    addOrder(values);
    toggleEditMode(false);
    history.push('/orders');
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    isValid,
    handleSubmit
  } = useFormValidation(initialState, validator, onSubmit);

  return (
    <Form onSubmit={handleSubmit}>
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
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && 'is-invalid'}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </FormGroup>
      <FormGroup>
        <Label for="nameInput">Имя</Label>
        <Input
          type="text"
          name="name"
          id="nameInput"
          placeholder="Ваше имя"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.name && 'is-invalid'}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </FormGroup>
      <FormGroup>
        <Label for="surnameInput">Фамилия</Label>
        <Input
          type="text"
          name="surname"
          id="surnameInput"
          placeholder="Вашa фамилия"
          value={values.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.surname && 'is-invalid'}
        />
        {errors.surname && (
          <div className="invalid-feedback">{errors.surname}</div>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="phoneInput">Телефон</Label>
        <Input
          type="tel"
          name="phone"
          id="phoneInput"
          placeholder="Ваш телефон"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.phone && 'is-invalid'}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
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
          value={values.position}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.position && 'is-invalid'}
        />
        {errors.position && (
          <div className="invalid-feedback">{errors.position}</div>
        )}
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
          value={values.type}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.type && 'is-invalid'}
        >
          <option>Опт</option>
          <option>Розница</option>
        </Input>
        {errors.type && <div className="invalid-feedback">{errors.type}</div>}
      </FormGroup>
      <FormGroup>
        <Label for="providerInput">Поставщий</Label>
        <Input
          type="select"
          name="provider"
          id="providerInput"
          value={values.provider}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.provider && 'is-invalid'}
        >
          <option>Поставщий 1</option>
          <option>Поставщий 2</option>
          <option>Поставщий 3</option>
        </Input>
        {errors.provider && (
          <div className="invalid-feedback">{errors.provider}</div>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="orderId">Ваш ID заказа</Label>
        <Input
          readOnly
          type="text"
          name="orderId"
          id="orderId"
          value={values.orderId}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormGroup>
      <FormGroup>
        <Label for="dateInput">Дата выполнения заказа</Label>
        <Input
          type="date"
          name="date"
          id="dateInput"
          placeholder="Дата заказа"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.date && 'is-invalid'}
        />
        {errors.date && <div className="invalid-feedback">{errors.date}</div>}
      </FormGroup>
      {isEditMode && (
        <FormGroup>
          <Label for="statusInput">Статус</Label>
          <Input
            type="select"
            name="status"
            id="statusInput"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            {Object.values(orderStatus).forEach(type => (
              <option>{type}</option>
            ))}
          </Input>
        </FormGroup>
      )}
      <FormGroup>
        <Label for="commentInput">Коментарий</Label>
        <Input
          type="textarea"
          name="comment"
          id="commentInput"
          placeholder="Ваш коментарий"
          value={values.comment}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormGroup>
      <div className="d-flex justify-content-center">
        <Button disabled={!isValid} type="submit" color="primary">
          Отправить
        </Button>
        <Button className="ml-3" outline color="secondary" type="reset">
          Сброс
        </Button>
      </div>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    initialState: state.orders.initialFormState,
    isEditMode: state.orders.isEditMode
  };
};

export default connect(mapStateToProps, { addOrder })(OrderForm);
