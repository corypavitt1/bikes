import React, { Component } from 'react';
import data from './BikeRental.json'
import ProductList from "./ProductList.js"
import Cart from './Cart.js'

import './App.css';

class  App extends Component {



state={
items: [],
bikeSelected: false,
checkoutSelected: false,
value: "",
amountSelected: ""
}

checkoutHandleClick = () => {
  this.setState({
    checkoutSelected: true
  })
}

addProductHandle =(e,product) => {
e.preventDefault()
console.log("handleclick",e.target.value)

if(product.product_type == "bike"){
  this.setState({
    bikeSelected: true
  })
}

  this.setState({
    items:  this.state.items.concat(product)
  })
}

handleChange = (e) => {
  e.preventDefault()
  console.log("handleChange",e.target.value)
this.setState({
value: e.target.value,
amountSelected: e.target.value
})

}






  render() {



  console.log("App render",this.state)
  return (
    <div className="container-fluid">
    <div className="row">
    <div class=" productList col">

<ProductList state={this.state} handleChange={this.handleChange} addProductHandle={this.addProductHandle}/>
</div>
<div class=" cartList col">

<Cart state={this.state} handleChange={this.handleChange} items={this.state.items} bikeSelected={this.state.bikeSelected} checkoutSelected={this.state.checkoutSelected} checkoutHandleClick={this.checkoutHandleClick} />
</div>
</div>

    </div>
  );
}
}

export default App;
