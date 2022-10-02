import dynamic from 'next/dynamic';
export const Delivery = dynamic(
  () => import(/* webpackChunkName: "delivery-track" */ './Delivery') as any,
  {
    ssr: false,
  },
);

export default Delivery;
