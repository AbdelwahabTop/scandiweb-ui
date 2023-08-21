import { useEffect, useState } from "react";
import { getProducts } from "./utils/dataCrud";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsPage from "./routes/products-page/products-page.components";
import AddProductPage from "./routes/add-product-page/add-product-page.components";

const App = () => {
  const [products, setProducts] = useState("");
  const [fetchCount, setFetchCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      let res = await getProducts();
      setProducts(res.data);
    };
    fetchProducts();
  }, [fetchCount]);

  const refetchData = () => {
    setFetchCount((prevFetchCount) => prevFetchCount + 1);
  };

  return (
    <Routes>
      <Route
        path="/"
        index
        element={<ProductsPage products={products} refetchData={refetchData} />}
      />
      <Route
        path="/add-product"
        index
        element={
          <AddProductPage products={products} refetchData={refetchData} />
        }
      />
    </Routes>
  );
};

export default App;
