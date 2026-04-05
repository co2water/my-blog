'use client'

import { useLang } from '@/components/LangContext'

const t = {
  en: {
    badge: 'Framework',
    title: 'AIDLC',
    subtitle: 'AI-Driven Development Life Cycle',
    desc: 'A paradigm shift from linear, friction-heavy human-centric processes to AI-native, lossless parallel execution — with AI Agent as the central orchestrator.',
    shiftTitle: 'The Paradigm Shift',
    beforeTitle: 'Before: Human-Centric Process',
    beforeFriction: 'High Friction',
    beforeFrictionDesc: 'Multiple alignment loops between PM ↔ TL ↔ Dev with constant back-and-forth.',
    beforeLoss: 'Information Loss',
    beforeLossDesc: 'Manual translation at every handoff point causes context degradation.',
    beforeSeq: 'Sequential Execution',
    beforeSeqDesc: 'Linear pipeline — each stage waits for the previous one to complete.',
    afterTitle: 'After: AIDLC Process',
    afterFriction: 'Zero Friction',
    afterFrictionDesc: 'PM does Idea Alignment only. AI Agent handles all downstream coordination.',
    afterLoss: 'Lossless Transfer',
    afterLossDesc: 'AI Agent maintains full context across the entire lifecycle — no information degradation.',
    afterPar: 'Parallel Execution',
    afterParDesc: 'DAG decomposes tasks for simultaneous execution across multiple Claude Code instances.',
    govTitle: 'AI Native Governance: 5 Steps',
    principlesTitle: 'AIDLC Core Principles',
    ctaTitle: 'Bring AIDLC to Your Organization',
    ctaSub: 'I help enterprises implement the AIDLC framework — from AI literacy programs to full AI Agent deployment. Let\'s design your transformation roadmap.',
    ctaBtn: 'Discuss Your Transformation',
  },
  zh: {
    badge: '框架',
    title: 'AIDLC',
    subtitle: 'AI 驱动的开发生命周期',
    desc: '从线性、高摩擦的人为驱动流程，到以 AI Agent 为中央编排器的 AI 原生无损并行执行范式。',
    shiftTitle: '范式转移',
    beforeTitle: '传统：人为驱动流程',
    beforeFriction: '高摩擦',
    beforeFrictionDesc: 'PM、TL、Dev 之间需要大量反复对齐。',
    beforeLoss: '信息损失',
    beforeLossDesc: '每次交接点的人工翻译造成上下文退化。',
    beforeSeq: '顺序执行',
    beforeSeqDesc: '线性流水线——每个阶段都要等前一阶段完成。',
    afterTitle: 'AIDLC：AI 驱动流程',
    afterFriction: '零摩擦',
    afterFrictionDesc: 'PM 只做创意对齐，AI Agent 处理所有下游协调。',
    afterLoss: '无损传递',
    afterLossDesc: 'AI Agent 在整个生命周期中保持完整上下文——零信息损失。',
    afterPar: '并行执行',
    afterParDesc: 'DAG 分解任务，多个 Claude Code 实例同时并行执行。',
    govTitle: 'AI Native 企业治理五步法',
    principlesTitle: 'AIDLC 核心原则',
    ctaTitle: '将 AIDLC 引入您的组织',
    ctaSub: '我帮助企业实施 AIDLC 框架——从 AI 素养培训到完整的 AI Agent 部署。让我们一起设计您的转型路线图。',
    ctaBtn: '探讨您的转型方案',
  },
}

const govSteps = {
  en: [
    { icon: '📚', title: 'Mandatory AI Learning', desc: 'Establish organization-wide AI literacy programs. Every team member must develop foundational understanding of AI capabilities and best practices.' },
    { icon: '🛠️', title: 'AI Tool Adoption', desc: 'Deploy and standardize AI tools across the organization — development (Claude Code, Copilot), analytics (AI Studio), communication, and project management.' },
    { icon: '📊', title: 'Enterprise Data Audit', desc: 'Catalog and assess all enterprise data assets. Identify which data is AI-ready, what needs cleaning, and where the gaps are.' },
    { icon: '🤖', title: 'AI Agent Construction', desc: 'Build AI Agents as central orchestrators — the core of AIDLC. These agents understand context, generate artifacts, manage task decomposition via DAGs, and enable parallel execution.' },
    { icon: '🔗', title: 'Workflow Integration', desc: 'Connect AI Agents to existing enterprise systems — JIRA, Slack, CI/CD, SharePoint, CRM. Seamless integration, not replacement.' },
  ],
  zh: [
    { icon: '📚', title: '强制 AI 学习', desc: '建立全组织范围的 AI 素养培训。每个团队成员都必须掌握 AI 能力和最佳实践的基础知识。' },
    { icon: '🛠️', title: '推广 AI 工具', desc: '在整个组织中部署并标准化 AI 工具——开发（Claude Code、Copilot）、分析（AI Studio）、沟通和项目管理。' },
    { icon: '📊', title: '确认企业可用数据', desc: '盘点和评估所有企业数据资产。识别哪些数据已准备好用于 AI、哪些需要清洗、哪些存在缺口。' },
    { icon: '🤖', title: 'AI Agent 搭建', desc: '搭建作为中央编排器的 AI Agent——AIDLC 的核心。这些 Agent 理解上下文、生成制品、通过 DAG 管理任务分解并支持并行执行。' },
    { icon: '🔗', title: '连接现有工作流程', desc: '将 AI Agent 连接到现有企业系统——JIRA、Slack、CI/CD、SharePoint、CRM。无缝集成而非替代。' },
  ],
}

