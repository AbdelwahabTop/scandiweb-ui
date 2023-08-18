import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteProducts } from "../../utils/dataCrud";
import ProductCard from "../../components/product-card/product-card.component";
import { Navbar } from "../../components/navbar/navbar.component";
import Button from "../../components/button/button.component";
import { Spinner } from "../../components/spinner/spinner.component";
import { Container, ProductsContainer } from "./products-page.styles";
import Footer from "../../components/footer/footer.component";

function ProductsPage({ products, refetchData }) {
  const [checked, setChecked] = useState([]);

  const deleteHandeler = () => {
    deleteProducts(checked.join(","));

    refetchData();
  };

  const dataCheck =
    products.length > 0 ? (
      products.map((product) => (
        <ProductCard
          data={product}
          key={product.id}
          setChecked={setChecked}
          checked={checked}
        />
      ))
    ) : (
      <h3>No products to display, try add some</h3>
    );

  return (
    <Container>
      <Navbar title={"Products List"}>
        <Link to="/add-product" style={{ textDecoration: "none" }}>
          <Button buttonType={"add"}>ADD</Button>
        </Link>
        <Button
          buttonType={"delete"}
          onClick={deleteHandeler}
          id="delete-product-btn">
          MASS DELETE
        </Button>
      </Navbar>

      <ProductsContainer>
        {products ? dataCheck : <Spinner />}
      </ProductsContainer>

      <Footer />
    </Container>
  );
}

export default ProductsPage;
