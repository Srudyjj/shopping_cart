//Core
import React, { useState, useEffect } from 'react';
//Styles
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//Components
import TabBar from './layout/TabBar';
import OrderForm from './components/OrderForm';
import OrderTable from './components/OrderTable';
//Apl
import api from './api/api';

function App() {
  const [state, setState] = useState({ orderList: [] });

  useEffect(() => {
    api.get('orders').then(res => setState({ orderList: res.data }));
  }, []);

  const onAddOrder = order => {
    console.log(order);
  };

  return (
    <div className="container">
      <div className="row">
        <TabBar />
        <div className="col-sm-12">
          <OrderForm onSubmit={onAddOrder} />
          <OrderTable list={state.orderList} />
        </div>
      </div>
    </div>
  );
}

export default App;
