import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/components/common/Layout';

export const metadata: Metadata = {
  title: 'Netflix Project',
  description: 'Next.js Netflix Clone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="font-sans">
      <body className="bg-black antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
