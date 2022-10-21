import { NextPageWithLayout } from '@/pages/_app';
import { Loader } from '@mantine/core';
import dynamic from 'next/dynamic';

const Track: NextPageWithLayout = dynamic(
  () => import(/* webpackChunkName: "track" */ './Track'),
  {
    ssr: true,
    loading: () => <Loader size="xl" variant="dots" />,
  },
);

export default Track;
