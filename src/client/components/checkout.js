import React from 'react';

export default class CheckoutShopping extends React.Component {
  constructor(props) {
    super(props);
    this.getSelectedItems = this.getSelectedItems.bind(this);
  }

  getSelectedItems() {
    const getItems = JSON.parse(JSON.stringify(localStorage));
    this.total = 0;
    let fetchItem = _.map(getItems, item => {
      if(item != "INFO") {
        item = JSON.parse(item)
      }
      this.total += item.productCost * item.count; 
      return <li className='d-flex checkoutProductsList' key={item.productId}>
      <span>{item.productName}</span>
      <span>{item.productCost}</span>
      <span>{item.count}</span>
      <span>{item.productCost * item.count}</span>
      </li>
    });
    return <ul className='p-0'>{fetchItem}</ul>
  }

  render() {
    return (
      <div>
        <div>Payment Flow need to integrate</div>
        <div>
          {this.getSelectedItems()}
          <div className="d-flex totalWrap">
            <span>Total Bill</span>
            <span>{this.total}</span>
          </div>
        </div>
      </div>
    )
  }
}
