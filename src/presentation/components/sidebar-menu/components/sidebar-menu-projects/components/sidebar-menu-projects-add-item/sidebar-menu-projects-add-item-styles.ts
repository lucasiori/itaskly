import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 0.25rem 0;
`;

export const NewInputContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    background-color: #8b65fa;
    bottom: 0;
    left: 0;
    transition: width 150ms ease-in-out;
  }

  &:focus-within {
    &::before {
      width: 100%;
    }
  }
`;

export const NewItemInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #ada5bd;
  color: #ada5bd;
  font-size: 0.75rem;
  padding: 0.5rem 0;

  &::placeholder {
    color: #ada5db;
  }

  &:focus {
    outline: none;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-self: center;
  margin-top: 1.25rem;
`;
