import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import TanstackQueryProvider from '@/shared/lib/tanstack-react-query/TanstackQueryProvider';
import StyledProvider from '@/shared/lib/styled-components/StyledProvider';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Only Funny Task',
  description: 'Made for test purposes only',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanstackQueryProvider>
          <StyledProvider>
            {/* <Suspense fallback={<RootLoading />}> */}
            {children}
            {/* </Suspense> */}
          </StyledProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
