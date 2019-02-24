import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import ShoppingCart from './svg';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Nav>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Offers</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Checkout</NavLink>
          </NavItem>
          <NavItem className="cartWrapper">
            <NavLink href="#">
              <ShoppingCart />
              <span class="count">1</span>
            </NavLink>
          </NavItem>
        </Nav>
      </header>
    );
  }
}
