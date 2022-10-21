import Layout from '@/components/Layout';
import Presence from '@/routes/Presence';
import { ReactElement } from 'react';

Presence.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Presence;
