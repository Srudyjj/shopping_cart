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
import Welcome from './layout/Welcome';
import OrderForm from './components/OrderForm';
import OrderTable from './components/OrderTable';
import NoMatch from './layout/NoMatch';
//Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="container">
          <div className="row">
            <TabBar />
            <div className="col-sm-12">
              <Switch>
                <Route path="/" exact>
                  <Welcome />
                </Route>
                <Route path="/new_order" exact>
                  <OrderForm />
                </Route>
                <Route path="/orders" exact>
                  <OrderTable />
                </Route>
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
