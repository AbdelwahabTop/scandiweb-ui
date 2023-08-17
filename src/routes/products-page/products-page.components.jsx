import { useState } from "react";
import { Navbar } from "../../components/navbar/navbar.component";
import ProductCard from "../../components/product-card/product-card.component";
import { Container, ProductsContainer } from "./products-page.styles";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import { deleteProducts } from "../../utils/dataCrud";
import { Spinner } from "../../components/spinner/spinner.component";

function ProductsPage({ products, refetchData, setProducts }) {
  const [checked, setChecked] = useState([]);

  const deleteHandeler = () => {
    deleteProducts(checked);
    /* setProducts empty string to show spinner 
        but in big projects we can use middleware 
        like redux to handle this
    */
    setProducts("");
    refetchData();
  };

  console.log("products");

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
      {/* Header */}
      <Navbar title={"Products List"}>
        <Link to="/add-product" style={{ textDecoration: "none" }}>
          <Button buttonType={"add"}>ADD</Button>
        </Link>
        <Button buttonType={"delete"} onClick={deleteHandeler}>
          MASS DELETE
        </Button>
      </Navbar>

      {/* Products */}
      <ProductsContainer>
        {products ? dataCheck : <Spinner />}
      </ProductsContainer>

      {/* Footer */}
      {/* <div>Footer</div> */}
    </Container>
  );
}

export default ProductsPage;
