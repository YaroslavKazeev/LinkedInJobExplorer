import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Home.jsx";
import ProductController from "./ProductController.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductController />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
