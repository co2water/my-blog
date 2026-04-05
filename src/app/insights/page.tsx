'use client'

import { useLang } from '@/components/LangContext'

const t = {
  en: {
    badge: 'Insights',
    title: 'Insights',
    desc: 'Thoughts on AI-native transformation, team building, and technology strategy — coming from the trenches, not the ivory tower.',
    comingSoon: 'Coming Soon',
    comingDesc: 'In-depth articles and frameworks are on the way. Here\'s a preview of upcoming topics:',
    followTitle: 'Stay Updated',
    followSub: 'Follow me on LinkedIn to be notified when new insights are published.',
    followBtn: 'Follow on LinkedIn',
  },
  zh: {
    badge: '观点',
    title: '洞察',
    desc: '关于 AI 原生转型、团队建设和技术战略的思考——来自实战前线，而非象牙塔。',
    comingSoon: '即将发布',
    comingDesc: '深度文章和框架即将推出。以下是即将发布的主题预告：',
    followTitle: '保持关注',
    followSub: '关注我的 LinkedIn，获取新文章发布通知。',
    followBtn: '关注 LinkedIn',
  },
}

const topics = {
  en: [
    { title: 'The Multi-Agent Enterprise: How 5 AI Agents Replace 50 Manual Steps', tag: 'AI Agent' },
    { title: 'Building a 150+ Person Org in the AI Era: What Changes and What Doesn\'t', tag: 'Leadership' },
    { title: 'SW Monetization Playbook: From Zero Revenue to Three Streams', tag: 'Monetization' },
    { title: 'AIDLC in Practice: A Real-World Case Study', tag: 'AIDLC' },
    { title: 'CI/CD Agent Deployment: Bridging Gerrit+Jenkins and GitHub+AWS', tag: 'DevOps' },
    { title: 'Patent Strategy for AI Innovations: Lessons from Filing 5 Patents', tag: 'Patent' },
  ],
  zh: [
    { title: '多代理人企业：5 个 AI Agent 如何取代 50 个人工步骤', tag: 'AI Agent' },
    { title: 'AI 时代建立 150+ 人组织：什么变了，什么没变', tag: '领导力' },
    { title: '软件变现手册：从零到三条营收线', tag: '变现' },
    { title: 'AIDLC 实战：一个真实案例', tag: 'AIDLC' },
    { title: 'CI/CD Agent 部署：桥接 Gerrit+Jenkins 与 GitHub+AWS', tag: 'DevOps' },
    { title: 'AI 创新的专利策略：申请 5 项专利的经验', tag: '专利' },
  ],
}

export default function InsightsPage() {
  const { lang } = useLang()
  const c = t[lang]
  const tp = topics[lang]

  return (
    <div className="gradient-mesh pt-24">
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-mono tracking-widest uppercase mb-6">{c.badge}</span>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ivory leading-tight mb-6">{c.title}</h1>
          <p className="text-silver text-xl leading-relaxed max-w-3xl">{c.desc}</p>
        </div>
      </section>

      <div className="glow-line max-w-5xl mx-auto" />

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-accent/5 border border-accent/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-warm" />
              <span className="text-accent font-display font-semibold text-lg">{c.comingSoon}</span>
            </div>
            <p className="text-steel text-base max-w-lg mx-auto">{c.comingDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tp.map((topic) => (
              <div key={topic.title} className="bg-carbon/40 rounded-2xl p-6 border border-white/5 hover:border-accent/20 transition-colors group">
                <span className="inline-block px-2 py-0.5 rounded-md bg-accent/10 text-accent text-[10px] font-mono uppercase tracking-wider mb-3">{topic.tag}</span>
                <h3 className="font-display font-bold text-base text-ivory group-hover:text-accent transition-colors">{topic.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl text-ivory mb-4">{c.followTitle}</h2>
          <p className="text-silver text-base mb-8">{c.followSub}</p>
          <a href="https://www.linkedin.com/in/sam-lee-087a2579/" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-xl bg-accent text-midnight font-display font-semibold tracking-wide hover:bg-accent-glow transition-all hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]">{c.followBtn}</a>
        </div>
      </section>
    </div>
  )
}
