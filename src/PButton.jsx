export default function StoreButton({value='button', textColor="black", color='green', onclick}) {
  return (
    <>
      <button className="storeBtn" style={{ color:textColor, backgroundColor:color }} onClick={onclick}>{value}</button>
    </>  
  );
};