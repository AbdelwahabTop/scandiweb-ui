import { TextInput } from "../text-input/text-input.component";

export const Furniture = () => {
  return (
    <div>
      <TextInput
        label="Height (CM)"
        type="number"
        name="height"
        id="height"
        placeholder="#height"
      />
      <TextInput
        label="Width (CM)"
        type="number"
        name="width"
        id="width"
        placeholder="#width"
      />
      <TextInput
        label="Length (CM)"
        type="number"
        name="len"
        id="length"
        placeholder="#length"
      />
    </div>
  );
};
