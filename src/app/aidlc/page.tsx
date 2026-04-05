'use client'

const governanceSteps = [
  {
    step: 1,
    icon: '📚',
    titleEn: 'Mandatory AI Learning',
    titleZh: '强制 AI 学习',
    descEn: 'Establish organization-wide AI literacy programs. Every team member — from C-suite to individual contributors — must develop foundational understanding of AI capabilities, limitations, and best practices.',
    descZh: '建立全组织范围的 AI 素养培训项目。从高管到基层员工，每个人都必须掌握 AI 能力、局限性和最佳实践的基础知识。',
  },
  {
    step: 2,
    icon: '🛠️',
    titleEn: 'AI Tool Adoption',
    titleZh: '推广 AI 工具',
    descEn: 'Deploy and standardize AI tools across the organization. Identify the right tools for each function — development (Claude Code, Copilot), analytics (AI Studio), communication, and project management.',
    descZh: '在整个组织中部署并标准化 AI 工具。为每个职能找到合适的工具——开发（Claude Code、Copilot）、分析（AI Studio）、沟通和项目管理。',
  },
  {
    step: 3,
    icon: '📊',
    titleEn: 'Enterprise Data Audit',
    titleZh: '确认企业可用数据',
    descEn: 'Catalog and assess all enterprise data assets. Identify which data is AI-ready, what needs cleaning, and where the gaps are. Data quality determines AI effectiveness.',
    descZh: '盘点和评估所有企业数据资产。识别哪些数据已准备好用于 AI、哪些需要清洗、哪些存在缺口。数据质量决定了 AI 的有效性。',
  },
  {
    step: 4,
    icon: '🤖',
    titleEn: 'AI Agent Construction',
    titleZh: 'AI Agent 搭建',
    descEn: 'Build AI Agents as central orchestrators — the core of AIDLC. These agents understand context, generate artifacts (PRDs, code, analysis), manage task decomposition via DAGs, and enable parallel execution.',
    descZh: '搭建作为中央编排器的 AI Agent——这是 AIDLC 的核心。这些 Agent 理解上下文、生成制品（PRD、代码、分析）、通过 DAG 管理任务分解并支持并行执行。',
  },
  {
    step: 5,
    icon: '🔗',
    titleEn: 'Workflow Integration',
    titleZh: '连接现有工作流程',
    descEn: 'Connect AI Agents to existing enterprise systems — JIRA, Slack, CI/CD, SharePoint, CRM. The goal is seamless integration, not replacement. AI enhances and accelerates existing workflows.',
    descZh: '将 AI Agent 连接到现有企业系统——JIRA、Slack、CI/CD、SharePoint、CRM。目标是无缝集成而非替代，AI 增强并加速现有工作流程。',
  },
]

