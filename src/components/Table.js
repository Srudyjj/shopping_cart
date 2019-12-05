import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Table = props => {
  return (
    <Form>
      <div class="shadow-sm">
        <h3>Заказчик</h3>
      </div>
      <FormGroup>
        <Label for="emailInput">Email</Label>
        <Input
          type="email"
          name="email"
          id="emailInput"
          placeholder="Ваш имейл"
        />
      </FormGroup>
      <FormGroup>
        <Label for="nameInput">Имя</Label>
        <Input type="text" name="name" id="nameInput" placeholder="Ваше имя" />
      </FormGroup>
      <FormGroup>
        <Label for="surnameInput">Фамилия</Label>
        <Input
          type="text"
          name="surname"
          id="surnameInput"
          placeholder="Вашa фамилия"
        />
      </FormGroup>
      <FormGroup>
        <Label for="phoneInput">Телефон</Label>
        <Input
          type="tel"
          name="phone"
          id="phoneInput"
          placeholder="Ваш телефон"
        />
      </FormGroup>
      <div class="shadow-sm">
        <h3>Заказ</h3>
      </div>
      <FormGroup>
        <Label for="positionInput">Позиция</Label>
        <Input
          type="text"
          name="position"
          id="positionInput"
          placeholder="Шариковые ручки"
        />
        <div className="pt-3">
          <Button outline color="secondary">
            Добавить позицию
          </Button>
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="typeInput">Тип</Label>
        <Input type="select" name="type" id="typeInput">
          <option>Опт</option>
          <option>Розница</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="providerInput">Поставщий</Label>
        <Input type="select" name="provider" id="providerInput">
          <option>Поставщий 1</option>
          <option>Поставщий 2</option>
          <option>Поставщий 3</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="orderId">Ваш ID заказа</Label>
        <Input disabled type="text" name="orderId" id="orderId" />
      </FormGroup>
      <FormGroup>
        <Label for="dateInput">Дата выполнения заказа</Label>
        <Input
          type="date"
          name="dateInput"
          id="dateInput"
          placeholder="Дата заказа"
        />
      </FormGroup>
      <FormGroup>
        <Label for="commentInput">Коментарий</Label>
        <Input
          type="textarea"
          name="commentInput"
          id="commentInput"
          placeholder="Ваш коментарий"
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

export default Table;
