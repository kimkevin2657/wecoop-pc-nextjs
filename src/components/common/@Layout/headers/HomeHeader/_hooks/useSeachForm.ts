import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export type FormDataType = {
  query: string;
};

/**
 * yup 을 이용하여 form의 유효성 검사를 도와줍니다.
 * react-hook-form과 yup을 연결해 줄 yupResolver 을 함께 사용합니다.
 *
 * validation에 반복되는 값은 상수로 빼서 관리합니다.
 *
 *
 *
 * @see https://github.com/jquense/yup#getting-started
 * @see https://yarnpkg.com/package/@hookform/resolvers#readme
 * */
export const seachFormSchema = yup.object().shape({
  query: yup.string().required('해당 항목은 필수값 입니다.'),
});

const useSeachForm = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(seachFormSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useSeachForm;
