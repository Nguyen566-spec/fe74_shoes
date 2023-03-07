import React from "react";
import Item from "./Item";

const List = ({ products }) => {
  return (
    <div className="container">
      <div className="row gy-4">
        {products.map((item) => (
          <div key={item.id} className="col-4">
            <Item item={item}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
