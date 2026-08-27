import React from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { Repo } from '../components/Repo';
import { StyledRepos } from './styles/Repos.styled';
import { ErrorMessage } from '../components/ErrorMessage';

export interface RepoProps {
  id: number;
  name: string;
  language: string;
  forks_count: number;
  stargazers_count: number;
  html_url: string;
}

export const Repos = () => {
  const { username } = useParams();
  const [repos, setRepos] = React.useState<RepoProps[] | [] | null>(null);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    function handleData(data: RepoProps[]) {
      setRepos(
        data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 20),
      );
    }
    async function fetchRepos() {
      try {
        setLoading(true);
        setError('');
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`,
        );
        if (!response.ok) {
          throw new Error('Repositories Not Found');
        }
        const data = (await response.json()) as RepoProps[];
        handleData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section style={{ color: '#fff', textAlign: 'center' }}>
      <h2 style={{ marginBlock: '3rem' }}>Repositories: {username}</h2>
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      {repos && (
        <StyledRepos>
          {repos.length === 0 && (
            <p style={{ textAlign: 'center' }}>No repositories found.</p>
          )}
          {repos.map((repo: RepoProps) => (
            <Repo {...repo} key={repo.id} />
          ))}
        </StyledRepos>
      )}
    </section>
  );
};
