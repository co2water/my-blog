'use client'

import { LangProvider } from './LangContext'
import Navigation from './Navigation'
import Footer from './Footer'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <Navigation />
      <main className="relative z-10">{children}</main>
      <Footer />
    </LangProvider>
  )
}
