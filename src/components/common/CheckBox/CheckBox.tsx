import React from 'react';

import { BoxProps, Flex, Text } from '@chakra-ui/react';

import { CheckedOffIcon, CheckedOnIcon } from '@icons/System';

interface CheckBoxProps extends BoxProps {
  checked: boolean;
}

const CheckBox = ({ checked, children, ...props }: CheckBoxProps) => {
  return (
    <Flex cursor="pointer" alignItems="flex-start" {...props}>
      {checked ? (
        <CheckedOnIcon w="20px" h="20px" color="primary.500" />
      ) : (
        <CheckedOffIcon w="20px" h="20px" color="primary.500" />
      )}
      {typeof children === 'string' ? (
        <Text textStyle="md" ml="5px" color="gray3">
          {children}
        </Text>
      ) : (
        children
      )}
    </Flex>
  );
};

export default CheckBox;
