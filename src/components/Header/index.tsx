import dynamic from 'next/dynamic';

const Header = dynamic(
  () => import(/* webpackChunkName: "header" */ './Lazy'),
  {
    ssr: true,
    loading: () => <div>loading</div>,
  },
);

export default Header;
