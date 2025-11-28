import { FileText, Users, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const leadership = [
  {
    icon: FileText,
    title: 'EV-to-Grid Research',
    description: 'Patent Pending',
    detail: 'Pioneering research in electric vehicle grid integration technology'
  },
  {
    icon: Users,
    title: 'Digitalization Department',
    description: 'Contributor',
    detail: 'Active member driving digital transformation initiatives'
  },
  {
    icon: Award,
    title: 'Article Reviewer',
    description: 'Academic Reviewer',
    detail: 'Reviewing and evaluating academic research publications'
  },
  {
    icon: Users,
    title: 'Student Mentorship',
    description: 'AI Project Mentor',
    detail: 'Guided students in building and deploying AI-powered projects'
  }
];

export default function Leadership() {
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
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.08),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex justify-center items-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
          <a href="#leadership" className="block text-center w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-block cursor-pointer hover:text-blue-400 transition-colors">
              Leadership & <span className="text-blue-400">Research</span>
            </h2>
          </a>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent hidden md:block"></div>

            <div className="space-y-8">
              {leadership.map((item, idx) => (
                <div
                  key={item.title}
                  className={`transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="relative md:ml-16">
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-blue-500 rounded-full flex items-center justify-center hidden md:flex group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>

                    <div className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-1">
                      <div className="flex items-start gap-4 md:gap-6">
                        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg md:hidden">
                          <item.icon className="w-6 h-6 text-blue-400" />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </h3>
                            <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-400">
                              {item.description}
                            </span>
                          </div>
                          <p className="text-gray-400 leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      </div>

                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-l-lg"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
