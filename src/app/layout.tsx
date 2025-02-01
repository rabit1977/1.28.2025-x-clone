import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
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
  title: 'Create Next App',
  description: 'X Clone with Next.js',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg) xl:max-w-(--breakpoint-xl) xxl:max-w-(--breakpoint-xxl) mx-auto flex justify-between'>
          <div className='px-2 xsm:px-4 xxl:px-8 '>
            <LeftBar />
          </div>
          <div className='flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray '>
            {children}
            {modal}
          </div>
          <div className='hidden lg:flex mx-4 md:ml-8 flex-1 '>
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
