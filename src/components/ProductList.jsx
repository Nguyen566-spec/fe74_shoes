import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row gy-4">
          {this.props.products.map((item) => (
            <div key={item.id} className="col-4">
              <ProductItem
                product={item}
                onSelected={this.props.onSelected}
                onShowModal={this.props.onShowModal}
                onAddToCart={this.props.onAddToCart}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
