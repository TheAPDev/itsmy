import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-950">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
      <div className="container mx-auto px-4 py-10 md:px-6 md:py-20 relative z-10">
        <div className="flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:gap-12 md:items-center">
          {/* Left/Text Section */}
          <div className={`w-full flex flex-col items-center md:items-start space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-2 md:space-y-3 w-full text-center md:text-left">
              <div className="inline-block mb-1">
                <p className="text-gray-300 text-xs md:text-sm font-light tracking-[0.2em] uppercase">
                  Portfolio
                </p>
                <div className="h-px w-12 md:w-20 bg-gradient-to-r from-blue-400 to-transparent mx-auto md:mx-0"></div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                <span className="block font-serif">AAYUSHMAAN</span>
                <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-gray-300 bg-clip-text text-transparent mt-1 md:mt-2 font-bold">
                  PANDAB
                </span>
              </h1>
              <div className="space-y-1 md:space-y-2 text-sm sm:text-base md:text-lg text-gray-400 font-normal">
                <p className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
                  <span className="w-6 md:w-10 h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
                  AI Entrepreneur & Innovator
                </p>
                <p className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
                  <span className="w-6 md:w-10 h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
                  Visionary Leader
                </p>
                <p className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
                  <span className="w-6 md:w-10 h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
                  Tech Explorer
                </p>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-xs sm:max-w-md md:max-w-xl border-l-2 border-blue-900 pl-2 md:pl-4 italic mx-auto md:mx-0">
                AI & Tech Explorer | Building Real-World Solutions with Code & Vision
              </p>
            </div>
          </div>
          {/* Right/Avatar Section */}
          <div className={`w-full flex justify-center md:block relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative aspect-square w-40 sm:w-56 md:max-w-md mx-auto flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent rounded-lg transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/30 to-transparent rounded-lg transform -rotate-6"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 sm:p-8 border border-gray-700 shadow-2xl backdrop-blur-sm flex flex-col items-center justify-center">
                <div className="absolute top-0 left-0 w-16 sm:w-32 h-16 sm:h-32 border-t-2 border-l-2 border-blue-500"></div>
                <div className="absolute bottom-0 right-0 w-16 sm:w-32 h-16 sm:h-32 border-b-2 border-r-2 border-blue-500"></div>
                <img
                  src="/profile/profile.jpg"
                  alt="Profile"
                  className="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-blue-700 bg-gray-900 shadow-lg cursor-pointer"
                  style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}
                  onClick={() => window.open('https://www.linkedin.com/in/aayushmaan-pandab', '_blank')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
