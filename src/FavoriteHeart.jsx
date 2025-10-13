export default function FavoriteHeart() {
  return (
    <div className="product-image--favourite-container">
      <img
        className="product-image--favourite"
        src="/assets/heart-regular.svg"
        alt="the favorite icon"
        onClick={(e) => {
          e.preventDefault();
        }}
        role="button"
        aria-label="toggle favorite"
      />
    </div>
  );
}
