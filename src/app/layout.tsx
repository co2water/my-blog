import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

export const metadata: Metadata = {
  title: 'Sam Lee | AI Native Enterprise Transformation',
  description: 'Helping enterprises transform through AI-Driven Development Life Cycle (AIDLC) and AI Native governance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise-bg">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
