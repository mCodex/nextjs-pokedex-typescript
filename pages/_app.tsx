import React from 'react';

import GloalStyle from '../src/styles/global';

const MyApp: React.FC = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <GloalStyle />
  </>
);

export default MyApp;
