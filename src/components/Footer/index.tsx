import dynamic from 'next/dynamic';

const Footer = dynamic(
  () => import(/* webpackChunkName: "footer" */ './Lazy'),
  {
    ssr: true,
    loading: () => <div>loading</div>,
  },
);

export default Footer;
