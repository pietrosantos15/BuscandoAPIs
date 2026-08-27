import styled from 'styled-components';

export const StyledUser = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: ${props => props.theme.box_shadow};
  border-radius: 10px;
  text-align: center;
  padding: 5rem 2rem;
  max-width: 600px;
  margin: 4rem auto;
  img {
    margin: 0 auto;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 5px solid ${props => props.theme.colors.highlight};
  }

  h3 {
    margin: 1.6rem;
    font-size: 2.4rem;
    font-weight: 700;
  }

  h3,
  p {
    color: #fff;
  }

  .location {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: ${props => props.theme.colors.text_color};
    svg {
      color: ${props => props.theme.colors.highlight};
      font-size: 2rem;
    }
  }

  .stats {
    display: flex;
    justify-content: center;
    margin-block: 3rem;
    div {
      padding-inline: 2rem;
    }
    div:first-child {
      border-right: 1px solid currentColor;
    }
  }

  .highlight {
    background-color: ${props => props.theme.colors.highlight};
    color: #000;
    font-weight: 600;
    padding: 1rem;
    border-radius: 7px;
    margin-top: 1rem;
  }
`;
