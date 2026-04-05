'use client'

import Link from 'next/link'
import { useLang } from '@/components/LangContext'

const pillars = [
  {
    icon: '👥',
    en: { title: 'Team & Organization Building', desc: 'Built and managed 150+ members (100+ in-house, 50+ outsourced) spanning Android phone development, Nothing Ear & smartwatch apps, AWS infrastructure, CI/CD operations, and data analytics across Shenzhen and Taiwan.' },
    zh: { title: '团队管理与组织建设', desc: '从零建立并管理 150+ 人团队（内部 100+，外包 50+），涵盖 Android 手机开发、Nothing Ear 及智能手表应用、AWS 基础设施、CI/CD 运维及数据分析，横跨深圳与台湾。' },
    href: '/about#chapter-builder',
  },
  {
    icon: '🤖',
    en: { title: 'AI Agent Strategy & Practice', desc: 'Designing and deploying enterprise-grade AI Agents — from AI Testing Agents and R&D Agents to CI/CD deployment Agents, and Multi-Agent orchestration systems.' },
    zh: { title: 'AI Agent 战略与实践', desc: '设计与部署企业级 AI Agent——从 AI 测试代理人、研发代理人到 CI/CD 部署代理人，以及多代理人协作编排系统。' },
    href: '/aidlc#governance',
  },
  {
    icon: '📜',
    en: { title: 'AI Agent Patents', desc: 'Multiple AI Agent patents pending — covering AI Test Agent, AI R&D Agent, AI Test Architect, CI/CD Agent Deployment, and Multi-Agent collaboration management.' },
    zh: { title: 'AI Agent 专利创新', desc: '多项 AI Agent 专利申请中——涵盖 AI 测试代理人、AI 研发代理人、AI 测试架构师、CI/CD Agent 部署及多代理人协作管理。' },
    href: '/about#patents',
  },
  {
    icon: '⚡',
    en: { title: 'AIDLC Framework', desc: 'AI-Driven Development Life Cycle — replacing linear, friction-heavy processes with an AI Agent as the central orchestrator for lossless, parallel execution.' },
    zh: { title: 'AIDLC 框架', desc: 'AI 驱动的开发生命周期——以 AI Agent 为中央编排器，实现无损信息传递与并行执行。' },
    href: '/aidlc',
  },
  {
    icon: '💰',
    en: { title: 'SW Monetization, Data & Compliance', desc: 'Driving software revenue through pre-install, advertising, and subscription. Leading data analytics for sales, user personas, and quality. Ensuring GDPR and global data compliance.' },
    zh: { title: '软件营收、数据与合规', desc: '通过预装、广告及订阅驱动软件营收。带领数据分析团队进行销售、用户画像及品质监控。确保 GDPR 及全球数据合规。' },
    href: '/about#chapter-scaler',
  },
  {
    icon: '🌏',
    en: { title: 'Global Launch & Manufacturing', desc: 'End-to-end product delivery — from factory floor production software, station-level tooling, and MES system integration, through ODM/JDM management, to carrier launches with T-Mobile, Verizon, Vodafone across 4 markets.' },
    zh: { title: '全球发布与生产制造管理', desc: '端到端产品交付——从工厂产线生产软件、工站级工具、MES 系统集成，到 ODM/JDM 管理，再到与 T-Mobile、Verizon、Vodafone 等运营商在四大市场的产品发布。' },
    href: '/about#chapter-transformer',
  },
]

const stats = {
  en: [
    { value: '150+', label: 'Team Members' },
    { value: '20+', label: 'Product Launches' },
    { value: '4', label: 'Markets (CN/IN/EU/US)' },
    { value: '15+', label: 'Years Experience' },
    { value: '5', label: 'Patents Pending' },
  ],
  zh: [
    { value: '150+', label: '人团队管理' },
    { value: '20+', label: '款产品成功发布' },
    { value: '4', label: '大市场（中/印/欧/美）' },
    { value: '15+', label: '年行业经验' },
    { value: '5', label: '项专利申请中' },
  ],
}

const t = {
  en: {
    badge: 'AI Transformation Advisor × Technology Executive',
    h1a: 'Build Teams.',
    h1b: 'Ship Products.',
    h1c: 'Transform with AI.',
    sub: 'From building 150+ member global teams to pioneering AI Agent patents and AIDLC framework — driving enterprise transformation at the intersection of technology leadership and AI innovation.',
    cta1: 'My Story →',
    cta2: 'Explore AIDLC',
    pillarsTitle: 'Six Pillars of Leadership',
    ctaTitle: 'Ready to Go AI Native?',
    ctaSub: 'Whether you\'re exploring AI transformation strategy, building AI Agents for your organization, or rethinking your development lifecycle — I help enterprises navigate the shift from traditional operations to AI-native execution.',
    ctaBtn: 'Start a Conversation',
  },
  zh: {
    badge: 'AI 转型顾问 × 技术高管',
    h1a: '建团队。',
    h1b: '出产品。',
    h1c: 'AI 驱动转型。',
    sub: '从建立 150+ 人全球团队，到开创 AI Agent 专利与 AIDLC 框架——在技术领导力与 AI 创新的交汇点驱动企业转型。',
    cta1: '我的故事 →',
    cta2: '探索 AIDLC',
    pillarsTitle: '领导力六大支柱',
    ctaTitle: '准备好迈向 AI Native 了吗？',
    ctaSub: '无论您正在探索 AI 转型战略、为组织搭建 AI Agent，还是重新思考开发生命周期——我帮助企业从传统运营迈向 AI 原生执行模式。',
    ctaBtn: '开始对话',
  },
}

export default function HomePage() {
  const { lang } = useLang()
  const c = t[lang]
  const s = stats[lang]

  return (
    <div className="gradient-mesh">
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-mono tracking-widest uppercase">{c.badge}</span>
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
            <span className="text-ivory">{c.h1a}</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-glow to-accent">{c.h1b}</span><br />
            <span className="text-ivory">{c.h1c}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-silver text-lg md:text-xl leading-relaxed mb-12">{c.sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="px-8 py-3.5 rounded-xl bg-accent text-midnight font-display font-semibold text-sm tracking-wide hover:bg-accent-glow transition-all hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]">{c.cta1}</Link>
            <Link href="/aidlc" className="px-8 py-3.5 rounded-xl border border-slate text-silver font-display font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-all">{c.cta2}</Link>
          </div>
          <div className="mt-20"><div className="w-px h-16 bg-gradient-to-b from-transparent via-accent/40 to-transparent mx-auto" /></div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ivory mb-4">{c.pillarsTitle}</h2>
            <div className="glow-line max-w-xs mx-auto mt-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => {
              const d = p[lang]
              return (
                <Link key={d.title} href={p.href} className="card-hover rounded-2xl bg-carbon/60 backdrop-blur-sm p-8 group">
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="font-display font-bold text-lg text-ivory mb-2 group-hover:text-accent transition-colors">{d.title}</h3>
                  <p className="text-silver text-sm leading-relaxed">{d.desc}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {s.map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-extrabold text-4xl md:text-5xl text-accent mb-2">{stat.value}</div>
                <div className="text-silver text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ivory mb-6">{c.ctaTitle}</h2>
          <p className="text-silver text-lg mb-10">{c.ctaSub}</p>
          <a href="https://www.linkedin.com/in/sam-lee-087a2579/" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-xl bg-accent text-midnight font-display font-semibold tracking-wide hover:bg-accent-glow transition-all hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]">{c.ctaBtn}</a>
        </div>
      </section>
    </div>
  )
}
