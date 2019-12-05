import React from 'react';
import { Table } from 'reactstrap';

const OrderTable = props => {
  return (
    <Table bordered responsive hover>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Имя</th>
          <th>ID</th>
          <th>Тип</th>
          <th>Заказчик</th>
          <th>Поставщик</th>
          <th>Выполнен</th>
          <th>Статус</th>
          <th>Редактировать</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>19.08.19</td>
          <td>Петя Петечкин</td>
          <td>5634634</td>
          <td>Розница</td>
          <td>Дима Иванов</td>
          <td>Поставщик 1</td>
          <td>-</td>
          <td>Статус</td>
          <td>Редю</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default OrderTable;
