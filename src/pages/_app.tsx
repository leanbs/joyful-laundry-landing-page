import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import MainLayout from '@/components/Layout';
import { baseAnalytics } from '@/utils/analytics/base.lazy';

// lazily init the analytics module from autotrack

if (typeof window !== 'undefined') {
  baseAnalytics().then((m) => m.init());
}

function MyApp({ Component, pageProps }: AppProps) {
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
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
