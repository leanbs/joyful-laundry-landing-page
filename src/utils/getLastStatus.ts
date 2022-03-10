import type { OrderStatus } from '@/types/Order';
const IcScale =
  'https://res.cloudinary.com/dugyntst4/image/upload/v1645540739/laundry/ic-scale_uainan.svg';
const IcWasher =
  'https://res.cloudinary.com/dugyntst4/image/upload/v1645540741/laundry/ic-washer_w5jkax.svg';
const IcSpinClothes =
  'https://res.cloudinary.com/dugyntst4/image/upload/v1645540739/laundry/ic-clothes-spin_uskynm.svg';
const IcIronBoard =
  'https://res.cloudinary.com/dugyntst4/image/upload/v1645540739/laundry/ic-iron-board_ib4obp.svg';
const IcPackClothes =
  'https://res.cloudinary.com/dugyntst4/image/upload/v1645540739/laundry/ic-clothes-pack_vuoi2m.svg';
const IcFoldClothes =
  'https://res.cloudinary.com/dugyntst4/image/upload/v1645540739/laundry/ic-clothes-folded_ioaylx.svg';
const IcDelivery =
  'https://res.cloudinary.com/dugyntst4/image/upload/v1645540739/laundry/ic-delivery_fouaev.svg';

export const PROGRESS_VAL = [
  { title: 'Terima', value: 0, image: IcScale }, // scale
  { title: 'Cuci', value: 1, image: IcWasher }, // washer
  { title: 'Kering', value: 2, image: IcSpinClothes }, // spin clothes
  { title: 'Setrika / Lipat', value: 3, image: IcIronBoard }, // iron board
  { title: 'Packing', value: 4, image: IcPackClothes }, // cover for clothes
  { title: 'Selesai', value: 5, image: IcFoldClothes }, // folded clothes
  { title: 'Sudah diambil', value: 6, image: IcDelivery }, // van
] as any;

function getLastStatus(data: OrderStatus[], returnString = false) {
  const lastStatus =
    data.find(
      (order_status: OrderStatus) => order_status.is_last_status === true,
    )?.status || 0;
  return returnString ? PROGRESS_VAL[lastStatus]?.['title'] : lastStatus;
}

export function getLastStatusImage(data: OrderStatus[], returnString = false) {
  const lastStatus =
    data.find(
      (order_status: OrderStatus) => order_status.is_last_status === true,
    )?.status || 0;
  return returnString ? PROGRESS_VAL[lastStatus]?.['image'] : lastStatus;
}

export function getStatusString(status: number) {
  return PROGRESS_VAL[status]?.['title'];
}

export function getStatusImage(status: number) {
  return PROGRESS_VAL[status]?.['image'];
}

export default getLastStatus;
