'use client'

import { useLang } from './LangContext'

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className="relative z-10 border-t border-white/5 bg-midnight/80">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-dim flex items-center justify-center font-display font-bold text-midnight text-xs">SL</div>
            <span className="font-display font-semibold text-ivory text-base">Sam Lee</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/sam-lee-087a2579/" target="_blank" rel="noopener noreferrer" className="text-steel hover:text-accent transition-colors text-sm">LinkedIn</a>
            <a href="https://github.com/co2water" target="_blank" rel="noopener noreferrer" className="text-steel hover:text-accent transition-colors text-sm">GitHub</a>
          </div>
          <p className="text-steel/60 text-xs font-mono">© 2026 Sam Lee. {lang === 'en' ? 'All rights reserved.' : '保留所有权利。'}</p>
        </div>
      </div>
    </footer>
  )
}
