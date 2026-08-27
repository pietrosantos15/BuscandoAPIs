import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.accent};
  color: #000;
  font-weight: 600;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;
