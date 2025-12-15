import { Icon } from '../ui';

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Clean Task Just a Tap Away
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Assign, track, and complete cleaning tasks effortlessly as a team.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#"
                className="flex items-center gap-3 bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Icon name="play" className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Icon name="apple" className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/HeroSection.png"
              alt="CleanUp App"
              className="w-full max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
