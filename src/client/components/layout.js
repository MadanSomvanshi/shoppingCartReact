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
    this.fetchItems=[];
    this.count=0;
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }


  addItem(event) {
    this.setState({
      totalProductCount: this.state.totalProductCount + 1,
    })

    //Insert into Json
    let fetchId = event.currentTarget.parentElement.parentElement.id;

    _.map(staticItems.productList, item => {
      if (item.productId == fetchId) {
        item.count++;
        if (item.count > 0 && !this.fetchItems.includes(item)) {
          debugger
          this.fetchItems.push(item);
        }
      }
    })
    localStorage.setItem('productList', JSON.stringify(this.fetchItems));
  }

  removeItem(event) {
    this.setState({
      totalProductCount: this.state.totalProductCount - 1
    })

    //Remove from Json
    let fetchId = event.currentTarget.parentElement.parentElement.id;

    _.map(staticItems.productList, item => {
      if (item.productId == fetchId) {
        if (item.count > 0) {
          item.count--;
        }
        if (item.count == 0) {
          this.fetchItems.pop(item);
        }
      }
    })
    localStorage.setItem('productList', JSON.stringify(this.fetchItems));
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
