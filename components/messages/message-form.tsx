'use client';

import { useState } from 'react';
import styles from './message-form.module.css';

interface MessageFormProps {
  onSubmit: (authorName: string, content: string) => void;
  disabled?: boolean;
}

const MAX_MESSAGE_LENGTH = 50;
const MAX_NAME_LENGTH = 30;

export function MessageForm({ onSubmit, disabled = false }: MessageFormProps) {
  const [authorName, setAuthorName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authorName.trim() && content.trim() && !disabled) {
      onSubmit(authorName.trim(), content.trim());
      setContent('');
    }
  };

  const remaining = MAX_MESSAGE_LENGTH - content.length;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.nameWrapper}>
        <input
          type="text"
          className={styles.nameInput}
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value.slice(0, MAX_NAME_LENGTH))}
          placeholder="Your name"
          maxLength={MAX_NAME_LENGTH}
          disabled={disabled}
        />
      </div>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          value={content}
          onChange={(e) => setContent(e.target.value.slice(0, MAX_MESSAGE_LENGTH))}
          placeholder="Leave a message..."
          maxLength={MAX_MESSAGE_LENGTH}
          disabled={disabled}
        />
        <span className={`${styles.counter} ${remaining <= 10 ? styles.counterLow : ''}`}>
          {content.length}/{MAX_MESSAGE_LENGTH}
        </span>
      </div>
      <button
        type="submit"
        className={styles.submitBtn}
        disabled={!authorName.trim() || !content.trim() || disabled}
      >
        {disabled ? 'POSTING...' : 'POST'}
      </button>
    </form>
  );
}
