'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
    description: ''
  });

  const [newsletter, setNewsletter] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', newsletter);
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'hello@browsersense.com', color: 'from-blue-500 to-cyan-500' },
    { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567', color: 'from-green-500 to-emerald-500' },
    { icon: '📍', label: 'Address', value: '123 Innovation St, Tech City', color: 'from-purple-500 to-pink-500' },
    { icon: '⏰', label: 'Hours', value: 'Mon-Fri 9AM-6PM PST', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <section className="py-20 text-center animate-fadeInUp">
          <div className="relative">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your QA process? Let&apos;s discuss how Browser Sense can help you achieve excellence.
            </p>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-float"></div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 animate-fadeInUp">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{info.label}</h3>
                <p className="text-slate-600">{info.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-20 animate-fadeInUp">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-white/50">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - Success Stories */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl mr-4">
                    📊
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    Success Stories
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {[
                    {
                      metric: "99.8%",
                      label: "Bug Detection Rate", 
                      description: "Our AI-powered agents catch even the most subtle issues.",
                      gradient: "from-green-500 to-emerald-500"
                    },
                    {
                      metric: "75%",
                      label: "Time Reduction",
                      description: "Automated testing saves hours of manual QA work daily.",
                      gradient: "from-blue-500 to-cyan-500"
                    },
                    {
                      metric: "500+",
                      label: "Happy Clients",
                      description: "Companies worldwide trust Browser Sense for their QA needs.",
                      gradient: "from-purple-500 to-pink-500"
                    }
                  ].map((stat, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                        {stat.metric}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-1">{stat.label}</h3>
                        <p className="text-slate-600 text-sm">{stat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold mr-3">
                      🚀
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800">Ready to Get Started?</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">
                    Join our growing community of developers who&apos;ve revolutionized their QA workflow.
                  </p>
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    View Case Studies
                  </button>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-2xl mr-4">
                    💬
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    Let&apos;s Talk
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-50 hover:bg-white"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-50 hover:bg-white"
                      />
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Company Name (Optional)"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-50 hover:bg-white"
                  />

                  <textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-4 border border-slate-200 rounded-xl h-24 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-50 hover:bg-white"
                  />

                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-50 hover:bg-white text-slate-600"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">$100,000+</option>
                  </select>

                  <textarea
                    placeholder="Any additional details..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full p-4 border border-slate-200 rounded-xl h-20 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-slate-50 hover:bg-white"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Send Message 🚀
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 animate-fadeInUp">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mr-4">
                  📬
                </div>
                <h2 className="text-4xl font-bold">Stay Updated</h2>
              </div>
              <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
                Get the latest updates, tips, and insights delivered to your inbox. Join our community of QA professionals.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={newsletter}
                    onChange={(e) => setNewsletter(e.target.value)}
                    className="flex-1 p-4 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-slate-800 placeholder-slate-500"
                  />
                  <button
                    type="submit"
                    className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-gray-50"
                  >
                    Subscribe ✨
                  </button>
                </div>
              </form>

              <div className="mt-8 flex justify-center space-x-6 text-indigo-200">
                <span className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  No spam, ever
                </span>
                <span className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Weekly insights
                </span>
                <span className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Unsubscribe anytime
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}