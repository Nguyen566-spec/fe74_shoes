import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

export default class ShoesStore extends Component {
  products = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];
  state = {
    showModal: false,
    selected: null,
    showCart: false,
    cart: [],
  };
  handleSelected = (p) => {
    this.setState({
      selected: p,
    });
  };
  handleShowModal = () => {
    this.setState({
      showModal: true,
    });
  };
  handleHideModal = () => {
    this.setState({
      showModal: false,
    });
  };
  handleShowCart = () => {
    this.setState({
      showCart: true,
    });
  };
  handleHideCart = () => {
    this.setState({
      showCart: false,
    });
  };
  handleAddToCart = (p) => {
    const clone = [...this.state.cart];
    const exist = clone.find((c) => c.product.id === p.id);
    if (!exist) {
      const cartItem = {
        product: p,
        quantity: 1,
      };
      clone.push(cartItem);
    } else {
      exist.quantity++;
    }
    this.setState({
      cart: clone,
    });
  };
  handleDeleteCartItem = (id) => {
    const clone = [...this.state.cart];
    const exist = clone.findIndex((c) => c.product.id === id);
    if (exist !== -1) {
      clone.splice(exist, 1);
    }
    this.setState({
      cart: clone,
    });
  };
  handleDeleteAll = () => {
    this.setState({
      cart: [],
    });
  };
  handleIncreaseQuantity = (id) => {
    const clone = [...this.state.cart];
    const exist = clone.find((c) => c.product.id === id);
    if (exist) {
      exist.quantity++;
    }
    this.setState({
      cart: clone,
    });
  };
  handleDecreaseQuantity = (id) => {
    const clone = [...this.state.cart];
    const exist = clone.find((c) => c.product.id === id);
    const existed = clone.findIndex((c) => c.product.id === id);
    if (exist) {
      exist.quantity--;
    }
    if (exist.quantity === 0) {
      clone.splice(existed, 1);
    }
    this.setState({
      cart: clone,
    });
  };
  totalItem = () =>
    this.state.cart.reduce((total, item) => total + item.quantity, 0);
  render() {
    return (
      <>
        <h1 className="display-1 text-center m-5">Shoes shop</h1>
        <div className="p-4 text-center">
          <button
            onClick={() => this.handleShowCart()}
            className="btn btn-success"
          >
            Cart ({this.totalItem()})
          </button>
        </div>
        <ProductList
          products={this.products}
          onSelected={this.handleSelected}
          onAddToCart={this.handleAddToCart}
          onShowModal={this.handleShowModal}
        />
        {this.state.showModal && (
          <Modal
            selected={this.state.selected}
            onHideModal={this.handleHideModal}
            onAddToCart={this.handleAddToCart}
          />
        )}
        {this.state.showCart && (
          <ShoppingCart
            cart={this.state.cart}
            onHideCart={this.handleHideCart}
            onDeleteCartItem={this.handleDeleteCartItem}
            onDeleteAll={this.handleDeleteAll}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
          />
        )}
      </>
    );
  }
}
