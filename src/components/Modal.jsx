import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { name, price, image, description, quantity } = this.props.selected;
    return (
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{ background: "rgb(0,0,0,0.5)" }}
      >
        <div className="position-relative bg-white top-50 start-50 translate-middle p-5 w-75">
          <div className="container-fluid">
            <div className="row">
              <div className="col-5">
                <img src={image} alt="" className="w-100" />
              </div>
              <div className="col-7">
                <h1>Name: {name}</h1>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
              </div>
              <div className="col-12">
                <p>Description: {description}</p>
              </div>
            </div>
          </div>
          <span
            onClick={() => {
              this.props.onHideModal();
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
