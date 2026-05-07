export type MessageColor = 'yellow' | 'pink' | 'cyan' | 'green' | 'white';

export interface Message {
  id: number;
  authorName: string;
  authorEmail?: string;
  content: string;
  color: MessageColor;
  positionX: number;
  positionY: number;
  rotation: number;
  createdAt: Date | string;
}

// Mock data for UI development
export const mockMessages: Message[] = [
  {
    id: 1,
    authorName: 'Sarah Chen',
    content: 'Love the brutalist design! Very refreshing.',
    color: 'yellow',
    positionX: 15,
    positionY: 20,
    rotation: -8,
    createdAt: new Date('2025-03-15'),
  },
  {
    id: 2,
    authorName: 'Alex Kim',
    content: 'Great portfolio, clean and modern!',
    color: 'pink',
    positionX: 45,
    positionY: 15,
    rotation: 5,
    createdAt: new Date('2025-03-10'),
  },
  {
    id: 3,
    authorName: 'Jordan Lee',
    content: 'The projects section is really well done.',
    color: 'cyan',
    positionX: 70,
    positionY: 35,
    rotation: -3,
    createdAt: new Date('2025-03-05'),
  },
  {
    id: 4,
    authorName: 'Taylor Swift',
    content: 'Nice work on the animations!',
    color: 'green',
    positionX: 25,
    positionY: 55,
    rotation: 12,
    createdAt: new Date('2025-02-28'),
  },
  {
    id: 5,
    authorName: 'Morgan Chen',
    content: 'Impressive tech stack choices.',
    color: 'white',
    positionX: 55,
    positionY: 60,
    rotation: -10,
    createdAt: new Date('2025-02-20'),
  },
  {
    id: 6,
    authorName: 'Jamie Park',
    content: 'The photo carousel is beautiful!',
    color: 'yellow',
    positionX: 80,
    positionY: 70,
    rotation: 7,
    createdAt: new Date('2025-02-15'),
  },
];

// Utility to generate random position/rotation for new messages
export function generateRandomPosition(): { positionX: number; positionY: number; rotation: number } {
  return {
    positionX: Math.random() * 70 + 5, // 5-75%
    positionY: Math.random() * 60 + 10, // 10-70%
    rotation: Math.random() * 30 - 15, // -15 to 15 degrees
  };
}

export function getRandomColor(): MessageColor {
  const colors: MessageColor[] = ['yellow', 'pink', 'cyan', 'green', 'white'];
  return colors[Math.floor(Math.random() * colors.length)];
}
