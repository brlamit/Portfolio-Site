import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? isDarkMode
            ? 'bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-md shadow-xl border-b border-gray-700/50'
            : 'bg-gradient-to-r from-white/95 to-gray-100/95 backdrop-blur-md shadow-xl border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className={`text-3xl font-extrabold tracking-tight transition-colors duration-300 transform hover:scale-105 ${
              isDarkMode ? 'text-blue-300' : 'text-blue-600'
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Amit Baral
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative font-semibold text-lg transition-all duration-300 group ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                  }`}
                ></span>
              </button>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 ${
                isDarkMode
                  ? 'bg-gray-800/50 text-yellow-300 hover:bg-gray-700/50'
                  : 'bg-gray-200/50 text-blue-600 hover:bg-gray-300/50'
              }`}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isDarkMode
                  ? 'bg-gray-800/50 text-yellow-300 hover:bg-gray-700/50'
                  : 'bg-gray-200/50 text-blue-600 hover:bg-gray-300/50'
              }`}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden absolute top-full left-0 w-full shadow-2xl border-t transition-all duration-300 transform ${
              isDarkMode
                ? 'bg-gradient-to-b from-gray-900 to-gray-800 border-gray-700/50'
                : 'bg-gradient-to-b from-white to-gray-100 border-gray-200/50'
            } animate-slideDown`}
          >
            <div className="py-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-8 py-4 font-semibold text-lg transition-all duration-300 transform hover:translate-x-2 ${
                    isDarkMode
                      ? 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/50'
                      : 'text-gray-800 hover:text-blue-600 hover:bg-gray-50/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Inline CSS for Animation */}
      <style >{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;