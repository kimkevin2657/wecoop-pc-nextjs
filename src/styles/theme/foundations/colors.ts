import { getColorSchema } from '@utils/color-generator';

const Light = {
  primary: getColorSchema('#fd7411'),
  secondary: getColorSchema('#7B61FF'),
  warning: getColorSchema('#FF6060'),
  success: getColorSchema('#4850FF'),
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#F5F5F5',
    300: '#E0E0E0',
    400: '#CCCCCC',
    500: '#CCCCCC',
    600: '#888888',
    700: '#757575',
    800: '#555555',
    900: '#333333',
  },
  black: '#000000',
  white: '#FFFFFF',
  dark: {
    500: '#000000',
    600: '#111111',
    700: '#222222',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F0F0F0',
  },
  modal: '#FFFFFF',
};

const Dark = {
  primary: getColorSchema('#485BFF'),
  secondary: getColorSchema('#755AFF'),
  warning: getColorSchema('#FF6060'),
  success: getColorSchema('#4850FF'),
  gray: {
    50: '#333333',
    100: '#555555',
    200: '#757575',
    300: '#888888',
    400: '#CCCCCC',
    500: '#CCCCCC',
    600: '#E0E0E0',
    700: '#F5F5F5',
    800: '#F5F5F5',
    900: '#FAFAFA',
  },
  black: '#FFFFFF',
  white: '#000000',
  dark: {
    500: '#222222',
    600: '#111111',
    700: '#000000',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F0F0F0',
  },
  modal: '#FFFFFF',
};

const Brand = {
  kakao: {
    500: '#FFDE32',
    600: '#F5D322',
    700: '#EFCC1A',
  },
  naver: {
    500: '#20CF5D',
    600: '#17c554',
    700: '#14bf50',
  },
  facebook: {
    500: '#1877F3',
    600: '#1874eb',
    700: '#146cdf',
  },
  google: {
    500: '#FFFFFF',
    600: '#F5F5F5',
    700: '#EEEEEE',
  },
  apple: {
    500: '#000000',
    600: '#111111',
    700: '#222222',
  },
};

const Dim = {
  primary: '#1A1A1A80',
  secondary: '#1A1A1A33',
};

const mode = {
  light: Light,
  dark: Dark,
};

const colors = {
  ...Light,
  ...Brand,
  dim: {
    ...Dim,
  },
};

export { mode, Brand, Light, Dark, Dim };

export default colors;
