import { NextResponse } from 'next/server';

const handler = async (req: Request) => {
  const { method } = req;

  if (method === 'GET') {
    try {
      const url = `/mock/historical-dates.json`;

      const res = await fetch(url);

      const data = await res.json();

      return NextResponse.json(JSON.stringify(data), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      return new Response(JSON.stringify(error), { status: 500 });
    }
  }

  return new Response('Method Not Allowed', { status: 405 });
};
export { handler as GET, handler as POST };
