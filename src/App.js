//Core
import React from 'react';
//Styles
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// Redux
import { Provider } from 'react-redux';
import store from './store/srore';
//Components
import TabBar from './layout/TabBar';
import OrderForm from './components/OrderForm';
import OrderTable from './components/OrderTable';

function App() {
  const onAddOrder = order => {
    console.log(order);
  };

  return (
    <Provider store={store}>
      <div className="container">
        <div className="row">
          <TabBar />
          <div className="col-sm-12">
            <OrderForm onSubmit={onAddOrder} />
            <OrderTable />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
