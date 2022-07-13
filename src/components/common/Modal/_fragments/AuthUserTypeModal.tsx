import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

import { modalSliceAction } from '@features/modal/modalSlice';
import useAppStore from '@features/useAppStore';

import CheckBox from '@components/common/CheckBox';

const AuthUserTypeModal = () => {
  const dispatch = useDispatch();
  const { isOpenAuthUserTypeModal } = useAppStore((state) => state.MODAL);
  const [type, setType] = useState(0);

  return (
    <Modal
      isCentered
      isOpen={isOpenAuthUserTypeModal}
      onClose={() =>
        dispatch(modalSliceAction.setIsOpenAuthUserTypeModal(false))
      }
    >
      <ModalOverlay />
      <ModalContent bg="transparent" maxW="540px" w="calc(100% - 20px)">
        <ModalBody px="0px">
          <Box
            bg="white"
            borderRadius="20px"
            position="relative"
            px="37px"
            pt="50px"
            pb="30px"
          >
            <Text>가입을 위한 마지막 단계에요!</Text>
            <Text mt="55px">유저타입</Text>
            <SimpleGrid columns={2} spacing="10px" mt="10px">
              <Center
                h="50px"
                borderColor={type === 1 ? 'primary.500' : 'gray.500'}
                borderWidth={type === 1 ? '2px' : '1px'}
                borderRadius="5px"
                cursor="pointer"
                onClick={() => setType(1)}
              >
                <Text color={type === 1 ? 'primary.500' : 'gray.500'}>
                  프리랜서
                </Text>
              </Center>
              <Center
                h="50px"
                borderColor={type === 2 ? 'primary.500' : 'gray.500'}
                borderWidth={type === 2 ? '2px' : '1px'}
                borderRadius="5px"
                cursor="pointer"
                onClick={() => setType(2)}
              >
                <Text color={type === 2 ? 'primary.500' : 'gray.500'}>
                  의뢰인
                </Text>
              </Center>
            </SimpleGrid>
            <Text mt="9px">
              * 의뢰인으로 가입하셔도 프리랜서로 활동할 수 있어요
            </Text>
            <CheckBox checked mt="50px" mb="35px">
              <Text ml="10px">
                회원가입시 위쿱의{' '}
                <Link href="#" passHref>
                  <Text as="a" color="primary.500" decoration="underline">
                    이용약관
                  </Text>
                </Link>{' '}
                및{' '}
                <Link href="#" passHref>
                  <Text as="a" color="primary.500" decoration="underline">
                    개인정보처리방침
                  </Text>
                </Link>
                에 대한 내용을 모두 확인하였으며 이에 동의합니다.
              </Text>
            </CheckBox>
            <VStack>
              <Button
                w="100%"
                h="50px"
                colorScheme="dark"
                onClick={() => {
                  dispatch(modalSliceAction.setIsOpenAuthUserTypeModal(false));
                  dispatch(modalSliceAction.setIsOpenAuthCompleteModal(true));
                }}
              >
                <Text>버튼만 누르면 가입 완료!</Text>
              </Button>
              <Button w="100%" h="50px">
                <Text>닫기</Text>
              </Button>
            </VStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthUserTypeModal;
