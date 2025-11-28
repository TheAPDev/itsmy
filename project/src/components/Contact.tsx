import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
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

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8106035907',
      href: 'tel:+918106035907'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'aayushmaanpandab@gmail.com',
      href: 'mailto:aayushmaanpandab@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana',
      href: null
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'www.linkedin.com/in/aayushmaan-pandab',
      href: 'https://www.linkedin.com/in/aayushmaan-pandab'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex justify-center items-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
          <a href="#contact" className="block text-center w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-block cursor-pointer hover:text-blue-400 transition-colors">
              Let's <span className="text-blue-400">Connect</span>
            </h2>
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="group min-w-0">
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.label === 'LinkedIn' ? '_blank' : undefined}
                        rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] h-full"
                      >
                        <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                          <info.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-gray-500 text-sm mb-1">{info.label}</p>
                          <p className="text-white group-hover:text-blue-400 transition-colors break-all text-sm">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700 h-full">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                          <info.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-gray-500 text-sm mb-1">{info.label}</p>
                          <p className="text-white text-sm">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-center">
              <p className="text-gray-300 text-lg leading-relaxed">
                Open to opportunities in <span className="text-blue-400 font-semibold">AI Research</span>,{' '}
                <span className="text-blue-400 font-semibold">Product Development</span>, and{' '}
                <span className="text-blue-400 font-semibold">Innovation Projects</span>
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-20 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>
          <p className="text-gray-500">
            © 2025 Aayushmaan Pandab. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Built with precision and passion
          </p>
        </div>
      </div>
    </section>
  );
}
