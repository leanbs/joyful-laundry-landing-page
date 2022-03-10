import Input from '@/components/Input';
import useGetOrderWithPhoneCheck from '@/hooks/useGetOrderWithPhoneCheck';
import type { Order, OrderDetail } from '@/types/Order';
import { getStatusString } from '@/utils/getLastStatus';
import { toIDR } from '@/utils/toIDR';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Laundry = () => {
  const [order, setOrder] = useState<Partial<Order>>({
    bag: false,
    clothes_qty: '',
    created_at: '',
    delivery: false,
    delivery_date: '',
    id: 0,
    notes: '',
    order_details: [],
    order_no: '',
    order_statuses: [],
    paid_date: '',
    payment_method: {},
    print_laundry: false,
    total_price: '',
    updated_at: '',
  });
  const [isAllowed, setIsAllowed] = useState(false);
  const [order_num, setOrderNum] = useState('');
  const [phone_num, setPhoneNum] = useState('');
  const [message, setMessage] = useState('');
  const { query } = useRouter();

  const orderNo = order_num || query.order_number || '-';
  const customerName = order?.customer?.name || 'Customer Name';
  const orderTotalPrice = order?.total_price || '0';
  const orderCreatedAt = order?.created_at || '0';
  const orderDetails = order?.order_details || [];
  const orderStatus =
    order?.order_statuses?.find((order) => order.is_last_status === true)
      ?.status || 0;

  useEffect(() => {
    setOrderNum(query.order_number as string);
  }, [query.order_number]);

  return (
    <section className={isAllowed ? '' : 'h-96'}>
      <h1 className="sr-only">Checkout</h1>
      {isAllowed ? (
        <div className="relative mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="py-4 bg-white md:py-24">
              <div className="max-w-lg px-4 mx-auto lg:px-8">
                <div className="grid grid-cols-6 gap-4 mb-4">
                  <div className="col-span-6">
                    <Input label="No Nota" value={orderNo as string} readOnly />
                  </div>
                  <div className="col-span-6">
                    <Input label="Nama" value={customerName} readOnly />
                  </div>
                  <div className="col-span-6">
                    <Input
                      label="Tanggal Terima"
                      value={orderCreatedAt}
                      readOnly
                    />
                  </div>
                </div>
                <div className="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
                  <a className="block p-6 bg-white sm:p-8 rounded-xl" href="">
                    <div className="sm:pr-8">
                      <h5 className="text-xl font-bold text-gray-900">
                        {getStatusString(orderStatus)}
                      </h5>

                      {/* <p className="mt-2 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
      </p> */}
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="py-4 bg-gray-50 md:py-24">
              <div className="max-w-lg px-4 mx-auto lg:px-8">
                <div className="mt-2">
                  <p className="mt-1 text-sm text-gray-500">Total Harga</p>
                  <p className="text-2xl font-medium tracking-tight">
                    {toIDR(orderTotalPrice)}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="flow-root">
                    <ul className="-my-4 divide-y divide-gray-200">
                      {orderDetails.map((detail: OrderDetail) => {
                        return (
                          <li
                            key={detail.id}
                            className="flex items-center justify-between py-4"
                          >
                            <div className="flex items-start">
                              {/* <img
                              className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                              src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                              alt=""
                            /> */}

                              {/* <div className="ml-4"> */}
                              <div className="ml-4">
                                <p className="text-sm">{detail.service.name}</p>

                                <dl className="mt-1 space-y-1 text-xs text-gray-500">
                                  <div>
                                    <dt className="inline">
                                      {detail.service.service_group.name}
                                    </dt>
                                    {/* <dd className="inline">Blue</dd> */}
                                  </div>
                                </dl>
                              </div>
                            </div>

                            <div>
                              <p className="text-sm">
                                {toIDR(detail.service.price)}
                                <small className="text-gray-500">
                                  {' '}
                                  x {detail.quantity}
                                </small>
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-lg px-4 mx-auto lg:px-8 py-4">
          <div className="col-span-6">
            <Input
              type="number"
              label="Nomor Pesanan"
              value={order_num}
              onChange={(e) => setOrderNum(e.target.value)}
            />
          </div>
          <div className="col-span-6">
            <Input
              type="number"
              label="Nomor Telepon"
              value={phone_num}
              onChange={(e) => setPhoneNum(e.target.value)}
            />
          </div>
          <button
            className="inline-block px-5 py-3 mt-4 text-sm font-medium text-white bg-blue-500 rounded-lg w-full"
            onClick={async () => {
              const { data, isAllowed, message }: any =
                await useGetOrderWithPhoneCheck({
                  order_no: orderNo,
                  phone_num: phone_num,
                });

              setOrder(data);
              setIsAllowed(isAllowed);
              setMessage(message);
            }}
          >
            Lacak
          </button>
          <p className="mt-2 text-red-600">{message}</p>
        </div>
      )}
    </section>
  );
};

export default Laundry;
