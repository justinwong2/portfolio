import { pgTable, text, timestamp, real, serial } from 'drizzle-orm/pg-core';

export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  authorName: text('author_name').notNull(),
  authorEmail: text('author_email').notNull(),
  content: text('content').notNull(),
  color: text('color').notNull().default('yellow'),
  positionX: real('position_x').notNull(),
  positionY: real('position_y').notNull(),
  rotation: real('rotation').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Message = typeof messages.$inferSelect;
export type NewMessage = typeof messages.$inferInsert;
