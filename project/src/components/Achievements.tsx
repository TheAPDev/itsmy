import { Trophy, BookOpen, Award, Medal } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const achievements = [
  {
    icon: Trophy,
    title: 'WoxHack',
    description: '4th place out of 150+ teams',
    color: 'from-yellow-500/20 to-yellow-600/10'
  },
  {
    icon: BookOpen,
    title: 'Published Author',
    description: '"Life vs Death" available on Amazon',
    color: 'from-blue-500/20 to-blue-600/10'
  },
  {
    icon: Award,
    title: 'Smart India Hackathon',
    description: 'Cleared internal round',
    color: 'from-green-500/20 to-green-600/10'
  },
  {
    icon: Trophy,
    title: 'Odisha Hackathon',
    description: 'AI-based solutions',
    color: 'from-purple-500/20 to-purple-600/10'
  },
  {
    icon: Award,
    title: 'IIIT Hyderabad Hackathon',
    description: 'National-level participation',
    color: 'from-red-500/20 to-red-600/10'
  },
  {
    icon: Trophy,
    title: 'BITS Pilani Hackathon',
    description: 'Real-world AI integration challenge',
    color: 'from-orange-500/20 to-orange-600/10'
  },
  {
    icon: Medal,
    title: 'National Olympiads',
    description: 'Gold & Silver in Math & Science',
    color: 'from-yellow-400/20 to-yellow-500/10'
  }
];

export default function Achievements() {
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
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex justify-center items-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
          <a href="#achievements" className="block text-center w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-block cursor-pointer hover:text-blue-400 transition-colors">
              Achievements & <span className="text-blue-400">Awards</span>
            </h2>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {achievements.map((achievement, idx) => (
            <div
              key={achievement.title}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 h-full hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className="mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg inline-block group-hover:scale-110 transition-transform">
                      <achievement.icon className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                <div className="absolute top-2 right-2 w-16 h-16 border-t border-r border-blue-500/20 rounded-tr-lg group-hover:border-blue-500/50 transition-colors"></div>
                <div className="absolute bottom-2 left-2 w-16 h-16 border-b border-l border-blue-500/20 rounded-bl-lg group-hover:border-blue-500/50 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
