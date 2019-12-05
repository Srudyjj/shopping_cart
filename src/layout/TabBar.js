import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';

import Table from '../components/Table'

import classnames from 'classnames';

const TabBar = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <Nav tabs justified>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                Приветствие
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                Заказы
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => { toggle('3'); }}
              >
                Новый заказ
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <h4>Приветствие</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Заказы</h4>
              </Col>
            </Row>
            </TabPane>
            <TabPane tabId="3">
            <Row>
              <Col sm="12">
              <Table/>
              </Col>
            </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </div>
  );
}

export default TabBar;