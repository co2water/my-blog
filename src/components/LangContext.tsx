'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'en' | 'zh'

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'en',
  toggle: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const toggle = () => setLang(lang === 'en' ? 'zh' : 'en')
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

export function T({ en, zh }: { en: string; zh: string }) {
  const { lang } = useLang()
  return <>{lang === 'en' ? en : zh}</>
}
