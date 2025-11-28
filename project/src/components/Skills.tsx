import { Code2, Brain, Palette, Wrench } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'React', 'Node.js']
  },
  {
    icon: Brain,
    title: 'AI & ML',
    skills: ['OpenAI', 'NVIDIA API', 'ElevenLabs API', 'ML Models', 'Computer Vision', 'AI Automation']
  },
  {
    icon: Palette,
    title: 'Development',
    skills: ['Web Development', 'Product Development', 'Bolt.new', 'Full Stack']
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: ['Git', 'API Integration', 'Cloud Services', 'Database Design']
  }
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex justify-center items-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
          <a href="#skills" className="block text-center w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-block cursor-pointer hover:text-blue-400 transition-colors">
              Technical <span className="text-blue-400">Skills</span>
            </h2>
          </a>
        </div>

  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 h-full hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors"></div>

                <div className="relative">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                    <category.icon className="w-8 h-8 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>

                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-center">
            <p className="text-gray-400 text-lg leading-relaxed">
              Continuously expanding my skillset through hands-on projects, research, and real-world applications.
              <span className="block mt-2 text-blue-400 font-medium">
                Currently mastering LeetCode & Advanced AI Systems
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
