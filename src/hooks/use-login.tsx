import { fetch } from '@/utils/fetch';
import Cookies from 'js-cookie';

interface Props {
  email?: string;
  password?: string;
}

const useLogin = async ({ email, password }: Props) => {
  try {
    const data = await fetch.post(`/login`, { email, password });

    console.log(data?.data.data, 'wasu');

    const accessToken = data?.data?.data?.accessToken || '';

    Cookies.set('token', accessToken);

    const returnedData = {
      isAllowed: data.data.ok,
      data: data.data.data,
      at: accessToken,
    };
    return returnedData;
  } catch (err) {
    console.log(err);
  }
};

export default useLogin;
