import { useContext } from "react";
import { FavIDsContext } from "./App.jsx";

export default function FavoriteHeart({ id }) {
  const { favIDs, changeFavIDs } = useContext(FavIDsContext);
  return (
    <div className="product-image--favourite-container">
      <img
        className="product-image--favourite"
        src={
          favIDs.has(id)
            ? "/assets/heart-solid.svg"
            : "/assets/heart-regular.svg"
        }
        alt="the favorite icon"
        onClick={(e) => {
          e.preventDefault();
          changeFavIDs(id, favIDs);
        }}
        role="button"
        aria-label="toggle favorite"
      />
    </div>
  );
}
