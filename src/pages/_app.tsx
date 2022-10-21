import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { baseAnalytics } from '@/utils/analytics/base.lazy';
import { MantineProvider } from '@mantine/core';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

// lazily init the analytics module from autotrack

if (typeof window !== 'undefined') {
  baseAnalytics().then((m) => m.init());
}

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        {process.env.NODE_ENV === 'production' ? (
          <>
            <script
              async
              src="https://www.google-analytics.com/analytics.js"
            ></script>
          </>
        ) : null}
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        {/* <MainLayout> */}
        {getLayout(<Component {...pageProps} />)}
        {/* </MainLayout> */}
      </MantineProvider>
    </>
  );
}

export default MyApp;
