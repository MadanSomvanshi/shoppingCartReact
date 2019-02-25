import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import ShoppingCart from './svg';
import ShoppingItem from './shopping-items';
import PropTypes from 'prop-types';
export default class Header extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = {
      productCount: this.props.productCount
    }
  }
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
              <span className="count">{this.props.productCount}</span>
            </NavLink>
          </NavItem>
        </Nav>
      </header>
    );
  }
}

Header.propTypes = {
  productCount: PropTypes.number,
}

Header.defaultProps = {
  productCount: 0,
}

