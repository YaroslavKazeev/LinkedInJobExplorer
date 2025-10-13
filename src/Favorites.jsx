import Nav from "./Nav.jsx";
import Products from "./Products.jsx";

function Favorites({ products }) {
  return (
    <>
      <div className="title-container">
        <h1 className="title-container--title">Favorites</h1>
        <Nav />
      </div>
      <Products products={products} />
    </>
  );
}

export default Favorites;
