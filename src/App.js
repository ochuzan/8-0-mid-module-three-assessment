import { Component } from "react";
import "./App.css";
import CheckoutForm from "./components/CheckoutForm";
import ProductCard from "./components/ProductCard";
import productData from "./data/productData";
import formatPrice from "./helpers/formatPrice";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allProductData: productData,
      cartList: [],
      subtotal: 0,
      tax: 0,
      total: 0
    }
  }

  handleAddToCart = (product) => {
    this.setState({
      cartList: [...this.state.cartList, product],
      subtotal: this.state.subtotal + product.price,
      tax: this.state.tax + (product.price * 0.05),
      total: this.state.total + product.price + (product.price * 0.05)
    })
  }

  render() {
    let productArr = this.state.allProductData.map(product => {
      return (
        <ProductCard 
          key = {product.id}
          product = {product}
          handleAddToCart = {this.handleAddToCart}
        />
      )
    });

    let cartArr = this.state.cartList.map(item => {
      return (
        <ul>
            <li>{item.name}: {formatPrice(item.price)}</li>
        </ul>
      )
    })

    return (
      <div id="app">
        <div>
          <h2>My Garage Sale</h2>
          <div className="products">
            {productArr}
          </div>
        </div>

        <div>
          <h2>Cart</h2>
          <div>
            {cartArr}
          </div>
          <h3>Subtotal: {formatPrice(this.state.subtotal)}</h3>
          <h3>Tax: {formatPrice(this.state.tax)}</h3>
          {/* <h3>Total: {formatPrice(this.state.subtotal + this.state.tax)}</h3> */}
          <h3>Total: {formatPrice(this.state.total)}</h3>
          
          <div>
          <h2>Checkout</h2>
          <CheckoutForm total={this.state.total}/>
          </div>
        </div>

        
      </div>
        
    );  
  }
};

export default App;
