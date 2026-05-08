export interface Photo {
  id: string;
  images: string[]; // 2 or 4 images per slide
  label: string;
  date: string;
  description: string;
}

export const photos: Photo[] = [
  {
    id: 'slide-1',
    images: [
      '/images/ys1.jpg',
      '/images/ys6.jpg',
    ],
    label: 'YOSEMITE, USA',
    date: 'DEC 2025',
    description: 'Hardest hike I completed in the US...',
  },
  {
    id: 'slide-2',
    images: [
      '/images/rain1.jpg',
      '/images/rain3.jpg',
    ],
    label: 'MOUNT RAINIER, USA',
    date: 'APR 2026',
    description: 'My favourite national park in the US so far.',
  },
];
