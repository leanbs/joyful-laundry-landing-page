import { NextPageWithLayout } from '@/pages/_app';
import { Loader } from '@mantine/core';
import dynamic from 'next/dynamic';

const Presence: NextPageWithLayout = dynamic(
  () => import(/* webpackChunkName: "presence" */ './Presence'),
  {
    ssr: true,
    loading: () => <Loader size="xl" variant="dots" />,
  },
);

export default Presence;
