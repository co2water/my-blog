import Link from 'next/link'

const pillars = [
  {
    number: '01',
    icon: '👥',
    titleEn: 'Team & Organization Building',
    titleZh: '团队管理与组织建设',
    descEn: 'Built and scaled a 150+ person cross-functional technology organization (100+ internal, 50+ outsourced) spanning Android development, AWS infrastructure, and CI/CD operations across Taiwan and Shenzhen.',
    descZh: '从零建立 150+ 人的跨职能技术组织（100+ 内部 + 50+ 外包），涵盖 Android 开发、AWS 基础设施及 CI/CD 运维，横跨台湾与深圳。',
    href: '/about#builder',
  },
  {
    number: '02',
    icon: '🤖',
    titleEn: 'AI Agent Strategy & Practice',
    titleZh: 'AI Agent 战略与实践',
    descEn: 'Designing and deploying enterprise-grade AI Agents — from test automation to development orchestration — as the central nervous system of modern software organizations.',
    descZh: '设计并部署企业级 AI Agent——从测试自动化到开发编排——作为现代软件组织的中枢神经系统。',
    href: '/aidlc',
  },
  {
    number: '03',
    icon: '📜',
    titleEn: 'AI Agent Patents',
    titleZh: 'AI Agent 专利创新',
    descEn: 'Multiple patent applications filed covering AI Testing Agent, AI Development Agent, AI Test Architect, CI/CD Agent Deployment, and Multi-Agent Collaboration Management.',
    descZh: '多项专利申请中，涵盖 AI 测试代理人、AI 研发代理人、AI 测试架构师、CI/CD Agent 部署及 Multi-Agent 多代理人协作管理。',
    href: '/about#patents',
  },
  {
    number: '04',
    icon: '⚡',
    titleEn: 'AIDLC Framework',
    titleZh: 'AIDLC 框架',
    descEn: 'AI-Driven Development Life Cycle — replacing linear, friction-heavy processes with an AI Agent as the central orchestrator for lossless, parallel execution.',
    descZh: 'AI 驱动的开发生命周期——以 AI Agent 作为中央编排器，取代线性高摩擦流程，实现无损并行执行。',
    href: '/aidlc',
  },
  {
    number: '05',
    icon: '💰',
    titleEn: 'SW Monetization & P&L',
    titleZh: '软件营收与 P&L 管理',
    descEn: 'Driving software revenue through pre-install partnerships, advertising integration, and subscription service strategy. Full P&L ownership with disciplined budget management delivering measurable profit gains.',
    descZh: '通过预装合作、广告整合和订阅服务策略驱动软件营收。完整的损益管理权，以严格的预算管理实现可量化的利润增长。',
    href: '/about#monetization',
  },
  {
    number: '06',
    icon: '🌏',
    titleEn: 'Global Product Launch & Carrier Strategy',
    titleZh: '全球产品发布与运营商策略',
    descEn: 'Led product launches with T-Mobile, Verizon, Vodafone, EE, Jio, and CMCC across North America, Europe, and Asia. Built carrier certification capabilities from scratch.',
    descZh: '主导与 T-Mobile、Verizon、Vodafone、EE、Jio、CMCC 等全球运营商的产品发布，覆盖北美、欧洲和亚洲。从零建立运营商认证能力。',
    href: '/about#scaler',
  },
]

