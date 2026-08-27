import { UserProps } from '../pages/Home';
import { StyledLink } from './styles/Link.styled';
import { StyledUser } from './styles/User.styled';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const User = ({
  login,
  avatar_url,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <StyledUser>
      <img src={avatar_url} alt={login} />
      <h3>{login}</h3>
      {location && (
        <p className="location">
          <FaMapMarkerAlt />
          {location}
        </p>
      )}
      <div className="stats">
        <div>
          <p>Followers:</p>
          <p className="highlight">{followers}</p>
        </div>
        <div>
          <p>Following:</p>
          <p className="highlight">{following}</p>
        </div>
      </div>
      <StyledLink to={`/repos/${login}`}>View Repositories</StyledLink>
    </StyledUser>
  );
};
