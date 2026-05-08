'use client';

import { useState, useEffect } from 'react';
import type { Message } from '@/data/messages';
import { PostIt } from './post-it';
import { MessageForm } from './message-form';
import styles from './message-board.module.css';

export function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function loadMessages() {
      try {
        const response = await fetch('/api/messages');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        console.error('Failed to load messages:', err);
        setError('Failed to load messages');
      } finally {
        setIsLoading(false);
      }
    }
    loadMessages();
  }, []);

  const handleNewMessage = async (authorName: string, content: string) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ authorName, content }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Failed to post message');
      }

      const newMessage = await response.json();
      setMessages((prev) => [...prev, newMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to post message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <MessageForm onSubmit={handleNewMessage} disabled={isSubmitting} />
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.board}>
        <div className={styles.lines} aria-hidden="true" />

        {isLoading && (
          <div className={styles.loadingState}>Loading messages...</div>
        )}

        {messages.map((message) => (
          <PostIt key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
}
