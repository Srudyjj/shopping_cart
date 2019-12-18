//Core
import React from 'react';
//Styles
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// Redux
import { Provider } from 'react-redux';
import store from './store/store';
//Components
import TabBar from './layout/TabBar';
import OrderForm from './components/OrderForm';
import OrderTable from './components/OrderTable';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="row">
          <TabBar />
          <div className="col-sm-12">
            <OrderForm />
            <OrderTable />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
