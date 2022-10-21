import { useState } from 'react';
import useGetOrder from '@/hooks/use-get-order-detail';
import useLogin from '@/hooks/use-login';
import useUpdateOrderStatus from '@/hooks/use-update-order-status';
// import QrReader from 'react-qr-scanner';

const DeliveryLogin = () => {
  const login = useLogin;
  const [data, setData] = useState<any>([]);
  const [loginData, setLoginData] = useState<any>({});
  const [order, setOrder] = useState<any>({});
  const getOrder = useGetOrder;

  const handleLogin = async (email: string, password: string) => {
    const res: any = await login({ email, password });
    setLoginData({
      id: res?.data?.user?.id,
      name: res.data?.user?.name,
    });
  };

  const handleGetOrder = async (id: string) => {
    const res = await getOrder({ id });
    setOrder(res.order);
    console.log(res, 'z');
  };

  const handleUpdateStatus = async () => {
    const res: any = await useUpdateOrderStatus({
      order_no: order?.order_no,
      user_id: loginData?.id || 1,
      end_order: true,
    });
    setOrder(res.order);
    console.log(res, 'z');
  };

  return (
    <div>
      {loginData?.name ? <h2>Hello {loginData.name}</h2> : null}
      <div className="p-4">
        {/* <QrReader
          delay={100}
          onScan={(data: any) => {
            if (!!data) {
              const res = data?.text || '';

              if (res) {
                setData(res);
                const action = res.split('/');

                if (action[0] === 'login') {
                  return handleLogin(action[1], action[2]);
                }

                if (action[0] === 'order') {
                  return handleGetOrder(action[1]);
                }
              }
            }
          }}
          onError={(err: any) => console.log(err)}
          style={{ width: '100%', height: 240 }}
        /> */}
        <p>{JSON.stringify(data)}</p>
      </div>
      <div className="shadow-xl p-4">
        <div>Nota: {order?.order_no}</div>
        <div>Customer: {order?.customer?.name}</div>
        <div className="mb-4">Pembayaran: {order?.payment_method?.name}</div>
        <button
          className="bg-blue-500 rounded-md text-white px-4 py-1"
          onClick={handleUpdateStatus}
        >
          Sudah Selesai
        </button>
      </div>
    </div>
  );
};

export default DeliveryLogin;
