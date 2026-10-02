// Rows of the Product Comparison table, grouped by section
export const comparisonSections = [
  {
    title: 'General',
    rows: [
      { key: 'salesPackage', label: 'Sales Package' },
      { key: 'modelNumber', label: 'Model Number' },
      { key: 'secondaryMaterial', label: 'Secondary Material' },
      { key: 'configuration', label: 'Configuration' },
      { key: 'upholsteryMaterial', label: 'Upholstery Material' },
      { key: 'upholsteryColor', label: 'Upholstery Color' },
    ],
  },
  {
    title: 'Product',
    rows: [
      { key: 'fillingMaterial', label: 'Filling Material' },
      { key: 'finishType', label: 'Finish Type' },
      { key: 'adjustableHeadrest', label: 'Adjustable Headrest' },
      { key: 'maxLoad', label: 'Maximum Load Capacity' },
      { key: 'origin', label: 'Origin of Manufacture' },
    ],
  },
  {
    title: 'Dimensions',
    rows: [
      { key: 'width', label: 'Width' },
      { key: 'height', label: 'Height' },
      { key: 'depth', label: 'Depth' },
      { key: 'weight', label: 'Weight' },
      { key: 'seatHeight', label: 'Seat Height' },
      { key: 'legHeight', label: 'Leg Height' },
    ],
  },
  {
    title: 'Warranty',
    rows: [
      { key: 'warrantySummary', label: 'Warranty Summary' },
      { key: 'warrantyServiceType', label: 'Warranty Service Type' },
      { key: 'covered', label: 'Covered in Warranty' },
      { key: 'notCovered', label: 'Not Covered in Warranty' },
      { key: 'domesticWarranty', label: 'Domestic Warranty' },
    ],
  },
];

const notCovered =
  'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.';

// The two products shown in the design
export const defaultCompareProducts = [
  {
    id: 'asgaard',
    title: 'Asgaard Sofa',
    price: 2500,
    rating: 4.7,
    reviews: 204,
    image: '/images/asgaard-sofa.jpg',
    specs: {
      salesPackage: '1 sectional sofa', modelNumber: 'TFCBLIGRBL6SRHS', secondaryMaterial: 'Solid Wood', configuration: 'L-shaped', upholsteryMaterial: 'Fabric + Cotton', upholsteryColor: 'Bright Grey & Lion',
      fillingMaterial: 'Foam', finishType: 'Bright Grey & Lion', adjustableHeadrest: 'No', maxLoad: '280 KG', origin: 'India',
      width: '265.32 cm', height: '76 cm', depth: '167.76 cm', weight: '45 KG', seatHeight: '41.52 cm', legHeight: '5.46 cm',
      warrantySummary: '1 Year Manufacturing Warranty', warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com', covered: 'Warranty Against Manufacturing Defect', notCovered, domesticWarranty: '1 Year',
    },
  },
  {
    id: 'outdoor',
    title: 'Outdoor Sofa Set',
    price: 2240,
    rating: 4.2,
    reviews: 145,
    image: '/images/outdoor-sofa.jpg',
    specs: {
      salesPackage: '1 Three Seater, 2 Single Seater', modelNumber: 'DTUBLIGRBL568', secondaryMaterial: 'Solid Wood', configuration: 'L-shaped', upholsteryMaterial: 'Fabric + Cotton', upholsteryColor: 'Bright Grey & Lion',
      fillingMaterial: 'Matte', finishType: 'Bright Grey & Lion', adjustableHeadrest: 'yes', maxLoad: '300 KG', origin: 'India',
      width: '265.32 cm', height: '76 cm', depth: '167.76 cm', weight: '65 KG', seatHeight: '41.52 cm', legHeight: '5.46 cm',
      warrantySummary: '1.2 Year Manufacturing Warranty', warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com', covered: 'Warranty of the product is limited to manufacturing defects only.', notCovered, domesticWarranty: '3 Months',
    },
  },
];

// Builds a comparison column for any product from the shop / API
export const toCompareProduct = (p) => ({
  id: p.id,
  title: p.title,
  price: p.price,
  rating: p.rating ? Number(p.rating).toFixed(1) : '4.5',
  reviews: p.reviewsCount ?? 0,
  image: p.image,
  specs: {
    salesPackage: `1 ${p.title}`,
    modelNumber: p.sku || '—',
    secondaryMaterial: 'Solid Wood',
    configuration: '—',
    upholsteryMaterial: 'Fabric + Cotton',
    upholsteryColor: '—',
    fillingMaterial: 'Foam',
    finishType: 'Matte',
    adjustableHeadrest: 'No',
    maxLoad: '—',
    origin: 'India',
    width: p.dimensions ? `${p.dimensions.width} cm` : '—',
    height: p.dimensions ? `${p.dimensions.height} cm` : '—',
    depth: p.dimensions ? `${p.dimensions.depth} cm` : '—',
    weight: p.weight ? `${p.weight} KG` : '—',
    seatHeight: '—',
    legHeight: '—',
    warrantySummary: p.warranty || '1 Year Manufacturing Warranty',
    warrantyServiceType: 'For Warranty Claims Please Email at support@furniro.com',
    covered: 'Warranty Against Manufacturing Defect',
    notCovered,
    domesticWarranty: '1 Year',
  },
});
