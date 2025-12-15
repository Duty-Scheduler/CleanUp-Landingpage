import { useState } from 'react';
import { 
  Home, 
  Calendar, 
  ClipboardList, 
  User, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

// Dữ liệu cho 4 bước tính năng
const WORKFLOW_STEPS = [
  {
    id: 1,
    title: "Create Houses & Invite",
    description: "Start by creating your digital home. Generate a unique code and invite your roommates or family members to join instantly.",
    icon: Home,
    color: "text-blue-500",
    bg: "bg-blue-100",
    // Mảng chứa đường dẫn ảnh (có thể 1 hoặc 2 ảnh)
    images: ["/images/team1.png", "/images/team.png"]
  },
  {
    id: 2,
    title: "Task Assignment & View",
    description: "Fairly distribute chores with our smart calendar. View upcoming tasks for the day, week, or month so everyone knows their responsibilities.",
    icon: Calendar,
    color: "text-purple-500",
    bg: "bg-purple-100",
    images: ["/images/task_assign.png", "/images/task1.png"]
  },
  {
    id: 3,
    title: "Duty Reporting (Check-in)",
    description: "Completed your task? Simply tap to check-in. The system updates the status in real-time, keeping the house organized and transparent.",
    icon: ClipboardList,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
    images: ["/images/How to task management work.png"] // Giữ ảnh cũ của bạn
  },
  {
    id: 4,
    title: "Profile Management",
    description: "Manage your personal information, track your completion history, and customize your preferences all in one place.",
    icon: User,
    color: "text-gray-500",
    bg: "bg-gray-100",
    images: ["/images/pro5.png"]
  }
];

export const HowItWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hàm chuyển slide tiếp theo
  const nextStep = () => {
    setCurrentIndex((prev) => (prev === WORKFLOW_STEPS.length - 1 ? 0 : prev + 1));
  };

  // Hàm quay lại slide trước
  const prevStep = () => {
    setCurrentIndex((prev) => (prev === 0 ? WORKFLOW_STEPS.length - 1 : prev - 1));
  };

  const currentStep = WORKFLOW_STEPS[currentIndex];
  const IconComponent = currentStep.icon;

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Master your household management in 4 simple steps.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          
          {/* Navigation Buttons (Desktop: Hai bên, Mobile: Dưới cùng) */}
          <button 
            onClick={prevStep}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-3 rounded-full bg-white shadow-lg border border-gray-100 hover:bg-gray-50 text-gray-600 transition-all hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextStep}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 p-3 rounded-full bg-white shadow-lg border border-gray-100 hover:bg-gray-50 text-gray-600 transition-all hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Content Grid */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 lg:p-16 transition-all duration-500 ease-in-out">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Text Info */}
              <div className="space-y-6 order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-2">
                   <div className={`w-12 h-12 rounded-xl ${currentStep.bg} flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${currentStep.color}`} />
                   </div>
                   <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                     Step {currentIndex + 1} of {WORKFLOW_STEPS.length}
                   </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                  {currentStep.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {currentStep.description}
                </p>

                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-100 border border-green-200 text-green-700 font-medium text-sm">
                   <CheckCircle2 className="w-4 h-4" />
                   Feature Ready
                </div>

                {/* Mobile Navigation Dots */}
                <div className="flex gap-2 pt-6">
                  {WORKFLOW_STEPS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Column: Images (Phone Mockups) */}
              <div className="relative h-[400px] md:h-[500px] flex items-center justify-center order-1 lg:order-2">
                {/* Background Blob */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 ${currentStep.bg} rounded-full blur-3xl opacity-50`}></div>
                
                {/* Image Rendering Logic */}
                {currentStep.images.map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt={`${currentStep.title} Screenshot ${idx + 1}`}
                    // --- THAY ĐỔI Ở ĐÂY ---
                    className={`
                      absolute max-h-full w-auto object-contain drop-shadow-2xl rounded-[2rem] transition-all duration-500 ease-out
                      ${currentStep.id !== 3 ? 'border-4 border-gray-900' : ''} 
                      ${
                        // Logic xử lý vị trí nếu có 2 ảnh
                        currentStep.images.length > 1 
                          ? idx === 0 
                            ? 'z-20 scale-100 translate-x-[-20px] rotate-[-3deg]' // Ảnh 1: Lệch trái, xoay nhẹ
                            : 'z-10 scale-95 translate-x-[20px] rotate-[3deg] opacity-80' // Ảnh 2: Lệch phải, mờ hơn chút
                          : 'z-20 scale-100 rotate-0' // Nếu chỉ có 1 ảnh: Đứng giữa
                      }
                    `}
                    style={{ maxHeight: '90%' }}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* Mobile Navigation Buttons (Hiển thị ở dưới trên màn hình nhỏ) */}
          <div className="flex justify-between mt-6 md:hidden">
             <button onClick={prevStep} className="p-2 rounded-full bg-gray-100 text-gray-600">
                <ChevronLeft className="w-6 h-6" />
             </button>
             <button onClick={nextStep} className="p-2 rounded-full bg-gray-100 text-gray-600">
                <ChevronRight className="w-6 h-6" />
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};