import { useState, useEffect, useContext } from "react";
import Favorites from "./Favorites.jsx";
import { FavIDsContext } from "./App.jsx";
import { PRODUCTS_URL } from "./constants.js";
import fetcher from "./fetcher.js";

export default function FavoritesController() {
  const { favIDs } = useContext(FavIDsContext);
  const [favProducts, setFavProducts] = useState("NoFavorites");

  useEffect(() => {
    (async () => {
      setFavProducts([]);
      let favoritesList = [];
      if (favIDs.size > 0) {
        for (let id of favIDs) {
          const data = await fetcher(`${PRODUCTS_URL}/${id}`);
          data === "error" ? (favoritesList = data) : favoritesList.push(data);
          if (data === "error") break;
        }
      } else {
        favoritesList = "NoFavorites";
      }
      setFavProducts(favoritesList);
    })();
  }, [favIDs]);

  return <Favorites products={favProducts} />;
}
