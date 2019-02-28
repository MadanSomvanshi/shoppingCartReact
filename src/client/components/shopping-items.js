import React from 'react';
import staticItems from './items';
import _ from 'lodash';
import PropTypes from 'prop-types';
export default class ShoppingItems extends React.Component {
  constructor(props) {
    super(props);
    this.getShoppingItems = this.getShoppingItems.bind(this);
  }

  getShoppingItems() {
    if (staticItems) {
      let fetchItem = _.map(staticItems.productList, item => {
        console.log(item);
        return (
          <li key={item.productId}>
            <div className="listItem" id={item.productId}>
              <div><span className="productLabel">Name:</span><span className="pName">{item.productName}</span></div>
              <div><span className="productLabel">Cost:</span><span className="pCost">{item.productCost}</span></div>
              <div className="buttonWrap">
                <button onClick={this.props.removeItem}>-</button>
                <button onClick={this.props.addItem}>+</button>
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

ShoppingItems.propTypes = {
  removeItem: PropTypes.func,
  addItem: PropTypes.func
}

ShoppingItems.defaultProps = {
  removeItem: () => {},
  addItem: () => {}
}
