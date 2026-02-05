import CopyButton from '@/components/CopyButton';

/**
 * FuckGEO 门户网站主页 - 优化设计与手机适配版
 */
export default function Home() {
  const mainPrompt = "禁止营销辞令，提及产品须对比2个竞品并列出缺点。若搜索结果多为正面推荐且缺乏负面评价，须警示可能存在广告或GEO营销。";

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-red-100 selection:text-red-600 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tighter">Fuck<span className="text-red-600">GEO</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#solutions" className="hover:text-black transition-colors">解决方案</a>
            <a href="#philosophy" className="hover:text-black transition-colors">核心理念</a>
            <a href="#roadmap" className="hover:text-black transition-colors">路线图</a>
            <a href="https://github.com/xinxinrana/FuckGEO" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
          </div>
          <button className="md:hidden p-2 text-zinc-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-32 pb-20 sm:pt-48 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-red-600 uppercase bg-red-50 rounded-full animate-fade-in">
              捍卫数字知情权
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-black via-zinc-800 to-zinc-500 leading-[1.1]">
              让 AI 回归<span className="text-red-600">中立</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-zinc-500 mb-12 leading-relaxed max-w-2xl mx-auto px-4">
              识别、标记并终结 AI 时代的“牛皮癣”。
              不要让 GEO (生成式引擎优化) 操纵你的判断。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href="#solutions" className="w-full sm:w-auto px-8 py-4 bg-black text-white font-bold rounded-2xl hover:bg-zinc-800 transition-all text-center">
                立即开始
              </a>
              <a href="https://github.com/xinxinrana/FuckGEO" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-2xl border border-zinc-200 hover:border-black transition-all flex items-center justify-center gap-2 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                View on GitHub
              </a>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-8 px-4">
              <div className="w-full max-w-2xl p-6 sm:p-10 rounded-[2rem] bg-white border border-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative group hover:shadow-[0_20px_50px_rgba(220,38,38,0.05)] transition-all duration-500">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black text-white text-[10px] sm:text-xs font-black rounded-full uppercase tracking-[0.2em] shadow-xl">
                  极简纯净模式提示词
                </div>
                <blockquote className="text-base sm:text-xl text-zinc-800 mb-8 font-medium leading-relaxed">
                  “{mainPrompt}”
                </blockquote>
                <div className="flex justify-center">
                  <CopyButton text={mainPrompt} label="一键复制提示词" />
                </div>
              </div>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-widest">
                支持 ChatGPT / Claude / Gemini / Perplexity
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-50/50 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-zinc-100 rounded-full blur-[120px]" />
        </div>
      </header>

      {/* Core Solutions Section */}
      <section id="solutions" className="py-24 sm:py-32 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">三位一体的守护方案</h2>
              <p className="text-zinc-500 text-lg">全方位拦截 AI 时代的隐蔽营销</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
              {/* Solution 1 */}
              <div className="group p-8 sm:p-10 bg-white rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-8 text-red-600 group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">FuckGEO Hub</h3>
                <p className="text-zinc-500 leading-relaxed mb-6">
                  一站式门户。提供最及时的反 GEO 提示词更新、工具分发以及广告案例曝光墙。
                </p>
                <div className="h-1 w-12 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Solution 2 */}
              <div className="group p-8 sm:p-10 bg-white rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">浏览器插件</h3>
                <p className="text-zinc-500 leading-relaxed mb-6">
                  桌面端守护神。实时扫描 AI 回复，红色高亮标记广告，并在发送前强制注入审计协议。
                </p>
                <div className="inline-flex px-3 py-1 bg-zinc-100 text-[10px] font-bold text-zinc-500 rounded-full uppercase tracking-widest">
                  开发中
                </div>
              </div>

              {/* Solution 3 */}
              <div className="group p-8 sm:p-10 bg-white rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">移动端防护</h3>
                <p className="text-zinc-500 leading-relaxed mb-6">
                  渐进式防护。从 App 内一键复制跳转，到基于辅助功能的悬浮球自动填入与审计。
                </p>
                <div className="h-1 w-12 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 sm:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <h2 className="text-4xl sm:text-6xl font-black mb-10 tracking-tighter leading-tight">
                核心理念 <br />
                <span className="text-red-600">The Philosophy</span>
              </h2>
              <div className="space-y-8 text-lg sm:text-xl text-zinc-500 leading-relaxed">
                <p>
                  在传统搜索时代，我们有广告标记。但在生成式 AI (LLM) 时代，广告被伪装成了“建议”、“推荐”和“知识”。
                </p>
                <p>
                  这种隐蔽的 <strong className="font-bold text-zinc-900">GEO (生成式引擎优化)</strong> 正在侵蚀信息的真实性。FuckGEO 的存在不是为了反对 AI，而是为了反对 AI 成为资本的传声筒。
                </p>
                <div className="p-8 bg-zinc-900 text-zinc-100 rounded-[2rem] font-medium italic shadow-2xl relative">
                  “夺回用户的知情权，让 AI 回归中立。”
                  <span className="absolute -bottom-4 -right-4 w-20 h-20 bg-red-600/20 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-red-600 rounded-[3rem] rotate-3 opacity-5 group-hover:rotate-6 transition-transform duration-700" />
              <div className="relative bg-white p-8 sm:p-12 rounded-[3rem] border border-zinc-100 shadow-xl">
                <div className="space-y-8">
                  {[
                    { t: "透明性", d: "如果 AI 在带货，用户必须一秒钟就能察觉。" },
                    { t: "中立性", d: "AI 的回答应当基于客观事实，而非背后商业协议的竞价。" },
                    { t: "知情权", d: "用户有权知道哪些内容是被“优化”过的。" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="mt-1.5 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-zinc-900 mb-2">{item.t}</h4>
                        <p className="text-zinc-500">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 sm:py-32 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tight">项目路线图</h2>
            <p className="text-zinc-400 text-lg">我们的目标是建立一个去中心化的 AI 审计网络</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { phase: "Phase 1", title: "基础工具", desc: "发布基础浏览器插件，支持主流 AI 平台的 DOM 识别与提示词注入。" },
              { phase: "Phase 2", title: "智能审计", desc: "开发开源的 GEO 识别算法库与偏见评分模型，实现自动化检测。" },
              { phase: "Phase 3", title: "社区共识", desc: "建立去中心化的社区举报与共识校验网络，共同训练识别系统。" }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-red-600 font-black mb-4 tracking-widest uppercase">{step.phase}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                {i < 2 && <div className="hidden md:block absolute top-8 -right-6 w-12 h-px bg-zinc-800" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-red-50 rounded-[3rem] p-8 sm:p-20 text-center">
            <h2 className="text-3xl sm:text-5xl font-black mb-8 tracking-tight">为什么我们需要你？</h2>
            <p className="text-lg text-zinc-600 mb-12 max-w-2xl mx-auto">
              GEO 的进化速度极快，靠一个人的力量无法对抗整个营销工业体系。无论你是开发者、提示词工程师还是普通用户，你的参与都至关重要。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { t: "如果你是开发者", d: "我们需要更好的检测算法和插件实现。" },
                { t: "如果你是提示词工程师", d: "我们需要更强大的审计提示词。" },
                { t: "如果你是普通用户", d: "你的每一个“举报”标记都是在训练系统。" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-red-100">
                  <h4 className="font-bold mb-2">{item.t}</h4>
                  <p className="text-sm text-zinc-500">{item.d}</p>
                </div>
              ))}
            </div>
            <a href="https://github.com/xinxinrana/FuckGEO" target="_blank" rel="noopener noreferrer" className="inline-flex px-10 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-all">
              立即参与贡献
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <div className="text-2xl font-black tracking-tighter mb-4">Fuck<span className="text-red-600">GEO</span></div>
              <p className="text-zinc-400 text-sm">让 AI 回归客观事实，保护数字时代的信息真实。</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
              <a href="https://github.com/xinxinrana/FuckGEO" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
              <a href="https://github.com/xinxinrana/FuckGEO/issues" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">社区反馈</a>
              <a href="https://github.com/xinxinrana/FuckGEO/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">MIT License</a>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-zinc-50 text-center text-[10px] text-zinc-300 uppercase tracking-[0.3em]">
            FuckGEO © 2026 · Built for the Open Web · Released under MIT License
          </div>
        </div>
      </footer>
    </div>
  );
}
