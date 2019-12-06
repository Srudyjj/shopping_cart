import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import classnames from 'classnames';

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
                Приветствие
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggle('2');
                }}
              >
                Заказы
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => {
                  toggle('3');
                }}
              >
                Новый заказ
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
