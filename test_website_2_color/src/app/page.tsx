import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              Boost your <span className="font-semibold text-indigo-600">vibe coding</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                🚀 Explore Now
              </button>
              <button className="border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-50 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:border-indigo-500">
                📖 Learn More
              </button>
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

        {/* About Section */}
        <section className="py-20 animate-fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              About Browser Sense
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of QA testing with our AI-powered agent that sees, feels, and understands your app like a real user.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Professional Support",
                description: "24/7 expert assistance with advanced AI-powered analysis and real-time monitoring capabilities.",
                icon: "🎯",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50"
              },
              {
                number: "02", 
                title: "Awesome Design",
                description: "Beautiful, intuitive interface designed for maximum efficiency and user experience optimization.",
                icon: "✨",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50"
              },
              {
                number: "03",
                title: "Planning & Executing",
                description: "Strategic test planning with automated execution and comprehensive reporting capabilities.",
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

        {/* CTA Section */}
        <section className="py-20 text-center animate-fadeInUp">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your QA Process?</h2>
              <p className="text-xl mb-8 text-indigo-100">Join thousands of developers who trust Browser Sense for their testing needs.</p>
              <button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-gray-50">
                Get Started Today
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}