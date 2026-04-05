'use client'

import { useLang } from '@/components/LangContext'

const t = {
  en: {
    badge: 'The Story',
    name: 'Sam Lee',
    role: 'Head of Mobile SW & TW General Manager @ Nothing',
    intro: 'A technology executive who doesn\'t just manage teams — he builds them from zero. Who doesn\'t just adopt AI — he patents it. Who doesn\'t just ship products — he creates the revenue engine behind them.',
    ch1title: 'The Builder',
    ch1period: '2011 – 2015',
    ch1p1: 'Every executive starts somewhere. Mine started at HTC, hands-on as a Wireless System Engineer — serving as Modem Major Owner for flagship devices like HTC One M8 and HTC Butterfly. Deployed on-site in the U.S. and Japan to ensure technical acceptance was achieved on time, every time.',
    ch1p2: 'This wasn\'t management. This was the trenches. And it taught me something no MBA ever could: great products are delivered through relentless execution on the ground.',
    ch2title: 'The Scaler',
    ch2period: '2015 – 2021',
    ch2p1: 'At OnePlus, I was given a blank canvas: build the global Carrier Product and Technical Account Management department from nothing. Over 5 years and 9 months, I turned that canvas into a machine — launching products with T-Mobile, Verizon, Vodafone, EE, Jio, and CMCC across three continents.',
    ch2p2: 'I secured OnePlus\'s first PTCRB, Wi-Fi Logo, and GCF certifications. Led procurement of conformance test equipment that significantly reduced external certification costs. Developed carrier business strategies and served as the primary technical representative in top-level partner meetings.',
    ch2p3: 'Then at OPPO, I spearheaded the North American product strategy — managing RFP/RFI processes, annual sales plans, and full product line P&L.',
    ch3title: 'The Transformer',
    ch3period: '2022 – Present',
    ch3p1: 'At Nothing, I wear two hats: Head of Mobile SW and TW General Manager. I built the entire Mobile SW organization from the ground up — 150+ people across in-house (100+) and outsourced (50+) teams, spanning Android application development, AWS cloud infrastructure management, and CI/CD pipeline operations.',
    ch3p2: 'On the infrastructure side, I established a dual-track engineering system: Gerrit + Jenkins for on-premise builds and GitHub + AWS for cloud-side deployment — giving the team both the stability of traditional workflows and the agility of modern DevOps.',
    ch3p3: 'On the revenue side, I built Nothing OS software monetization from zero — creating revenue streams through pre-install partnerships, advertising integration, and subscription services (upcoming). Full P&L ownership with measurable profit delivery.',
    ch3p4: 'But the real transformation is happening now. While most enterprises debate "should we use AI?", I\'m asking a different question: "How do we make AI the central nervous system of the entire development lifecycle?" This led to the creation of the AIDLC framework, 5 AI Agent patent applications, and a fundamental rethinking of how teams, tools, and processes interconnect.',
    patentsTitle: 'AI Agent Patent Portfolio',
    patentsSub: 'All patents pending',
    patentsDesc: 'Five patent applications covering the full spectrum of AI Agent innovation — from individual specialized agents to multi-agent orchestration systems.',
    eduTitle: 'Education',
    eduSchool: 'National Taiwan University of Science and Technology',
    eduDegree: 'Master of Electronic and Computer Engineering',
    eduResearch: 'Research: Hybrid Evolutionary Algorithm for Multi-radio, Multi-channel Wireless Mesh Networks',
    ctaTitle: 'The Next Chapter',
    ctaSub: 'From builder to scaler to transformer — the journey continues. Let\'s write the next chapter together.',
    ctaBtn: 'Connect with Sam Lee',
  },
  zh: {
    badge: '我的故事',
    name: 'Sam Lee',
    role: 'Nothing 移动软件负责人 & 台湾总经理',
    intro: '一位不只管理团队，而是从零建立团队的技术高管。不只采用 AI，而是为之申请专利。不只发布产品，而是构建产品背后的营收引擎。',
    ch1title: '建设者',
    ch1period: '2011 – 2015',
    ch1p1: '每位高管都有起点。我的起点在 HTC，作为无线系统工程师，负责旗舰设备（HTC One M8、HTC Butterfly）的基带芯片模块。在美国和日本驻点确保技术验收按时完成。',
    ch1p2: '这不是管理，这是前线。它教会了我一件 MBA 永远教不会的事：卓越的产品是在一线用汗水交付出来的。',
    ch2title: '扩展者',
    ch2period: '2015 – 2021',
    ch2p1: '在 OnePlus，我从零建立了全球运营商产品和技术客户管理部门。在近 6 年间，将产品推进 T-Mobile、Verizon、Vodafone、EE、Jio、CMCC 等全球顶级运营商，覆盖三大洲。',
    ch2p2: '获得 OnePlus 首个 PTCRB、Wi-Fi Logo 和 GCF 认证，并通过采购一致性测试设备显著降低认证成本。制定运营商业务策略，并作为高层合作伙伴会议的首席技术代表。',
    ch2p3: '随后在 OPPO 主导北美产品策略——管理 RFP/RFI 流程、年度销售计划及完整产品线损益。',
    ch3title: '变革者',
    ch3period: '2022 – 至今',
    ch3p1: '在 Nothing，我身兼 Mobile SW 负责人与台湾总经理双重角色。从零建立了 150+ 人的组织——涵盖 Android 开发、AWS 云基础设施管理和 CI/CD 流水线运维（内部 100+，外包 50+）。',
    ch3p2: '在基础设施层面，我建立了双轨工程系统：Gerrit + Jenkins（本地构建）与 GitHub + AWS（云端部署）——兼顾传统工作流的稳定性和现代 DevOps 的敏捷性。',
    ch3p3: '在营收层面，我从零构建了 Nothing OS 的软件变现体系——包含预装合作、广告整合和即将上线的订阅服务。完整的损益管理责任与可衡量的利润交付。',
    ch3p4: '而真正的变革正在发生。当大多数企业还在讨论"要不要用 AI"时，我在思考一个不同的问题："如何让 AI 成为整个开发生命周期的中枢神经系统？"这催生了 AIDLC 框架、5 项 AI Agent 专利申请，以及对团队、工具和流程如何互联的根本性重新思考。',
    patentsTitle: 'AI Agent 专利组合',
    patentsSub: '全部专利申请中',
    patentsDesc: '五项专利申请涵盖 AI Agent 创新的全方位——从独立的专业化代理人到多代理人编排系统。',
    eduTitle: '教育背景',
    eduSchool: '台湾科技大学',
    eduDegree: '电子与计算机工程硕士',
    eduResearch: '研究方向：多无线电多信道无线网状网络中的混合进化算法',
    ctaTitle: '下一章',
    ctaSub: '从建设者到扩展者再到变革者——旅程仍在继续。让我们一起书写下一章。',
    ctaBtn: '联系 Sam Lee',
  },
}

