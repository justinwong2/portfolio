import type { Message } from '@/data/messages';
import styles from './post-it.module.css';

interface PostItProps {
  message: Message;
}

export function PostIt({ message }: PostItProps) {
  return (
    <div
      className={`${styles.postIt} ${styles[message.color]}`}
      style={{
        left: `${message.positionX}%`,
        top: `${message.positionY}%`,
        '--rotation': `${message.rotation}deg`,
      } as React.CSSProperties}
    >
      <span className={styles.author}>— {message.authorName}</span>
      <p className={styles.content}>{message.content}</p>
    </div>
  );
}
