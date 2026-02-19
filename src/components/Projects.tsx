import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Calendar, Star, TrendingUp, Users, Award, Zap, Eye } from 'lucide-react';
import dacademe from '../assets/dacademe.png'; // Correct path for the image
import ecommerse from '../assets/ecommerse.png'; // Correct path for the image
import weather from '../assets/weather.png'; // Correct path for the image
import dashboard from '../assets/junkyard.png'; // Correct path for the image
import fintrack from '../assets/fintrack.png'; // Correct path for the image

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'FinTrack - Sustainability Dashboard',
      description:
        'FinTrack is a personal finance management platform that I designed and developed to help users track expenses, manage budgets, and gain better financial insights.',
      image: fintrack,
      technologies: [ 'Laravel', 'PHP',  'PostgreSQL', 'Git','Tailwind', 'Docker', 'Supabase'],
      liveUrl: 'https://fintrack.baralamit.com.np/',
      githubUrl: 'https://github.com/brlamit/D-Academe',
      year: '2026',
      status: 'Featured',
      category: 'Web App',
      stats: { users: '2.5K', rating: 4.8, growth: '+45%' },
      featured: true,
    },
    {
      title: 'D-ACADEME - Sustainability Dashboard',
      description:
        'D-Academe is a decentralized learning platform offering live classes, course purchases with Web3 tokens, and secure streaming via Livepeer Studio, ensuring an interactive and transparent educational experience.',
      image: dacademe,
      technologies: [ 'PHP', 'Web3.js', 'Livepeer', 'MySQL', 'Chart.js', 'Git'],
      liveUrl: '#',
      githubUrl: 'https://github.com/brlamit/D-Academe',
      year: '2024',
      status: 'Featured',
      category: 'Web App',
      stats: { users: '2.5K', rating: 4.8, growth: '+45%' },
      featured: true,
    },
    {
      title: 'D-Commerse Site - Project Management Tool',
      description:
        'D-Commerse Site is a decentralized commerce platform built using React and Solidity. It integrates with blockchain technology to provide a secure and efficient way to buy and sell items using a custom ERC20 token. The site includes features for managing a wallet, buying tokens, purchasing items, managing a cart, and displaying item specifications.',
      image: ecommerse,
      technologies: ['Ethereum', 'React.js', 'Solidity', 'Web3.js', 'Tailwind'],
      liveUrl: 'https://d-commerse-site.vercel.app/',
      githubUrl: 'https://github.com/brlamit/D-Commerse-Site',
      year: '2023',
      status: 'Featured',
      category: 'Web App',
      stats: { users: '1.8K', rating: 4.9, growth: '+62%' },
      featured: true,
    },
    {
      title: 'Weather - Mobile App',
      description:
        'Weather app providing real-time weather updates and forecasts. Built with React Native, it features location-based services, a user-friendly interface.',
      image: weather,
      technologies: ['React Native', 'Node.js', 'Express', 'Axios', 'Socket.IO'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2025',
      status: 'Popular',
      category: 'Community',
      stats: { users: '5.2K', rating: 4.7, growth: '+38%' },
      featured: false,
    },
    {
      title: 'JMS - Junkyard Management System',
      description:
        'Junkyard management system for tracking and managing junkyard inventory. Built with .Net, it features real-time inventory updates, user authentication, and a responsive design.',
      image: dashboard,
      technologies: ['.Net', 'MySQL', 'Git'],
      // liveUrl: '#',
      githubUrl: 'https://github.com/brlamit/JMS_Project',
      year: '2023',
      // status: 'Award Winner',
      category: 'Desktop App',
      stats: { users: '3.1K', rating: 4.6, growth: '+28%' },
      featured: false,
    },
    // {
    //   title: 'EduConnect - Online Learning Platform',
    //   description:
    //     'Comprehensive e-learning platform built with Laravel. Features video streaming, interactive quizzes, progress tracking, certificate generation, and payment integration for educational institutions.',
    //   image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   technologies: ['Laravel', 'Vue.js', 'MySQL', 'FFmpeg', 'Stripe'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   year: '2022',
    //   status: 'Enterprise',
    //   category: 'E-Learning',
    //   stats: { users: '12K', rating: 4.8, growth: '+85%' },
    //   featured: true,
    // },
    // {
    //   title: 'WeatherWise - Climate Analytics',
    //   description:
    //     'Advanced weather analytics platform providing detailed climate data and forecasting models. Built with Laravel backend and React frontend for researchers and meteorologists.',
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   technologies: ['Laravel', 'React', 'PostgreSQL', 'Chart.js', 'OpenWeather API'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   year: '2021',
    //   status: 'Research',
    //   category: 'Analytics',
    //   stats: { users: '850', rating: 4.9, growth: '+15%' },
    //   featured: false,
    // },
  ];

  const filters = ['All', 'Featured', 'Web App', 'SaaS', 'Mobile App', 'E-Learning', 'Community', 'Analytics'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : activeFilter === 'Featured'
    ? projects.filter((project) => project.featured)
    : projects.filter((project) => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'from-green-400 to-emerald-400';
      case 'Featured':
        return 'from-blue-400 to-cyan-400';
      case 'Popular':
        return 'from-purple-400 to-pink-400';
      case 'Award Winner':
        return 'from-yellow-400 to-orange-400';
      case 'Enterprise':
        return 'from-indigo-400 to-purple-400';
      case 'Research':
        return 'from-teal-400 to-green-400';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section
      id="projects"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800'
          : 'bg-gradient-to-br from-gray-50 via-blue-50/50 to-gray-50'
      }`}
      ref={sectionRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className={`absolute top-10 left-1/4 w-80 h-80 rounded-full blur-3xl animate-float ${
            isDarkMode ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20' : 'bg-gradient-to-r from-blue-200/30 to-indigo-200/30'
          }`}
        ></div>
        <div
          className={`absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float-delayed ${
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
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
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
            className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
                isDarkMode ? 'bg-gray-800/70 text-gray-200 border-gray-600/40' : 'bg-white/90 text-gray-700 border-gray-200/50'
              } hover:shadow-lg transition-shadow duration-300`}
            >
              <Award className="w-4 h-4 animate-pulse" />
              <span>Portfolio Showcase</span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-extrabold mb-6 tracking-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Featured{' '}
              <span
                className={`text-transparent bg-clip-text ${
                  isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                }`}
              >
                Projects
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
              A showcase of my recent Laravel projects, demonstrating expertise in full-stack development and problem-solving
            </p>
          </div>

          {/* Filter buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                    : isDarkMode
                    ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/40'
                    : 'bg-white/80 text-gray-700 hover:bg-gray-50 hover:text-gray-900 border border-gray-200/50'
                }`}
              >
                {filter}
                {filter === 'Featured' && <Star className="w-4 h-4 ml-2 inline-block animate-pulse" />}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group backdrop-blur-lg rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up relative border ${
                  isDarkMode ? 'bg-gray-800/40 border-gray-600/40' : 'bg-white/70 border-gray-200/50'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500 ${
                      isDarkMode
                        ? 'bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent'
                        : 'bg-gradient-to-t from-gray-900/60 via-gray-900/30 to-transparent'
                    }`}
                  ></div>
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20'
                        : 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20'
                    }`}
                  ></div>

                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(
                      project.status
                    )} shadow-md backdrop-blur-sm`}
                  >
                    {project.status}
                    {project.featured && <Star className="w-3 h-3 ml-1 inline-block animate-pulse" />}
                  </div>

                  <div
                    className={`absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}
                  >
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-md group/btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4 text-gray-600 group-hover/btn:text-gray-800" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-gray-700 hover:scale-110 transition-all duration-200 shadow-md group/btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  </div>

                  <div
                    className={`absolute bottom-4 left-4 right-4 transform transition-all duration-300 ${
                      hoveredProject === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    {/* <div
                      className={`flex justify-between items-center backdrop-blur-lg rounded-lg p-4 border ${
                        isDarkMode ? 'bg-gray-900/80 border-gray-600/40' : 'bg-white/80 border-gray-200/50'
                      }`}
                    >
                      <div className="flex items-center space-x-1 text-xs">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {project.stats.users}
                        </span>
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>users</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {project.stats.rating}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {project.stats.growth}
                        </span>
                      </div>
                    </div> */}
                  </div>

                  <div
                    className={`absolute bottom-4 right-4 flex items-center space-x-1 backdrop-blur-sm rounded-full px-3 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isDarkMode ? 'bg-gray-900/60 text-white' : 'bg-white/60 text-gray-900'
                    }`}
                  >
                    <Eye className="w-3 h-3" />
                    <span>{Math.floor(Math.random() * 1000) + 500}</span>
                  </div>
                </div>

                <div className="p-8 relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`text-xl font-bold group-hover:text-blue-500 transition-colors duration-300 tracking-tight ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <div
                      className={`flex items-center text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <p
                    className={`mb-6 leading-relaxed line-clamp-3 font-light group-hover:text-blue-500 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-all duration-200 animate-fade-in-up border ${
                          isDarkMode
                            ? 'bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-300 hover:from-blue-500/50 hover:to-indigo-500/50 hover:text-white border-gray-600/30'
                            : 'bg-gradient-to-r from-gray-100/80 to-gray-200/80 text-gray-700 hover:from-blue-200/80 hover:to-indigo-200/80 hover:text-blue-900 border-gray-300/30'
                        }`}
                        style={{ animationDelay: `${(index * 150) + (techIndex * 100)}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        isDarkMode ? 'text-gray-400 bg-gray-700/30' : 'text-gray-600 bg-gray-100'
                      }`}
                    >
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Active
                      </span>
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600'
                        : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA section */}
          <div
            className={`text-center transform transition-all duration-1000 ease-out delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div
              className={`rounded-3xl p-8 relative overflow-hidden border ${
                isDarkMode ? 'bg-gray-800/40 border-gray-600/40' : 'bg-white/70 border-gray-200/50'
              }`}
            >
              <div
                className={`absolute inset-0 opacity-10 animate-shimmer ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20'
                    : 'bg-gradient-to-r from-blue-400/20 to-indigo-400/20'
                }`}
              ></div>
              <div
                className={`absolute top-4 right-4 w-2 h-2 rounded-full animate-ping opacity-50 ${
                  isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                }`}
              ></div>
              <div
                className={`absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full animate-ping delay-1000 opacity-30 ${
                  isDarkMode ? 'bg-indigo-400' : 'bg-indigo-500'
                }`}
              ></div>

              <div className="relative z-10">
                <h3
                  className={`text-2xl font-bold mb-4 tracking-tight ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Want to see more of my Laravel work?
                </h3>
                <p
                  className={`mb-6 font-light ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  Check out my GitHub for more projects and contributions to the Laravel community
                </p>
                <a
                  href="https://github.com/brlamit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
                  aria-label="Visit my GitHub profile"
                >
                  <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  View All Projects on GitHub
                  <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;