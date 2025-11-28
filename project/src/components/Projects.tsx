import { ExternalLink, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: 'AI Emotional Companion',
    description: 'Human-like conversational AI for emotional support using OpenAI + ElevenLabs.',
    tags: ['OpenAI', 'ElevenLabs', 'NLP', 'Voice AI']
  },
  {
    title: 'AI Support Calling Agent',
    description: 'Multi-agent AI voice system handling 50–100 concurrent support calls.',
    tags: ['AI', 'Voice', 'Multi-Agent', 'Scalability']
  },
  {
    title: 'CompanyGPT',
    description: 'AI-based collaboration suite with summaries, progress tracking & role memory.',
    tags: ['GPT', 'Collaboration', 'Enterprise', 'AI']
  },
  {
    title: 'AI Finance Educator',
    description: 'Personalized financial education AI with long-term guidance.',
    tags: ['Finance', 'Education', 'AI', 'Personalization']
  },
  {
    title: 'Computer Vision Tools',
    description: 'Close-fit data analysis, auto-capture systems using CV models.',
    tags: ['Computer Vision', 'ML', 'Analytics', 'Automation']
  },
  {
    title: 'Campinnova',
    description: 'Mental wellness app for students across different campuses. Built with team collaboration.',
    tags: ['Wellness', 'Mental Health', 'Community', 'React']
  },
  {
    title: 'BhashaSetu',
    description: 'Research paper analysis platform enabling researchers to better analyze and understand academic papers.',
    tags: ['Research', 'NLP', 'Analysis', 'Academic']
  },
  {
    title: 'Voice-Based AI Systems',
    description: 'Exploring voice-based AI applications and conversational interfaces for hands-free interaction.',
    tags: ['Voice AI', 'Speech Recognition', 'NLP', 'Emerging']
  },
  {
    title: 'Hand Gesture Control System',
    description: 'Advanced gesture recognition including Morse code typing, fist-based copy-paste operations.',
    tags: ['Computer Vision', 'Gesture Recognition', 'OpenCV', 'Innovation']
  },
  {
    title: 'Hackathons & Internships Portal',
    description: 'Comprehensive platform for students to discover and access hackathons and internship opportunities.',
    tags: ['Web Dev', 'Full Stack', 'Opportunities', 'Community']
  },
  {
    title: '20+ AI-Integrated Web Apps',
    description: 'Built and showcased consistently on LinkedIn.',
    tags: ['Web Dev', 'AI Integration', 'Full Stack', 'Innovation']
  }
];

export default function Projects() {
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

  // Slider state
  const visibleCards = 2;
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projects.length;
  const maxIndex = totalProjects - visibleCards;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.08),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Profile Image Section removed as requested */}
        <div className={`flex justify-center items-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
          <a href="#projects" className="block text-center w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-block cursor-pointer hover:text-blue-400 transition-colors">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
          </a>
        </div>
        {/* Viewing X out of Y indicator - professional style */}
        <div className="mb-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-blue-200 text-lg md:text-xl font-bold shadow-lg tracking-wide">
            Viewing <span className="text-blue-100 font-extrabold">{currentIndex + 1} - {Math.min(currentIndex + visibleCards, totalProjects)}</span> <span className="text-blue-300 font-medium">out of</span> <span className="text-blue-100 font-extrabold">{totalProjects}</span>
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto flex-col sm:flex-row">
          {/* Left Arrow - professional style, smaller on mobile */}
          <button
            onClick={handlePrev}
            className={`group p-2 sm:p-3 rounded-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-blue-200 shadow-xl transition-all duration-200 flex items-center justify-center border-2 border-blue-800 hover:scale-110 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:border-blue-700'} mb-4 sm:mb-0`}
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-blue-300">
              <circle cx="12" cy="12" r="11" stroke="currentColor" fill="none" />
              <polyline points="14 8 10 12 14 16" />
            </svg>
          </button>
          {/* Cards - responsive style */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full sm:w-auto items-center justify-center">
            {projects.slice(currentIndex, currentIndex + (window.innerWidth < 640 ? 1 : visibleCards)).map((project) => (
              <div
                key={project.title}
                className="bg-gradient-to-br from-[#181f2f] via-[#232b3e] to-[#181f2f] rounded-2xl shadow-2xl p-6 sm:p-10 w-[90vw] sm:w-[350px] min-h-[220px] flex flex-col justify-between relative border border-blue-900 hover:border-blue-400 transition-all duration-200"
                style={{ maxWidth: "350px" }}
              >
                <div className="mt-2">
                  <h2 className="text-lg sm:text-2xl font-extrabold text-white mb-3 tracking-tight flex items-center">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base font-medium leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#232b3e] text-gray-200 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold shadow"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right Arrow - professional style, smaller on mobile */}
          <button
            onClick={handleNext}
            className={`group p-2 sm:p-3 rounded-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-blue-200 shadow-xl transition-all duration-200 flex items-center justify-center border-2 border-blue-800 hover:scale-110 ${currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:border-blue-700'} mt-4 sm:mt-0`}
            disabled={currentIndex === maxIndex}
            aria-label="Next"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-blue-300">
              <circle cx="12" cy="12" r="11" stroke="currentColor" fill="none" />
              <polyline points="10 8 14 12 10 16" />
            </svg>
          </button>
        </div>
        {/* Status Bar */}
        <div className="mt-8 text-lg text-blue-400 bg-[#131a2a] px-6 py-3 rounded-xl shadow text-center">
          <span className="font-semibold">Currently:</span> Actively solving problems on LeetCode
        </div>
      </div>
    </section>
  );
}
