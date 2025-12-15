import { Icon } from '../ui';
import { ORGANIZE_FEATURES } from '../../constants';

export const ReadyToOrganize = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Ready to Organize?</h2>
          <p className="section-subtitle">
            Step into a cleaner, more intentional life. Take control, plan confidently, and unlock
            your full potential. Your best work begins now!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="relative">
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-500 rounded-3xl -z-10" />
            <img
              src="/images/Organize.png"
              alt="Organize Tasks"
              className="relative z-10 w-full max-w-md mx-auto lg:mx-0 drop-shadow-xl"
            />
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-8">
            {ORGANIZE_FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className={`${index === 2 ? 'sm:col-span-2 sm:max-w-xs sm:mx-auto lg:mx-0' : ''}`}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                  <Icon name={feature.icon} className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
