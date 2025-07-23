import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Database, Server, Download, ArrowRight } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingIcons = [
    { Icon: Code, delay: 0, position: { top: '10%', left: '5%' } },
    { Icon: Database, delay: 1200, position: { top: '70%', right: '8%' } },
    { Icon: Server, delay: 2400, position: { top: '20%', right: '15%' } },
  ];

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-900'
          : 'bg-gradient-to-br from-blue-50 via-white to-gray-50'
      }`}
    >
      {/* Dynamic Background with Mouse Interaction */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isDarkMode ? 'opacity-30' : 'opacity-15'
          }`}
          style={{
            background: isDarkMode
              ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.4) 0%, rgba(79, 70, 229, 0.3) 20%, transparent 50%)`
              : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2) 0%, rgba(79, 70, 229, 0.1) 20%, transparent 50%)`,
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/5 left-1/5 w-80 h-80 rounded-full blur-3xl animate-float ${
            isDarkMode
              ? 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30'
              : 'bg-gradient-to-r from-blue-200/40 to-indigo-200/40'
          }`}
        ></div>
        <div
          className={`absolute bottom-1/5 right-1/5 w-96 h-96 rounded-full blur-3xl animate-float-delayed ${
            isDarkMode
              ? 'bg-gradient-to-r from-indigo-900/25 to-purple-900/25'
              : 'bg-gradient-to-r from-indigo-100/35 to-purple-100/35'
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl animate-pulse-slow ${
            isDarkMode
              ? 'bg-gradient-to-r from-blue-800/20 to-purple-800/20'
              : 'bg-gradient-to-r from-blue-200/30 to-purple-200/30'
          }`}
        ></div>
      </div>

      {/* Floating Icons with Enhanced Animations */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute animate-float-icon opacity-25 hover:opacity-50 transition-all duration-500 cursor-pointer group`}
          style={{
            ...item.position,
            animationDelay: `${item.delay}ms`,
          }}
        >
          <div className="relative">
            <item.Icon
              className={`w-14 h-14 transition-all duration-500 group-hover:scale-125 ${
                isDarkMode ? 'text-blue-300 group-hover:text-blue-200' : 'text-blue-600 group-hover:text-blue-700'
              }`}
            />
            <div
              className={`absolute inset-0 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-blue-600/30 to-indigo-600/30'
                  : 'bg-gradient-to-r from-blue-400/30 to-indigo-400/30'
              }`}
            ></div>
          </div>
        </div>
      ))}

      {/* Geometric Shapes with Subtle Animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-16 right-16 w-8 h-8 rotate-45 animate-spin-slow opacity-35 ${
            isDarkMode
              ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600'
          }`}
        ></div>
        <div
          className={`absolute bottom-24 left-12 w-10 h-10 border-2 rotate-45 animate-bounce-slow opacity-30 ${
            isDarkMode ? 'border-blue-400' : 'border-blue-600'
          }`}
        ></div>
        <div
          className={`absolute top-1/4 right-1/4 w-5 h-5 rounded-full animate-ping opacity-25 ${
            isDarkMode
              ? 'bg-gradient-to-r from-indigo-500 to-blue-500'
              : 'bg-gradient-to-r from-indigo-600 to-blue-600'
          }`}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Section */}
            <div
              className={`order-2 lg:order-1 transform transition-all duration-1500 ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              <div className="relative max-w-lg mx-auto lg:mx-0">
                <div className="relative group">
                  {/* Outer Glow Ring */}
                  <div
                    className={`absolute -inset-8 rounded-full blur-3xl opacity-25 group-hover:opacity-40 animate-pulse-slow transition-opacity duration-700 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600'
                        : 'bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400'
                    }`}
                  ></div>

                  {/* Middle Ring */}
                  <div
                    className={`absolute -inset-4 rounded-full blur-xl opacity-30 group-hover:opacity-50 animate-spin-slow transition-opacity duration-700 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500'
                        : 'bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400'
                    }`}
                  ></div>

                  {/* Image Container */}
                  <div className="relative w-80 h-80 mx-auto">
                    <div
                      className={`absolute inset-0 rounded-full animate-spin-slow ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600'
                          : 'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500'
                      }`}
                    ></div>
                    <div
                      className={`absolute inset-2 rounded-full overflow-hidden group-hover:inset-1 transition-all duration-500 ${
                        isDarkMode ? 'bg-gray-900' : 'bg-white'
                      }`}
                    >
                      <img
                        src="https://scontent.fpkr1-1.fna.fbcdn.net/v/t39.30808-1/488932065_122100626036832805_4324002732791125561_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=u0KR-oMLmAIQ7kNvwFf9ZB7&_nc_oc=AdkFfyJoAXTniUESFsEq77EU3BtabiM0sTuxd7PUnJm03EljNsSsD_QnNYQLk-DGtb0VU7y3uVWrc60ru9do1qDC&_nc_zt=24&_nc_ht=scontent.fpkr1-1.fna&_nc_gid=Ajjl7u5p97gDDNgm3HC-tg&oh=00_AfNU525ouIh9gvcGRHJMk0UwYR8wLE5VbpAxCuT5AJEfnA&oe=6858C64E"
                        alt="Amit Baral"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay Effects */}
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                          isDarkMode
                            ? 'bg-gradient-to-t from-gray-900/60 via-transparent to-blue-900/40'
                            : 'bg-gradient-to-t from-white/30 via-transparent to-blue-100/40'
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Floating Particles */}
                  <div
                    className={`absolute top-8 right-8 w-3 h-3 rounded-full animate-ping opacity-40 ${
                      isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                    }`}
                  ></div>
                  <div
                    className={`absolute bottom-12 left-6 w-2 h-2 rounded-full animate-ping delay-1000 opacity-35 ${
                      isDarkMode ? 'bg-indigo-400' : 'bg-indigo-600'
                    }`}
                  ></div>
                </div>

                {/* Status Indicator */}
                <div
                  className={`absolute top-4 right-4 flex items-center space-x-2 backdrop-blur-md rounded-full px-4 py-2 border transition-all duration-500 hover:scale-105 ${
                    isDarkMode
                      ? 'bg-gray-800/90 border-blue-500/50 text-blue-200'
                      : 'bg-white/90 border-blue-400/50 text-blue-700'
                  }`}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Available for Work</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              {/* Animated Greeting */}
              <div
                className={`transform transition-all duration-1000 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div
                  className={`text-xl mb-6 font-semibold tracking-wide animate-fade-in-up ${
                    isDarkMode ? 'text-blue-200' : 'text-blue-700'
                  }`}
                >
                  👋 Hello, I'm
                </div>
              </div>

              {/* Main Title */}
              <div className="relative mb-8">
                <h1
                  className={`text-6xl md:text-8xl font-extrabold tracking-tight mb-4 transform transition-all duration-1200 delay-300 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  } ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                >
                  <span
                    className={`inline-block animate-text-shimmer bg-clip-text text-transparent bg-[length:300%_100%] ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-300'
                        : 'bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800'
                    }`}
                  >
                    Amit
                  </span>
                  <br />
                  <span
                    className={`inline-block animate-text-shimmer bg-clip-text text-transparent bg-[length:300%_100%] delay-500 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-400'
                        : 'bg-gradient-to-r from-blue-800 via-indigo-800 to-blue-900'
                    }`}
                  >
                    Baral
                  </span>
                </h1>

                {/* Decorative Elements */}
                <div
                  className={`absolute -bottom-4 left-0 w-40 h-1.5 animate-expand-width ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500'
                      : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
                  }`}
                ></div>
                <div
                  className={`absolute -bottom-1 left-12 w-20 h-0.5 animate-expand-width delay-500 ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600'
                  }`}
                ></div>
              </div>

              {/* Subtitle */}
              <div
                className={`transform transition-all duration-1000 delay-600 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <p
                  className={`text-2xl md:text-3xl mb-6 font-semibold bg-clip-text text-transparent bg-gradient-to-r ${
                    isDarkMode
                      ? 'from-blue-200 via-indigo-200 to-purple-200'
                      : 'from-blue-700 via-indigo-700 to-purple-700'
                  }`}
                >
                  Laravel Developer & Full Stack Engineer
                </p>
              </div>

              {/* Description */}
              <div
                className={`transform transition-all duration-1000 delay-900 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <p
                  className={`text-lg md:text-xl mb-10 max-w-2xl leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  Crafting robust web applications at{' '}
                  <span
                    className={`font-semibold ${
                      isDarkMode ? 'text-blue-200' : 'text-blue-700'
                    }`}
                  >
                    XAV Technology
                  </span>{' '}
                  with Laravel and modern development practices. Passionate about building scalable, user-centric solutions that empower businesses.
                </p>
              </div>

              {/* Action Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12 transform transition-all duration-1000 delay-1200 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <button
                  onClick={() =>
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  ></div>
                  <span className="relative z-10 flex items-center text-lg">
                    View My Work
                    <ArrowRight
                      className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </span>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  ></div>
                </button>

                <button
                  onClick={() =>
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className={`group px-8 py-4 bg-transparent border-2 font-semibold rounded-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden backdrop-blur-md ${
                    isDarkMode
                      ? 'border-blue-500/60 hover:border-blue-400 text-blue-200 hover:bg-blue-900/30 hover:text-blue-100'
                      : 'border-blue-600/60 hover:border-blue-700 text-blue-800 hover:bg-blue-100/30 hover:text-blue-900'
                  }`}
                >
                  <div
                    className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                      isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100/30'
                    }`}
                  ></div>
                  <span className="relative z-10 flex items-center text-lg">
                    Get In Touch
                    <Mail
                      className="ml-3 w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300"
                    />
                  </span>
                </button>

                <a
                  href="/resume.pdf"
                  download
                  className={`group px-8 py-4 font-semibold rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-xl ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-gray-800 to-slate-800 hover:from-gray-700 hover:to-slate-700 text-white border border-gray-600/50 hover:shadow-gray-500/30'
                      : 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 border border-gray-300/50 hover:shadow-gray-400/30'
                  }`}
                >
                  <span className="flex items-center text-lg">
                    <Download
                      className="mr-3 w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300"
                    />
                    Download CV
                  </span>
                </a>
              </div>

              {/* Social Links */}
              <div
                className={`flex justify-center lg:justify-start space-x-6 mb-12 transform transition-all duration-1000 delay-1500 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {[
                  { Icon: Github, href: 'https://github.com/baralamit', delay: 0 },
                  { Icon: Linkedin, href: 'https://linkedin.com/in/baralamit', delay: 200 },
                  { Icon: Mail, href: 'mailto:contact@baralamit.com.np', delay: 400 },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-4 backdrop-blur-md rounded-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border ${
                      isDarkMode
                        ? 'bg-gray-800/60 hover:bg-gray-700/70 border-blue-500/50 text-blue-200 hover:text-blue-100'
                        : 'bg-white/60 hover:bg-white/80 border-blue-400/50 text-blue-700 hover:text-blue-900'
                    }`}
                    style={{ animationDelay: `${social.delay}ms` }}
                  >
                    <social.Icon className="w-7 h-7 transition-all duration-300 relative z-10 group-hover:scale-110" />
                    <div
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 ${
                        isDarkMode
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
                          : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                      }`}
                    ></div>
                    <div
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl ${
                        isDarkMode
                          ? 'bg-gradient-to-r from-blue-600/30 to-indigo-600/30'
                          : 'bg-gradient-to-r from-blue-400/30 to-indigo-400/30'
                      }`}
                    ></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center animate-bounce-gentle"
          >
            <div
              className={`text-sm mb-3 font-semibold tracking-wide group-hover:text-blue-500 transition-colors duration-300 ${
                isDarkMode ? 'text-blue-300' : 'text-blue-600'
              }`}
            >
              Discover More
            </div>
            <div className="relative">
              <div
                className={`w-8 h-12 border-2 rounded-full flex justify-center group-hover:border-blue-500 transition-colors duration-300 ${
                  isDarkMode ? 'border-blue-400/50' : 'border-blue-500/50'
                }`}
              >
                <div
                  className={`w-1.5 h-4 rounded-full mt-2 animate-scroll-indicator group-hover:bg-blue-500 transition-colors duration-300 ${
                    isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                  }`}
                ></div>
              </div>
              <div
                className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg ${
                  isDarkMode
                    ? 'bg-gradient-to-b from-blue-600/30 to-indigo-600/30'
                    : 'bg-gradient-to-b from-blue-400/30 to-indigo-400/30'
                }`}
              ></div>
            </div>
            <ChevronDown
              className={`w-6 h-6 group-hover:text-blue-500 transition-all duration-300 mt-3 animate-bounce-gentle ${
                isDarkMode ? 'text-blue-300' : 'text-blue-600'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Inline CSS for Animations */}
      <style >{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-icon {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(10deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(-10px) rotate(45deg);
          }
        }
        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes scroll-indicator {
          0%,
          100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.5;
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes text-shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 300% 50%;
          }
        }
        @keyframes expand-width {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-icon {
          animation: float-icon 5s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-text-shimmer {
          animation: text-shimmer 6s linear infinite;
        }
        .animate-expand-width {
          animation: expand-width 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;