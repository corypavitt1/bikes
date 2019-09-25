import React, { Component } from 'react';
import data from './BikeRental.json'
class ProductList extends Component {

  render() {

    let newBikeData = data.products.map(product => {

      if(product.product_type == "bike") {



      return <div  className="list"  key={product.id} name={product.name}> {product.name}  ${product.price} <img className="image" src={product.image} alt="image"/>

  <button className="SelectButton" onClick={(e) => this.props.addProductHandle(e,product)}>Select</button>

      </div>
      }

    }
    )



    let newAccesoriesData = data.products.map(product => {
      if(product.product_type == "accessory") {

      return <div  className="list"  key={product.id} name={product.name}> {product.name}  ${product.price}  {product.product_type} <img className="image" src={product.image} alt="image"/>

  <button className="SelectButton"  onClick={(e) => this.props.addProductHandle(e,product)}>Select</button>
    </div>
      }

    }
    )

    let newAddonData = data.products.map(product => {
      if(product.product_type == "addon") {

      return <div  className="list "  key={product.id} name={product.name}> {product.name} ${product.price} {product.product_type} <img className="image" src={product.image} alt="image"/>





  <button   className="SelectButton"  onClick={(e) => this.props.addProductHandle(e,product)}>Select</button>
    </div>
      }

    }
    )


  return (

    <div>
    <div className="bikes ">
  <h1>Bikes</h1>
{newBikeData}
  </div>
  <div className ="accessory">
  <h1>Accessories</h1>

{newAccesoriesData}
  </div>
  <div className="addon">
  <h1>Add-on</h1>

{newAddonData}
  </div>
    </div>
  );
}
}

export default ProductList;
