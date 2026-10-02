const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.';

export const blogPosts = [
  { id: 1, title: 'Going all-in with millennial design', category: 'Wood', date: '14 Oct 2022', image: '/images/blog-1.jpg' },
  { id: 2, title: 'Exploring new ways of decorating', category: 'Handmade', date: '14 Oct 2022', image: '/images/blog-2.jpg' },
  { id: 3, title: 'Handmade pieces that took time to make', category: 'Wood', date: '14 Oct 2022', image: '/images/blog-3.jpg' },
  { id: 4, title: 'Modern home in Milan', category: 'Design', date: '10 Oct 2022', image: '/images/blog-2.jpg' },
  { id: 5, title: 'Colorful office redesign', category: 'Interior', date: '08 Oct 2022', image: '/images/blog-3.jpg' },
  { id: 6, title: 'Crafting a cosy reading nook', category: 'Crafts', date: '05 Oct 2022', image: '/images/blog-1.jpg' },
  { id: 7, title: 'Minimal living with natural textures', category: 'Design', date: '02 Oct 2022', image: '/images/blog-3.jpg' },
  { id: 8, title: 'Choosing the right dining table', category: 'Design', date: '28 Sep 2022', image: '/images/blog-1.jpg' },
  { id: 9, title: 'Weekend DIY: a handmade shelf', category: 'Crafts', date: '25 Sep 2022', image: '/images/blog-2.jpg' },
].map((post) => ({ ...post, author: 'Admin', excerpt: lorem }));

export const recentPosts = [
  { id: 1, title: 'Going all-in with millennial design', date: '03 Aug 2022', image: '/images/blog-1.jpg' },
  { id: 2, title: 'Exploring new ways of decorating', date: '03 Aug 2022', image: '/images/blog-2.jpg' },
  { id: 3, title: 'Handmade pieces that took time to make', date: '03 Aug 2022', image: '/images/blog-3.jpg' },
  { id: 4, title: 'Modern home in Milan', date: '03 Aug 2022', image: '/images/blog-2.jpg' },
  { id: 5, title: 'Colorful office redesign', date: '03 Aug 2022', image: '/images/blog-3.jpg' },
];
