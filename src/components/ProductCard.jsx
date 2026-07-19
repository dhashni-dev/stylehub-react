import "./ProductCard.css";
function ProductCard(products) {
  return (
    <div className="product-card">
      <img src={products.image} alt={products.name} />
      <h2>{products.name}</h2>
      <p>₹{products.price}</p>
      <button onClick={products.onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;