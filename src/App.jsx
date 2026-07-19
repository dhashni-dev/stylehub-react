import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import jacket from "./assets/jacket.jpg";
import hoodie from "./assets/hoodie.jpg";
import cargo from "./assets/cargo.jpg";
import tshirt from "./assets/black_t_shirt.webp";

function App() {

  const [cartCount, setCartCount] = useState(0);
  const products = [
    {
      name: "Denim Jacket",
      price: 1999,
      Image: jacket
    },
    {
      name: "Oversized Hoodie",
      price: 1299,
      Image: hoodie

    },
    {
      name: "Cargo Pants",
      price: 1499,
      Image: cargo
    },
    {
      name: "Black T-Shirt",
      price: 799,
      Image: tshirt
    }
  ];

 return (
  <div>
    <Navbar  cartCount={cartCount} />
    <Hero />
     <div className="products-container">
    {
      products.map((product) => (
        <ProductCard
          name={product.name}
          price={product.price}
          image={product.Image}
          onAddToCart={() => setCartCount(cartCount + 1)}
        />
      ))
    }
    </div>
  </div>
);
}
export default App;