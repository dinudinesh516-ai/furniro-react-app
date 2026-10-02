import { PiTrophy, PiSealCheck, PiPackage, PiHeadset } from 'react-icons/pi';

export const rangeCategories = [
  { id: 'dining', title: 'Dining', image: '/images/range-dining.jpg' },
  { id: 'living', title: 'Living', image: '/images/range-living.jpg' },
  { id: 'bedroom', title: 'Bedroom', image: '/images/range-bedroom.jpg' },
];

export const inspirationSlides = [
  { id: 1, number: '01', room: 'Bed Room', title: 'Inner Peace', image: '/images/inspiration-1.jpg' },
  { id: 2, number: '02', room: 'Dining Room', title: 'Bright Mornings', image: '/images/inspiration-2.jpg' },
  { id: 3, number: '03', room: 'Living Room', title: 'Calm Corner', image: '/images/inspiration-3.jpg' },
  { id: 4, number: '04', room: 'Work Space', title: 'Focus Zone', image: '/images/inspiration-4.jpg' },
];

// Each inner array is one column of the #FuniroFurniture collage
export const galleryColumns = [
  [
    { src: '/images/gallery-1.jpg', w: 274, h: 382 },
    { src: '/images/gallery-5.jpg', w: 178, h: 323 },
  ],
  [
    { src: '/images/gallery-2.jpg', w: 451, h: 312 },
    { src: '/images/gallery-7.jpg', w: 344, h: 242 },
  ],
  [{ src: '/images/gallery-3.jpg', w: 295, h: 392 }],
  [
    { src: '/images/gallery-8.jpg', w: 290, h: 348 },
    { src: '/images/gallery-6.jpg', w: 178, h: 242 },
  ],
  [
    { src: '/images/gallery-9.jpg', w: 425, h: 433 },
    { src: '/images/gallery-4.jpg', w: 258, h: 196 },
  ],
];

export const features = [
  { id: 1, icon: PiTrophy, title: 'High Quality', text: 'crafted from top materials' },
  { id: 2, icon: PiSealCheck, title: 'Warranty Protection', text: 'Over 2 years' },
  { id: 3, icon: PiPackage, title: 'Free Shipping', text: 'Order over 150 $' },
  { id: 4, icon: PiHeadset, title: '24 / 7 Support', text: 'Dedicated support' },
];

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const footerLinks = {
  links: [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ],
  help: [
    { to: '/checkout', label: 'Payment Options' },
    { to: '/contact', label: 'Returns' },
    { to: '/blog', label: 'Privacy Policies' },
  ],
};
