import Input from "./Input";
import { productList } from "./products";
import { useState } from "react";
import { cart } from "./carted";
import StoreButton from "./PButton";
import Notification from "./Notification";

export default function Shop() {
  const [searchValue, setSearchValue] = useState("");
  const [notification, setNotification] = useState('');
  var inputValue;
  var products;
  
  
  let filterProducts = productList.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()) || product.price.includes(searchValue));
  
  products = filterProducts.map(filterProduct => <div key={filterProduct.id} className="product">
    <div className="productImagePar">
    <img className="productImage" alt="product image" src={filterProduct.image} /></div>
    <a className="productName" target="_blank" href={`https://www.google.com/search?q=${filterProduct.name}, ${filterProduct.specs.map(productSpec => productSpec)}`}>{filterProduct.name}</a>

    <h3 className="productPrice">
      {filterProduct.price}
    </h3>
    <div className="productSpecParent">
      {filterProduct.specs.map(spec => <p className="productSpec">{spec}</p>)}
    </div>
    <div className="productButtons">
      <StoreButton color="mediumseagreen" value="add to cart" onclick={function () {
        cart.unshift(productList[filterProduct.id])
          ;
          alert("added ot cart sucessfully!")
        let notify = <Notification value="added to cart sussesfully!" color="miduimseagreen" />;
        setNotification(notify);
        localStorage.setItem('cart', JSON.stringify(cart));
      }}/>
    </div>
  </div>
  );
  
  if (products.length === 0) {
    products = <div>No products found</div>;
  }
  return (
    <div id="shop">
    {notification}
      <div className="h1Parent">
        <h1>OUR DEALS</h1>
      </div>
      <Input inputChange={function (e) {
         inputValue = e.target.value;
        setSearchValue(inputValue);
      }} inputSubmit={function () {
        setSearchValue(inputValue.toLowerCase());
        }} />
      <div className="productsParent">
        <div className="productPriPar">
        {products}
        </div>
      </div>
    </div>
  );
};