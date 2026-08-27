import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.secondary};
  padding-block: 2.5rem;
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.5;
  & > div {
    width: min(1000px, 90%);
    margin: 0 auto;
  }
  a:hover {
    text-decoration: underline;
    color: ${props => props.theme.colors.accent};
  }
`;
