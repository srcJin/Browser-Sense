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

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <section className="py-16">
          <h1 className="text-5xl font-bold text-gray-700 mb-4">Contact Us</h1>
          <p className="text-gray-500 text-lg">
            It is a long established fact.
          </p>
        </section>

        {/* Main Content */}
        <section className="pb-16">
          <div className="bg-gray-400 py-16 px-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Side - Results */}
              <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-700 mb-6">
                  The Results
                </h2>
                
                <div className="space-y-6 text-gray-600 text-sm">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been 
                    the industry&apos;s standard dummy text ever since the 
                    1500s, when unknown printer took a galley of type 
                    and scrambled it to make a type specimen book.
                  </p>
                  
                  <p>
                    Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been 
                    the industry&apos;s standard dummy text ever since the 
                    1500s, when unknown printer took a galley of type.
                  </p>
                  
                  <p>
                    Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been.
                  </p>
                </div>

                <div className="mt-8">
                  <button className="text-gray-700 font-semibold border-b border-gray-700">
                    Launch Site ——
                  </button>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="bg-white p-8 rounded-lg">
                <h2 className="text-xl font-bold text-gray-700 mb-6">
                  Let&apos;s Talk About Your Project
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  />

                  <input
                    type="text"
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
                  />

                  <textarea
                    placeholder="What do you want to do?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded h-20 resize-none focus:outline-none focus:border-gray-500"
                  />

                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500 text-gray-500"
                  >
                    <option value="">What is your budget?</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="over-25k">Over $25,000</option>
                  </select>

                  <textarea
                    placeholder="Describe"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded h-24 resize-none focus:outline-none focus:border-gray-500"
                  />

                  <button
                    type="submit"
                    className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-700 mb-2">
              Subscribe Newsletter
            </h2>
            <p className="text-gray-500">
              & latest Update of Company
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Email Address"
                value={newsletter}
                onChange={(e) => setNewsletter(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-l focus:outline-none focus:border-gray-500"
              />
              <button
                type="submit"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-r transition-colors"
              >
                ——→
              </button>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  );
}