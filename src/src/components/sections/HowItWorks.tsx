import { FEATURES } from '../../constants';

export const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">How Management Task Work</h2>
          <p className="section-subtitle">
            Divide cleaning tasks by day and keep everything on track
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <div className="space-y-12">
            {FEATURES.slice(0, 2).map((feature) => (
              <div key={feature.id} className="text-center lg:text-right">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-semibold mb-4">
                  {feature.id}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Center Phone */}
          <div className="flex justify-center order-first lg:order-none">
            <img
              src="/images/How to task management work.png"
              alt="Task Management"
              className="w-[260px] lg:w-[300px] h-auto drop-shadow-xl"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-12">
            {FEATURES.slice(2, 4).map((feature) => (
              <div key={feature.id} className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-semibold mb-4">
                  {feature.id}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
