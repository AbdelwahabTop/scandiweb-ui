import { TextInput } from "../text-input/text-input.component";

export const Furniture = () => {
  return (
    <div>
      <TextInput label="Height (CM)" />
      <TextInput label="Width (CM)" />
      <TextInput label="Length (CM)" />
    </div>
  );
};
