export type StyledCheckboxProps = {
  $checked: boolean;
};

export type CheckboxProps = {
  id: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
};
