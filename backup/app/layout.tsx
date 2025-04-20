import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hardwood Floors - Professional Installation & Refinishing',
  description: 'Professional hardwood floor installation and refinishing services for your home or business.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
