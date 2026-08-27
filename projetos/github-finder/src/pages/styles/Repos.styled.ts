import styled from 'styled-components';

export const StyledRepos = styled.div`
  max-width: 600px;
  background-color: ${props => props.theme.colors.secondary};
  margin: 0 auto;
  border-radius: 10px;
  padding: 3rem;
  margin: 0 auto 4rem;
  text-align: left;
  @media (max-width: 500px) {
    padding: 2rem;
  }
`;
