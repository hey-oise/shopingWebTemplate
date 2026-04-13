import { useState } from "react";
import StoreButton from "./PButton";
 //localStorage.setItem('cart', JSON.stringify(cart));
export default function Cart() {
  const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem('cart')));
  if (cartList == [] || cartList == '') {
    return (
      <p>cart is empty...</p>
    )
  }
  else {
    return (
      <>
        <div className="h1Parent">
          <div className="clearCartButton"><StoreButton color="orangered" value="clear cart" onclick={function () {
          localStorage.setItem('cart', JSON.stringify([]));
          setCartList([]);
          }} className="clearCartButton" />
            </div>
          <h1>your cart</h1>
        </div>
        {cartList.map(product => <div key={product.id} className="product">
          <img className="productImage" alt="product image" src={product.image} />
          <a className="productName" href={`https://www.google.com/search?q=${product.name}, ${product.specs.map(productSpec => productSpec)}`}>{product.name}</a>
    
          <h3 className="productPrice">
            {product.price}
          </h3>
          <div className="productSpecParent">
            {product.specs.map(spec => <p className="productSpec">{spec}</p>)}
          </div>
        </div>)}
      
      </>
    )
  }
}