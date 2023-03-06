import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { name, image, price } = this.props.product;
    return (
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price}</p>
          <button
            onClick={() => {
              this.props.onSelected(this.props.product);
              this.props.onShowModal();
            }}
            className="btn btn-primary"
          >
            Detail
          </button>
        </div>
      </div>
    );
  }
}
