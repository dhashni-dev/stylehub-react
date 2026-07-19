import "./Navbar.css";
function Navbar(products) {
    return (
        <nav>
            <h1>StyleHub</h1>
            <button>Cart ({products.cartCount})</button>
        </nav>
    );
}

export default Navbar;