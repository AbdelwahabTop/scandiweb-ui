import { Container, Data, CheckBox } from "./product-card.styles";

function ProductCard({ data, setChecked }) {
  console.log(data);
  return (
    <Container>
      <div>
        <CheckBox type="checkbox" />
      </div>

      <Data>
        <div>{data.sku}</div>
        <div>{data.name}</div>
        <div>{data.price} $</div>
        <div>{data.description}</div>
      </Data>
    </Container>
  );
}

export default ProductCard;
