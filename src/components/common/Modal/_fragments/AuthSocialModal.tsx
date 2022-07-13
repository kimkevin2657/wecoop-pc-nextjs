import { useDispatch } from 'react-redux';

import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';

import { modalSliceAction } from '@features/modal/modalSlice';
import useAppStore from '@features/useAppStore';

import SocialButton from '@components/common/SocialButton';

const AuthSocialModal = () => {
  const dispatch = useDispatch();
  const { isOpenAuthSocialModal } = useAppStore((state) => state.MODAL);
  return (
    <Modal
      isCentered
      isOpen={isOpenAuthSocialModal}
      onClose={() => dispatch(modalSliceAction.setIsOpenAuthSocialModal(false))}
    >
      <ModalOverlay />
      <ModalContent bg="transparent" maxW="540px" w="calc(100% - 20px)">
        <ModalBody px="0px">
          <Box bg="white" borderRadius="20px" position="relative" p="37px">
            <Image src="/images/logo.png" w="200px" />
            <Text>
              당신을 위한 파이프라인,
              <br />
              <Text as="span" color="primary.500">
                위쿱
              </Text>
            </Text>
            <VStack mt="110px">
              {DATA.map((d, idx) => {
                return <SocialButton key={idx} data={d} size="md" />;
              })}
            </VStack>
            <Text mt="45px">로그인 / 회원가입 관련 궁금하신 점이 있나요?</Text>

            <Text
              mb="11px"
              onClick={() => {
                dispatch(modalSliceAction.setIsOpenAuthSocialModal(false));
                dispatch(modalSliceAction.setIsOpenAuthUserTypeModal(true));
              }}
            >{`자주 묻는 질문 바로가기 >`}</Text>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthSocialModal;

const DATA: SocialDataProps[] = [
  { social: 'kakao', link: '#' },
  { social: 'naver', link: '#' },
  { social: 'facebook', link: '#' },
  { social: 'google', link: '#' },
];
