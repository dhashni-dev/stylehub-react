import ProductCard from "./components/ProductCard";

function App() {

  const products = [
    {
      name: "Denim Jacket",
      price: 1999,
      image: "jacket.jpg"
    },
    {
      name: "Oversized Hoodie",
      price: 1299
    },
    {
      name: "Cargo Pants",
      price: 1499
    },
    {
      name: "Black T-Shirt",
      price: 799
    }
  ];

 return (
  <div>
    <h1>StyleHub</h1>

    {
      products.map((product) => (
        <ProductCard
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))
    }

  </div>
);
}
export default App;