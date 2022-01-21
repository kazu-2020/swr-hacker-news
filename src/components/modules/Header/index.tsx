import { Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { makePublicRouterInstance, useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const links = [
    { id: '0', title: '人気', url: '/' },
    { id: '1', title: '求人', url: '/jobs' },
  ];

  return (
    <Flex px={6} borderBottom="1px solid " borderColor="gray.300">
      {links.map((link) => (
        <NextLink key={link.id} href={link.url}>
          <Text
            p={3}
            color="orange.400"
            cursor="pointer"
            fontWeight={router.asPath === link.url ? 'bold' : 'normal'}
          >
            {link.title}
          </Text>
        </NextLink>
      ))}
    </Flex>
  );
};

export default Header;
