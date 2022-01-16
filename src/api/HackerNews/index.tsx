import { hackerNews } from '@api/RestClient';
import useSWR from 'swr';
import { HackerNewsJob, HackerNewsStory, HackerNewsUser } from '@type/api/HackerNews';

const getItem = (url: string): Promise<HackerNewsJob | HackerNewsStory> =>
  hackerNews.get(url).then((res) => res.data);

export const useStories = (count: number) => {
  const fetcher = async () => {
    const result = await hackerNews.get('/topstories.json');
    const storyIds: number[] = result.data.slice(0, count + 1);

    return Promise.all(storyIds.map((id) => getItem(`/item/${id}.json`)));
  };

  const { data, error, mutate } = useSWR(['/items', count], fetcher);

  return {
    stories: data,
    error,
    isLoading: !error && !data,
    refetchStories: mutate,
  };
};

export const useUser = (userId: string) => {
  const fetcher: () => Promise<HackerNewsUser> = () =>
    hackerNews.get(`/user/${userId}.json`).then((res) => res.data);

  const { data, error } = useSWR(['/user', userId], fetcher);

  return {
    profile: data,
    error,
    isLoading: !error && !data,
  };
};

export const useJobs = (count: number) => {
  const fetcher = async () => {
    const result = await hackerNews.get('/jobstories.json');
    const jobIds: number[] = result.data.slice(0, count + 1);

    return Promise.all(jobIds.map((id) => getItem(`/item/${id}.json`)));
  };

  const { data, error, mutate } = useSWR(['/jobs', count], fetcher);

  return {
    jobs: data as HackerNewsJob[] | undefined,
    error,
    isLoading: !error && !data,
    refetchJobs: mutate,
  };
};
