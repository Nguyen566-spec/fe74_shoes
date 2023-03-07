import React, { Component } from "react";

export default class ShoppingCart extends Component {
  render() {
    return (
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{ background: "rgb(0,0,0,0.5)" }}
      >
        <div className="position-relative bg-white top-50 start-50 translate-middle p-5 w-75">
          <h1>Shopping Cart</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Unit price</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.product.name}</td>
                  <td>
                    <img src={item.product.image} width={100} alt="" />
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        this.props.onDecreaseQuantity(item.product.id)
                      }
                      className="btn btn-secondary"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        this.props.onIncreaseQuantity(item.product.id)
                      }
                      className="btn btn-secondary"
                    >
                      +
                    </button>
                  </td>
                  <td>${item.product.price}</td>
                  <td>${item.product.price * item.quantity}</td>
                  <td>
                    <button
                      onClick={() =>
                        this.props.onDeleteCartItem(item.product.id)
                      }
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>
            Total: $
            {this.props.cart &&
              this.props.cart.reduce(
                (total, item) => total + item.product.price * item.quantity,
                0
              )}
          </h2>
          <button
            onClick={() => this.props.onDeleteAll()}
            className="btn btn-info"
          >
            Remove all
          </button>
          <span
            onClick={() => {
              this.props.onHideCart();
            }}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              fontSize: 40,
              cursor: "pointer",
            }}
          >
            X
          </span>
        </div>
      </div>
    );
  }
}
