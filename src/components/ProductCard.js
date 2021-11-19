import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class ProductCard extends Component {
    constructor(){
        super();
    }
    render(){
        let { name, price, description, img } = this.props.product;
        return(
        <div >
            <h3>{name}</h3>
            <div>Price: {formatPrice(price)}</div>
            <button onClick={()=>this.props.handleAddToCart(this.props.product)}>Add To Cart</button>
            <br />
            <img src={img} alt="Product"/>
            <div>{description}</div>
        </div>
        );
    }
}

export default ProductCard;