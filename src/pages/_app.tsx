import Head from 'next/head';
import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useDispatch } from 'react-redux';

import Auth from '0auth-sdk';

import { ThemeProvider, useColorMode, useTheme } from '@chakra-ui/react';

import { useRefreshTokenQuery } from '@apis/auth/AuthApi.query';
import { modalSliceAction } from '@features/modal/modalSlice';
import useAppStore from '@features/useAppStore';
import { userSliceActions } from '@features/user/userSlice';

import Modal from '@components/common/Modal';
import useOpenModalByQueryString from '@components/hooks/useOpenModalByQueryString';

import { mode } from '@theme/foundations/colors';
import { deleteToken } from '@utils/localStorage/token';

import withAppProvider from 'contexts/app/app.provider';

function MyApp({ Component, pageProps }: any) {
  const isServer = typeof window === 'undefined';
  const isLogin = useAppStore((store) => store.USER.isLogin);

  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const theme = useTheme();
  const { colorMode } = useColorMode();

  const { isLoading } = useRefreshTokenQuery({
    options: {
      enabled: isLogin,
      staleTime: 0,
      refetchInterval: 1000 * 60 * 20,
      onError: () => {
        deleteToken();
        queryClient.clear();
        dispatch(userSliceActions.setIsLogged(false));
        // router.replace(ROUTES.LOGIN)
      },
    },
  });

  useOpenModalByQueryString({
    'my-modal': (open: boolean) =>
      dispatch(modalSliceAction.setIsOpenMyModal(open)),
  } as const);

  useEffect(() => {
    Auth.initialize({ brand: 'test' });
  }, []);

  return (
    // Provide the client to your App
    <ThemeProvider
      theme={{ ...theme, colors: { ...theme.colors, ...mode[colorMode] } }}
    >
      <Head>
        <meta name="viewport" content="width=1470" />
      </Head>
      <Modal />
      {(!isLoading || isServer) && <Component {...pageProps} />}
      <ReactQueryDevtools initialIsOpen={false} />
    </ThemeProvider>
  );
}

export default withAppProvider(MyApp);
