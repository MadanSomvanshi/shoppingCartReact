import React from 'react';
import staticItems from './items';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class ShoppingItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortItems: '',
      dropdownOpen: false,
    }
    this.sortItems = this.sortItems.bind(this);
    this.displayItems = this.displayItems.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }
  
  sortItems(response) {
    debugger  
    switch(response) {
      case 'LH': {
        this.setState({ sortItems: 'LH' });
        break;
      }
      case 'HL': {
        this.setState({ sortItems: 'HL' });
        break;
      }
      default: this.setState({ sortItems: ''})
    }
  }

  displayItems() {
    
    if (this.state.sortItems == 'LH') {
      debugger
      staticItems.productList.sort((iIndex, jIndex) => {
        return iIndex.productCost - jIndex.productCost
      })
    }

    if (this.state.sortItems == 'HL') {
      debugger
      staticItems.productList.sort((iIndex, jIndex) => {
        return jIndex.productCost - iIndex.productCost
      })
    } 

    let fetchItem = _.map(staticItems.productList, item => {
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

  render() {
    return (
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Sort By
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick= {() => {this.sortItems("LH")}}>Low to High</DropdownItem>
            <DropdownItem onClick= {() => {this.sortItems("HL")}}>High to Low</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <ul className="listHeader">
          {this.displayItems()}
        </ul>
      </div>
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
