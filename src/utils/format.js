// All prices in the app are shown in US dollars, e.g. "$1,899.99"
export const formatPrice = (value) =>
  Number(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
