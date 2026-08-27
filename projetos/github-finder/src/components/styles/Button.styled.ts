import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.accent};
  color: #000;
  font-weight: 600;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;
