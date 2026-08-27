import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Loader } from '../components/Loader';
import { User } from '../components/User';
import { Button } from '../components/styles/Button.styled';
import { StyledForm } from '../components/styles/Form.styled';
import { ErrorMessage } from '../components/ErrorMessage';

export interface UserProps {
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  location: string;
}

export const Home = () => {
  const [username, setUsername] = React.useState('');
  const [error, setError] = React.useState('');
  const [data, setData] = React.useState<UserProps | null>(null);
  const [loading, setLoading] = React.useState(false);

  async function fetchData() {
    try {
      setError('');
      setLoading(true);
      setData(null);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 404) {
        throw new Error('The user was not found.');
      }
      const data = await response.json();
      const { avatar_url, login, location, followers, following } = data;
      const userData: UserProps = {
        avatar_url,
        login,
        location,
        followers,
        following,
      };
      setData(userData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!username) {
      setData(null);
      setError('Please enter an username.');
      window.setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }
    fetchData();
  }

  return (
    <section>
      <StyledForm onSubmit={handleSubmit}>
        <h2>
          {' '}
          <label htmlFor="username">Search for a GitHub user</label>
        </h2>
        <div>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username..."
          />
          <Button type="submit" aria-label="Search">
            <FaSearch />
          </Button>
        </div>
      </StyledForm>
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      {data && <User {...data} />}
    </section>
  );
};
