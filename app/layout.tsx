import './globals.css';
import { pop } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${pop.className} antialiased`}>{children}</body>

    </html>
  )
}
