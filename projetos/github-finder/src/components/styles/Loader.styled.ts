import styled from 'styled-components';

export const StyledLoader = styled.div`
  width: 25px;
  height: 25px;
  margin: 5rem auto;
  position: relative;

  div {
    width: 8px;
    height: 8px;
    background-color: ${props => props.theme.colors.text_color};
    border-radius: 50%;
    position: absolute;
    transform-origin: 0 25px;
    animation: spin 2s infinite;
  }

  @keyframes spin {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
`;
