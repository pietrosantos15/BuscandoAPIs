import { RepoProps } from '../pages/Repos';
import { StyledLink } from './styles/Link.styled';
import { StyledRepo } from './styles/Repo.styled';
import { FaRegStar } from 'react-icons/fa';
import { VscRepoForked } from 'react-icons/vsc';
import { BsCodeSlash } from 'react-icons/bs';
import { RiGitRepositoryLine } from 'react-icons/ri';

export const Repo = ({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepoProps) => {
  return (
    <StyledRepo>
      <h3>{name}</h3>
      <p>
        <BsCodeSlash />
        {language}
      </p>
      <div>
        <div>
          <span>
            <FaRegStar />
          </span>
          <span>{stargazers_count}</span>
        </div>
        <div>
          <span>
            <VscRepoForked />
          </span>
          <span>{forks_count}</span>
        </div>
      </div>
      <StyledLink to={html_url} target="_blank">
        View Code
        <RiGitRepositoryLine />
      </StyledLink>
    </StyledRepo>
  );
};
