import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/components/LangContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sam Lee | AI Native Enterprise Transformation',
  description: 'Helping enterprises transform through AI-Driven Development Life Cycle (AIDLC) and AI Native governance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise-bg">
        <LangProvider>
          <Navigation />
          <main className="relative z-10">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  )
}
