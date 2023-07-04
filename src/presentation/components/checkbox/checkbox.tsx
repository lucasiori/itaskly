import { useState } from 'react';
import { StyledCheckbox } from './checkbox-styles';
import type { CheckboxProps } from './checkbox-types';

export const Checkbox = ({
  id,
  checked: initialCheckedState = false,
  onChange,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(initialCheckedState);

  const handleChange = (value: boolean) => {
    setChecked(value);
    onChange?.(value);
  };

  return (
    <>
      <StyledCheckbox role="checkbox" htmlFor={id} $checked={checked} />

      <input
        type="checkbox"
        id={id}
        name={id}
        checked={checked}
        hidden
        onChange={({ target }) => handleChange(target.checked)}
      />
    </>
  );
};
