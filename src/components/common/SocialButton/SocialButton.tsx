import { Button, Flex, Image, Text } from '@chakra-ui/react';

import { SOCIALS } from './SocialButton.data';

const SocialButton = ({ data, size }: SocialButtonProps) => {
  const social = SOCIALS.find((s) => s.social === data.social) || SOCIALS[0];
  return (
    <Button
      colorScheme={data.social}
      w="100%"
      h="65px"
      onClick={() => window.open(data.link)}
      borderRadius="10px"
    >
      <Flex alignItems="center" justifyContent="center">
        <Image
          position="absolute"
          w="24px"
          h="24px"
          left="27px"
          src={social.icon}
          loading="lazy"
        />
        {size !== 'sm' && (
          <Text fontSize={['16px', '14px', '15px']}>{social.text}</Text>
        )}
      </Flex>
    </Button>
  );
};

export default SocialButton;
