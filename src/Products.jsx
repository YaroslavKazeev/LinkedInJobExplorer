import { Link } from "react-router-dom";
import FavoriteHeart from "./FavoriteHeart.jsx";

export default function Products({ products }) {
  let output = <div>Error loading products. Please try again later.</div>;
  products === "error"
    ? output
    : products === "NoFavorites"
    ? (output = <div>You haven't chosen any favourites yet!</div>)
    : !products || products.length === 0
    ? (output = <div>Loading products...</div>)
    : (output = (
        <ul className="products">
          {products.map((product) => (
            <li key={product.id} className="products--item">
              <Link to={`/product/${product.id}`}>
                <div className="product">
                  <div className="product-image--container">
                    <img className="product-image" src={product.image} />
                    <FavoriteHeart id={product.id} />
                  </div>
                  <span className="product--title" title={product.title}>
                    {product.title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ));
  return output;
}
