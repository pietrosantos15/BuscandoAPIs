import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StyledHeader } from './styles/Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1>
          <FaGithub />
          <span>GitHub Finder</span>
        </h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </StyledHeader>
  );
};
