//Core
import React from 'react';
//Components
import { Nav, NavItem, NavLink } from 'reactstrap';
//Helpers
import classnames from 'classnames';
//Router
import { Link, useLocation } from 'react-router-dom';

const TabBar = props => {
  let location = useLocation();

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <Nav tabs justified>
            <NavItem>
              <NavLink
                tag="span"
                className={classnames({ active: location.pathname === '/' })}
              >
                <Link to="/">Приветствие</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag="span"
                className={classnames({
                  active: location.pathname === '/orders'
                })}
              >
                <Link to="/orders">Заказы</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag="span"
                className={classnames({
                  active: location.pathname === '/new_order'
                })}
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
