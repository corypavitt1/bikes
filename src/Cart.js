import React, { Component } from 'react';
import data from './BikeRental.json'
import Checkout from './Checkout.js'
class Cart extends Component {



  render() {
    // const uniqueSet = new Set(this.props.items)

const backToArray = [...this.props.items]






    let cartItems = backToArray.map(item => {


    return <div  key={item.id}>{item.name}  <img className="image" src={item.image} alt="image"/><div className="price">${item.price } </div> </div>
    })




    console.log("cart", this.props.items)
    return (
      <div>
      {this.props.checkoutSelected ? <div><Checkout backToArray={backToArray} cartItems={cartItems}/></div> :
      <div className="cart">
      <div className="cartTitle">CART</div>
      <div className = "isBikeSelect">
      {!this.props.bikeSelected ? "Please select a bike": null}
      </div>
      {cartItems}
      {this.props.bikeSelected ? <button onClick={(e) => this.props.checkoutHandleClick(e)}className="CheckoutButton">Checkout</button> :null}
      </div>
    }
    </div>
    );
  }

}

export default Cart;
