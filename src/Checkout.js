import React, { Component } from 'react';

class Checkout extends Component {
pay = () => {
  alert("THE END")
}

  render() {
    let x = []
    console.log("checkout",this.props.backToArray)

let newTotal = this.props.backToArray.map(number => {
  x.push(number.price)



})

let b = () => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

return  x.reduce(reducer)
}




    return (
      <div className="cart">
          <div className="cartTitle">Checkout</div>
            {this.props.cartItems}
            <div className="total">Total: ${Math.round(b() * 100) /100}</div>
            <hr></hr>
            <button onClick={this.pay}className="payButton">PAY</button>
      </div>
    );
  }

}

export default Checkout;
