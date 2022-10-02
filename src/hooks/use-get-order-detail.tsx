import { fetchWithCredentials } from '@/utils/fetch';

interface Props {
  id: string | number;
}

async function useGetOrder({ id }: Props) {
  const { data } = await fetchWithCredentials.get(`/order-number/${id}`);
  return {
    order: data?.data || {},
  };
}

export default useGetOrder;
