const upcomingTopics = [
  { titleEn: 'Why AI Agents Are Not Just Tools — They Are the Process', titleZh: '为什么 AI Agent 不只是工具——它们就是流程本身', tag: 'AI Agent' },
  { titleEn: 'Building a 150+ Person Tech Org from Scratch: Lessons Learned', titleZh: '从零建立 150+ 人技术组织的经验教训', tag: 'Leadership' },
  { titleEn: 'The SW Monetization Playbook for Hardware Companies', titleZh: '硬件公司的软件变现手册', tag: 'Strategy' },
  { titleEn: 'From Gerrit+Jenkins to AI-Driven CI/CD: An Infrastructure Evolution', titleZh: '从 Gerrit+Jenkins 到 AI 驱动的 CI/CD：基础设施的演进', tag: 'DevOps' },
  { titleEn: 'AIDLC in Practice: Real Results from Real Teams', titleZh: 'AIDLC 实战：真实团队的真实成果', tag: 'AIDLC' },
  { titleEn: 'Multi-Agent Orchestration: What I Learned Filing 5 Patents', titleZh: 'Multi-Agent 编排：提交 5 项专利中学到的', tag: 'Patents' },
]

export default function InsightsPage() {
  return (
    <div className="gradient-mesh pt-24">
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-mono tracking-widest uppercase mb-6">
            Insights / 洞察
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ivory leading-tight mb-6">Insights</h1>
          <p className="text-silver text-xl leading-relaxed max-w-3xl mb-4">
            Thoughts on AI-native transformation, team building, and technology strategy — coming from the trenches, not the ivory tower.
          </p>
          <p className="text-steel text-lg leading-relaxed max-w-3xl">
            关于 AI 原生转型、团队建设和技术战略的思考——来自实战前线，而非象牙塔。
          </p>
        </div>
      </section>
      <div className="glow-line max-w-5xl mx-auto" />
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-3 h-3 rounded-full bg-warm animate-pulse-glow" />
            <h2 className="font-display font-bold text-2xl text-ivory">Coming Soon</h2>
            <span className="text-steel text-sm">即将发布</span>
          </div>
          <div className="space-y-4">
            {upcomingTopics.map((topic, i) => (
              <div key={i} className="bg-carbon/40 rounded-2xl p-6 border border-white/5 hover:border-accent/20 transition-colors group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-ivory group-hover:text-accent transition-colors">{topic.titleEn}</h3>
                    <p className="text-steel text-sm mt-1">{topic.titleZh}</p>
                  </div>
                  <span className="shrink-0 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono">{topic.tag}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-steel text-base mb-6">Subscribe to get notified when new articles are published.</p>
            <a href="https://www.linkedin.com/in/sam-lee-087a2579/" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3.5 rounded-xl border border-accent text-accent font-display font-semibold text-sm hover:bg-accent hover:text-midnight transition-all">Follow on LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  )
}
