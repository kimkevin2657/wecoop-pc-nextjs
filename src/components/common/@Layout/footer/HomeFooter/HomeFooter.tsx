import Link from 'next/link';
import React from 'react';

import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';

const HomeFooter = () => {
  return (
    <>
      <Box h="60px" bg="#f6f6f6">
        <Container h="100%">
          <Flex h="100%" alignItems="center">
            {HEADLINKS.map((l, idx) => {
              const isLast = HEADLINKS.length - 1 === idx;
              return (
                <React.Fragment key={idx}>
                  <Link href={l.slug} passHref>
                    <Text as="a">{l.title}</Text>
                  </Link>
                  {!isLast && <Box h="12px" w="1px" bg="#8e8e8e" mx="15px" />}
                </React.Fragment>
              );
            })}
            <Box w="4px" h="4px" borderRadius="full" bg="#8e8e8e" mx="12px" />
            <Text>오전 10시 ~ 오후 6시 (주말, 공휴일 제외)</Text>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container py="30px">
          <Image src="/images/logo.png" w="200px" h="auto" />
          <Text mt="30px">
            주식회사 위쿱은 통신판매중개자이며, 통신판매의 당사자가 아닙니다.
            상품, 상품정보, 거래에 관한 의무와 책임은 판매회원에게 있습니다.
            <br />
            주식회사 위쿱에 게시된 모든 상품 / 판매회원 / 중개 서비스 / 거래정보
            / 콘텐츠 등에 대한 무단복제, 전송, 배포, 스크래핑 등의 행위는
            저작권법, 콘텐츠산업 진흥법 등 관련법령에 의하여 엄격히 금지됩니다.
          </Text>
          <Divider borderColor="black" my="30px" />
          <Flex alignItems="center">
            {LINKS.map((l, idx) => {
              const isLast = LINKS.length - 1 === idx;
              return (
                <React.Fragment key={idx}>
                  <Link href={l.slug} passHref>
                    <Text as="a">{l.title}</Text>
                  </Link>
                  {!isLast && <Box h="14px" w="1px" bg="#2e2e2e" mx="15px" />}
                </React.Fragment>
              );
            })}
          </Flex>
          <Flex mt="30px">
            <Text>주식회사 위쿱</Text>
            <Flex direction="column" ml="35px">
              <HStack spacing="35px">
                {INFOMATION.slice(0, 3).map((info, idx) => {
                  return (
                    <Flex alignItems="center" key={idx}>
                      <Text>{info.title}</Text>
                      <Box h="14px" w="1px" bg="#2e2e2e" mx="15px" />
                      <Text>{info.content}</Text>
                    </Flex>
                  );
                })}
              </HStack>
              <HStack spacing="35px">
                {INFOMATION.slice(3).map((info, idx) => {
                  return (
                    <Flex alignItems="center" key={idx}>
                      <Text>{info.title}</Text>
                      <Box h="14px" w="1px" bg="#2e2e2e" mx="15px" />
                      <Text>{info.content}</Text>
                    </Flex>
                  );
                })}
                <Text fontSize="12px" ml="auto">
                  Copyright © 2022 Wecoop Inc. All rights reserved.
                </Text>
              </HStack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
export default HomeFooter;

const HEADLINKS = [
  { title: '메인', slug: '/' },
  { title: '회사소개', slug: '/' },
  { title: '채용', slug: '/' },
  { title: '이용가이드', slug: '/' },
  { title: '고객센터', slug: '/' },
];

const LINKS = [
  { title: '이용약관', slug: '/' },
  { title: '개인정보처리방침', slug: '/' },
  { title: '사업자 정보 확인', slug: '/' },
];

const INFOMATION = [
  { title: '주소', content: '경기도 성남시 분당구 산운로 7, 101동 301호' },
  { title: '대표', content: '황병준' },
  { title: '문의', content: 'support@wecoop.link' },
  { title: '사업자 등록번호', content: '114-88-02362' },
  { title: '통신판매업신고', content: '2022-성남분당-1234' },
  { title: '클라우드호스팅', content: 'Amazon Web Service Korea LLC' },
];
