import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import ShoppingItems from './shopping-items';
import Header from './header';
import Offers from './offers';
import CheckoutShopping from './checkout';
import staticItems from './items';
export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalProductCount: 0
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }


  addItem(event) {
    this.setState({
      totalProductCount: this.state.totalProductCount + 1,
    })

    //Insert into Json
    let fetchId = event.currentTarget.parentElement.parentElement.id;
    let fetchItems = staticItems;

    _.map(fetchItems.productList, item => {
      if (item.productId == fetchId) {
        item.count++;
        if (item.count > 0)
          localStorage.setItem(item.productId, JSON.stringify(item));
      }
    })
  }

  removeItem(event) {
    this.setState({
      totalProductCount: this.state.totalProductCount - 1
    })

    //Remove from Json
    let fetchId = event.currentTarget.parentElement.parentElement.id;
    let fetchItems = staticItems;
    _.map(fetchItems.productList, item => {
      if (item.productId == fetchId) {
        if (item.count > 0) {
          item.count--;
          localStorage.setItem(item.productId, JSON.stringify(item));
        }
        if (item.count == 0)
          localStorage.removeItem(item.productId);
      }
    })
  }


  render() {
    return (
      <div className="container">
        <Header productCount={this.state.totalProductCount}/>
        <Switch>
          <Route 
            exact 
            path='/' 
            render = {(props) => <ShoppingItems addItem={this.addItem} removeItem={this.removeItem} />}
            
          />
          <Route path='/offers' component={Offers} />
          <Route path='/checkout' component={CheckoutShopping} />
        </Switch>
      </div>
    )
  }
}
