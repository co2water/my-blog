export default function AboutPage() {
  return (
    <div className="gradient-mesh pt-24">
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-mono tracking-widest uppercase mb-6">
            About / 关于
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ivory leading-tight mb-6">
            Sam Lee
          </h1>
          <p className="text-accent text-lg font-medium mb-6">
            Head of Mobile SW & TW General Manager @ Nothing
          </p>
          <p className="text-silver text-xl leading-relaxed max-w-3xl mb-4">
            A technology executive who has spent 15 years learning one fundamental truth: <strong className="text-ivory">the best technology means nothing without the right team, the right process, and the right strategy to bring it to market.</strong>
          </p>
          <p className="text-steel text-lg leading-relaxed max-w-3xl">
            一位用 15 年时间验证了一个核心真理的技术高管：<strong className="text-ivory/80">再好的技术，没有对的团队、对的流程、对的市场策略，都毫无意义。</strong>
          </p>
        </div>
      </section>

      <div className="glow-line max-w-5xl mx-auto" />

      {/* Chapter 1: The Builder */}
      <section id="builder" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-accent font-mono text-sm">Chapter 01</span>
            <div className="h-px flex-1 bg-accent/20" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ivory mb-2">
            The Builder
          </h2>
          <p className="text-steel text-lg mb-10">建设者 — 从零到一</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-silver text-base leading-relaxed">
                In 2011, I started as a Wireless System Engineer at HTC, serving as the Modem Major Owner for flagship devices like the HTC One M8 and HTC Butterfly. I was deployed on-site in the U.S. and Japan to ensure Technical Acceptance — working directly with Verizon, Sprint, and KDDI.
              </p>
              <p className="text-silver text-base leading-relaxed">
                That experience taught me something no classroom could: <strong className="text-ivory">great products are not just designed — they are delivered through sweat on the ground, in carrier labs, at 2 AM, debugging modem crashes.</strong>
              </p>
              <p className="text-silver text-base leading-relaxed">
                This conviction shaped everything that followed. When I joined Nothing in 2022 as Head of Mobile SW and TW General Manager, I built the entire Mobile Software team from scratch — first in Shenzhen, then in Taiwan. Today, that organization has grown to <strong className="text-accent">150+ people</strong>: 100+ internal engineers and 50+ outsourced partners, spanning Android development, AWS cloud infrastructure, and CI/CD pipeline operations.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-steel text-sm leading-relaxed">
                2011 年，我以 Wireless System Engineer 的身份加入 HTC，担任旗舰设备 HTC One M8 和 HTC Butterfly 的 Modem 主负责人。被派驻美国和日本，与 Verizon、Sprint、KDDI 直接合作确保技术验收。
              </p>
              <p className="text-steel text-sm leading-relaxed">
                那段经历教会了我一件课堂上学不到的事：<strong className="text-ivory/60">好的产品不仅仅是设计出来的——它们是在运营商实验室里、在凌晨两点、在调试 modem crash 的过程中交付出来的。</strong>
              </p>
              <p className="text-steel text-sm leading-relaxed">
                2022 年加入 Nothing 后，我从零建立了整个 Mobile SW 团队——先是深圳，然后是台湾。如今这个组织已成长为 <strong className="text-accent/80">150+ 人</strong>的团队：100+ 内部工程师和 50+ 外包伙伴，涵盖 Android 开发、AWS 云基础设施和 CI/CD 流水线运维。
              </p>
            </div>
          </div>

          {/* Key metrics for this chapter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '150+', label: 'Team Members', labelZh: '团队成员' },
              { value: '100+', label: 'Internal Engineers', labelZh: '内部工程师' },
              { value: '50+', label: 'Outsourced Partners', labelZh: '外包伙伴' },
              { value: '2', label: 'Offices Built', labelZh: '办公室从零建立' },
            ].map((m) => (
              <div key={m.label} className="bg-carbon/40 rounded-xl p-5 border border-white/5 text-center">
                <div className="font-display font-extrabold text-2xl text-accent">{m.value}</div>
                <div className="text-silver text-xs mt-1">{m.label}</div>
                <div className="text-steel text-[10px] mt-0.5">{m.labelZh}</div>
              </div>
            ))}
          </div>

          {/* Team scope detail */}
          <div className="mt-8 bg-carbon/40 rounded-2xl p-6 border border-white/5">
            <h4 className="font-display font-semibold text-base text-ivory mb-4">Organization Scope <span className="text-steel font-normal text-sm ml-2">组织范围</span></h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: '📱', title: 'Android Development', titleZh: 'Android 开发', desc: 'Nothing OS, CMF Phone series, system applications' },
                { icon: '☁️', title: 'AWS Infrastructure', titleZh: 'AWS 基础设施', desc: 'Cloud operations, service deployment, enterprise-side GitHub workflows' },
                { icon: '🔄', title: 'CI/CD Operations', titleZh: 'CI/CD 运维', desc: 'Gerrit + Jenkins (on-premise), GitHub-based deployment (AWS)' },
              ].map((s) => (
                <div key={s.title} className="flex gap-3">
                  <span className="text-xl shrink-0">{s.icon}</span>
                  <div>
                    <p className="text-ivory text-sm font-medium">{s.title}</p>
                    <p className="text-accent/60 text-xs">{s.titleZh}</p>
                    <p className="text-steel text-xs mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line max-w-5xl mx-auto" />

      {/* Chapter 2: The Scaler */}
      <section id="scaler" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-accent font-mono text-sm">Chapter 02</span>
            <div className="h-px flex-1 bg-accent/20" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ivory mb-2">
            The Scaler
          </h2>
          <p className="text-steel text-lg mb-10">规模化者 — 从一到百</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-silver text-base leading-relaxed">
                At OnePlus, over 5 years and 9 months, I built and managed the entire global Carrier Product and Technical Account Management department from zero. We launched products with the world&apos;s largest carriers — <strong className="text-ivory">T-Mobile, Verizon, Vodafone, EE, Jio, CMCC</strong> — across the USA, Europe, India, and China.
              </p>
              <p className="text-silver text-base leading-relaxed">
                I secured OnePlus&apos;s first PTCRB, Wi-Fi Logo, and GCF certifications. I led procurement of conformance test equipment that significantly reduced external certification costs. Every dollar saved was a dollar returned to product development.
              </p>
              <p className="text-silver text-base leading-relaxed">
                At OPPO, I spearheaded the North American product strategy — owning the RFP/RFI process, annual sales plans, and full product line P&L.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-steel text-sm leading-relaxed">
                在 OnePlus 的 5 年 9 个月里，我从零建立并管理了全球运营商产品与技术客户管理部门。我们与全球最大的运营商合作发布产品——<strong className="text-ivory/60">T-Mobile、Verizon、Vodafone、EE、Jio、CMCC</strong>——覆盖美国、欧洲、印度和中国。
              </p>
              <p className="text-steel text-sm leading-relaxed">
                我获得了 OnePlus 的首个 PTCRB、Wi-Fi Logo 和 GCF 认证，主导一致性测试设备采购，显著降低了外部认证成本。省下的每一分钱都回流到了产品开发。
              </p>
              <p className="text-steel text-sm leading-relaxed">
                在 OPPO，我主导北美产品策略——管理 RFP/RFI 流程、年度销售计划和完整的产品线损益。
              </p>
            </div>
          </div>

          {/* Carrier logos / partnerships */}
          <div className="mt-12 bg-carbon/40 rounded-2xl p-6 border border-white/5">
            <h4 className="font-display font-semibold text-base text-ivory mb-4">Global Carrier Partnerships <span className="text-steel font-normal text-sm ml-2">全球运营商合作</span></h4>
            <div className="flex flex-wrap gap-3">
              {['T-Mobile', 'Verizon', 'Vodafone', 'EE', 'Jio', 'CMCC', 'Sprint', 'KDDI', 'Telefónica O2'].map((name) => (
                <span key={name} className="px-4 py-2 rounded-lg bg-midnight/60 border border-accent/10 text-silver text-sm font-medium">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line max-w-5xl mx-auto" />

      {/* Chapter 3: The Transformer */}
      <section id="transformer" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-accent font-mono text-sm">Chapter 03</span>
            <div className="h-px flex-1 bg-accent/20" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ivory mb-2">
            The Transformer
          </h2>
          <p className="text-steel text-lg mb-10">变革者 — 从传统到 AI Native</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <p className="text-silver text-base leading-relaxed">
                While most organizations are still debating whether to adopt AI tools, I&apos;m already asking a different question: <strong className="text-accent">how do we make AI the central nervous system of the entire enterprise?</strong>
              </p>
              <p className="text-silver text-base leading-relaxed">
                This led to the creation of the <strong className="text-ivory">AIDLC framework</strong> (AI-Driven Development Life Cycle) — a paradigm that replaces linear, friction-heavy human handoffs with AI Agents as central orchestrators, enabling lossless information flow and parallel execution through DAG-based task decomposition.
              </p>
              <p className="text-silver text-base leading-relaxed">
                More importantly, I&apos;m not just theorizing. I have <strong className="text-ivory">5 patent applications filed</strong> that represent concrete technical innovations in AI Agent architecture.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-steel text-sm leading-relaxed">
                当大多数组织还在争论是否要采用 AI 工具时，我已经在思考一个不同的问题：<strong className="text-accent/80">如何让 AI 成为整个企业的中枢神经系统？</strong>
              </p>
              <p className="text-steel text-sm leading-relaxed">
                这催生了 <strong className="text-ivory/60">AIDLC 框架</strong>（AI 驱动的开发生命周期）——一个以 AI Agent 作为中央编排器取代线性人工交接的范式，通过 DAG 任务分解实现无损信息流和并行执行。
              </p>
              <p className="text-steel text-sm leading-relaxed">
                更重要的是，这不仅仅是理论。我已提交 <strong className="text-ivory/60">5 项专利申请</strong>，代表了 AI Agent 架构的具体技术创新。
              </p>
            </div>
          </div>

          {/* Patents */}
          <div id="patents" className="bg-carbon/40 rounded-2xl p-8 border border-accent/10">
            <h4 className="font-display font-semibold text-lg text-ivory mb-2">Patent Portfolio <span className="text-steel font-normal text-sm ml-2">专利组合（申请中）</span></h4>
            <p className="text-steel text-xs mb-6">All patents pending · 所有专利均在申请中</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🧪', titleEn: 'AI Testing Agent', titleZh: 'AI 测试代理人', desc: 'Autonomous test execution and quality assurance driven by AI agents.' },
                { icon: '💻', titleEn: 'AI Development Agent', titleZh: 'AI 研发代理人', desc: 'AI-powered code generation and development workflow orchestration.' },
                { icon: '🏗️', titleEn: 'AI Test Architect', titleZh: 'AI 测试架构师', desc: 'Intelligent test strategy design and architecture planning.' },
                { icon: '🚀', titleEn: 'CI/CD Agent Deployment', titleZh: 'CI/CD Agent 部署', desc: 'AI-driven continuous integration and deployment pipeline management.' },
                { icon: '🔗', titleEn: 'Multi-Agent Collaboration', titleZh: 'Multi-Agent 协作管理', desc: 'Orchestration framework for multiple AI agents working in coordination.' },
              ].map((p) => (
                <div key={p.titleEn} className="bg-midnight/40 rounded-xl p-5 border border-accent/5 hover:border-accent/20 transition-colors">
                  <span className="text-xl">{p.icon}</span>
                  <h5 className="font-display font-semibold text-sm text-ivory mt-2">{p.titleEn}</h5>
                  <p className="text-accent/60 text-xs">{p.titleZh}</p>
                  <p className="text-steel text-xs mt-2 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line max-w-5xl mx-auto" />

      {/* SW Monetization */}
      <section id="monetization" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-accent font-mono text-sm">Chapter 04</span>
            <div className="h-px flex-1 bg-accent/20" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ivory mb-2">
            The Strategist
          </h2>
          <p className="text-steel text-lg mb-10">策略家 — 软件营收与商业思维</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <p className="text-silver text-base leading-relaxed">
                Technology leadership without business impact is incomplete. At Nothing, I own the <strong className="text-ivory">full SW P&L</strong> — building and managing the software monetization strategy for Nothing OS. This includes pre-install partnerships, advertising integration, and a subscription service model currently in development.
              </p>
              <p className="text-silver text-base leading-relaxed">
                Profit isn&apos;t just about revenue — it&apos;s about discipline. Through rigorous budgeting, vendor negotiation, and team efficiency optimization, I&apos;ve delivered measurable profit gains while scaling the team from zero to 150+.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-steel text-sm leading-relaxed">
                没有商业影响力的技术领导力是不完整的。在 Nothing，我拥有<strong className="text-ivory/60">完整的软件损益管理权</strong>——构建并管理 Nothing OS 的软件变现策略，包括预装合作、广告整合，以及正在开发中的订阅服务模式。
              </p>
              <p className="text-steel text-sm leading-relaxed">
                利润不仅仅是营收——更是纪律。通过严格的预算管理、供应商谈判和团队效率优化，我在将团队从零扩展到 150+ 人的同时，实现了可量化的利润增长。
              </p>
            </div>
          </div>

          {/* Revenue streams */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '📦', titleEn: 'Pre-install Partnerships', titleZh: '预装合作', status: 'Active', desc: 'Strategic app pre-installation agreements driving recurring revenue.' },
              { icon: '📊', titleEn: 'Advertising Integration', titleZh: '广告整合', status: 'Active', desc: 'In-OS advertising placements with privacy-first approach.' },
              { icon: '⭐', titleEn: 'Subscription Services', titleZh: '订阅服务', status: 'In Development', desc: 'Premium subscription model for enhanced Nothing OS features.' },
            ].map((r) => (
              <div key={r.titleEn} className="bg-carbon/40 rounded-xl p-6 border border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl">{r.icon}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${r.status === 'Active' ? 'bg-accent/10 text-accent' : 'bg-warm/10 text-warm'}`}>
                    {r.status}
                  </span>
                </div>
                <h5 className="font-display font-semibold text-sm text-ivory">{r.titleEn}</h5>
                <p className="text-accent/60 text-xs">{r.titleZh}</p>
                <p className="text-steel text-xs mt-2 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line max-w-5xl mx-auto" />

      {/* Education */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-ivory mb-8">
            Education <span className="text-steel text-lg font-normal ml-2">教育背景</span>
          </h2>
          <div className="bg-carbon/40 rounded-2xl p-8 border border-white/5">
            <h3 className="font-display font-bold text-lg text-ivory">National Taiwan University of Science and Technology</h3>
            <p className="text-steel text-sm mt-1">台湾科技大学</p>
            <p className="text-accent text-sm font-medium mt-2">Master of Electronic and Computer Engineering</p>
            <p className="text-steel text-xs mt-1">Research: Hybrid Evolutionary Algorithm for Multi-radio, Multi-channel Wireless Mesh Networks</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-ivory mb-6">The Next Chapter</h2>
          <p className="text-silver text-lg mb-4">
            I&apos;m looking for the next challenge — an organization that needs a leader who can build teams, drive P&L, and lead AI-native transformation at scale.
          </p>
          <p className="text-steel text-base mb-10">
            我正在寻找下一个挑战——一个需要能建团队、管损益、并大规模推动 AI Native 转型的领导者的组织。
          </p>
          <a href="https://www.linkedin.com/in/sam-lee-087a2579/" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-xl bg-accent text-midnight font-display font-semibold tracking-wide hover:bg-accent-glow transition-all hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]">
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}
