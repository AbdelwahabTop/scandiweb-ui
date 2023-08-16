import { useEffect, useState } from "react";
import { getProducts } from "./utils/dataCrud";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsPage from "./routes/products-page/products-page.components";
import AddProductPage from "./routes/add-product-page/add-product-page.components";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let res = await getProducts();
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        index
        element={<ProductsPage products={products} setProducts={setProducts} />}
      />
      <Route
        path="/add-product"
        index
        element={<AddProductPage products={products} />}
      />
    </Routes>
  );
};

export default App;
