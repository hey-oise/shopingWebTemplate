import { useState } from "react";
import StoreButton from "./PButton";
import gadgets from "./assets/gadgets.png";
import repairs from "./assets/repairs.png";
import handShake from "./assets/handshake.png";
import delivery from "./assets/delivery.png";


export function SingleHead(props) {
  // const [position, setPosition] = useState(0);
  // function movePosition() {
  //   if (position < 300) {
  //     setPosition(position + 100);
  //   } else {
  //     setPosition(position -300);
  // }
  // }
  // setInterval(movePosition, 3000)
  return (
    <div className="head">
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
  const [sliderPosition, setSliderPosition] = useState(1);
  const [position, setPosition] = useState(<SingleHead text="dealers of all kinds of gadgets" imglink={gadgets} />);
//   if (sliderPosition == 1) {
//     setPosition( <SingleHead text="dealers of all kinds of gadgets" imglink={gadgets} />);
//   } else if (sliderPosition == 2){
//     setPosition(<SingleHead text="repairs/servicing of gadgets" imglink={repairs} />);
//   } else if (sliderPosition == 3){
//     setPosition(<SingleHead text="trustworthy and reliable" imglink={handShake} />);
// } else if (sliderPosition == 4){
//     setPosition(<SingleHead text=" fast and secure delivery" imglink={delivery} />);
//   } else {
//     setSliderPosition(1);
// }
//   function movePosition() {
//     setSliderPosition(sliderPosition + 1)
//   }
//    // style={{ left:{sliderPosition}}}
//   setInterval(movePosition, 3000)
// 
  function moveHeader() {
    setSliderPosition(sliderPosition +1)
    if (sliderPosition == 1)
    {
      setPosition(<SingleHead text="dealers of all kinds of gadgets" imglink={gadgets} />);
    } else if (sliderPosition === 2) {
      setPosition(<SingleHead text="repairs/servicing of gadgets" imglink={repairs} />)
    } else if (sliderPosition === 3) {
      setPosition(<SingleHead text="trustworthy and reliable" imglink={handShake} />)
    } else if (sliderPosition === 4) {
      setPosition(<SingleHead text=" fast and secure delivery" imglink={delivery} />);
      setSliderPosition(1);
      }
  }
  setTimeout(moveHeader, 4000);
  return (
    <>
      <header>
        {position}
      </header>
    </>
  )
}
