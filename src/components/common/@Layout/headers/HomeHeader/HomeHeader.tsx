import Link from 'next/link';
import { useDispatch } from 'react-redux';

import {
  Avatar,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';

import { modalSliceAction } from '@features/modal/modalSlice';

import ArrowDownIcon from '@components/common/@Icons/System/ArrowDown';
import SearchIcon from '@components/common/@Icons/System/Search';

import { LAYOUT } from '@constants/layout';

import { HOME_HEADER_VARIANTS, HomeHeaderVariantType } from './HomeHeader.data';
import SearchForm from './_fragments/SearchForm';

interface HomeHeaderProps {
  variant?: HomeHeaderVariantType;
}

const HomeHeader = ({ variant = 'light' }: HomeHeaderProps) => {
  const isLogin = false;
  const cssByVariant = HOME_HEADER_VARIANTS[variant];

  const dispatch = useDispatch();

  return (
    <>
      <Flex //
        as="header"
        position="fixed"
        zIndex="sticky"
        w="100%"
        boxShadow="0 5px 15px 0 rgba(47, 47, 47, 0.11)"
        h={LAYOUT.HEADER.HEIGHT}
        {...cssByVariant.header}
      >
        <Container>
          <Flex alignItems="center" h="100%">
            <HStack spacing="35px" mr="auto">
              <Image //
                src="/images/logo.png"
                w="150px"
                h="auto"
                cursor="pointer"
              />
              {LINKS.map((l, idx) => {
                return (
                  <Link key={idx} href={l.slug} passHref>
                    <Text as="a">{l.title}</Text>
                  </Link>
                );
              })}
            </HStack>
            <SearchForm />
            {isLogin ? (
              <>
                <IconButton
                  bg="transparent"
                  aria-label="search"
                  icon={<SearchIcon />}
                />
                <IconButton
                  bg="transparent"
                  aria-label="search"
                  icon={<SearchIcon />}
                />
                <Button rightIcon={<ArrowDownIcon />} bg="transparent" px="0px">
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    w="40px"
                    h="40px"
                  />
                </Button>
              </>
            ) : (
              <HStack ml="10px">
                <Button
                  borderRadius="full"
                  h="32px"
                  onClick={() =>
                    dispatch(modalSliceAction.setIsOpenAuthSocialModal(true))
                  }
                >
                  <Text>로그인</Text>
                </Button>
                <Button
                  colorScheme="primary"
                  borderRadius="full"
                  h="32px"
                  onClick={() =>
                    dispatch(modalSliceAction.setIsOpenAuthSocialModal(true))
                  }
                >
                  <Text>회원가입</Text>
                </Button>
              </HStack>
            )}
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default HomeHeader;

const LINKS = [
  { title: '서비스 찾기', slug: '/' },
  { title: '서비스 등록', slug: '/' },
  { title: '이용방법', slug: '/' },
];
