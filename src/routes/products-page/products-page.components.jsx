// import ProductCard from "../components/ProductCard";
import Header from "../../components/Header/header.component";
import ProductCard from "../../components/product-card/product-card.component";
import { Container, ProductsContainer } from "./products-page.styles";

function ProductsPage() {
  return (
    <Container>
      {/* Header */}
      <Header />

      {/* Products */}
      <ProductsContainer>
        <ProductCard />
      </ProductsContainer>

      {/* Footer */}
      {/* <div>Footer</div> */}
    </Container>
  );
}

export default ProductsPage;
