import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Zap, Users, Award, Coffee, Heart, Star, Sparkles, Target, Lightbulb, Server } from 'lucide-react';
import aboutimg from '../assets/img.jpg'; // Correct path for the image

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, experience: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const animateCounter = (key: keyof typeof counters, target: number) => {
            let current = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
            }, 25);
          };

          animateCounter('projects', 5);
          animateCounter('clients', 5);
          animateCounter('experience', 1);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    // {
    //   icon: <Code className="w-8 h-8" />,
    //   title: 'Laravel Development',
    //   description: 'Building robust, scalable web applications using Laravel framework with modern PHP practices and clean architecture',
    //   color: isDarkMode ? 'from-blue-500 to-indigo-500' : 'from-blue-600 to-indigo-600',
    //   bgPattern: isDarkMode ? 'bg-gray-900/30' : 'bg-blue-50/50',
    // },
    // {
    //   icon: <Database className="w-8 h-8" />,
    //   title: 'Database Design',
    //   description: 'Designing efficient database schemas and optimizing queries for high-performance applications',
    //   color: isDarkMode ? 'from-indigo-500 to-blue-500' : 'from-indigo-600 to-blue-600',
    //   bgPattern: isDarkMode ? 'bg-gray-800/30' : 'bg-indigo-50/50',
    // },
    // {
    //   icon: <Server className="w-8 h-8" />,
    //   title: 'API Development',
    //   description: 'Creating RESTful APIs and microservices that power modern web and mobile applications',
    //   color: isDarkMode ? 'from-blue-600 to-indigo-600' : 'from-blue-700 to-indigo-700',
    //   bgPattern: isDarkMode ? 'bg-gray-900/20' : 'bg-blue-100/50',
    // },
    // {
    //   icon: <Users className="w-8 h-8" />,
    //   title: 'Team Collaboration',
    //   description: 'Working effectively with cross-functional teams to deliver exceptional results on time',
    //   color: isDarkMode ? 'from-indigo-600 to-blue-600' : 'from-indigo-700 to-blue-700',
    //   bgPattern: isDarkMode ? 'bg-gray-800/20' : 'bg-indigo-100/50',
    // },
  ];

  const stats = [
    {
      icon: <Award className="w-7 h-7" />,
      label: 'Projects Completed',
      value: counters.projects,
      suffix: '+',
      color: isDarkMode ? 'from-blue-500 to-indigo-500' : 'from-blue-600 to-indigo-600',
    },
    {
      icon: <Heart className="w-7 h-7" />,
      label: 'Happy Clients',
      value: counters.clients,
      suffix: '+',
      color: isDarkMode ? 'from-indigo-500 to-blue-500' : 'from-indigo-600 to-blue-600',
    },
    {
      icon: <Coffee className="w-7 h-7" />,
      label: 'Years Experience',
      value: counters.experience,
      suffix: '',
      color: isDarkMode ? 'from-blue-600 to-indigo-600' : 'from-blue-700 to-indigo-700',
    },
    {
      icon: <Star className="w-7 h-7" />,
      label: 'Client Rating',
      value: 4.9,
      suffix: '/5',
      color: isDarkMode ? 'from-indigo-600 to-blue-600' : 'from-indigo-700 to-blue-700',
    },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results that exceed expectations and drive business value',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions to complex problems',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Quality First',
      description: 'Committed to excellence in every line of code and user experience',
    },
  ];

  return (
    <section
      id="about"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800'
          : 'bg-gradient-to-br from-gray-50 via-blue-50/50 to-gray-50'
      }`}
      ref={sectionRef}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className={`absolute top-10 left-10 w-96 h-96 rounded-full blur-3xl animate-float ${
            isDarkMode ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20' : 'bg-gradient-to-r from-blue-200/30 to-indigo-200/30'
          }`}
        ></div>
        <div
          className={`absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl animate-float-delayed ${
            isDarkMode ? 'bg-gradient-to-r from-indigo-500/20 to-blue-500/20' : 'bg-gradient-to-r from-indigo-200/30 to-blue-200/30'
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl animate-pulse-slow ${
            isDarkMode ? 'bg-gradient-to-r from-blue-600/15 to-indigo-600/15' : 'bg-gradient-to-r from-blue-300/20 to-indigo-300/20'
          }`}
        ></div>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float-particle ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
                isDarkMode ? 'bg-gray-800/70 text-gray-200 border-gray-600/30' : 'bg-white/90 text-gray-700 border-gray-200/50'
              } hover:shadow-lg transition-shadow duration-300`}
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Get to know me</span>
            </div>
            <h2
              className={`text-5xl md:text-6xl font-extrabold mb-6 tracking-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              About{' '}
              <span
                className={`text-transparent bg-clip-text ${
                  isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                }`}
              >
                Me
              </span>
            </h2>
            <div
              className={`w-24 h-1.5 mx-auto mb-8 rounded-full animate-expand-width ${
                isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
              }`}
            ></div>
            <p
              className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Passionate Laravel developer crafting robust web applications that empower businesses
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            {/* Profile Section with Image */}
            <div
              className={`relative transform transition-all duration-1000 ease-out delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <div className="relative group">
                {/* Main profile card */}
                <div
                  className={`backdrop-blur-lg rounded-3xl shadow-xl p-8 relative overflow-hidden border transition-all duration-300 hover:shadow-2xl ${
                    isDarkMode ? 'bg-gray-800/70 border-gray-600/40' : 'bg-white/90 border-gray-200/50'
                  }`}
                >
                  {/* Background pattern */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 ${
                      isDarkMode ? 'bg-gradient-to-br from-blue-600/30 to-indigo-600/30' : 'bg-gradient-to-br from-blue-200/40 to-indigo-200/40'
                    }`}
                  ></div>

                  <div className="relative z-10">
                    {/* Profile Image */}
                    <div className="w-44 h-44 mx-auto mb-6 relative">
                      <div
                        className={`absolute inset-0 rounded-3xl animate-spin-slow ${
                          isDarkMode ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                        }`}
                      ></div>
                      <div
                        className={`absolute inset-1 rounded-3xl overflow-hidden ${
                          isDarkMode ? 'bg-gray-900' : 'bg-white'
                        }`}
                      >
                        <img
                          src={aboutimg}
                          alt="Amit Baral - Laravel Developer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
                            isDarkMode ? 'bg-gradient-to-t from-gray-900/50 via-transparent to-blue-900/20' : 'bg-gradient-to-t from-white/50 via-transparent to-blue-100/20'
                          }`}
                        ></div>
                      </div>
                      {/* Status indicator */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-green-400 rounded-full flex items-center justify-center shadow-md animate-pulse">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>

                    <h3
                      className={`text-2xl font-bold mb-2 text-center tracking-tight ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Amit Baral
                    </h3>
                    <p
                      className={`font-semibold text-center mb-2 ${
                        isDarkMode ? 'text-blue-300' : 'text-blue-600'
                      }`}
                    >
                      Laravel Developer
                    </p>
                    {/* <p
                      className={`font-medium text-center mb-4 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      @ XAV Technology
                    </p> */}
                    <p
                      className={`text-center text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      📍 Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                {/* Floating elements */}
                <div
                  className={`absolute -top-4 -right-4 w-12 h-12 rounded-2xl animate-bounce-slow opacity-80 flex items-center justify-center ${
                    isDarkMode ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                  }`}
                >
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div
                  className={`absolute -bottom-4 -left-4 w-10 h-10 rounded-xl animate-bounce-slow delay-1000 opacity-80 flex items-center justify-center ${
                    isDarkMode ? 'bg-gradient-to-r from-indigo-500 to-blue-500' : 'bg-gradient-to-r from-indigo-600 to-blue-600'
                  }`}
                >
                  <Database className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ease-out delay-600 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <div>
                <h3
                  className={`text-3xl font-bold mb-6 relative tracking-tight ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Hello! I'm Amit Baral
                  <div
                    className={`absolute -bottom-2 left-0 w-20 h-1 rounded-full animate-expand-width delay-1000 ${
                      isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                    }`}
                  ></div>
                </h3>

                <div className="space-y-6">
                  <p
                    className={`text-lg leading-relaxed animate-fade-in-up delay-700 font-light ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    I'm a passionate Laravel developer {' '}
                    {/* <span
                      className={`font-semibold ${
                        isDarkMode ? 'text-blue-300' : 'text-blue-600'
                      }`}
                    >
                      XAV Technology
                    </span> */}
                     crafting scalable web applications that drive business success.  I specialize in modern PHP frameworks and innovative solutions.
                  </p>
                  <p
                    className={`text-lg leading-relaxed animate-fade-in-up delay-900 font-light ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    My journey began with a curiosity for web technologies and has grown into expertise in Laravel, database design, and API development. I’m dedicated to writing clean, maintainable code that solves real-world challenges and delivers exceptional user experiences.
                  </p>
                </div>
              </div>

              {/* Core values */}
              {/* <div className="grid grid-cols-1 gap-4">
                <h4
                  className={`text-xl font-bold mb-4 tracking-tight ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Core Values
                </h4>
                {values.map((value, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 backdrop-blur-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up border ${
                      isDarkMode ? 'bg-gray-800/40 border-gray-600/40' : 'bg-white/70 border-gray-200/40'
                    } hover:bg-opacity-80`}
                    style={{ animationDelay: `${1200 + index * 200}ms` }}
                  >
                    <div
                      className={`p-3 rounded-lg transition-transform duration-300 group-hover:scale-110 ${
                        isDarkMode
                          ? 'bg-gradient-to-r from-blue-600/50 to-indigo-600/50 text-blue-300'
                          : 'bg-gradient-to-r from-blue-100/80 to-indigo-100/80 text-blue-600'
                      }`}
                    >
                      {value.icon}
                    </div>
                    <div>
                      <h5
                        className={`font-semibold tracking-tight ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {value.title}
                      </h5>
                      <p
                        className={`text-sm font-light ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* Stats Section */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transform transition-all duration-1000 ease-out delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up border ${
                  isDarkMode ? 'bg-gray-800/40 border-gray-600/40' : 'bg-white/70 border-gray-200/40'
                } overflow-hidden`}
                style={{ animationDelay: `${1000 + index * 200}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
                <div className="relative z-10 text-center">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-105 transition-transform duration-300 shadow-md`}
                  >
                    {stat.icon}
                  </div>
                  <div
                    className={`text-3xl font-extrabold mb-2 tracking-tight ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`group relative backdrop-blur-lg p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up border ${
                  isDarkMode ? 'bg-gray-800/40 border-gray-600/40' : 'bg-white/70 border-gray-200/40'
                } overflow-hidden`}
                style={{ animationDelay: `${1400 + index * 200}ms` }}
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-300 ${item.bgPattern}`}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.color} text-white mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md`}
                  >
                    {item.icon}
                  </div>
                  <h4
                    className={`text-xl font-bold mb-4 tracking-tight group-hover:text-blue-500 transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`leading-relaxed font-light ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
                <div
                  className={`absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}
                ></div>
                <div className="absolute top-4 right-4 flex space-x-1">
                  <div
                    className={`w-1.5 h-1.5 rounded-full group-hover:bg-blue-400 transition-colors duration-300 ${
                      isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                  ></div>
                  <div
                    className={`w-1.5 h-1.5 rounded-full group-hover:bg-indigo-400 transition-colors duration-300 delay-100 ${
                      isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                  ></div>
                  <div
                    className={`w-1.5 h-1.5 rounded-full group-hover:bg-blue-300 transition-colors duration-300 delay-200 ${
                      isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;