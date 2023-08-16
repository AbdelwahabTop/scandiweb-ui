import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { getProducts } from "./utils/dataCrud";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductsPage from "./routes/products-page/products-page.components";
import AddProductPage from "./routes/add-product-page/add-product-page.components";

const App = () => {
  // const [products, setProducts] = useState([]);
  const [fetchCount, setFetchCount] = useState(0);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     let res = await getProducts();
  //     // console.log(res.data);
  //     setProducts(res.data);
  //   };
  //   fetchProducts();
  // }, [products, fetchCount]);

  const refetchData = () => {
    setFetchCount((prevFetchCount) => prevFetchCount + 1);
  };

  getProducts();
  const { isLoading, isError, data, error } = useQuery(
    "yourDataKey",
    getProducts
  );

  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          <ProductsPage
            isLoading={isLoading}
            products={data}
            refetchData={refetchData}
          />
        }
      />
      <Route
        path="/add-product"
        index
        element={<AddProductPage products={data} refetchData={refetchData} />}
      />
    </Routes>
  );
};

export default App;
