import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'LinkedIn Automation - Powerful Python Library',
  description: 'Automate your LinkedIn workflow with our powerful Python library. Connect, engage, and grow your network programmatically.',
  openGraph: {
    title: 'LinkedIn Automation - Powerful Python Library',
    description: 'Automate your LinkedIn workflow with our powerful Python library. Connect, engage, and grow your network programmatically.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkedIn Automation - Powerful Python Library',
    description: 'Automate your LinkedIn workflow with our powerful Python library. Connect, engage, and grow your network programmatically.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230a66c2'/></svg>" />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-gray-50">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}