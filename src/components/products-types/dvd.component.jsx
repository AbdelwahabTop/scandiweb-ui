import { TextInput } from "../text-input/text-input.component";

export const Dvd = () => {
  return (
    <div>
      <TextInput
        label="Size (MB)"
        type="number"
        name="size"
        id="size"
        placeholder="#size"
      />
    </div>
  );
};
