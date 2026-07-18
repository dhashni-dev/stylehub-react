import "./Hero.css";
function Hero() {

    function handleShopNow() {
        alert("Welcome to StyleHub!")
    }
    return (
        <section className="hero">
            <h1>Discover Your Style</h1>
            <p>Premium Fashion for Every Occasion</p>
            <button onClick={handleShopNow}>Shop Now</button>
        </section>
    );
}

export default Hero;