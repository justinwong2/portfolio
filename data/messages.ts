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
