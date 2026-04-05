const experience = [
  {
    company: 'Nothing',
    role: 'Head of Mobile SW & TW General Manager',
    period: 'Jan 2022 – Present',
    highlights: [
      'Built the Mobile SW team from scratch in Shenzhen and Taiwan; established the Taiwan office.',
      'Define the Software Technical Roadmap and Nothing OS strategic direction.',
      'Successfully launched Nothing Phone and CMF Phone series.',
      'Established SW Integrated Product Development (IPD) process and ODM/JDM management protocols.',
      'Delivered profit gains through software budgeting and cost management.',
    ],
    highlightsZh: [
      '从零建立深圳和台湾的 Mobile SW 团队，设立台湾办公室。',
      '定义软件技术路线图与 Nothing OS 战略方向。',
      '成功领导 Nothing Phone 和 CMF Phone 系列产品发布。',
      '建立 SW IPD 流程与 ODM/JDM 管理机制。',
      '通过高效的软件预算管理实现利润增长。',
    ],
  },
  {
    company: 'OPPO',
    role: 'Head of NA Carrier Product',
    period: 'Jul 2021 – Dec 2021',
    highlights: [
      'Spearheaded the North American product RFP/RFI strategy.',
      'Managed annual sales plans and product line P&L.',
      'Managed end-to-end product life cycle for the NA market.',
    ],
    highlightsZh: [
      '主导北美产品 RFP/RFI 策略。',
      '管理年度销售计划与产品线损益。',
      '管理北美市场的端到端产品生命周期。',
    ],
  },
  {
    company: 'OnePlus',
    role: 'Head of Carrier Product & TAM, Global',
    period: 'Oct 2015 – Jun 2021 (5 yrs 9 mos)',
    highlights: [
      'Built and managed the global Carrier Product and Technical Account Management department.',
      'Launched products with T-Mobile, Verizon, Vodafone, EE, Jio, CMCC across USA, EU, India, and China.',
      'Led procurement of conformance test equipment, reducing certification costs.',
      'Secured OnePlus\'s first PTCRB, Wi-Fi Logo, and GCF certifications.',
    ],
    highlightsZh: [
      '建立并管理全球运营商产品与技术客户管理部门。',
      '与 T-Mobile、Verizon、Vodafone、EE 等全球主要运营商成功发布产品。',
      '主导一致性测试设备采购，显著降低认证成本。',
      '获得 OnePlus 首个 PTCRB、Wi-Fi Logo 和 GCF 认证。',
    ],
  },
  {
    company: 'HTC',
    role: 'Wireless System Engineer',
    period: 'Jun 2011 – Sep 2014 (3 yrs 4 mos)',
    highlights: [
      'Modem Major Owner for flagship devices including HTC One M8 (Verizon/Sprint) and HTC Butterfly (KDDI).',
      'Deployed on-site in U.S. and Japan to ensure on-time Technical Acceptance.',
    ],
    highlightsZh: [
      '旗舰设备 Modem 主负责人，包括 HTC One M8 (Verizon/Sprint) 和 HTC Butterfly (KDDI)。',
      '驻点美国和日本确保项目按时获得技术验收。',
    ],
  },
]

