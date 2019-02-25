import React from 'react';
import staticItems from './items';
import _ from 'lodash';
export default class ShoppingItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productCount: 1
    }
    this.getShoppingItems = this.getShoppingItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem() {
    debugger
    let getCount = this.state.productCount;
    this.setState({
      productCount: getCount + 1
    })
  }
  
  removeItem() {
    debugger
    let getCount = this.state.productCount;
    this.setState({
      productCount: getCount - 1
    })
  }
  
  getShoppingItems() {
    if (staticItems) {
      let fetchItem = _.map(staticItems.productList, item => {
        console.log(item);
        return (
          <li key={item.productId}>
            <div className="listItem">
              {/* <div><span className="productLabel"></span><span>{item.productId}</span></div> */}
              <div><span className="productLabel">Name:</span><span>{item.productName}</span></div>
              <div><span className="productLabel">Cost:</span><span>{item.productCost}</span></div>
              <div className="buttonWrap">
                <button onClick={this.removeItem}>-</button>
                <button onClick={this.addItem}>+</button>
              </div>
            </div>
          </li>
        );
      });
      return fetchItem;
    }
  }
  
  render() {
    return (
      <ul className="listHeader">
        {this.getShoppingItems()}
      </ul>
    )
  }
}



