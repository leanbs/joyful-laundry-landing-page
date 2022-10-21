// import type { OrderStatus } from '@/@types/Order';
// import { useAlert } from '@/context/Alert';
// import { fetch as api } from '@/utils/fetcher';

// interface Props {
//   callback: () => void;
// }

import { fetchWithCredentials } from '@/utils/fetch';

interface Props {
  order_no: string | number;
  user_id: number;
  end_order?: boolean;
}

async function useUpdateOrderStatus({ order_no, user_id, end_order }: Props) {
  const { data: result } = await fetchWithCredentials.put(
    `order-status/${order_no}`,
    {
      user_id,
      end_order,
    },
  );
  console.log(result, 'resu');
  return {
    result: result || {},
  };
}

export default useUpdateOrderStatus;

// function useUpdateOrderStatus({ callback }: Props) {
//   const alert = useAlert();
//   const updateOrderStatus = async (
//     order_no: string,
//     data: Partial<OrderStatus> & { user_id: number; end_order?: boolean },
//   ) => {
//     try {
//       const res = await api.put(`order-status/${order_no}`, data);

//       if (res.data.ok) {
//         alert.success({
//           description: `Status pesanan berhasil diperbarui`,
//         });
//       } else {
//         alert.error({
//           description: `Terjadi kesalahan: ${res.data.message}`,
//         });
//       }
//     } catch (err: any) {
//       console.log(err);
//       alert.error({
//         description: `Terjadi kesalahan: ${err.message}`,
//       });
//     }

//     return callback();
//   };

//   return updateOrderStatus;
// }

// export default useUpdateOrderStatus;
