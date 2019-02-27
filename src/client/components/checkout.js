import React from 'react';

export default class CheckoutShopping extends React.Component {
  constructor(props) {
    super(props);
    this.getSelectedItems = this.getSelectedItems.bind(this);
    this.calculateBill = this.calculateBill.bind(this);
  }

  getSelectedItems() {
    const getItems = JSON.parse(JSON.stringify(localStorage));
    let fetchItem = _.map(getItems, item => {
      if(item != "INFO") {
        item = JSON.parse(item)
        this.calculateBill(item.productCost, item.count)
      }

      return <li className='d-flex checkoutProductsList' key={item.productId}>
      <span>{item.productName}</span>
      <span>{item.productCost}</span>
      <span>{item.count}</span>
      <span>{item.productCost * item.count}</span>
      </li>
    });
    return <ul>{fetchItem}</ul>
  }

  calculateBill(cost, count) {
    let singleItemBill = cost * count;
    let bill = bill + singleItemBill;
    return bill;
  }


  render() {
    return (
      <div>
        <div>Payment Flow need to integrate</div>
        <div>
          {this.getSelectedItems()}
          <span>Total Bill</span><span>{this.calculateBill()}</span>
        </div>
      </div>
    )
  }
}
