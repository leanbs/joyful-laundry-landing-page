import Layout from '@/components/Layout';
import Track from '@/routes/Track';
import { ReactElement } from 'react';

Track.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Track;
