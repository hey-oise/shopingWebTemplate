
import Shop from "./Shop";
import Cart from "./ShopingCart";
import { useState } from "react";

export default function App() {
  const [onPage, setOnpage] = useState("shop");
  let page;
  if (onPage == 'shop') {
    page = <Shop />;
  } else if (onPage == 'cart') {
    page = <div><button onClick={cartToggle} className="goBackToShop"><img width="32" height="32" src="https://img.icons8.com/windows/32/shop.png" alt="shop"/></button><Cart /></div>
  }
  function cartToggle() {
    if (onPage == 'shop') {
      setOnpage('cart');
    } else if (onPage == 'cart') {
      setOnpage('shop');
    }
  }
  return (
    <div className="app">
      <div className="topBar">
        <p className="Logo">okegigide gadgets</p>
        <button className="cartButton" onClick={cartToggle}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png" alt="shopping-cart--v1" /></button></div>
      {page}
      <a  href="https://wa.me/2347073722840" className="whatsappM">
        <img width="50" height="50" src="https://img.icons8.com/ios/50/whatsapp--v4.png" alt="whatsapp--v4"/>
      </a>
    </div>
  )
}