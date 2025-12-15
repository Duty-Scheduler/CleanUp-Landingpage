import { Icon } from '../ui'; // Component Icon của bạn

export const DesignResources = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
            Design Artifacts
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore the Design Process
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Dive deep into the research, wireframes, and the complete design system that powers CleanUp.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Behance Card - The Story */}
          <a 
            href="https://www.behance.net/gallery/238737765/Clean-Up?share=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl bg-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Background Pattern/Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity"></div>
            
            <div className="relative p-8 md:p-10 flex flex-col h-full justify-between min-h-[320px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                   
                   <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                     CASE STUDY
                   </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Full Project Presentation
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Read the story behind the problem. See the user research, personas, and the journey from concept to final UI.
                </p>
              </div>

              <div className="flex items-center gap-2 font-semibold mt-8 group-hover:gap-4 transition-all">
                <span>Read on Behance</span>
                <Icon name="arrow-right" className="w-5 h-5" />
              </div>
            </div>
          </a>

          {/* Figma Card - The Blueprint */}
          <a 
            href="https://www.figma.com/design/L2XBwfkXDy0HjliBX0EsvZ/Untitled?node-id=11-2331&t=a7PhLaeM3iAjopGS-1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl bg-gray-900 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-30 transition-opacity"></div>

            <div className="relative p-8 md:p-10 flex flex-col h-full justify-between min-h-[320px]">
              <div>
                <div className="flex items-center justify-between mb-6">
                   
                   <span className="bg-gray-800 border border-gray-700 text-xs font-bold px-3 py-1 rounded-full text-purple-400">
                     DESIGN SYSTEM
                   </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Interactive Prototype
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Inspect the pixel-perfect components, auto-layout setup, and experience the app flow directly in Figma.
                </p>
              </div>

              <div className="flex items-center gap-2 font-semibold mt-8 text-purple-400 group-hover:gap-4 transition-all">
                <span>View in Figma</span>
                <Icon name="arrow-right" className="w-5 h-5" />
              </div>
            </div>
          </a>

        </div>

        {/* Optional: Design Specs Summary */}
        {/* <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Design Specifications</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                <span className="flex items-center gap-2 text-gray-600 font-medium">
                    <Icon name="check" className="w-4 h-4 text-blue-500"/> Auto Layout
                </span>
                <span className="flex items-center gap-2 text-gray-600 font-medium">
                    <Icon name="check" className="w-4 h-4 text-blue-500"/> Component Set
                </span>
                <span className="flex items-center gap-2 text-gray-600 font-medium">
                    <Icon name="check" className="w-4 h-4 text-blue-500"/> Mobile First
                </span>
                 <span className="flex items-center gap-2 text-gray-600 font-medium">
                    <Icon name="check" className="w-4 h-4 text-blue-500"/> Accessibility Ready
                </span>
            </div>
        </div> */}

      </div>
    </section>
  );
};