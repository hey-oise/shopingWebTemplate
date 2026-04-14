import { useState } from "react";
import StoreButton from "./PButton";
import gadgets from "./assets/gadgets.png";
import repairs from "./assets/repairs.png";
import handShake from "./assets/handshake.png";
import delivery from "./assets/delivery.png";


export function SingleHead(props) {
  const [position, setPosition] = useState(0);
  function movePosition() {
    if (position < 300) {
      setPosition(position + 100);
    } else {
      setPosition(0);
  }
  }
  setInterval(movePosition, 4500)
  return (
    <div className="head" style={{left:`-${position}vw`}}>
      <div className="headingparent">
        <h1 className="heading">{props.text}</h1>
        <div className="headerButtons">
        <StoreButton value='contact us' textColor="black" color='#697ae1' onclick={function (){
            document.getElementById('footer')?.scrollIntoView(
              {
                behavior: 'smooth'
            }
          )
          }} />
        <StoreButton value="shop now" textColor="black" color='mediumseagreen' onclick={function (){
          
          document.getElementById('shop')?.scrollIntoView(
            {
              behavior: 'smooth'
            }
          )
          }} />
        </div>
      </div>
      <img className="headImg" src={props.imglink}></img>
    </div>
)
}
export default function Header() {
  return (
    <>
      <header>
      <SingleHead text="dealers of all kinds of gadgets" imglink={gadgets} />
      <SingleHead text="repairs and servicing of gadgets" imglink={repairs} />
      <SingleHead text="trustworthy and reliable" imglink={handShake} />
        <SingleHead text="safe and secure delivery" imglink={delivery} />
      </header>
    </>
  )
}
