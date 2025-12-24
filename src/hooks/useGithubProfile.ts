import { useCallback, useEffect, useState } from 'react';
import { api } from '../services/axios';

interface GithubProfile {
  name: string;
  html_url: string;
  avatar_url: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

interface useGithubProfileProps {
  username: string;
}

export function useGithubProfile({ username }: useGithubProfileProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({} as GithubProfile);

  const getProfile = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get<GithubProfile>(`/users/${username}`);
      setProfile(response.data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return {
    profile,
    isLoading,
  };
}
