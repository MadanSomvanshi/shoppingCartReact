import React from 'react';

export default class CheckoutShopping extends React.Component {
  constructor(props) {
    super(props);
    this.getSelectedItems = this.getSelectedItems.bind(this);
  }
  
  getSelectedItems() {
    const getItems = JSON.parse(JSON.stringify(localStorage));
    
    let fetchItem = _.map(getItems, item => {
      console.log('item', item);
      return item
    });


    return <div>{fetchItem}</div>
    

  }

  render() {
    return (
      <div>
        <div>Payment Flow need to integrate</div>
        <div>
          {this.getSelectedItems()}
        </div>
      </div>
    )
  }
}
