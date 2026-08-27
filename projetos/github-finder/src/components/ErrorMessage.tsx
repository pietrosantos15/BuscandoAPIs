import { StyledError } from './styles/ErrorMessage.styled';

interface ErrorProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorProps) => {
  return <StyledError>{message}</StyledError>;
};
