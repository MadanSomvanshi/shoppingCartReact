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
      fetchItems: []
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    let fetchFromLocal = JSON.parse(localStorage.getItem('productList'));
    this.setState({
      fetchItems: fetchFromLocal ? fetchFromLocal : []
    })
  }

  addItem(event) {
    let fetchId = event.currentTarget.parentElement.parentElement.id;
    let fetchItems = [...this.state.fetchItems];
    let iterateThroughArray = [];

    if(fetchItems.length) {
      for (const item of fetchItems) {
        if (item.productId == fetchId) {
          iterateThroughArray = fetchItems;
          break;
        }
          iterateThroughArray = staticItems.productList;
        }
      } else {
        iterateThroughArray = staticItems.productList;
    }
    _.map(iterateThroughArray, item => {
      if (item.productId == fetchId) {
        item.count++;
        if (item.count > 0 && !this.state.fetchItems.includes(item)) {
          fetchItems.push(item);
        }
      }
    })

    this.setState({
      fetchItems
    }, () => {
      localStorage.setItem('productList', JSON.stringify(this.state.fetchItems))
    });
  }

  removeItem(event) {
    let fetchId = event.currentTarget.parentElement.parentElement.id;
    let fetchItems = [...this.state.fetchItems];

    _.map(fetchItems, item => {
      if (item.productId == fetchId) {
        if (item.count > 0)
          item.count--;
      }
    })
    this.setState({
      fetchItems
    }, () => {
      localStorage.setItem('productList', JSON.stringify(this.state.fetchItems));
    })
  }


  render() {
    return (
      <div className="container">
        <Header productCount={this.state.fetchItems.length}/>
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
