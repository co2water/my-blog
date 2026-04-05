import Link from 'next/link'

const pillars = [
  {
    icon: '⚡',
    titleEn: 'AIDLC Framework',
    titleZh: 'AIDLC 框架',
    descEn: 'AI-Driven Development Life Cycle — replacing linear, friction-heavy processes with an AI Agent as the central orchestrator for lossless, parallel execution.',
    descZh: 'AI 驱动的开发生命周期——以 AI Agent 作为中央编排器，取代线性高摩擦流程，实现无损信息传递与并行执行。',
    href: '/aidlc',
  },
  {
    icon: '🏛️',
    titleEn: 'AI Native Governance',
    titleZh: 'AI Native 企业治理',
    descEn: 'Mandatory learning programs, AI tool adoption, enterprise data auditing, AI Agent deployment, and workflow integration for operational excellence.',
    descZh: '强制学习、AI 工具推广、企业数据盘点、AI Agent 搭建、连接现有工作流程，全面提升运营效率。',
    href: '/aidlc#governance',
  },
  {
    icon: '🧬',
    titleEn: 'AI Native Organization',
    titleZh: 'AI Native 组织建设',
    descEn: 'Building teams from scratch in the AI era — how AI reshapes team structures, roles, and the PM/TL/Dev dynamic under AIDLC.',
    descZh: '在 AI 时代从零建立团队——AI 如何重塑团队结构、角色分工，以及 AIDLC 下 PM/TL/Dev 的新定位。',
    href: '/about#organization',
  },
  {
    icon: '🔧',
    titleEn: 'Hands-on & Case Studies',
    titleZh: '实战案例与工具',
    descEn: 'Real-world enterprise transformation stories from Nothing, OnePlus, and beyond. AI tool evaluations and practical playbooks.',
    descZh: '来自 Nothing、OnePlus 等企业的真实转型案例，AI 工具评测与实操手册。',
    href: '/about#experience',
  },
]

export default function HomePage() {
  return (
    <div className="gradient-mesh">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Overline */}
          <div className="animate-fade-in opacity-0 mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-mono tracking-widest uppercase">
              AI Native Enterprise Transformation
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up opacity-0 font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
            <span className="text-ivory">Rethink How</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-glow to-accent">
              Enterprises Build
            </span>
            <br />
            <span className="text-ivory">with AI</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up opacity-0 stagger-2 max-w-2xl mx-auto text-silver text-lg md:text-xl leading-relaxed mb-4">
            From human-centric friction to AI-driven flow.
            <br />
            Introducing <strong className="text-accent font-semibold">AIDLC</strong> — the framework for AI Native enterprise governance.
          </p>
          <p className="animate-fade-up opacity-0 stagger-3 max-w-2xl mx-auto text-steel text-base leading-relaxed mb-12">
            从人为驱动的高摩擦流程，迈向 AI 原生的无缝协作。
            <br />
            <strong className="text-accent/80">AIDLC</strong> —— AI Native 企业治理框架。
          </p>

          {/* CTAs */}
          <div className="animate-fade-up opacity-0 stagger-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/aidlc"
              className="px-8 py-3.5 rounded-xl bg-accent text-midnight font-display font-semibold text-sm tracking-wide hover:bg-accent-glow transition-all hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]"
            >
              Explore AIDLC →
            </Link>
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-xl border border-slate text-silver font-display font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-all"
            >
              About Sam Lee
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in opacity-0 stagger-6 mt-20">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent/40 to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* Content Pillars */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ivory mb-4">
              Four Pillars of Transformation
            </h2>
            <p className="text-steel text-base max-w-lg mx-auto">
              转型四大支柱
            </p>
            <div className="glow-line max-w-xs mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <Link
                key={pillar.titleEn}
                href={pillar.href}
                className="card-hover rounded-2xl bg-carbon/60 backdrop-blur-sm p-8 group"
              >
                <div className="text-3xl mb-4">{pillar.icon}</div>
                <h3 className="font-display font-bold text-xl text-ivory mb-1 group-hover:text-accent transition-colors">
                  {pillar.titleEn}
                </h3>
                <p className="text-accent/60 text-sm font-mono mb-3">{pillar.titleZh}</p>
                <p className="text-silver text-sm leading-relaxed mb-2">{pillar.descEn}</p>
                <p className="text-steel text-xs leading-relaxed">{pillar.descZh}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Credibility */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '15+', labelEn: 'Years Experience', labelZh: '年行业经验' },
              { value: '6+', labelEn: 'Product Launches', labelZh: '款产品成功发布' },
              { value: '3', labelEn: 'Global Markets', labelZh: '大洲市场覆盖' },
              { value: '50+', labelEn: 'Team Members Led', labelZh: '人团队管理' },
            ].map((stat) => (
              <div key={stat.labelEn}>
                <div className="font-display font-extrabold text-4xl md:text-5xl text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-silver text-sm">{stat.labelEn}</div>
                <div className="text-steel text-xs mt-1">{stat.labelZh}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ivory mb-6">
            Ready to Go AI Native?
          </h2>
          <p className="text-silver text-lg mb-4">
            Let&apos;s discuss how AIDLC can transform your organization&apos;s development lifecycle.
          </p>
          <p className="text-steel text-base mb-10">
            让我们一起探讨 AIDLC 如何转变您的组织开发生命周期。
          </p>
          <a
            href="https://www.linkedin.com/in/sam-lee-087a2579/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-xl bg-accent text-midnight font-display font-semibold tracking-wide hover:bg-accent-glow transition-all hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}
