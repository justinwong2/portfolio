'use client';

import { useState } from 'react';
import styles from './message-form.module.css';

interface MessageFormProps {
  onSubmit: (content: string) => void;
}

const MAX_LENGTH = 50;

export function MessageForm({ onSubmit }: MessageFormProps) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content.trim());
      setContent('');
    }
  };

  const remaining = MAX_LENGTH - content.length;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          value={content}
          onChange={(e) => setContent(e.target.value.slice(0, MAX_LENGTH))}
          placeholder="Leave a message..."
          maxLength={MAX_LENGTH}
        />
        <span className={`${styles.counter} ${remaining <= 10 ? styles.counterLow : ''}`}>
          {content.length}/{MAX_LENGTH}
        </span>
      </div>
      <button
        type="submit"
        className={styles.submitBtn}
        disabled={!content.trim()}
      >
        POST
      </button>
    </form>
  );
}