export default function HomePage() {
  return (
    <div className="gradient-mesh">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-mono tracking-widest uppercase">
              Technology Executive · AI Strategist
            </span>
          </div>

          <h1 className="animate-fade-up font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
            <span className="text-ivory">Build Teams.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-glow to-accent">
              Ship Products.
            </span>
            <br />
            <span className="text-ivory">Transform with AI.</span>
          </h1>

          <p className="animate-fade-up stagger-2 max-w-2xl mx-auto text-silver text-lg md:text-xl leading-relaxed mb-4">
            From building <strong className="text-ivory">150+ person</strong> global teams to pioneering <strong className="text-accent font-semibold">AI-native enterprise transformation</strong> — I lead organizations through the shift from traditional operations to AI-driven execution.
          </p>
          <p className="animate-fade-up stagger-3 max-w-2xl mx-auto text-steel text-base leading-relaxed mb-12">
            从建立 <strong className="text-ivory/80">150+ 人</strong>的全球团队，到开创 <strong className="text-accent/80 font-semibold">AI Native 企业转型</strong>——我带领组织从传统运营迈向 AI 驱动的执行模式。
          </p>

          <div className="animate-fade-up stagger-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="px-8 py-3.5 rounded-xl bg-accent text-midnight font-display font-semibold text-sm tracking-wide hover:bg-accent-glow transition-all hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]">
              My Story →
            </Link>
            <Link href="/aidlc" className="px-8 py-3.5 rounded-xl border border-slate text-silver font-display font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-all">
              Explore AIDLC
            </Link>
          </div>

          <div className="animate-fade-in stagger-6 mt-20">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent/40 to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { value: '150+', labelEn: 'Team Members', labelZh: '人团队管理' },
              { value: '15+', labelEn: 'Years Experience', labelZh: '年行业经验' },
              { value: '6+', labelEn: 'Product Launches', labelZh: '款产品发布' },
              { value: '3', labelEn: 'Continents', labelZh: '大洲市场覆盖' },
              { value: '5', labelEn: 'Patents Pending', labelZh: '项专利申请中' },
            ].map((stat) => (
              <div key={stat.labelEn}>
                <div className="font-display font-extrabold text-4xl md:text-5xl text-accent mb-2">{stat.value}</div>
                <div className="text-silver text-sm">{stat.labelEn}</div>
                <div className="text-steel text-xs mt-1">{stat.labelZh}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Six Pillars */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ivory mb-4">Six Pillars of Leadership</h2>
            <p className="text-steel text-base">领导力六大支柱</p>
            <div className="glow-line max-w-xs mx-auto mt-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <Link key={pillar.titleEn} href={pillar.href} className="card-hover rounded-2xl bg-carbon/60 backdrop-blur-sm p-8 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent/40 font-mono text-xs">{pillar.number}</span>
                  <span className="text-2xl">{pillar.icon}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-ivory mb-1 group-hover:text-accent transition-colors">{pillar.titleEn}</h3>
                <p className="text-accent/60 text-xs font-mono mb-3">{pillar.titleZh}</p>
                <p className="text-silver text-sm leading-relaxed mb-2">{pillar.descEn}</p>
                <p className="text-steel text-xs leading-relaxed">{pillar.descZh}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Career Trajectory */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory mb-12 text-center">
            Career Trajectory
            <span className="block text-steel text-base font-normal mt-2">职业发展轨迹</span>
          </h2>
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {[
              { company: 'HTC', role: 'Engineer', year: '2011', desc: 'Modem Owner for flagship devices', descZh: '旗舰设备 Modem 负责人' },
              { company: 'OnePlus', role: 'Head of Carrier Product', year: '2015', desc: 'Built global carrier team', descZh: '建立全球运营商团队' },
              { company: 'OPPO', role: 'Head of NA Product', year: '2021', desc: 'NA market P&L ownership', descZh: '北美市场损益管理' },
              { company: 'Nothing', role: 'Head of Mobile SW & TW GM', year: '2022', desc: '150+ team, OS strategy, SW monetization, AI Agent patents', descZh: '150+ 团队、OS 战略、软件变现、AI Agent 专利' },
            ].map((c, i) => (
              <div key={c.company} className="flex-1 relative">
                <div className="bg-carbon/60 rounded-2xl p-6 border border-white/5 hover:border-accent/30 transition-colors h-full">
                  <span className="text-accent font-mono text-xs">{c.year}</span>
                  <h3 className="font-display font-bold text-lg text-ivory mt-2">{c.company}</h3>
                  <p className="text-accent text-xs font-medium mt-1">{c.role}</p>
                  <p className="text-silver text-sm mt-3">{c.desc}</p>
                  <p className="text-steel text-xs mt-1">{c.descZh}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute right-[-12px] top-1/2 -translate-y-1/2 text-accent/40 text-lg z-10">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ivory mb-6">Let&apos;s Build What&apos;s Next</h2>
          <p className="text-silver text-lg mb-4">Looking for a leader who builds teams, drives revenue, and transforms organizations with AI.</p>
          <p className="text-steel text-base mb-10">寻找一位能建团队、驱动营收、并以 AI 转型组织的领导者。</p>
          <a href="https://www.linkedin.com/in/sam-lee-087a2579/" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-xl bg-accent text-midnight font-display font-semibold tracking-wide hover:bg-accent-glow transition-all hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]">
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}
