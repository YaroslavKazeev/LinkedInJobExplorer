import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import ProductController from "./ProductController.jsx";
import FavoritesController from "./FavoritesController.jsx";

const FavIDsContext = createContext();

function App() {
  const [favIDs, setFavIDs] = useState(() => new Set());

  function changeFavIDs(id, favIDs) {
    setFavIDs(() => {
      const newFavSet = new Set(favIDs);
      newFavSet.has(id) ? newFavSet.delete(id) : newFavSet.add(id);
      return newFavSet;
    });
  }

  return (
    <FavIDsContext.Provider value={{ favIDs, changeFavIDs }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductController />} />
          <Route path="favorites" element={<FavoritesController />} />
        </Routes>
      </BrowserRouter>
    </FavIDsContext.Provider>
  );
}

export { App, FavIDsContext };
