import styled from 'styled-components';
import { theme } from '@presentation/styles';

export const SidebarMenuHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > svg {
    transform: scale(0.75);
  }

  @media (min-width: 768px) {
    gap: 1rem;

    > svg {
      transform: scale(1);
    }
  }
`;

export const SidebarMenuHeaderAppName = styled.h3`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.title};
  font-size: 1.5rem;
  font-weight: ${theme.fontWeight.bold};

  strong {
    color: ${theme.colors.subtitle};
    font-size: 0.75rem;
    letter-spacing: 0.1rem;
  }
`;

export const SidebarMenuHeaderCloseButtonContainer = styled.div`
  display: flex;
  margin-left: auto;

  @media (min-width: 768px) {
    display: none;
  }
`;