const principles = {
  en: [
    { title: 'AI as Central Nervous System', desc: 'The AI Agent isn\'t a tool bolted onto existing processes — it IS the process. It orchestrates, generates, decomposes, and executes.' },
    { title: 'Lossless Information Flow', desc: 'Every handoff in traditional processes loses context. AIDLC maintains full fidelity from idea to code through a single AI context.' },
    { title: 'Human as Strategist & Reviewer', desc: 'Humans shift from manual execution to strategic direction-setting and quality approval. PM/TL focus on vision and validation.' },
  ],
  zh: [
    { title: 'AI 即中枢神经', desc: 'AI Agent 不是附加在现有流程上的工具——它本身就是流程。它编排、生成、分解和执行。' },
    { title: '无损信息流', desc: '传统流程中每次交接都会丢失上下文。AIDLC 通过单一 AI 上下文从创意到代码保持完整保真度。' },
    { title: '人类即战略家与审核者', desc: '人类从手动执行转向战略方向制定和质量审批。PM/TL 专注于愿景和验证。' },
  ],
}

export default function AidlcPage() {
  const { lang } = useLang()
  const c = t[lang]
  const g = govSteps[lang]
  const pr = principles[lang]

  return (
    <div className="gradient-mesh pt-24">
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-mono tracking-widest uppercase mb-6">{c.badge}</span>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ivory leading-tight mb-4">{c.title}</h1>
          <p className="text-accent text-lg font-mono mb-6">{c.subtitle}</p>
          <p className="text-silver text-xl leading-relaxed max-w-3xl">{c.desc}</p>
        </div>
      </section>

      <div className="glow-line max-w-5xl mx-auto" />

      {/* Process Comparison */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory mb-12 text-center">{c.shiftTitle}</h2>

          {/* Before */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6"><div className="w-3 h-3 rounded-full bg-warm" /><h3 className="font-display font-bold text-xl text-ivory">{c.beforeTitle}</h3></div>
            <div className="bg-carbon/60 rounded-2xl p-8 border border-warm/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-midnight/40 rounded-xl p-4 border border-warm/10"><div className="text-warm text-sm font-semibold mb-1">⚠️ {c.beforeFriction}</div><p className="text-steel text-xs">{c.beforeFrictionDesc}</p></div>
                <div className="bg-midnight/40 rounded-xl p-4 border border-warm/10"><div className="text-warm text-sm font-semibold mb-1">⚠️ {c.beforeLoss}</div><p className="text-steel text-xs">{c.beforeLossDesc}</p></div>
                <div className="bg-midnight/40 rounded-xl p-4 border border-warm/10"><div className="text-warm text-sm font-semibold mb-1">⚠️ {c.beforeSeq}</div><p className="text-steel text-xs">{c.beforeSeqDesc}</p></div>
              </div>
            </div>
          </div>

          {/* After */}
          <div>
            <div className="flex items-center gap-3 mb-6"><div className="w-3 h-3 rounded-full bg-accent animate-pulse-glow" /><h3 className="font-display font-bold text-xl text-ivory">{c.afterTitle}</h3></div>
            <div className="bg-carbon/60 rounded-2xl p-8 border border-accent/20">
              <div className="flex flex-col items-center mb-8">
                <div className="flex items-center justify-center gap-6 mb-6">
                  <div className="px-4 py-3 rounded-xl border border-accent/30 text-accent text-center"><div className="font-display font-bold text-sm">PM</div></div>
                  <span className="text-accent text-xl">→</span>
                  <div className="px-8 py-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent text-center shadow-[0_0_40px_rgba(0,212,170,0.15)]"><div className="font-display font-extrabold text-lg text-accent">AI Agent</div></div>
                  <span className="text-accent text-xl">→</span>
                  <div className="px-4 py-3 rounded-xl border border-accent/30 text-accent text-center"><div className="font-display font-bold text-sm">DAG</div></div>
                </div>
                <div className="flex justify-center gap-3">
                  {['①', '②', '③', '④'].map((n) => (
                    <div key={n} className="px-3 py-2 rounded-lg bg-accent/10 border border-accent/20 text-center"><div className="text-accent text-xs font-mono">Claude Code {n}</div></div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-midnight/40 rounded-xl p-4 border border-accent/10"><div className="text-accent text-sm font-semibold mb-1">✦ {c.afterFriction}</div><p className="text-steel text-xs">{c.afterFrictionDesc}</p></div>
                <div className="bg-midnight/40 rounded-xl p-4 border border-accent/10"><div className="text-accent text-sm font-semibold mb-1">✦ {c.afterLoss}</div><p className="text-steel text-xs">{c.afterLossDesc}</p></div>
                <div className="bg-midnight/40 rounded-xl p-4 border border-accent/10"><div className="text-accent text-sm font-semibold mb-1">✦ {c.afterPar}</div><p className="text-steel text-xs">{c.afterParDesc}</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line max-w-5xl mx-auto" />

      {/* Governance */}
      <section id="governance" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory mb-12">{c.govTitle}</h2>
          <div className="space-y-6">
            {g.map((s, i) => (
              <div key={s.title} className="group relative pl-20 md:pl-24">
                <div className="absolute left-0 top-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-carbon border border-accent/20 flex items-center justify-center group-hover:border-accent transition-all"><span className="font-display font-extrabold text-2xl text-accent">{i + 1}</span></div>
                <div className="bg-carbon/40 rounded-2xl p-6 md:p-8 border border-white/5 group-hover:border-accent/20 transition-colors">
                  <div className="flex items-center gap-3 mb-3"><span className="text-2xl">{s.icon}</span><h3 className="font-display font-bold text-lg text-ivory">{s.title}</h3></div>
                  <p className="text-silver text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory mb-12 text-center">{c.principlesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pr.map((p) => (
              <div key={p.title} className="card-hover rounded-2xl bg-carbon/60 p-8">
                <h3 className="font-display font-bold text-base text-ivory mb-4">{p.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
