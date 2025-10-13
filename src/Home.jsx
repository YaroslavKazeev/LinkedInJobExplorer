import { useState } from "react";
import CategoriesController from "./CategoriesController.jsx";
import ProductsController from "./ProductsController.jsx";
import Nav from "./Nav.jsx";

function Home() {
  const [category, setCategory] = useState("all");

  return (
    <>
      <div className="title-container">
        <h1 className="title-container--title">Products</h1>
        <Nav />
      </div>
      <CategoriesController
        selectedCategory={category}
        setCategory={setCategory}
      />
      <ProductsController category={category} />
    </>
  );
}

export default Home;
