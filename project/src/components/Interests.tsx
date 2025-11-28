import { Lightbulb, TrendingUp, Trophy, Rocket, Dumbbell, BookOpen } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const interests = [
  {
    icon: Lightbulb,
    title: 'AI Product Development',
    description: 'Building intelligent solutions that solve real-world problems'
  },
  {
    icon: TrendingUp,
    title: 'Entrepreneurship',
    description: 'Creating innovative ventures and scalable business models'
  },
  {
    icon: Trophy,
    title: 'Hackathons',
    description: 'Competing and collaborating in high-intensity innovation events'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Pushing boundaries and exploring cutting-edge technologies'
  },
  {
    icon: Dumbbell,
    title: 'Fitness',
    description: 'Maintaining physical and mental well-being through exercise'
  },
  {
    icon: BookOpen,
    title: 'Research',
    description: 'Contributing to academic knowledge and technological advancement'
  }
];

export default function Interests() {
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.08),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex justify-center items-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
          <a href="#interests" className="block text-center w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-block cursor-pointer hover:text-blue-400 transition-colors">
              Areas of <span className="text-blue-400">Interest</span>
            </h2>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {interests.map((interest, idx) => (
            <div
              key={interest.title}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-lg p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      <interest.icon className="w-10 h-10 text-blue-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {interest.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-center">
            <p className="text-gray-300 text-lg leading-relaxed italic">
              "Driven by curiosity, fueled by innovation, and committed to making a meaningful impact through technology."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
