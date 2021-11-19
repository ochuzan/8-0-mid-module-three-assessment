import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class Cart extends Component {
    render(){
        let { name, price } = this.props.item;
        return (
            <div>
                <ul>
                    <li>{name}: {formatPrice(price)}</li>
                </ul>
            </div>
        )
    }
}

export default Cart;