import React, { Component } from 'react';
import ProductCategoryRow from './productCategoryRow';
import ProductRow from './productRow';

export default class ProductTable extends Component {

  render() {

    // this.props.filterText
    // this.props.inStockOnly
    // let self = this;
    let filterText = this.props.filterText.trim().toLowerCase();

    // Find the products which match the search
    let matchingProducts = this.props.products.filter(product => {
      // Check if it needs to be in stock
      if (this.props.inStockOnly && !product.stocked) return false;
      // Check if it matches the search string
      return !(
        filterText &&
        product.name.toLowerCase().indexOf(filterText) === -1
      );
    });



    // Adding HTML for each matching product
    let lastCategory = null;
    let rows = matchingProducts.map(function(product) {
      let buffer = [];
      if (product.category !== lastCategory) {
        buffer.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      buffer.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
      return buffer;
    });

    return (
      <div>
        <h1>Product Table</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }

};
