import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import AddProductPage from "./components/AddProductPage/AddProductPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<ProductsPage />} />
      <Route path="/add-product" index element={<AddProductPage />} />
    </Routes>
  );
};

export default App;
