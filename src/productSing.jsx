export default function product() {
  return (
    <div key={filterProduct.id} className="product">
      <img className="productImage" alt="product image" src={filterProduct.image} />
      <a className="productName" href={`https://www.google.com/search?q=${filterProduct.name}, ${filterProduct.specs.map(productSpec => productSpec)}`}>{filterProduct.name}</a>
  
      <h3 className="productPrice">
        {filterProductPrice}
      </h3>
      <div className="productSpecParent">
       {productSpecs}
      </div>
      <div className="productButtons">
       {productButton}
      </div>
    </div>
  )
}