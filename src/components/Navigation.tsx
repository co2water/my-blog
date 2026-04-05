'use client'

import { useState } from 'react'
import Link from 'next/link'

const navItems = {
  en: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/aidlc', label: 'AIDLC' },
    { href: '/insights', label: 'Insights' },
  ],
  zh: [
    { href: '/', label: '首页' },
    { href: '/about', label: '关于' },
    { href: '/aidlc', label: 'AIDLC' },
    { href: '/insights', label: '观点' },
  ],
}

export default function Navigation() {
  const [lang, setLang] = useState<'en' | 'zh'>('en')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-midnight/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-dim flex items-center justify-center font-display font-bold text-midnight text-sm">
            SL
          </div>
          <span className="font-display font-semibold text-ivory text-lg tracking-tight group-hover:text-accent transition-colors">
            Sam Lee
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems[lang].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-silver hover:text-accent transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="ml-4 px-3 py-1.5 rounded-full border border-slate text-steel text-xs font-mono hover:border-accent hover:text-accent transition-all"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`w-5 h-0.5 bg-ivory transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-ivory transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-ivory transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-carbon/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          {navItems[lang].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-silver hover:text-accent transition-colors text-lg font-medium"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="mt-4 px-4 py-2 rounded-full border border-slate text-steel text-sm font-mono hover:border-accent hover:text-accent transition-all"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
        </div>
      )}
    </nav>
  )
}
