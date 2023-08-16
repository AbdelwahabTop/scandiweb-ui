import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import Header from "../../components/header/header.component";
import { Form } from "../../components/form/form.components";

function AddProductPage({ products }) {
  return (
    <div>
      <Header title={"Add Product"}>
        <Button buttonType={"save"}>SAVE</Button>
        <Link to="/">
          <Button buttonType={"cancel"}>CANCEL</Button>
        </Link>
      </Header>

      <Form products={products} />
    </div>
  );
}

export default AddProductPage;
