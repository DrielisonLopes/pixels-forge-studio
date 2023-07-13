import React from 'react';
import { AppProps } from 'next/app';

import '../styles/main.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
