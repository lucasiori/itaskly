import styled from 'styled-components';
import { theme } from '@presentation/styles';
import type { StyledStatusTagContainerProps } from './status-tag-types';

export const StatusTagContainer = styled.div<StyledStatusTagContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $status }) => {
    return $status === 'pending' ? theme.colors.purple : theme.colors.green;
  }};
  border-radius: 0.25rem;
  color: ${theme.colors.white};
  font-size: 0.5rem;
  font-weight: ${theme.fontWeight.bold};
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
`;
