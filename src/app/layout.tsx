import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sam Lee | AI Native Enterprise Transformation',
  description: 'Helping enterprises transform through AI-Driven Development Life Cycle (AIDLC) and AI Native governance.',
  keywords: ['AIDLC', 'AI Native', 'Enterprise Transformation', 'Sam Lee', 'AI Agent', 'Digital Transformation'],
  authors: [{ name: 'Sam Lee' }],
  openGraph: {
    title: 'Sam Lee | AI Native Enterprise Transformation',
    description: 'Helping enterprises transform through AIDLC and AI Native governance.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="noise-bg">
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
