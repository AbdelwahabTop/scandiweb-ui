import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import Header from "../../components/header/header.component";

function AddProductPage() {
  return (
    <div>
      <Header title={"Add Product"}>
        <Button buttonType={"save"}>SAVE</Button>
        <Link to="/">
          <Button buttonType={"cancel"}>CANCEL</Button>
        </Link>
      </Header>
    </div>
  );
}

export default AddProductPage;
