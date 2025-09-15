import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LinkLift - Turn LinkedIn into your client machine',
  description: 'Stop guessing what to post. Our AI assistant writes in your voice, posts consistently, and grows your authority—so you can focus on closing deals.',
  openGraph: {
    title: 'LinkLift - Turn LinkedIn into your client machine',
    description: 'Stop guessing what to post. Our AI assistant writes in your voice, posts consistently, and grows your authority—so you can focus on closing deals.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkLift - Turn LinkedIn into your client machine',
    description: 'Stop guessing what to post. Our AI assistant writes in your voice, posts consistently, and grows your authority—so you can focus on closing deals.',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%230a66c2'/></svg>" />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  );
}