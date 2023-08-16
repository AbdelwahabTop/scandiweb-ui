import { Label, Container, Input } from "./text-input.styles";

export const TextInput = ({ type, name, label, id, placeholder }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        required="required"
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </Container>
  );
};
