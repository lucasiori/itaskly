import styled, { css } from 'styled-components';
import { theme } from '@presentation/styles';
import type { StyledCheckboxProps } from './checkbox-types';

export const StyledCheckbox = styled.label<StyledCheckboxProps>`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${theme.colors.white};
  border: 0.125rem solid ${theme.colors.text};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 300ms ease-in-out, border-color 300ms ease-in-out;

  ${({ $checked }) =>
    $checked &&
    css`
      background-color: ${theme.colors.secondary};
      border: 0.125rem solid ${theme.colors.secondary};
    `};
`;
