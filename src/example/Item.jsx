import React from "react";

const Item = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">${item.price}</p>
        <div className="d-flex justify-content-evenly">
          <button onClick={() => {}} className="btn btn-primary">
            Detail
          </button>
          <button onClick={() => {}} className="btn btn-warning">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
