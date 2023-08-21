import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteProducts } from "../../utils/dataCrud";
import ProductCard from "../../components/product-card/product-card.component";
import { Navbar } from "../../components/navbar/navbar.component";
import Button from "../../components/button/button.component";
import { Spinner } from "../../components/spinner/spinner.component";
import {
  Container,
  ProductsContainer,
  Notification,
} from "./products-page.styles";
import Footer from "../../components/footer/footer.component";

function ProductsPage({ products }) {
  const [checked, setChecked] = useState([]);
  const [alert, setAlert] = useState(0);

  const deleteHandeler = () => {
    if (checked.length === 0) {
      setAlert(1);
      setTimeout(() => {
        setAlert(0);
      }, 1500);
      return;
    } else {
      let temp = {
        ids: checked,
      };

      async function myFunc() {
        await deleteProducts(temp);
      }
      myFunc();

      window.location.reload();
    }
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
          onClick={() => deleteHandeler()}
          id="delete-product-btn">
          MASS DELETE
        </Button>
      </Navbar>
      <Notification style={{ opacity: `${alert}` }}>
        Please select products to delete
      </Notification>
      <ProductsContainer>
        {products ? dataCheck : <Spinner />}
      </ProductsContainer>

      <Footer />
    </Container>
  );
}

export default ProductsPage;
