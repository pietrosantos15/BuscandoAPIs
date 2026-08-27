import styled from 'styled-components';

export const StyledRepo = styled.div`
  color: #fff;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 3rem;
  background-color: ${props => props.theme.colors.primary};
  word-wrap: break-word;
  @media (max-width: 500px) {
    padding: 2rem;
  }
  & + & {
    margin-top: 3rem;
  }
  p {
    margin-block: 1.6rem;
    display: flex;
    align-items: center;
    svg {
      font-size: 2.2rem;
      margin-right: 1rem;
    }
  }
  h3 {
    font-weight: 700;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    svg {
      font-size: 2rem;
    }
  }

  & > div {
    display: flex;
    gap: 1rem;
    div {
      border: 2px solid #fff;
      border-radius: 5px;
      margin-bottom: 2.4rem;
      overflow: hidden;
      display: flex;
      align-items: center;

      span {
        display: inline-block;
        padding: 0.5rem 1rem;
      }

      span:first-child {
        background-color: ${props => props.theme.colors.highlight};
        color: #000;
        font-size: 2rem;

        svg {
          position: relative;
          top: 2px;
        }
      }
    }
  }
`;
