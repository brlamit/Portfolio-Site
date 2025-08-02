import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp, Code, Coffee, Star } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/brlamit',
      color: isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/brlamit',
      color: isDarkMode ? 'hover:bg-blue-900/50' : 'hover:bg-blue-100'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:baralamit881@gmail.com',
      color: isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    // { icon: <Code className="w-4 h-4" />, label: "Projects", value: "5+" },
    // { icon: <Coffee className="w-4 h-4" />, label: "Coffee Cups", value: "∞" },
    // { icon: <Star className="w-4 h-4" />, label: "Rating", value: "4.9/5" }
  ];

  return (
    <footer className={`relative overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-10 left-1/4 w-64 h-64 rounded-full blur-3xl animate-float ${
          isDarkMode ? 'bg-blue-600' : 'bg-blue-200'
        }`}></div>
        <div className={`absolute bottom-10 right-1/4 w-48 h-48 rounded-full blur-3xl animate-float-delayed ${
          isDarkMode ? 'bg-indigo-600' : 'bg-indigo-200'
        }`}></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isDarkMode ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
              }`}>
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Amit Baral</h3>
            </div>
            <p className={`mb-6 leading-relaxed max-w-md ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Laravel Developer & Full Stack Engineer passionate about creating 
              digital solutions that make a difference.
            </p>
            
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className={`text-center p-3 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-600/30' 
                    : 'bg-white/80 border-gray-200/30'
                }`}>
                  <div className={`flex items-center justify-center mb-1 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.icon}
                  </div>
                  <div className={`text-sm font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{stat.value}</div>
                  <div className={`text-xs ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg ${social.color} transition-all duration-300 transform hover:scale-110 border ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-600/50' 
                      : 'bg-white/50 border-gray-200/50'
                  }`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 flex items-center ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <ArrowUp className="w-4 h-4 mr-2 rotate-45" />
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className={`block hover:text-blue-600 transition-colors duration-200 hover:translate-x-1 transform ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 flex items-center ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </h4>
            <div className={`space-y-3 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                Pokhara, Nepal
              </p>
              <p className="flex items-start">
                <span className="mr-2">✉️</span>
                baralamit881@gmail.com
              </p>
              <p className="flex items-start">
                <span className="mr-2">📱</span>
                +977 9867647812
              </p>
              {/* <p className="flex items-start">
                <span className="mr-2">💼</span>
                XAV Technology
              </p> */}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t mt-12 pt-8 ${
          isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* <div className={`flex items-center space-x-2 mb-4 md:mb-0 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-500" />
              <span>in Nepal</span>
            </div> */}
            
            <div className={`text-center md:text-left mb-4 md:mb-0 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <p>&copy; {currentYear} Amit Baral. All rights reserved.</p>
              <p className={`text-sm mt-1 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>Laravel Developer | Full Stack Engineer</p>
            </div>

            <button
              onClick={scrollToTop}
              className={`group p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
              } text-white`}
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className={`absolute bottom-4 left-4 w-4 h-4 rounded-full animate-ping opacity-50 ${
          isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
        }`}></div>
        <div className={`absolute top-4 right-4 w-3 h-3 rounded-full animate-ping delay-1000 opacity-30 ${
          isDarkMode ? 'bg-indigo-500' : 'bg-indigo-600'
        }`}></div>
      </div>
    </footer>
  );
};

export default Footer;