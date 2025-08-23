import Layout from '@/components/Layout';

export default function Service() {
  const services = [
    {
      icon: '💻',
      title: 'Website Development',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s'
    },
    {
      icon: '📱',
      title: 'Application Development',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s'
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s'
    },
    {
      icon: '🔍',
      title: 'SEO Backlinks',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s'
    },
    {
      icon: '📊',
      title: 'Market Analysis',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s'
    }
  ];

  const designs = [
    { title: 'Design 1', image: '/api/placeholder/300/200' },
    { title: 'Design 2', image: '/api/placeholder/300/200' },
    { title: 'Design 3', image: '/api/placeholder/300/200' }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <section className="py-16">
          <h1 className="text-5xl font-bold text-gray-700 mb-4">Our Services</h1>
          <p className="text-gray-500 text-lg">
            It is a long established fact that a reader be distracted.
          </p>
        </section>

        {/* Services Grid */}
        <section className="pb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Creative Design Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-700 mb-4">
              Creative Design
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry&apos;s standard
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {designs.map((design, index) => (
              <div key={index} className="bg-gray-400 h-64 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-semibold">
                  {design.title}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}