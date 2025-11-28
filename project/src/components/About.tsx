import { GraduationCap, FileText, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex justify-center items-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
          <a href="#about" className="block text-center w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-block cursor-pointer hover:text-blue-400 transition-colors">
              About <span className="text-blue-400">Me</span>
            </h2>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent mb-6"></div>
              <p className="text-gray-300 leading-relaxed text-lg">
                A first-year <span className="text-blue-400 font-semibold">B.Tech CSE (AI & ML)</span> student at{' '}
                <span className="text-white font-semibold">Woxsen University</span>, actively engaged in cutting-edge AI projects,
                research, and product development.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Passionate about building intelligent systems, solving real-world problems, and creating high-impact AI solutions.
              </p>
            </div>

          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
                  <div className="space-y-2">
                    <p className="text-gray-300 font-medium">B.Tech CSE – AI & ML</p>
                    <p className="text-gray-400">Woxsen University, Hyderabad</p>
                    <p className="text-blue-400 text-sm">Expected Graduation: 2029</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">Research Papers</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                      <span className="text-gray-300">EV-to-Grid Integration <span className="text-blue-400 text-sm">(Patent Pending)</span></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">Recognition</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                      <span className="text-gray-300">Member – Digitalization Department</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                      <span className="text-gray-300">Reviewer for academic articles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                      <span className="text-gray-300">Recognized as a High Achiever in STEM Competitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                      <span className="text-gray-300">Ongoing internship at Woxsen University</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
