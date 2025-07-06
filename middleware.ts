import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

const RATE_LIMIT = 60; // 60 requisições
const WINDOW = 60; // segundos

export async function middleware(request: NextRequest) {
  // IP real do usuário
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  const key = `ratelimit:${ip}`;

  // Incrementa o contador e define expiração se for a primeira vez
  const [count] = (await redis
    .multi()
    .incr(key)
    .expire(key, WINDOW)
    .exec()) as [number, unknown];

  if (count > RATE_LIMIT) {
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
}; 