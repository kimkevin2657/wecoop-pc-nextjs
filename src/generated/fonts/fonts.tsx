import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'SFProText';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('/fonts/SFProText-Bold.ttf') format("ttf");
      src: local(''),
        url('/fonts/SFProText-Bold.ttf') format("ttf");
    }
  ,
    @font-face {
      font-family: 'SFProText';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('/fonts/SFProText-Regular.ttf') format("ttf");
      src: local(''),
        url('/fonts/SFProText-Regular.ttf') format("ttf");
    }
  `}
  />
);

export default Fonts;
