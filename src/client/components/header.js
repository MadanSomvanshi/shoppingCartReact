import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import ShoppingCart from './svg';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Link to='/'>Home</Link>
        <Link to ='/offers'>Offers</Link>
        <Link to='/checkout'>Checkout</Link>
        <Link to='/checkout' className="cartWrapper">
          <ShoppingCart />
          <span className="count">{this.props.productCount}</span>
        </Link>
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

