import { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import { Navbar } from "../../components/navbar/navbar.component";
import { Form } from "../../components/form/form.components";

function AddProductPage({ products, refetchData }) {
  const submitBtn = useRef();

  return (
    <div>
      <Navbar title={"Add Product"}>
        <Button buttonType={"save"} onClick={() => submitBtn.current.click()}>
          SAVE
        </Button>
        <Link to="/">
          <Button buttonType={"cancel"}>CANCEL</Button>
        </Link>
      </Navbar>

      <Form
        products={products}
        refetchData={refetchData}
        submitBtn={submitBtn}
      />
    </div>
  );
}

export default AddProductPage;
