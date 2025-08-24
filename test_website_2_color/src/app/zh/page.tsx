import Layout from '@/components/Layout';

export default function ChineseHome() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 relative z-10" dir="ltr" lang="zh">
        {/* Hero Section */}
        <section className="py-24 text-center animate-fadeInUp">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-red-400 to-yellow-600 rounded-full blur-xl opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full blur-xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
            
            <h1 className="text-7xl font-black bg-gradient-to-r from-red-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6 leading-tight">
              智能感知
              <br />
              <span className="text-6xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                QA 代理
              </span>
            </h1>
            <p className="text-3xl text-slate-600 mb-8 font-light">
              提升您的 <span className="font-semibold text-red-600">编程体验</span> - 中文版本
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                🚀 立即探索
              </button>
              <button className="border-2 border-red-300 text-red-600 hover:bg-red-50 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:border-red-500">
                📖 了解更多
              </button>
            </div>
            <div className="text-sm text-slate-500 font-medium">
              🌍 语言：中文（从左到右）
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 animate-fadeInUp">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '99.9%', label: '准确率', color: 'from-green-400 to-emerald-500' },
              { number: '24/7', label: '监控', color: 'from-blue-400 to-cyan-500' },
              { number: '1000+', label: '测试/分钟', color: 'from-purple-400 to-pink-500' },
              { number: '< 1毫秒', label: '响应时间', color: 'from-orange-400 to-red-500' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Chinese Traditional Elements */}
        <section className="py-16 animate-fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-red-800 to-orange-600 bg-clip-text text-transparent mb-6">
              关于浏览器感知
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              体验AI驱动的QA测试代理的未来，它像真实用户一样看、感受和理解您的应用程序。
            </p>
          </div>

          {/* Feature Cards with Chinese Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "专业支持",
                description: "24/7专家协助，具备先进的AI驱动分析和实时监控功能。",
                icon: "🎯",
                gradient: "from-red-500 to-orange-500",
                bgGradient: "from-red-50 to-orange-50"
              },
              {
                number: "02", 
                title: "精美设计",
                description: "美观直观的界面，专为最大效率和用户体验优化而设计。",
                icon: "✨",
                gradient: "from-yellow-500 to-red-500",
                bgGradient: "from-yellow-50 to-red-50"
              },
              {
                number: "03",
                title: "规划与执行",
                description: "战略测试规划，具备自动化执行和全面报告功能。",
                icon: "⚡",
                gradient: "from-orange-500 to-red-500", 
                bgGradient: "from-orange-50 to-red-50"
              }
            ].map((feature, index) => (
              <div key={index} className={`bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Language Navigation */}
        <section className="py-8 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg inline-block">
            <p className="text-lg font-semibold text-slate-700 mb-4">切换语言：</p>
            <div className="flex gap-4 justify-center">
              <a href="/en" className="border-2 border-red-300 text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors">
                English
              </a>
              <a href="/zh" className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors">
                中文
              </a>
              <a href="/ar" className="border-2 border-red-300 text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-50 transition-colors">
                العربية
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}