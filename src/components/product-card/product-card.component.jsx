import { Container, Data } from "./product-card.styles";

function ProductCard({ data, setChecked, checked }) {
  const addToDeleteList = (e) => {
    if (e.target.checked) {
      setChecked((prev) => {
        return [...prev, e.target.id];
      });
    } else {
      setChecked((prev) => {
        return [...prev.filter((p) => p !== e.target.id)];
      });
    }
  };

  const red = checked.includes(`${data.id}`)
    ? { backgroundColor: "#ff4c4c" }
    : {};

  return (
    <Container style={red}>
      <div>
        <input
          type="checkbox"
          id={data.id}
          onChange={addToDeleteList}
          className="delete-checkbox"
          style={{ height: "20px", width: "20px", cursor: "pointer" }}
        />
      </div>

      <Data>
        <div>{data.sku}</div>
        <div>{data.name}</div>
        <div>{data.price} $</div>
        <div>{data.attribute}</div>
      </Data>
    </Container>
  );
}

export default ProductCard;
