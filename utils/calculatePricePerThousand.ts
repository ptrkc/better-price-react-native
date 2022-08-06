export default function calculatePricePerThousand(
  quantity: string,
  unit: string,
  price: string,
) {
  const literOrKilo = ['mL', 'g'].includes(unit)
    ? parseFloat(quantity) / 1000
    : parseFloat(quantity);
  const pricePerThousand = (parseFloat(price) / literOrKilo).toFixed(3);
  return pricePerThousand === 'NaN' ? '' : `$${pricePerThousand}`;
}
