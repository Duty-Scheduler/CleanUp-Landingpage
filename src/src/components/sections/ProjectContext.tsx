// Import trực tiếp các icon từ thư viện lucide-react
import { AlertCircle, Users, Star } from 'lucide-react'; 

export const ProjectContext = () => {
  const contextItems = [
    {
      icon: AlertCircle, // Truyền component trực tiếp
      title: 'The Problem',
      description: 'Living together often leads to conflicts over chores. Uneven distribution and lack of accountability make household management stressful and chaotic.',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500'
    },
    {
      icon: Users,
      title: 'Target Audience',
      description: 'Roommates sharing apartments, couples managing a home, and busy families who need a transparent way to divide daily responsibilities.',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      icon: Star,
      title: 'Value Proposition',
      description: 'A centralized platform that turns chores into clear, trackable tasks. We bring fairness, transparency, and harmony back to your shared living space.',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why CleanUp Matters?</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Understanding the core challenges of shared living to build the right solution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contextItems.map((item, index) => {
            // Đặt tên biến component để React hiểu (viết hoa chữ cái đầu)
            const IconComponent = item.icon; 

            return (
              <div 
                key={index} 
                className="relative p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                  {/* Render IconComponent trực tiếp */}
                  <IconComponent className={`w-7 h-7 ${item.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};