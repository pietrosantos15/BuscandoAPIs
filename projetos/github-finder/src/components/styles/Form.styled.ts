import styled from 'styled-components';

export const StyledForm = styled.form`
  text-align: center;
  padding-top: 3rem;
  div {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  div,
  h2 {
    margin-bottom: 1.6rem;
  }
  label {
    font-size: 2rem;
    font-weight: 400;
  }
  input {
    border: none;
    border-radius: 5px;
  }
  input,
  button {
    padding: 0.8rem;
  }
`;
