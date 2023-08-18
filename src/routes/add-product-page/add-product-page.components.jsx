import { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import { Navbar } from "../../components/navbar/navbar.component";
import { Form } from "../../components/form/form.components";
import Footer from "../../components/footer/footer.component";

function AddProductPage({ products, refetchData, setProducts }) {
  const submitBtn = useRef();

  return (
    <div>
      <Navbar title={"Add Product"}>
        <Button buttonType={"save"} onClick={() => submitBtn.current.click()}>
          Save
        </Button>
        <Link to="/">
          <Button buttonType={"cancel"}>Cancel</Button>
        </Link>
      </Navbar>

      <Form
        id="product_form"
        products={products}
        refetchData={refetchData}
        submitBtn={submitBtn}
      />

      <Footer />
    </div>
  );
}

export default AddProductPage;
