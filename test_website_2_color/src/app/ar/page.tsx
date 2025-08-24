import Layout from '@/components/Layout';

export default function ArabicHome() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 relative z-10" dir="rtl" lang="ar" style={{fontFamily: 'Geeza Pro, Arial Unicode MS, Tahoma, sans-serif'}}>
        {/* Hero Section */}
        <section className="py-24 text-center animate-fadeInUp">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400 to-teal-600 rounded-full blur-xl opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400 to-cyan-600 rounded-full blur-xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
            
            <h1 className="text-7xl font-black bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent mb-6 leading-tight">
              الوكيل الذكي
              <br />
              <span className="text-6xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 bg-clip-text text-transparent animate-gradient">
                للجودة والاختبار
              </span>
            </h1>
            <p className="text-3xl text-slate-600 mb-8 font-light">
              عزز <span className="font-semibold text-green-600">تجربة البرمجة</span> الخاصة بك - النسخة العربية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                🚀 استكشف الآن
              </button>
              <button className="border-2 border-green-300 text-green-600 hover:bg-green-50 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:border-green-500">
                📖 اعرف المزيد
              </button>
            </div>
            <div className="text-sm text-slate-500 font-medium">
              🌍 اللغة: العربية (من اليمين إلى اليسار)
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 animate-fadeInUp">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '99.9%', label: 'الدقة', color: 'from-green-400 to-emerald-500' },
              { number: '24/7', label: 'المراقبة', color: 'from-blue-400 to-cyan-500' },
              { number: '1000+', label: 'اختبار/دقيقة', color: 'from-purple-400 to-pink-500' },
              { number: '< 1مللي', label: 'زمن الاستجابة', color: 'from-orange-400 to-red-500' }
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

        {/* Arabic Content Section */}
        <section className="py-16 animate-fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-800 to-teal-600 bg-clip-text text-transparent mb-6">
              حول مستشعر المتصفح
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              اختبر مستقبل اختبار ضمان الجودة مع وكيلنا المدعوم بالذكاء الاصطناعي الذي يرى ويشعر ويفهم تطبيقك مثل المستخدم الحقيقي.
            </p>
          </div>

          {/* Feature Cards with Arabic Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "دعم مهني",
                description: "مساعدة خبراء على مدار الساعة طوال أيام الأسبوع مع تحليل متقدم مدعوم بالذكاء الاصطناعي وإمكانيات مراقبة في الوقت الفعلي.",
                icon: "🎯",
                gradient: "from-green-500 to-teal-500",
                bgGradient: "from-green-50 to-teal-50"
              },
              {
                number: "02", 
                title: "تصميم رائع",
                description: "واجهة جميلة وبديهية مصممة لتحقيق أقصى كفاءة وتحسين تجربة المستخدم.",
                icon: "✨",
                gradient: "from-teal-500 to-emerald-500",
                bgGradient: "from-teal-50 to-emerald-50"
              },
              {
                number: "03",
                title: "التخطيط والتنفيذ",
                description: "تخطيط اختبار استراتيجي مع التنفيذ الآلي وإمكانيات إعداد التقارير الشاملة.",
                icon: "⚡",
                gradient: "from-emerald-500 to-green-500", 
                bgGradient: "from-emerald-50 to-green-50"
              }
            ].map((feature, index) => (
              <div key={index} className={`bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl ml-4 group-hover:scale-110 transition-transform duration-300`}>
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
            <p className="text-lg font-semibold text-slate-700 mb-4">تغيير اللغة:</p>
            <div className="flex gap-4 justify-center">
              <a href="/en" className="border-2 border-green-300 text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors">
                English
              </a>
              <a href="/zh" className="border-2 border-green-300 text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors">
                中文
              </a>
              <a href="/ar" className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors">
                العربية
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}