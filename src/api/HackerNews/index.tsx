import { hackerNews } from '@api/RestClient';
import useSWR from 'swr';
import { HackerNewsJob, HackerNewsStory } from '@type/api/HackerNews';

const getStoryAndJob = (url: string): Promise<HackerNewsJob | HackerNewsStory> =>
  hackerNews.get(url).then((res) => res.data);

export const useStories = (count: number) => {
  const fetcher = async () => {
    const result = await hackerNews.get('/topstories.json');
    const storyIds: number[] = result.data.slice(0, count + 1);

    return Promise.all(storyIds.map((id) => getStoryAndJob(`/item/${id}.json`)));
  };

  const { data, error, mutate } = useSWR(['/items', count], fetcher);

  return {
    stories: data,
    error,
    isLoading: !error && !data,
    refetchStories: mutate,
  };
};
