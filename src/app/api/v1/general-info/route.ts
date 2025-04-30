// import { config } from '@/shared/lib/config/config';
import { NextResponse } from 'next/server';

const handler = async (req: Request) => {
  const { method } = req;

  if (method === 'GET') {
    try {
      // const url = `https://onlyfunnytest-n80dpj0iq-funnymans-projects.vercel.app/mock/project.json`;

      // const res = await fetch(url);
      // const data = await res.json();
      return NextResponse.json(
        {
          company: {
            name: 'Only Digital',
            website: 'https://only.digital',
            description: 'AI & Web Solutions Studio',
            developer: {
              name: 'Vladimir Petrosyan',
              links: {
                headhunter:
                  'https://hh.ru/resume/5b24481aff0e67d37c0039ed1f6c30424f6834',
                github: 'https://github.com/funnymans',
                telegram: 'https://t.me/VladimirDictator',
              },
              role: 'Middle Frontend-FullStack Engineer',
            },
          },
          tools: [
            {
              name: 'React',
              imgSrc: '/images/logos/react.svg',
              website: 'https://reactjs.org',
            },
            {
              name: 'Next.js',
              imgSrc: '/images/logos/next.svg',
              website: 'https://nextjs.org',
            },
            {
              name: 'GSAP',
              imgSrc: '/images/logos/gsap.svg',
              website: 'https://greensock.com/gsap',
            },
            {
              name: 'Swiper.js',
              imgSrc: '/images/logos/swiper.svg',
              website: 'https://swiperjs.com',
            },
            {
              name: 'TanStack Query',
              imgSrc: '/images/logos/trq.svg',
              website: 'https://tanstack.com/query',
            },
            {
              name: 'styled-components',
              imgSrc: '/images/logos/sc.svg',
              website: 'https://styled-components.com',
            },
          ],
        },
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      return new Response(error as BodyInit, { status: 477 });
    }
  }

  return new Response('Method Not Allowed', { status: 405 });
};
export { handler as GET, handler as POST };
