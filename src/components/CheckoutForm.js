import { Component } from "react";

class CheckoutForm extends Component {
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            creditCard: "",
            zipCode: ""
        }
    }

    handleCheckoutInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleBuyNowButton = (e) => {
        e.preventDefault();

        let creditCardNum = this.state.creditCard.split('');
        let zipCodeNum = this.state.zipCode.split('');

        let isValid = true;

        if(this.state.firstName === "" || this.state.lastName === "" || this.state.email === ""){
            isValid = false;
            // alert("Input is not valid")
        }

        if(creditCardNum.length !== 16){
            alert("Credit card number is not valid")
        }

        if(zipCodeNum.length !== 5){
            alert("Zip code is not valid")
        }

        if (!isValid){
            alert("Input is not valid")
        } else {
            alert(`Yay! Purchase complete! You will be chaged a total of ${this.props.total}`)
        }
    }

    render(){
        return (
            <form onSubmit={this.handleBuyNowButton} id="checkout">
                <label htmlFor="first-name">First Name</label>
                <input onInput={this.handleCheckoutInput} type="text" name="firstName" value={this.state.firstName} id="first-name"/>
                <label htmlFor="last-name">Last Name</label>
                <input onInput={this.handleCheckoutInput} type="text" name="lastName" value={this.state.lastName} id="last-name"/>
                <label htmlFor="email">Email</label>
                <input onInput={this.handleCheckoutInput} type="email" name="email" value={this.state.email} id="email"/>
                <label htmlFor="credit-card">Credit Card</label>
                <input onInput={this.handleCheckoutInput} type="text" name="creditCard" value={this.state.creditCard} id="credit-card"/>
                <label htmlFor="zip-code">Zip Code</label>
                <input onInput={this.handleCheckoutInput} type="text" name="zipCode" value={this.state.zipCode} id="zip-code"/>
                <button>Buy Now</button>
            </form>
        )
    }
}

export default CheckoutForm;