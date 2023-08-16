import { useState } from "react";
import { TextInput } from "../text-input/text-input.component";
import { Types } from "../../utils/productsTypes.js";

export const Form = ({ children, onSubmit }) => {
  const [type, setType] = useState("noValue");

  const typeChangeHandler = (event) => {
    setType(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextInput name="sku" label="SKU" />
      <TextInput name="name" label="Name" />
      <TextInput name="price" label="Price ($)" />
      <label htmlFor="types">Type Switcher</label>
      <select
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
      </select>

      {Types[type]["compo"]}
    </form>
  );
};
