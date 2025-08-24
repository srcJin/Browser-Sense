import Layout from '@/components/Layout';

export default function EnglishHome() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 relative z-10" dir="ltr">
        {/* Hero Section */}
        <section className="py-24 text-center animate-fadeInUp">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-xl opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full blur-xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
            
            <h1 className="text-7xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight">
              The Senseable
              <br />
              <span className="text-6xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                QA Agent
              </span>
            </h1>
            <p className="text-3xl text-slate-600 mb-8 font-light">
              Boost your <span className="font-semibold text-indigo-600">vibe coding</span> - English Version
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                🚀 Explore Now
              </button>
              <button className="border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-50 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:border-indigo-500">
                📖 Learn More
              </button>
            </div>
            <div className="text-sm text-slate-500 font-medium">
              🌍 Language: English (Left-to-Right)
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 animate-fadeInUp">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '99.9%', label: 'Accuracy', color: 'from-green-400 to-emerald-500' },
              { number: '24/7', label: 'Monitoring', color: 'from-blue-400 to-cyan-500' },
              { number: '1000+', label: 'Tests/Min', color: 'from-purple-400 to-pink-500' },
              { number: '< 1ms', label: 'Response', color: 'from-orange-400 to-red-500' }
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

        {/* Language Navigation */}
        <section className="py-8 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg inline-block">
            <p className="text-lg font-semibold text-slate-700 mb-4">Switch Language:</p>
            <div className="flex gap-4 justify-center">
              <a href="/en" className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
                English
              </a>
              <a href="/zh" className="border-2 border-indigo-300 text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-50 transition-colors">
                中文
              </a>
              <a href="/ar" className="border-2 border-indigo-300 text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-50 transition-colors">
                العربية
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}