import FavoriteHeart from "./FavoriteHeart";
import Nav from "./Nav";

export default function Product({ product }) {
  let output = <div>Error loading product. Please try again later.</div>;
  product === "error"
    ? output
    : !product || product.length === 0
    ? (output = <div>Loading product...</div>)
    : (output = (
        <div className="product-details" data-testid="product-details-page">
          <div className="title-container">
            <h1 className="title-container--title">{product.title}</h1>
            <Nav />
          </div>
          <div className="product-details--information">
            <div className="product-details--image">
              <div className="product-image--container">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                />
                <div className="product-image--favourite-container">
                  <FavoriteHeart id={product.id} />
                </div>
              </div>
              <p className="product-details--description">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      ));
  return output;
}
