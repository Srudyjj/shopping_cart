// Core
import React, { useEffect, useCallback } from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';

// Actions
import { getOrders } from '../store/actions/tableActions';

const OrderTable = props => {
  console.log('TCL: OrderTable -> props', props);

  const { list, getOrders } = props;

  const loadOrders = useCallback(() => {
    getOrders();
  }, [getOrders]);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

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
        {list.map(item => (
          <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.name}</td>
            <td>{item.id}</td>
            <td>{item.type}</td>
            <td>{item.customer}</td>
            <td>{item.provider}</td>
            <td>{item.resolved}</td>
            <td>{item.status}</td>
            <td>
              <Button color="secondary">Ред.</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const mapStateToProps = state => {
  return {
    list: state.orders.list
  };
};

export default connect(mapStateToProps, { getOrders })(OrderTable);
