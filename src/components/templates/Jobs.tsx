import DefaultLayout from '@layout/Default';
import { Box, Center, Button, Spinner } from '@chakra-ui/react';
import { useJobs } from 'api/HackerNews';
import HackerNewsCard from '@module/Card/HackerNewsCard';
import { displayDate } from '@util/dayjs';

const Jobs = () => {
  const { jobs, refetchJobs, isLoading } = useJobs(30);

  return (
    <DefaultLayout>
      <Box p={6}>
        <Center flexDirection="column" gridRowGap={4}>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Button variant="ghost" onClick={() => refetchJobs()}>
                データ更新
              </Button>

              {jobs?.map((job) => (
                <HackerNewsCard
                  key={job.id}
                  title={job.title}
                  url={job.url}
                  type={job.type}
                  starCount={job?.score ?? 0}
                  postedDate={displayDate(job.time)}
                  authorName={job.by}
                />
              ))}
            </>
          )}
        </Center>
      </Box>
    </DefaultLayout>
  );
};

export default Jobs;
