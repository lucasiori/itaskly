import styled from 'styled-components';
import { theme } from '@presentation/styles';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h5`
  color: ${theme.colors.title};
  font-size: 1rem;
`;

export const ProjectsAmount = styled.span`
  color: ${theme.colors.subtitle};
  font-size: 1rem;
  font-weight: ${theme.fontWeight.semiBold};
  margin-left: auto;
`;
