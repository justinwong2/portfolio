export interface Photo {
  id: string;
  src: string;
  label: string;
  date: string;
  index: number;
}

export const photos: Photo[] = [
  {
    id: 'photo-1',
    src: '/images/photos/placeholder-1.jpg',
    label: 'TOKYO, JAPAN',
    date: 'MAR 2025',
    index: 1,
  },
  {
    id: 'photo-2',
    src: '/images/photos/placeholder-2.jpg',
    label: 'SINGAPORE',
    date: 'JAN 2025',
    index: 2,
  },
  {
    id: 'photo-3',
    src: '/images/photos/placeholder-3.jpg',
    label: 'BALI, INDONESIA',
    date: 'DEC 2024',
    index: 3,
  },
  {
    id: 'photo-4',
    src: '/images/photos/placeholder-4.jpg',
    label: 'SEOUL, KOREA',
    date: 'OCT 2024',
    index: 4,
  },
  {
    id: 'photo-5',
    src: '/images/photos/placeholder-5.jpg',
    label: 'MELBOURNE, AUSTRALIA',
    date: 'AUG 2024',
    index: 5,
  },
  {
    id: 'photo-6',
    src: '/images/photos/placeholder-6.jpg',
    label: 'HONG KONG',
    date: 'JUN 2024',
    index: 6,
  },
];
