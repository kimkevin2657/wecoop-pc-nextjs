import { useDispatch } from 'react-redux';

import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import { modalSliceAction } from '@features/modal/modalSlice';
import useAppStore from '@features/useAppStore';

const AuthCompleteModal = () => {
  const dispatch = useDispatch();
  const { isOpenAuthCompleteModal } = useAppStore((state) => state.MODAL);

  return (
    <Modal
      isCentered
      isOpen={isOpenAuthCompleteModal}
      onClose={() =>
        dispatch(modalSliceAction.setIsOpenAuthCompleteModal(false))
      }
    >
      <ModalOverlay />
      <ModalContent bg="transparent" maxW="540px" w="calc(100% - 20px)">
        <ModalBody px="0px">
          <Box
            bg="white"
            borderRadius="20px"
            position="relative"
            px="86px"
            py="60px"
          >
            <Text textAlign="center">가입이 완료되었습니다!</Text>
            <Text mt="16px" textAlign="center">
              혹시, 프리랜서이신가요?
              <br />
              계정설정으로 이동하여 프리랜서 정보를 등록해주세요.
            </Text>
            <SimpleGrid columns={2} spacing="10px" mt="47px">
              <Button
                w="100%"
                h="50px"
                borderRadius="full"
                colorScheme="dark"
                variant="outline"
              >
                <Text>홈으로 이동</Text>
              </Button>
              <Button w="100%" h="50px" borderRadius="full" colorScheme="dark">
                <Text>계정설정으로 이동</Text>
              </Button>
            </SimpleGrid>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthCompleteModal;
