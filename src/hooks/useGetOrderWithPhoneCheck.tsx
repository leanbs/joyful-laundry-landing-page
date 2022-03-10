import { fetch } from '@/utils/fetch';

interface Props {
  order_no?: string | string[];
  phone_num?: string;
}

const useGetOrderWithPhoneCheck = async ({ order_no, phone_num }: Props) => {
  try {
    const data = await fetch.post(`/order-check/${order_no}`, { phone_num });
    console.log(data.data.ok, 'titi');

    const returnedData = {
      isAllowed: data.data.ok,
      data: data.data.data,
      message: data.data.message,
    };
    return returnedData;
  } catch (err) {
    console.log(err);
  }
};

export default useGetOrderWithPhoneCheck;
