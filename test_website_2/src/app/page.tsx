import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-6xl font-bold text-gray-700 mb-6">
            The Senseable QA Agent
          </h1>
          <p className="text-2xl text-gray-500 mb-12">
            Boost your vibe coding
          </p>
          <button className="border-2 border-gray-400 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
            Explore
          </button>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-700 mb-6">
              About Browser Sense
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry&apos;s standard dummy 
              text ever since the 1500s, when an unknown printer took
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-700 mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Professional Support
              </h3>
              <p className="text-gray-500">
                It is a long established fact that a reader will be distracted 
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-gray-700 mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Awesome Design
              </h3>
              <p className="text-gray-500">
                It is a long established fact that a reader will be distracted 
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-gray-700 mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Planning & Executing
              </h3>
              <p className="text-gray-500">
                It is a long established fact that a reader will be distracted 
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}