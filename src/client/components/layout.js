import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import ShoppingItems from './shopping-items';
import Offers from './offers';
import CheckoutShopping from './checkout';

export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' component={ShoppingItems} />
          <Route path='/offers' component={Offers} />
          <Route path='/checkout' component={CheckoutShopping} />
        </Switch>
      </div>
    )
  }
}
