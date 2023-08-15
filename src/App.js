import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsPage from "./routes/products-page/products-page.components";
import AddProductPage from "./routes/add-product-page/add-product-page.components";

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<ProductsPage />} />
      <Route path="/add-product" index element={<AddProductPage />} />
    </Routes>
  );
};

export default App;