const patents = {
  en: [
    { title: 'AI Test Agent', desc: 'Autonomous AI agent capable of understanding test requirements, generating test cases, and executing test workflows with minimal human intervention.' },
    { title: 'AI R&D Agent', desc: 'AI-powered development agent that interprets product requirements and generates implementation code through intelligent context understanding.' },
    { title: 'AI Test Architect', desc: 'Strategic AI agent that designs end-to-end testing architectures, optimizes test coverage, and orchestrates testing infrastructure at scale.' },
    { title: 'CI/CD Agent Deployment', desc: 'Intelligent deployment agent integrated into CI/CD pipelines for automated build management, environment provisioning, and release orchestration.' },
    { title: 'Multi-Agent Collaboration', desc: 'Framework for orchestrating multiple specialized AI agents to work collaboratively through DAG-based task decomposition and parallel execution.' },
  ],
  zh: [
    { title: 'AI 测试代理人', desc: '能够自主理解测试需求、生成测试用例并执行测试工作流的 AI 代理人，最小化人工干预。' },
    { title: 'AI 研发代理人', desc: '通过智能上下文理解，解读产品需求并生成实现代码的 AI 研发代理人。' },
    { title: 'AI 测试架构师', desc: '设计端到端测试架构、优化测试覆盖率并大规模编排测试基础设施的战略级 AI 代理人。' },
    { title: 'CI/CD Agent 部署', desc: '集成到 CI/CD 流水线中的智能部署代理人，实现自动化构建管理、环境配置和发布编排。' },
    { title: '多代理人协作管理', desc: '通过基于 DAG 的任务分解和并行执行，编排多个专业化 AI 代理人协作完成复杂任务的框架。' },
  ],
}

