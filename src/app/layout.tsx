import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/components/common/Layout';

export const metadata: Metadata = {
  title: {
    default: 'Nextflix',
    template: '%s | Nextflix',
  },
  description: 'Next.js Netflix Clone',
  openGraph: {
    title: 'Nextflix',
    description: '전 세계의 영화와 TV 시리즈를 한눈에!',
    url: 'https://ceos-week5-next-netflix-23rd.vercel.app/',
    siteName: 'Nextflix',
    images: [
      {
        url: '/icons/ic-netflix.svg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  icons: {
    icon: '/icons/ic-netflix.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="font-sans">
      <body className="bg-grey-900 antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
