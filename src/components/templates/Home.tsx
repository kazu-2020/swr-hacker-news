import DefaultLayout from '@layout/Default';
import { Box, Center, Link, Button, Spinner } from '@chakra-ui/react';
import { useStories } from 'api/HackerNews';
import HackerNewsCard from '@module/Card/HackerNewsCard';
import { displayDate } from '@util/dayjs';

const Home = () => {
  const { stories, refetchStories, isLoading } = useStories(30);

  return (
    <DefaultLayout>
      <Box p={6}>
        <Center flexDirection="column" gridRowGap={4}>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Button variant="ghost" onClick={() => refetchStories()}>
                データ更新
              </Button>

              {stories?.map((story) => (
                <HackerNewsCard
                  key={story.id}
                  title={story.title}
                  url={story.url}
                  type={story.type}
                  starCount={story?.score ?? 0}
                  postedDate={displayDate(story.time)}
                  authorName={story.by}
                />
              ))}
            </>
          )}
        </Center>
      </Box>
    </DefaultLayout>
  );
};

export default Home;
