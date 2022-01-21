import DefaultLayout from '@layout/Default';
import { useRouter } from 'next/router';
import { useUser } from 'api/HackerNews';
import { Heading, Box, Text } from '@chakra-ui/react';
import { displayDate } from '@util/dayjs';

const Profile = () => {
  const router = useRouter();
  const { profile } = useUser(String(router.query?.id));

  return (
    <>
      {profile && (
        <DefaultLayout>
          <Box p={6}>
            <Heading>{profile?.id}</Heading>
            {profile?.about && <Text>{profile.about}</Text>}
            <Text>{displayDate(profile.created)} に登録</Text>
            <Text>投稿数: {profile?.submitted?.length}</Text>
          </Box>
        </DefaultLayout>
      )}
    </>
  );
};

export default Profile;
