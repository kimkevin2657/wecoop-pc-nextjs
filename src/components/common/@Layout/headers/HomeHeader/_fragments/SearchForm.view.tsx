import { UseFormReturn } from 'react-hook-form';

import { Box, BoxProps, Input } from '@chakra-ui/react';

import { FormDataType } from '../_hooks/useSeachForm';

interface SearchFormProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}

const SearchFormView = ({
  formData: { register },
  onSubmit,
  ...basisProps
}: SearchFormProps) => {
  return (
    <Box as="form" onSubmit={onSubmit} {...basisProps}>
      <Input
        {...register('query')}
        placeholder="검색어를 입력하세요"
        h="40px"
        w="350px"
        borderRadius="full"
        autoComplete="off"
      />
    </Box>
  );
};

export default SearchFormView;
