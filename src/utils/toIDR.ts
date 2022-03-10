export function toIDR(idr: number | string, withIDR = true): string {
  const parsed = idr?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${withIDR ? 'Rp' : ''}${parsed}`;
}
