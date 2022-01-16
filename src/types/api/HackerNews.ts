export type HackerNewsType = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';

type HackerNewsBase = {
  id: number;
  delected?: boolean;
  type: HackerNewsType;
  by?: string;
  time: number;
  dead?: boolean;
  kids?: number[];
  score?: number;
};

export type HackerNewsJob = HackerNewsBase & {
  text?: string;
  url?: string;
  title?: string;
};

export type HackerNewsStory = HackerNewsBase & {
  descendants?: number;
  title?: string;
  url?: string;
};

export type HackerNewsUser = {
  id: string;
  delay?: number;
  created: number;
  karma: number;
  about?: string;
  submitted?: number[];
};
