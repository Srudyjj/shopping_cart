// Core
import React, { useEffect, useCallback } from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import { Table, Button } from 'reactstrap';
//Router
import { useHistory } from 'react-router-dom';
// Actions
import {
  getOrders,
  editOrder,
  toggleEditMode
} from '../store/actions/tableActions';

const OrderTable = props => {
  const history = useHistory();

  const { list, getOrders, editOrder, toggleEditMode } = props;

  const onEditClick = id => e => {
    editOrder(list.find(item => item.id === id));
    toggleEditMode(true);
    history.push(`/edit_order`);
  };

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
              <Button color="secondary" onClick={onEditClick(item.id)}>
                Ред.
              </Button>
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

export default connect(mapStateToProps, {
  getOrders,
  editOrder,
  toggleEditMode
})(OrderTable);