export default function AboutPage() {
  const { lang } = useLang()
  const c = t[lang]
  const p = patents[lang]

  return (
    <div className="gradient-mesh pt-24">
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-mono tracking-widest uppercase mb-6">{c.badge}</span>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ivory leading-tight mb-4">{c.name}</h1>
          <p className="text-accent text-lg font-medium mb-6">{c.role}</p>
          <p className="text-silver text-xl leading-relaxed max-w-3xl">{c.intro}</p>
        </div>
      </section>

      <div className="glow-line max-w-5xl mx-auto" />

      {/* Chapter 1 */}
      <section id="chapter-builder" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center font-display font-bold text-accent text-lg">01</div>
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory">{c.ch1title}</h2>
              <p className="text-steel text-sm">{c.ch1period}</p>
            </div>
          </div>
          <div className="bg-carbon/60 rounded-2xl p-8 border border-white/5">
            <p className="text-silver text-base leading-relaxed mb-6">{c.ch1p1}</p>
            <p className="text-silver text-base leading-relaxed"><em className="text-accent">{c.ch1p2}</em></p>
          </div>
        </div>
      </section>

      {/* Chapter 2 */}
      <section id="chapter-scaler" className="px-6 py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center font-display font-bold text-accent text-lg">02</div>
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory">{c.ch2title}</h2>
              <p className="text-steel text-sm">{c.ch2period}</p>
            </div>
          </div>
          <div className="bg-carbon/60 rounded-2xl p-8 border border-white/5">
            <p className="text-silver text-base leading-relaxed mb-6">{c.ch2p1}</p>
            <p className="text-silver text-base leading-relaxed mb-6">{c.ch2p2}</p>
            <p className="text-silver text-base leading-relaxed">{c.ch2p3}</p>
          </div>
        </div>
      </section>

      {/* Chapter 3 */}
      <section id="chapter-transformer" className="px-6 py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center font-display font-bold text-accent text-lg">03</div>
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory">{c.ch3title}</h2>
              <p className="text-steel text-sm">{c.ch3period}</p>
            </div>
          </div>
          <div className="bg-carbon/60 rounded-2xl p-8 border border-white/5">
            <p className="text-silver text-base leading-relaxed mb-6">{c.ch3p1}</p>
            <p className="text-silver text-base leading-relaxed mb-6">{c.ch3p2}</p>
            <p className="text-silver text-base leading-relaxed mb-6">{c.ch3p3}</p>
            <p className="text-silver text-base leading-relaxed">{c.ch3p4}</p>
          </div>
        </div>
      </section>

      <div className="glow-line max-w-5xl mx-auto" />

      {/* Patents */}
      <section id="patents" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory mb-2">{c.patentsTitle}</h2>
          <p className="text-steel text-sm mb-4">{c.patentsSub}</p>
          <p className="text-silver text-sm leading-relaxed max-w-3xl mb-12">{c.patentsDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.map((patent, i) => (
              <div key={patent.title} className="card-hover rounded-2xl bg-carbon/60 p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-accent/10 font-display font-extrabold text-5xl">{String(i + 1).padStart(2, '0')}</div>
                <div className="relative">
                  <div className="inline-block px-2 py-0.5 rounded-md bg-warm/10 text-warm text-[10px] font-mono uppercase tracking-wider mb-3">Patent Pending</div>
                  <h3 className="font-display font-bold text-base text-ivory mb-3">{patent.title}</h3>
                  <p className="text-silver text-sm leading-relaxed">{patent.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory mb-8">{c.eduTitle}</h2>
          <div className="bg-carbon/40 rounded-2xl p-8 border border-white/5">
            <h3 className="font-display font-bold text-lg text-ivory">{c.eduSchool}</h3>
            <p className="text-accent text-sm font-medium mt-2">{c.eduDegree}</p>
            <p className="text-steel text-xs mt-1">{c.eduResearch}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-ivory mb-6">{c.ctaTitle}</h2>
          <p className="text-silver text-lg mb-10">{c.ctaSub}</p>
          <a href="https://www.linkedin.com/in/sam-lee-087a2579/" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-xl bg-accent text-midnight font-display font-semibold tracking-wide hover:bg-accent-glow transition-all hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]">{c.ctaBtn}</a>
        </div>
      </section>
    </div>
  )
}
