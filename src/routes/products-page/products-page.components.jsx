import { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import ProductCard from "../../components/product-card/product-card.component";
import { Container, ProductsContainer } from "./products-page.styles";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import { getProducts, deleteProducts } from "../../utils/dataCrud";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let res = await getProducts();
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      {/* Header */}
      <Header title={"Products List"}>
        <Link to="/add-product" style={{ textDecoration: "none" }}>
          <Button buttonType={"add"}>ADD</Button>
        </Link>
        <Button buttonType={"delete"} onClick={() => deleteProducts(checked)}>
          MASS DELETE
        </Button>
      </Header>

      {/* Products */}
      <ProductsContainer>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              data={product}
              key={product.id}
              setChecked={setChecked}
            />
          ))
        ) : (
          <h3>No products to display, try add some</h3>
        )}
      </ProductsContainer>

      {/* Footer */}
      {/* <div>Footer</div> */}
    </Container>
  );
}

export default ProductsPage;
