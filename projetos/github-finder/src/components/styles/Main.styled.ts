import styled from 'styled-components';

export const Main = styled.main`
  background-color: ${props => props.theme.colors.primary};
  flex: 1;
  & > section {
    width: min(1000px, 90%);
    margin: 0 auto;
  }
`;
