import { TextInput } from "../text-input/text-input.component";

export const Book = () => {
  return (
    <div>
      <TextInput
        type="number"
        label="Weight (KG)"
        name="weight"
        id="weight"
        placeholder="#weight"
      />
    </div>
  );
};
