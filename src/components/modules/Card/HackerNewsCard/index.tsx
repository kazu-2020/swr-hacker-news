import { Box, Text, Icon, Flex, Tag, TagLabel, Heading } from '@chakra-ui/react';
import { StarIcon, LinkIcon } from '@chakra-ui/icons';
import { HackerNewsType } from '@type/api/HackerNews';
import { useRouter } from 'next/router';

type HackerNewsCardProps = {
  title?: string;
  url?: string;
  type: HackerNewsType;
  starCount?: number;
  postedDate?: string;
  authorName?: string;
};

const HackerNewsCard = ({
  title,
  url,
  type,
  starCount,
  postedDate,
  authorName,
}: HackerNewsCardProps) => {
  const router = useRouter();

  const displayType = (type: HackerNewsType) => {
    switch (type) {
      case 'job':
        return '求人';
      case 'story':
        return 'ニュース';
      default:
        return 'その他';
    }
  };

  return (
    <Box
      w="600px"
      p={4}
      border="1px solid"
      borderColor="gray.300"
      borderRadius="4px"
      cursor="pointer"
      onClick={() => window.open(url, '_blank', 'noreferrer')}
    >
      <Flex justifyContent="space-between" mb={2}>
        <Tag>
          <TagLabel>{displayType(type)}</TagLabel>
        </Tag>

        <Flex lineHeight="1.5" alignItems="center" color="orange.400">
          <Icon as={StarIcon} mr={1} />
          <Text>{starCount}</Text>
        </Flex>
      </Flex>
      <Heading mb={2} isTruncated>
        {title}
      </Heading>

      <Flex mb={2} alignItems="center" gridColumnGap={1}>
        <Icon as={LinkIcon} />
        <Text overflow="auto" _hover={{ textDecoration: 'underline' }}>
          {url}
        </Text>
      </Flex>

      <Flex gridColumnGap={2}>
        <Text>投稿者</Text>
        <Text
          maxW={'50%'}
          isTruncated
          _hover={{ textDecoration: 'underline' }}
          onClick={(event) => {
            router.push(`/users/${authorName}`);
            event.stopPropagation();
          }}
        >
          {authorName}
        </Text>
      </Flex>

      <Box textAlign="end">
        <Text>{postedDate}に投稿</Text>
      </Box>
    </Box>
  );
};

export default HackerNewsCard;
