import React from 'react';
import staticItems from './items';
import _ from 'lodash';
export default class ShoppingItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalProductCount: 0,
    }
    this.getShoppingItems = this.getShoppingItems.bind(this);
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
      if(item.productId == fetchId) {
        item.count++;
        if(item.count > 0)
          localStorage.setItem(item.productId, JSON.stringify(item));
      }
    })
  }
  
  removeItem(event) {
    this.setState({
      totalProductCount: this.state.totalProductCount - 1
    })

    //Remove into Json
    let fetchId = event.currentTarget.parentElement.parentElement.id;
    let fetchItems = staticItems;
    _.map(fetchItems.productList, item => {
      if (item.productId == fetchId) {
        if (item.count > 0) {
          item.count--;
          localStorage.setItem(item.productId, JSON.stringify(item));
        }
        if(item.count == 0)
          localStorage.removeItem(item.productId);
      }
    })
  }
  
  getShoppingItems() {
    if (staticItems) {
      let fetchItem = _.map(staticItems.productList, item => {
        console.log(item);
        return (
          <li key={item.productId}>
            <div className="listItem" id={item.productId}>
              {/* <div><span className="productLabel"></span><span>{item.productId}</span></div> */}
              <div><span className="productLabel">Name:</span><span className="pName">{item.productName}</span></div>
              <div><span className="productLabel">Cost:</span><span className="pCost">{item.productCost}</span></div>
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



