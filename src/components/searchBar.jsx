import React, { Component } from 'react';

export default class SearchBar extends Component {

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.props.filterText}
          placeholder="Search..."
          onChange={this.onFilterTextChange.bind(this)}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.onFilterStockChange.bind(this)}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }

  onFilterTextChange(e) {
    let filter = e.target.value;

    this.props.changeFilterText(filter);
  }

  onFilterStockChange(e) {
    this.props.changeFilterStock(e.target.checked);
  }

};
