import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { messages } from '@/lib/schema';
import { asc } from 'drizzle-orm';
import { Filter } from 'bad-words';

type MessageColor = 'yellow' | 'pink' | 'cyan' | 'green' | 'white';

const filter = new Filter();

// Simple in-memory rate limiting (resets on server restart)
// For production, consider using Redis or Upstash
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // 3 messages per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

function generateRandomPosition(): { positionX: number; positionY: number; rotation: number } {
  return {
    positionX: Math.random() * 70 + 5,
    positionY: Math.random() * 60 + 10,
    rotation: Math.random() * 30 - 15,
  };
}

function getRandomColor(): MessageColor {
  const colors: MessageColor[] = ['yellow', 'pink', 'cyan', 'green', 'white'];
  return colors[Math.floor(Math.random() * colors.length)];
}

const MAX_CONTENT_LENGTH = 50;
const MAX_NAME_LENGTH = 30;

export async function GET(): Promise<NextResponse> {
  try {
    const allMessages = await db
      .select()
      .from(messages)
      .orderBy(asc(messages.createdAt));

    return NextResponse.json(allMessages);
  } catch (error) {
    console.error('Failed to fetch messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many messages. Please wait a minute.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const content = body.content?.trim();
    const authorName = body.authorName?.trim();

    // Validate name
    if (!authorName) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (authorName.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { error: `Name must be ${MAX_NAME_LENGTH} characters or less` },
        { status: 400 }
      );
    }

    // Validate content
    if (!content) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (content.length > MAX_CONTENT_LENGTH) {
      return NextResponse.json(
        { error: `Message must be ${MAX_CONTENT_LENGTH} characters or less` },
        { status: 400 }
      );
    }

    // Check for profanity
    if (filter.isProfane(content) || filter.isProfane(authorName)) {
      return NextResponse.json(
        { error: 'Please keep it friendly!' },
        { status: 400 }
      );
    }

    const position = generateRandomPosition();
    const color = getRandomColor();

    const [newMessage] = await db
      .insert(messages)
      .values({
        authorName,
        authorEmail: ip, // Store IP instead of email for tracking
        content,
        color,
        positionX: position.positionX,
        positionY: position.positionY,
        rotation: position.rotation,
      })
      .returning();

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error('Failed to create message:', error);
    return NextResponse.json(
      { error: 'Failed to create message' },
      { status: 500 }
    );
  }
}
