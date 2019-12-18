//Core
import React, { useState } from 'react';
//Components
import { Nav, NavItem, NavLink } from 'reactstrap';
//Helpers
import classnames from 'classnames';
//Router
import { Link } from 'react-router-dom';

const TabBar = props => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <Nav tabs justified>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  toggle('1');
                }}
              >
                <Link to="/">Приветствие</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggle('2');
                }}
              >
                <Link to="/orders">Заказы</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => {
                  toggle('3');
                }}
              >
                <Link to="/new_order">Новый заказ</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
