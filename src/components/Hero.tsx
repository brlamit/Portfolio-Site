import React, { useEffect, useState } from 'react';
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Server,
  Download,
  ArrowRight,
  Facebook,
} from 'lucide-react';
import profileimg from '../assets/myimage.jpg';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import amitbaralcv from '../assets/CV-Amit-Baral.pdf';

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
    { Icon: Code, delay: 0, position: { top: '10%', left: '5%' }, label: 'Coding' },
    { Icon: Database, delay: 1200, position: { top: '70%', right: '8%' }, label: 'Database' },
    { Icon: Server, delay: 2400, position: { top: '20%', right: '15%' }, label: 'Server' },
  ];

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/brlamit', label: 'GitHub', delay: 0 },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/brlamit', label: 'LinkedIn', delay: 200 },
    { Icon: Mail, href: 'mailto:baralamit881@gmail.com', label: 'Email', delay: 400 },
    { Icon: Facebook, href: 'https://www.facebook.com/amit.baral.239082/', label: 'Facebook', delay: 600 },
  ];

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-900'
          : 'bg-gradient-to-br from-blue-50 via-white to-gray-50'
      }`}
      aria-label="Hero Section"
    >
      {/* Dynamic Background with Mouse Interaction */}
      <div className="absolute inset-0 will-change-transform will-change-opacity">
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
        <motion.div
          key={index}
          className="absolute cursor-pointer group opacity-25 hover:opacity-50 transition-all duration-500"
          style={{
            ...item.position,
            animationDelay: `${item.delay}ms`,
          }}
          whileHover={{ scale: 1.25, opacity: 1, rotate: 10 }}
          title={item.label}
          aria-label={item.label}
        >
          <div className="relative">
            <item.Icon
              className={`w-14 h-14 transition-all duration-500 ${
                isDarkMode ? 'text-blue-300 group-hover:text-blue-200' : 'text-blue-600 group-hover:text-blue-700'
              }`}
              aria-hidden="true"
            />
            <div
              className={`absolute inset-0 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-blue-600/30 to-indigo-600/30'
                  : 'bg-gradient-to-r from-blue-400/30 to-indigo-400/30'
              }`}
            ></div>
          </div>
        </motion.div>
      ))}

      {/* Geometric Shapes with Subtle Animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-16 right-16 w-8 h-8 rotate-45 animate-spin-slow opacity-35 ${
            isDarkMode
              ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600'
          }`}
          aria-hidden="true"
        ></div>
        <div
          className={`absolute bottom-24 left-12 w-10 h-10 border-2 rotate-45 animate-bounce-slow opacity-30 ${
            isDarkMode ? 'border-blue-400' : 'border-blue-600'
          }`}
          aria-hidden="true"
        ></div>
        <div
          className={`absolute top-1/4 right-1/4 w-5 h-5 rounded-full animate-ping opacity-25 ${
            isDarkMode
              ? 'bg-gradient-to-r from-indigo-500 to-blue-500'
              : 'bg-gradient-to-r from-indigo-600 to-blue-600'
          }`}
          aria-hidden="true"
        ></div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.5 }}
              className="order-2 lg:order-1"
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
                  <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden shadow-xl">
                    <div
                      className={`absolute inset-0 rounded-full animate-spin-slow ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600'
                          : 'bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500'
                      }`}
                      aria-hidden="true"
                    ></div>
                    <div
                      className={`absolute inset-2 rounded-full overflow-hidden group-hover:inset-1 transition-all duration-500 bg-white dark:bg-gray-900`}
                    >
                      <img
                        src={profileimg}
                        alt="Amit Baral"
                        loading="eager"
                        className="w-full h-full object-cover rounded-full transition-transform duration-700 ease-in-out transform scale-95 group-hover:scale-110"
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
                    aria-hidden="true"
                  ></div>
                  <div
                    className={`absolute bottom-12 left-6 w-2 h-2 rounded-full animate-ping delay-1000 opacity-35 ${
                      isDarkMode ? 'bg-indigo-400' : 'bg-indigo-600'
                    }`}
                    aria-hidden="true"
                  ></div>
                </div>

                {/* Status Indicator */}
                <div
                  className={`absolute top-4 right-4 flex items-center space-x-2 backdrop-blur-md rounded-full px-4 py-2 border transition-all duration-500 hover:scale-105 ${
                    isDarkMode
                      ? 'bg-gray-800/90 border-blue-500/50 text-blue-200'
                      : 'bg-white/90 border-blue-400/50 text-blue-700'
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">Available for Work</span>
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              {/* Animated Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`text-xl mb-6 font-semibold tracking-wide ${
                  isDarkMode ? 'text-blue-200' : 'text-blue-700'
                }`}
              >
                👋 Hello, I'm
              </motion.div>

              {/* Main Title */}
              <h1
                className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                <Typewriter
                  options={{
                    strings: ['Amit Baral'],
                    autoStart: true,
                    loop: true,
                    cursor: '',
                    delay: 100,
                    deleteSpeed: 75,
                    wrapperClassName: `inline-block bg-clip-text text-transparent bg-[length:300%_100%] animate-text-shimmer ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-300'
                        : 'bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800'
                    }`
                  }}
                />
              </h1>

              {/* Decorative Elements */}
              <div
                className={`relative w-40 h-1.5 mb-3 mx-auto lg:mx-0 rounded-full overflow-hidden ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500'
                    : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'
                }`}
              >
                <motion.div
                  className="h-1.5 rounded-full bg-white opacity-50"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>

              {/* Rotating Role with Typewriter */}
              <p
                className={`text-xl md:text-2xl mb-6 font-semibold bg-clip-text text-transparent bg-gradient-to-r ${
                  isDarkMode ? 'from-blue-200 via-indigo-200 to-purple-200' : 'from-blue-700 via-indigo-700 to-purple-700'
                }`}
              >
                <Typewriter
                  options={{
                    strings: ['Full Stack Engineer', 'Laravel Developer', 'Open Source Contributor'],
                    autoStart: true,
                    loop: true,
                    cursor: '|',
                    delay: 75,
                    deleteSpeed: 40,
                  }}
                />
              </p>

              {/* Description */}
              <p
                className={`text-lg md:text-xl mb-10 max-w-2xl leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Passionate full stack developer specializing in crafting robust web applications with modern technologies. 
                Focused on building scalable, user-centric solutions that deliver real business value through clean code and innovative approaches.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <button
                  onClick={() =>
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl transition-transform duration-300 transform shadow-2xl hover:scale-105 hover:shadow-blue-500/30 overflow-hidden"
                  aria-label="View My Work"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center text-lg">
                    View My Work
                    <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>

                <button
                  onClick={() =>
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className={`group px-8 py-4 bg-transparent border-2 font-semibold rounded-2xl transition-transform duration-300 transform hover:scale-105 relative overflow-hidden backdrop-blur-md ${
                    isDarkMode
                      ? 'border-blue-500/60 hover:border-blue-400 text-blue-200 hover:bg-blue-900/30 hover:text-blue-100'
                      : 'border-blue-600/60 hover:border-blue-700 text-blue-800 hover:bg-blue-100/30 hover:text-blue-900'
                  }`}
                  aria-label="Get In Touch"
                >
                  <div
                    className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                      isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100/30'
                    }`}
                  ></div>
                  <span className="relative z-10 flex items-center text-lg">
                    Get In Touch
                    <Mail className="ml-3 w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>

                <a
                  href={amitbaralcv}
                  download="Amit_Baral_CV.pdf"
                  className={`group px-8 py-4 font-semibold rounded-2xl transition-transform duration-300 transform hover:scale-105 shadow-xl ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-gray-800 to-slate-800 hover:from-gray-700 hover:to-slate-700 text-gray-300'
                      : 'bg-gradient-to-r from-gray-200 to-slate-300 hover:from-gray-300 hover:to-slate-400 text-gray-900'
                  }`}
                  aria-label="Download Resume"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </div>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center lg:justify-start space-x-8">
                {socialLinks.map(({ Icon, href, label, delay }, idx) => (
                  <motion.a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    aria-label={label}
                    className={`text-2xl transition-transform duration-300 hover:scale-125 ${
                      isDarkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-700'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: delay / 1000 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        aria-label="Scroll to About Section"
        onClick={scrollToNext}
        className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 rounded-full p-3 cursor-pointer transition-transform duration-500 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isDarkMode
            ? 'bg-blue-700 text-blue-100 focus:ring-blue-400'
            : 'bg-blue-300 text-blue-900 focus:ring-blue-700'
        }`}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown className="w-7 h-7" />
      </motion.button>

      {/* Bottom SVG Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-20 md:h-32"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill={isDarkMode ? '#0f172a' : '#f1f5f9'}
            d="M0,96L40,122.7C80,149,160,203,240,208C320,213,400,171,480,138.7C560,107,640,85,720,80C800,75,880,85,960,101.3C1040,117,1120,139,1200,160C1280,181,1360,203,1400,213.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;