export default function AidlcPage() {
  return (
    <div className="gradient-mesh pt-24">
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-mono tracking-widest uppercase mb-6">
            Framework / 框架
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ivory leading-tight mb-6">
            AIDLC
          </h1>
          <p className="text-accent text-lg font-mono mb-6">
            AI-Driven Development Life Cycle
          </p>
          <p className="text-silver text-xl leading-relaxed max-w-3xl mb-4">
            A paradigm shift from linear, friction-heavy human-centric processes to AI-native, lossless parallel execution — with AI Agent as the central orchestrator.
          </p>
          <p className="text-steel text-lg leading-relaxed max-w-3xl">
            从线性、高摩擦的人为驱动流程，到以 AI Agent 为中央编排器的 AI 原生无损并行执行范式。
          </p>
        </div>
      </section>

      <div className="glow-line max-w-5xl mx-auto" />

      {/* Process Comparison */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory mb-4 text-center">
            The Paradigm Shift
          </h2>
          <p className="text-steel text-base text-center mb-16">范式转移</p>

          {/* Human-Centric Process */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-warm" />
              <h3 className="font-display font-bold text-xl text-ivory">
                Before: Human-Centric Process
              </h3>
              <span className="text-steel text-sm ml-2">传统人为驱动流程</span>
            </div>

            <div className="bg-carbon/60 rounded-2xl p-8 border border-warm/20">
              {/* Flow visualization */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                {[
                  { label: 'PM', sub: 'Write PRD', color: 'border-warm/50 text-warm' },
                  { label: '→', sub: '', color: 'text-steel' },
                  { label: 'ChatGPT', sub: 'Draft', color: 'border-steel/30 text-steel' },
                  { label: '→', sub: '', color: 'text-steel' },
                  { label: 'SharePoint', sub: 'Upload', color: 'border-steel/30 text-steel' },
                  { label: '→', sub: '', color: 'text-steel' },
                  { label: 'TL', sub: 'Interpret', color: 'border-warm/50 text-warm' },
                  { label: '→', sub: '', color: 'text-steel' },
                  { label: 'Dev', sub: 'Code', color: 'border-warm/50 text-warm' },
                  { label: '→', sub: '', color: 'text-steel' },
                  { label: '< / >', sub: 'Output', color: 'border-steel/30 text-steel' },
                ].map((node, i) => (
                  node.label === '→' ? (
                    <span key={i} className="text-steel text-xl">→</span>
                  ) : (
                    <div key={i} className={`px-4 py-3 rounded-xl border ${node.color} text-center min-w-[80px]`}>
                      <div className="font-display font-bold text-sm">{node.label}</div>
                      {node.sub && <div className="text-xs mt-1 opacity-60">{node.sub}</div>}
                    </div>
                  )
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-midnight/40 rounded-xl p-4 border border-warm/10">
                  <div className="text-warm text-sm font-semibold mb-1">⚠️ High Friction</div>
                  <p className="text-steel text-xs">Multiple alignment loops between PM ↔ TL ↔ Dev with constant back-and-forth.</p>
                  <p className="text-steel/60 text-xs mt-1">PM、TL、Dev 之间需要大量反复对齐。</p>
                </div>
                <div className="bg-midnight/40 rounded-xl p-4 border border-warm/10">
                  <div className="text-warm text-sm font-semibold mb-1">⚠️ Information Loss</div>
                  <p className="text-steel text-xs">Manual translation at every handoff point causes context degradation.</p>
                  <p className="text-steel/60 text-xs mt-1">每次交接点的人工翻译造成上下文退化。</p>
                </div>
                <div className="bg-midnight/40 rounded-xl p-4 border border-warm/10">
                  <div className="text-warm text-sm font-semibold mb-1">⚠️ Sequential Execution</div>
                  <p className="text-steel text-xs">Linear pipeline — each stage waits for the previous one to complete.</p>
                  <p className="text-steel/60 text-xs mt-1">线性流水线——每个阶段都要等前一阶段完成。</p>
                </div>
              </div>
            </div>
          </div>

          {/* AIDLC Process */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse-glow" />
              <h3 className="font-display font-bold text-xl text-ivory">
                After: AIDLC Process
              </h3>
              <span className="text-steel text-sm ml-2">AI 驱动的中央枢纽流程</span>
            </div>

            <div className="bg-carbon/60 rounded-2xl p-8 border border-accent/20">
              {/* Hub & Spoke visualization */}
              <div className="flex flex-col items-center mb-8">
                {/* Central Hub */}
                <div className="relative">
                  {/* Spokes coming in */}
                  <div className="flex items-center justify-center gap-6 mb-6">
                    <div className="px-4 py-3 rounded-xl border border-accent/30 text-accent text-center">
                      <div className="font-display font-bold text-sm">PM</div>
                      <div className="text-xs mt-1 opacity-60">Idea Alignment</div>
                    </div>
                    <span className="text-accent text-xl">→</span>
                    <div className="px-8 py-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent text-center shadow-[0_0_40px_rgba(0,212,170,0.15)]">
                      <div className="font-display font-extrabold text-lg text-accent">AI Agent</div>
                      <div className="text-xs text-accent/60 mt-1">Central Orchestrator</div>
                    </div>
                    <span className="text-accent text-xl">→</span>
                    <div className="px-4 py-3 rounded-xl border border-accent/30 text-accent text-center">
                      <div className="font-display font-bold text-sm">DAG</div>
                      <div className="text-xs mt-1 opacity-60">Task Graph</div>
                    </div>
                  </div>

                  {/* Parallel execution */}
                  <div className="flex justify-center gap-3 mt-4">
                    {['Claude Code ①', 'Claude Code ②', 'Claude Code ③', 'Claude Code ④'].map((label) => (
                      <div key={label} className="px-3 py-2 rounded-lg bg-accent/10 border border-accent/20 text-center">
                        <div className="text-accent text-xs font-mono">{label}</div>
                        <div className="text-accent/40 text-[10px] mt-1">Parallel Exec</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-midnight/40 rounded-xl p-4 border border-accent/10">
                  <div className="text-accent text-sm font-semibold mb-1">✦ Zero Friction</div>
                  <p className="text-steel text-xs">PM does Idea Alignment only. AI Agent handles all downstream coordination.</p>
                  <p className="text-steel/60 text-xs mt-1">PM 只做创意对齐，AI Agent 处理所有下游协调。</p>
                </div>
                <div className="bg-midnight/40 rounded-xl p-4 border border-accent/10">
                  <div className="text-accent text-sm font-semibold mb-1">✦ Lossless Transfer</div>
                  <p className="text-steel text-xs">AI Agent maintains full context across the entire lifecycle — no information degradation.</p>
                  <p className="text-steel/60 text-xs mt-1">AI Agent 在整个生命周期中保持完整上下文——零信息损失。</p>
                </div>
                <div className="bg-midnight/40 rounded-xl p-4 border border-accent/10">
                  <div className="text-accent text-sm font-semibold mb-1">✦ Parallel Execution</div>
                  <p className="text-steel text-xs">DAG decomposes tasks for simultaneous execution across multiple Claude Code instances.</p>
                  <p className="text-steel/60 text-xs mt-1">DAG 分解任务，多个 Claude Code 实例同时并行执行。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line max-w-5xl mx-auto" />

      {/* AI Native Governance */}
      <section id="governance" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory mb-4">
            AI Native Governance: 5 Steps
          </h2>
          <p className="text-steel text-base mb-16">AI Native 企业治理五步法</p>

          <div className="space-y-6">
            {governanceSteps.map((s) => (
              <div
                key={s.step}
                className="group relative pl-20 md:pl-24"
              >
                {/* Step number */}
                <div className="absolute left-0 top-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-carbon border border-accent/20 flex items-center justify-center group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(0,212,170,0.15)] transition-all">
                  <span className="font-display font-extrabold text-2xl text-accent">{s.step}</span>
                </div>

                <div className="bg-carbon/40 rounded-2xl p-6 md:p-8 border border-white/5 group-hover:border-accent/20 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{s.icon}</span>
                    <h3 className="font-display font-bold text-lg text-ivory">{s.titleEn}</h3>
                    <span className="text-steel text-sm">{s.titleZh}</span>
                  </div>
                  <p className="text-silver text-sm leading-relaxed mb-2">{s.descEn}</p>
                  <p className="text-steel text-xs leading-relaxed">{s.descZh}</p>
                </div>

                {/* Connector line */}
                {s.step < 5 && (
                  <div className="absolute left-7 md:left-8 top-16 w-px h-6 bg-gradient-to-b from-accent/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ivory mb-12 text-center">
            AIDLC Core Principles
            <span className="block text-steel text-base font-normal mt-2">核心原则</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                titleEn: 'AI as Central Nervous System',
                titleZh: 'AI 即中枢神经',
                descEn: 'The AI Agent isn\'t a tool bolted onto existing processes — it IS the process. It orchestrates, generates, decomposes, and executes.',
                descZh: 'AI Agent 不是附加在现有流程上的工具——它本身就是流程。它编排、生成、分解和执行。',
              },
              {
                titleEn: 'Lossless Information Flow',
                titleZh: '无损信息流',
                descEn: 'Every handoff in traditional processes loses context. AIDLC maintains full fidelity from idea to code through a single AI context.',
                descZh: '传统流程中每次交接都会丢失上下文。AIDLC 通过单一 AI 上下文从创意到代码保持完整保真度。',
              },
              {
                titleEn: 'Human as Strategist & Reviewer',
                titleZh: '人类即战略家与审核者',
                descEn: 'Humans shift from manual execution to strategic direction-setting and quality approval. PM/TL focus on vision and validation.',
                descZh: '人类从手动执行转向战略方向制定和质量审批。PM/TL 专注于愿景和验证。',
              },
            ].map((p) => (
              <div
                key={p.titleEn}
                className="card-hover rounded-2xl bg-carbon/60 p-8"
              >
                <h3 className="font-display font-bold text-base text-ivory mb-1">{p.titleEn}</h3>
                <p className="text-accent/60 text-xs font-mono mb-4">{p.titleZh}</p>
                <p className="text-silver text-sm leading-relaxed mb-2">{p.descEn}</p>
                <p className="text-steel text-xs leading-relaxed">{p.descZh}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-ivory mb-6">
            Transform Your Organization
          </h2>
          <p className="text-silver text-lg mb-4">
            Ready to implement AIDLC in your enterprise? Let&apos;s start the conversation.
          </p>
          <p className="text-steel text-base mb-10">
            准备好在您的企业中实施 AIDLC 了吗？让我们开始对话。
          </p>
          <a
            href="https://www.linkedin.com/in/sam-lee-087a2579/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-xl bg-accent text-midnight font-display font-semibold tracking-wide hover:bg-accent-glow transition-all hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]"
          >
            Connect with Sam Lee
          </a>
        </div>
      </section>
    </div>
  )
}
