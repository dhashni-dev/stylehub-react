import "./ProductCard.css";
function ProductCard(products) {
  return (
    <div className="product-card">
      <h2>{products.name}</h2>
      <p>₹{products.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;