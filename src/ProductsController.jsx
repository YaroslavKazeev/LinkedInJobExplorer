import { useState, useEffect } from "react";
import Products from "./Products.jsx";
import { PRODUCTS_URL } from "./constants.js";
import fetcher from "./fetcher.js";

export default function ProductsController({ category }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    (async () => {
      setProducts([]);
      let URL = PRODUCTS_URL;
      category === "all" ? URL : (URL += `/category/${category}`);
      fetcher(URL, setProducts);
    })();
  }, [category]);
  return <Products products={products} />;
}
