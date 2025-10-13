import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product.jsx";
import { PRODUCTS_URL } from "./constants.js";
import fetcher from "./fetcher.js";

export default function ProductController() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    (async () => {
      if (!id) return;
      setProduct([]);
      fetcher(`${PRODUCTS_URL}/${id}`, setProduct);
    })();
  }, [id]);
  return <Product product={product} />;
}
