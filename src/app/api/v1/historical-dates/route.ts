// import { config } from '@/shared/lib/config/config';
import { NextResponse } from 'next/server';

const handler = async (req: Request) => {
  const { method } = req;

  if (method === 'GET') {
    try {
      // const url = `https://onlyfunnytest-n80dpj0iq-funnymans-projects.vercel.app/mock/historical-dates.json`;
      // console.log({ url });

      // const res = await fetch(url);

      // const data = await res.json();

      return NextResponse.json(
        {
          cinema: [
            {
              year: 1895,
              event:
                'The Lumière brothers screen the first motion picture in Paris. This marked the public debut of projected film and is considered the birth of cinema. Their short films sparked global interest in the moving image as a storytelling medium.',
            },
            {
              year: 1927,
              event:
                "The Jazz Singer becomes the first feature-length film with synchronized dialogue. This innovation ushered in the era of 'talkies' and changed the landscape of filmmaking. It signaled the decline of silent films and revolutionized the audience experience.",
            },
            {
              year: 1939,
              event:
                'Gone with the Wind and The Wizard of Oz are both released. These films showcased advanced use of color and large-scale storytelling. They became enduring classics and milestones of Hollywood’s Golden Age.',
            },
            {
              year: 1941,
              event:
                'Citizen Kane is released, revolutionizing cinematography. Its nonlinear narrative, deep focus, and innovative editing techniques reshaped film language. The movie remains a reference point in film schools and criticism today.',
            },
            {
              year: 1952,
              event:
                "Singin' in the Rain celebrates the transition to talkies. The film cleverly satirizes the film industry's shift from silent movies to sound. Its choreography and humor have made it a timeless musical.",
            },
            {
              year: 1972,
              event:
                'The Godfather premieres, becoming a cinematic masterpiece. Its nuanced portrayal of family, crime, and power set a new benchmark for storytelling. The film is widely studied and admired for its direction and performances.',
            },
            {
              year: 1977,
              event:
                'Star Wars premieres, changing the sci-fi genre. It redefined visual effects and introduced a galaxy-spanning story that captivated audiences. Its success helped create the modern blockbuster model.',
            },
            {
              year: 1995,
              event:
                'Toy Story becomes the first fully computer-animated feature film. The film demonstrated the potential of digital animation for full-length storytelling. It marked the beginning of Pixar’s rise as an animation powerhouse.',
            },
            {
              year: 2009,
              event:
                'Avatar introduces groundbreaking 3D and motion-capture technology. Its immersive visuals and use of digital effects set new cinematic standards. The film broke box office records and influenced a wave of 3D releases.',
            },
            {
              year: 2020,
              event:
                'Streaming becomes dominant with platforms like Netflix and Disney+. The COVID-19 pandemic accelerated this shift in viewing habits. Studios increasingly focused on digital-first releases, transforming distribution models.',
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
      return new Response(error as string, { status: 500 });
    }
  }

  return new Response('Method Not Allowed', { status: 405 });
};
export { handler as GET, handler as POST };
