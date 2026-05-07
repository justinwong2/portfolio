'use client';

import { useState } from 'react';
import { mockMessages, generateRandomPosition, getRandomColor, type Message } from '@/data/messages';
import { PostIt } from './post-it';
import { MessageForm } from './message-form';
import styles from './message-board.module.css';

export function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);

  const handleNewMessage = (content: string) => {
    const newMessage: Message = {
      id: String(Date.now()),
      authorName: 'Demo User', // In production, this comes from auth
      content,
      color: getRandomColor(),
      ...generateRandomPosition(),
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className={styles.wrapper}>
      <MessageForm onSubmit={handleNewMessage} />
      <div className={styles.board}>
        {/* Lined paper background */}
        <div className={styles.lines} aria-hidden="true" />

        {/* Post-its */}
        {messages.map((message, index) => (
          <PostIt key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
}
