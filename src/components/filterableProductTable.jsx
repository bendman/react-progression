import React, { Component } from 'react';
import SearchBar from './searchBar';
import ProductTable from './productTable';

export default class FilterableProductTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  updateFilterText(filter) {
    this.setState({ 'filterText': filter });
  }

  updateInStockOnly(isChecked) {
    this.setState({ 'inStockOnly': isChecked });
  }

  render() {

    return (
      <div>
        <h1>App</h1>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          changeFilterText={this.updateFilterText.bind(this)}
          changeFilterStock={this.updateInStockOnly.bind(this)}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }

};