const competencies = [
  { icon: '👥', en: 'Cross-functional Team Management', zh: '跨职能团队管理' },
  { icon: '🏭', en: 'ODM / OEM / JDM Management', zh: 'ODM/OEM/JDM 管理' },
  { icon: '📊', en: 'P&L & Budget Control', zh: '损益与预算管理' },
  { icon: '📱', en: 'Mobile SW Lifecycle (SDLC)', zh: '移动软件生命周期' },
  { icon: '📡', en: 'Carrier Certification (NA/EU/Asia)', zh: '运营商认证（全球）' },
  { icon: '🤖', en: 'AI-Driven Workflow Automation', zh: 'AI 驱动的流程自动化' },
]

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
          <p className="text-silver text-xl md:text-2xl leading-relaxed max-w-3xl mb-4">
            Head of Mobile SW @ Nothing. 15+ years building global teams and launching products across three continents.
            Now pioneering <span className="text-accent font-semibold">AI Native enterprise transformation</span>.
          </p>
          <p className="text-steel text-lg leading-relaxed max-w-3xl">
            Nothing 移动软件负责人兼台湾总经理。15+ 年全球团队建设与产品发布经验。
            现专注于推动 <span className="text-accent/80 font-semibold">AI Native 企业治理转型</span>。
          </p>
        </div>
      </section>

      <div className="glow-line max-w-5xl mx-auto" />

      {/* Mission */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory mb-8">
            Mission <span className="text-steel text-lg font-normal ml-2">使命</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-carbon/60 rounded-2xl p-8 border border-white/5">
              <p className="text-silver text-base leading-relaxed">
                I believe the next wave of enterprise innovation isn&apos;t about adding AI tools to existing processes — it&apos;s about rebuilding processes around AI as the central nervous system. Through the <strong className="text-accent">AIDLC framework</strong>, I help organizations shift from human-centric, friction-heavy workflows to AI-native, lossless execution models.
              </p>
            </div>
            <div className="bg-carbon/60 rounded-2xl p-8 border border-white/5">
              <p className="text-steel text-base leading-relaxed">
                我相信企业创新的下一波浪潮不是把 AI 工具加到现有流程上——而是以 AI 作为中枢神经系统重建整个流程。通过 <strong className="text-accent/80">AIDLC 框架</strong>，我帮助组织从人为驱动的高摩擦工作流转向 AI 原生的无损执行模型。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory mb-8">
            Core Competencies <span className="text-steel text-lg font-normal ml-2">核心能力</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {competencies.map((c) => (
              <div
                key={c.en}
                className="flex items-center gap-4 bg-carbon/40 rounded-xl p-5 border border-white/5 hover:border-accent/30 transition-colors"
              >
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <p className="text-ivory text-sm font-medium">{c.en}</p>
                  <p className="text-steel text-xs mt-0.5">{c.zh}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line max-w-5xl mx-auto" />

      {/* Experience Timeline */}
      <section id="experience" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory mb-12">
            Experience <span className="text-steel text-lg font-normal ml-2">职业经历</span>
          </h2>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div
                key={exp.company}
                className="relative pl-8 border-l-2 border-slate/30 hover:border-accent/50 transition-colors group"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-graphite border-2 border-slate group-hover:border-accent transition-colors" />

                <div className="bg-carbon/40 rounded-2xl p-6 md:p-8 border border-white/5 group-hover:border-accent/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-ivory">{exp.company}</h3>
                      <p className="text-accent text-sm font-medium mt-1">{exp.role}</p>
                    </div>
                    <span className="text-steel text-xs font-mono mt-2 md:mt-0">{exp.period}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-silver text-sm leading-relaxed flex gap-2">
                        <span className="text-accent/60 mt-1 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-1.5">
                    {exp.highlightsZh.map((h, i) => (
                      <li key={i} className="text-steel text-xs leading-relaxed flex gap-2">
                        <span className="text-accent/30 mt-0.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory mb-8">
            Education <span className="text-steel text-lg font-normal ml-2">教育背景</span>
          </h2>
          <div className="bg-carbon/40 rounded-2xl p-8 border border-white/5">
            <h3 className="font-display font-bold text-lg text-ivory">
              National Taiwan University of Science and Technology
            </h3>
            <p className="text-steel text-sm mt-1">台湾科技大学</p>
            <p className="text-accent text-sm font-medium mt-2">
              Master of Electronic and Computer Engineering
            </p>
            <p className="text-steel text-xs mt-1">
              Research: Hybrid Evolutionary Algorithm for Multi-radio, Multi-channel Wireless Mesh Networks
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
