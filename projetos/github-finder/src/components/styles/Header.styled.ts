import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: ${props => props.theme.box_shadow};
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(1000px, 90%);
    margin: 0 auto;
    padding-block: 2rem;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    svg {
      font-size: 3rem;
    }
  }

  a {
    font-size: 1.8rem;
    padding: 1rem;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
  }

  a:hover {
    background-color: ${props => props.theme.colors.hover_bg};
  }
`;
