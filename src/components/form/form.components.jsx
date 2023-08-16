import { useState } from "react";
import { TextInput } from "../text-input/text-input.component";
import { Types } from "../../utils/productsTypes.js";
import { isFormValid } from "../../utils/formValidation";
import { addProduct } from "../../utils/dataCrud";
import { Select, FormContainer, Wrapper } from "./form.styles";
import { Container, Label } from "../text-input/text-input.styles";

export const Form = ({ products, refetchData, submitBtn }) => {
  const [type, setType] = useState("noValue");
  const [notification, setNotification] = useState("");

  const typeChangeHandler = (event) => {
    setType(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let dataFields = event.target.elements;
    let description = "";

    const [error, msg] = isFormValid(products, dataFields);

    if (error) {
      setNotification({ txt: msg, ok: 0 });
      return;
    } else {
      setNotification({ txt: "Added Successfully", ok: 1 });
      description = msg;
    }

    let temp = {
      status: "",
      sku: dataFields.sku.value,
      name: dataFields.name.value,
      price: dataFields.price.value,
      description: description,
    };

    // clear fields
    for (let x in dataFields) {
      if (dataFields[x].tagName === "INPUT") {
        dataFields[x].value = "";
      }
    }

    addProduct(temp);
    refetchData();
  };

  return (
    <FormContainer id="product_form" onSubmit={submitHandler}>
      <Wrapper>
        <TextInput name="sku" label="SKU" id="sku" placeholder="#name" />
        <TextInput name="name" label="Name" id="name" placeholder="#name" />
        <TextInput
          name="price"
          label="Price ($)"
          id="price"
          placeholder="#price"
        />

        <Container>
          <Label htmlFor="types">Type Switcher</Label>
          <Select
            name="types"
            value={type}
            onChange={typeChangeHandler}
            id="productType">
            {Object.keys(Types).map((key, index) => {
              return (
                <option
                  value={key}
                  key={key}
                  disabled={(index = 0 ? "disabled" : "")}>
                  {Types[key].title}
                </option>
              );
            })}
          </Select>
        </Container>

        <article>
          <h3>{Types[type]["txt"]}</h3>
          {Types[type]["compo"]}
        </article>
        <h3
          // className={styles.notify}
          style={
            notification.ok === 1 ? { color: "#788e41" } : { color: "#b9354d" }
          }>
          {notification.txt}
        </h3>

        <button
          type="submit"
          ref={submitBtn}
          style={{ display: "none" }}></button>
      </Wrapper>
    </FormContainer>
  );
};
