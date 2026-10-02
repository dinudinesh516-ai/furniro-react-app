// Card price style used in the design: "Rp 2.500.000"
export const formatRp = (value) =>
  `Rp ${Math.round(value).toLocaleString('id-ID')}`;

// Cart / checkout / detail price style used in the design: "Rs. 250,000.00"
export const formatRs = (value) =>
  `Rs. ${Number(value).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
