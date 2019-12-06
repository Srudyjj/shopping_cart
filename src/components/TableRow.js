import React from 'react';
import { Button } from 'reactstrap';

const TableRow = props => {
  const {
    customer,
    date,
    id,
    name,
    provider,
    resolved,
    status,
    type
  } = props.item;
  return (
    <tr>
      <td>{customer}</td>
      <td>{date}</td>
      <td>{id}</td>
      <td>{name}</td>
      <td>{provider}</td>
      <td>{resolved}</td>
      <td>{status}</td>
      <td>{type}</td>
      <td>
        <Button color="secondary">Ред.</Button>
      </td>
    </tr>
  );
};

export default TableRow;
