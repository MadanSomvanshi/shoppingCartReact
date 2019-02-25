import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';
import ShoppingItems from './shopping-items';
import Offers from './offers';
import CheckoutShopping from './checkout';
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter basename='/'>
          <Switch>
            <Route exact path='/' component={ShoppingItems} />
            <Route path='/offers' component={Offers} />
            <Route path='/checkout' component={CheckoutShopping} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
