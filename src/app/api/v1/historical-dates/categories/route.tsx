import { config } from '@/shared/lib/config/config';
import { NextResponse } from 'next/server';

const handler = async (req: Request) => {
  const { method } = req;

  if (method === 'GET') {
    try {
      const url = `${config.domain}/mock/historical-dates.json`;
      const res = await fetch(url);

      const data = await res.json();

      const categories = Object.keys(data).map((item: string) => item);

      return NextResponse.json(categories, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error: any) {
      return new Response(error.message as BodyInit, { status: 500 });
    }
  }

  return new Response('Method Not Allowed', { status: 405 });
};
export { handler as GET, handler as POST };
