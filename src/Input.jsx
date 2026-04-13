function Input(props) {
  return (
    <div className="input-parent">
      <input onChange={props.inputChange} placeholder="what are you looking for?" type="search" className="search-input" />
      <button onClick={props.inputSubmit} className="search-button">search</button>
    </div>
  );
};
export default Input;