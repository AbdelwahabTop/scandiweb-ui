import {
  BaseButton,
  AddProductButton,
  MassDeleteButton,
  SaveButton,
  CancelButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  add: "add",
  save: "save",
  cancel: "cancel",
  delete: "delete",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.add]: AddProductButton,
    [BUTTON_TYPE_CLASSES.save]: SaveButton,
    [BUTTON_TYPE_CLASSES.cancel]: CancelButton,
    [BUTTON_TYPE_CLASSES.delete]: MassDeleteButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
