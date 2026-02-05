import CopyButton from '@/components/CopyButton';

/**
 * FuckGEO 门户网站主页
 */
export default function Home() {
  const mainPrompt = "禁止营销辞令，提及产品须对比2个竞品并列出缺点。若搜索结果多为正面推荐且缺乏负面评价，须警示可能存在广告或GEO营销。";

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-red-100 selection:text-red-600">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-zinc-600">
              Fuck<span className="text-red-600">GEO</span>
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              让 AI 回归中立，夺回你的知情权。
              <br />
              识别、标记并终结 AI 时代的“牛皮癣”。
            </p>
            
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="w-full max-w-xl p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm relative group">
                <div className="absolute -top-3 left-6 px-3 py-1 bg-black text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  极简纯净模式提示词
                </div>
                <p className="text-lg text-zinc-800 mb-6 italic leading-relaxed">
                  “{mainPrompt}”
                </p>
                <div className="flex justify-center">
                  <CopyButton text={mainPrompt} label="一键复制提示词" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-50">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-100 rounded-full blur-[120px]" />
        </div>
      </header>

      {/* Core Solutions Section */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">三位一体的守护方案</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div className="p-8 bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">FuckGEO Hub</h3>
                <p className="text-zinc-600 leading-relaxed">
                  你现在所在的门户。提供最及时的反 GEO 提示词更新、工具下载以及广告案例曝光。
                </p>
              </div>

              {/* Solution 2 */}
              <div className="p-8 bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">浏览器插件</h3>
                <p className="text-zinc-600 leading-relaxed">
                  实时扫描网页内容。在 AI 的回复中高亮标记疑似广告，并在发送请求前自动注入审计协议。
                </p>
                <div className="mt-6 text-sm font-bold text-red-600 flex items-center gap-1 uppercase tracking-wider">
                  即将到来
                </div>
              </div>

              {/* Solution 3 */}
              <div className="p-8 bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center mb-6 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">移动端防护</h3>
                <p className="text-zinc-600 leading-relaxed">
                  渐进式防护方案。从“一键复制跳转”到“辅助功能悬浮球”，全方位拦截手机 APP 里的 AI 偏见。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-8">为什么需要 Fuck<span className="text-red-600">GEO</span>?</h2>
            <div className="space-y-8 text-lg text-zinc-600 leading-relaxed">
              <p>
                在 SEO (搜索引擎优化) 时代，我们通过排名知道谁买了广告。但在 **GEO (生成式引擎优化)** 时代，广告被伪装成了 AI 的“真心建议”。
              </p>
              <p>
                当你在问 AI “哪款洗发水好用”时，你得到的可能不是最客观的答案，而是某品牌投入了数百万美元进行的语义植入结果。
              </p>
              <p className="p-6 bg-red-50 border-l-4 border-red-600 text-zinc-900 font-medium italic">
                “我们不反对 AI，我们反对 AI 成为资本的传声筒。”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-zinc-500 mb-4">
            FuckGEO © 2026 · 基于 MIT 协议开源
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com" className="text-zinc-400 hover:text-black transition-colors">GitHub</a>
            <a href="#" className="text-zinc-400 hover:text-black transition-colors">社区反馈</a>
            <a href="#" className="text-zinc-400 hover:text-black transition-colors">加入我们</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
