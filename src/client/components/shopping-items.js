import React from 'react';
import staticItems from './items';
import _ from 'lodash';
export default class ShoppingItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: false,
    }
    this.getShoppingItems = this.getShoppingItems.bind(this);
  }

  getShoppingItems() {
    if (staticItems) {
      // let items = JSON.stringify(staticItems);
      // console.log(items);
      let fetchItem = _.map(staticItems.productList, item => {
        console.log(item);
        return (
          <li key={item.productId}>
            <span>{item.productId}</span>
            <span>{item.productName}</span>
            <span>{item.productCost}</span>
          </li>
        );
      });
      return fetchItem;
    }
  }


  render() {
    return (
      <ul>
        {this.getShoppingItems()}
      </ul>
    )
  }
}
