import { StyledFooter } from './styles/Footer.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p>
          Made with &#9825; by{' '}
          <a href="https://github.com/julianachagas" target="_blank">
            Juliana Chagas
          </a>
        </p>
        <p>All rights reserved &copy; 2023</p>
      </div>
    </StyledFooter>
  );
};
