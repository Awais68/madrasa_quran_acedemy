import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AL-Quran Teach',
  description: 'As Developers',
  generator: 'Awais Niaz Full Stack Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
