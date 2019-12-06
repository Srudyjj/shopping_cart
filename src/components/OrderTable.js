import React from 'react';
import { Table } from 'reactstrap';
import TableRow from './TableRow';

const OrderTable = props => {
  console.log('TCL: OrderTable -> props', props);

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
        {props.list.map(item => (
          <TableRow key={item.id} item={item} />
        ))}
      </tbody>
    </Table>
  );
};

export default OrderTable;
