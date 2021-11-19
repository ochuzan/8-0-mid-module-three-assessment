import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class ProductCard extends Component {
    render(){
        let { name, price, description, img } = this.props.product;
        return(
        <div >
            <h3>{name}</h3>
            <div>Price: {formatPrice(price)}</div>
            <button type="submit" onClick={()=>this.props.handleAddToCart(this.props.product)}>Add To Cart</button>
            <img src={img} alt="Product"/>
            <div>{description}</div>
        </div>
        );
    }
}

export default ProductCard;