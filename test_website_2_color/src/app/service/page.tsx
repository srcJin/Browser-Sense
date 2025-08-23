import Layout from '@/components/Layout';

export default function Service() {
  const services = [
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Build modern, responsive websites with cutting-edge technologies and pixel-perfect design implementation.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconBg: 'from-blue-400 to-cyan-400'
    },
    {
      icon: '📱',
      title: 'Application Development', 
      description: 'Create powerful mobile and web applications with seamless user experience and robust functionality.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      iconBg: 'from-purple-400 to-pink-400'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Design beautiful, intuitive interfaces that delight users and drive engagement through thoughtful UX.',
      gradient: 'from-emerald-500 to-teal-500', 
      bgGradient: 'from-emerald-50 to-teal-50',
      iconBg: 'from-emerald-400 to-teal-400'
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Boost your online presence with strategic marketing campaigns and data-driven growth strategies.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50', 
      iconBg: 'from-orange-400 to-red-400'
    },
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Improve your search rankings with advanced SEO techniques and comprehensive optimization strategies.',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-50 to-purple-50',
      iconBg: 'from-indigo-400 to-purple-400'
    },
    {
      icon: '📊',
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with comprehensive analytics and actionable business intelligence.',
      gradient: 'from-rose-500 to-pink-500',
      bgGradient: 'from-rose-50 to-pink-50',
      iconBg: 'from-rose-400 to-pink-400'
    }
  ];

  const portfolioItems = [
    { 
      title: 'E-Commerce Platform', 
      category: 'Web Development',
      gradient: 'from-violet-500 to-purple-600',
      description: 'Modern shopping experience'
    },
    { 
      title: 'Mobile Banking App', 
      category: 'Mobile Development', 
      gradient: 'from-blue-500 to-cyan-600',
      description: 'Secure financial solutions'
    },
    { 
      title: 'Brand Identity System', 
      category: 'UI/UX Design',
      gradient: 'from-pink-500 to-rose-600', 
      description: 'Complete visual identity'
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <section className="py-20 text-center animate-fadeInUp">
          <div className="relative">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We deliver exceptional digital solutions that transform your vision into reality with cutting-edge technology and creative excellence.
            </p>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl opacity-20 animate-float"></div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-20 animate-fadeInUp">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group border border-white/50`}>
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.iconBg} rounded-3xl flex items-center justify-center mb-6 text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="mt-6">
                  <button className={`bg-gradient-to-r ${service.gradient} text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 opacity-0 group-hover:opacity-100`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 animate-fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We follow a proven methodology to deliver exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your vision', icon: '🔍' },
              { step: '02', title: 'Planning', description: 'Strategic roadmap creation', icon: '📋' },
              { step: '03', title: 'Development', description: 'Building your solution', icon: '⚙️' },
              { step: '04', title: 'Launch', description: 'Going live successfully', icon: '🚀' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                  {process.title}
                </h3>
                <p className="text-slate-600">{process.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Preview Section */}
        <section className="py-20 animate-fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore some of our recent projects that showcase our expertise and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-12 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-8 h-8 bg-white rounded-lg"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/80 mb-4">{item.category}</p>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center animate-fadeInUp">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl mb-8 text-indigo-100">Let&apos;s bring your vision to life with our expert team and proven process.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Get Started
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}