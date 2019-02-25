import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import ShoppingCart from './svg';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/offers">Offers</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/checkout">Checkout</NavLink>
          </NavItem>
          <NavItem className="cartWrapper">
            <NavLink href="#">
              <ShoppingCart />
              <span className="count">1</span>
            </NavLink>
          </NavItem>
        </Nav>
      </header>
    );
  }
}
