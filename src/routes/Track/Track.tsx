import useGetOrderWithPhoneCheck from '@/hooks/useGetOrderWithPhoneCheck';
import type { Order, OrderDetail } from '@/types/Order';
import { getStatusString } from '@/utils/getLastStatus';
import { toIDR } from '@/utils/toIDR';
import { Badge, Button, List, TextInput, ThemeIcon, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { IconCircleCheck } from '@tabler/icons';

const Laundry = () => {
  const form = useForm({
    initialValues: {
      order_num: '',
      phone_num: '',
    },
  });

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

  //TODO: need to fix mobile and desktop style for section

  return (
    <section
      className={isAllowed ? '' : 'h-96'}
      style={{ padding: 16, height: 'calc(100vh - 190px)' }}
    >
      {isAllowed ? (
        <>
          <TextInput label="Nomor Pesanan" value={orderNo} />
          <TextInput label="Nama" value={customerName} />
          <TextInput label="Tanggal Terima" value={orderCreatedAt} />
          <TextInput label="Total Harga" value={toIDR(orderTotalPrice)} />
          <Badge
            variant="gradient"
            gradient={{ from: 'orange', to: 'red' }}
            mt={24}
          >
            {getStatusString(orderStatus)}
          </Badge>
          <List
            spacing="xs"
            size="sm"
            mt={24}
            center
            icon={
              <ThemeIcon color="teal" size={24} radius="xl">
                <IconCircleCheck size={16} />
              </ThemeIcon>
            }
          >
            {orderDetails.map((detail: OrderDetail) => {
              return (
                <List.Item key={detail.id}>
                  <Text size="sm">
                    {`${detail.service.name} - ${toIDR(
                      detail.service.price,
                    )} x ${detail.quantity}`}
                  </Text>
                </List.Item>
              );
            })}
          </List>
        </>
      ) : (
        <form
          onSubmit={form.onSubmit(async (values) => {
            const res = await useGetOrderWithPhoneCheck({
              order_no: values.order_num,
              phone_num: values.phone_num,
            });

            setOrderNum(values.order_num);
            setOrder(res?.data || {});
            setIsAllowed(res?.isAllowed || false);

            console.log(res, 'aw');
          })}
        >
          <TextInput
            placeholder="0123456"
            label="Nomor Pesanan"
            withAsterisk
            {...form.getInputProps('order_num')}
          />
          <TextInput
            placeholder="08xxxxxxxx99"
            label="Nomor Telepon"
            withAsterisk
            {...form.getInputProps('phone_num')}
          />
          <Button
            variant="gradient"
            gradient={{ from: 'pink', to: 'yellow' }}
            type="submit"
            fullWidth
            mt={16}
          >
            Lacak
          </Button>
        </form>
      )}
    </section>
  );
};

export default Laundry;

// 19150
// 089638687677

// 23220
