// import { config } from '@/shared/lib/config/config';
import { NextResponse } from 'next/server';

const handler = async (req: Request) => {
  const { method } = req;

  if (method === 'GET') {
    try {
      const url = `https://onlyfunnytest-n80dpj0iq-funnymans-projects.vercel.app/mock/project.json`;

      const res = await fetch(url);
      const data = await res.json();
      return NextResponse.json(data, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      return new Response(error as BodyInit, { status: 500 });
    }
  }

  return new Response('Method Not Allowed', { status: 405 });
};
export { handler as GET, handler as POST };
