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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? isDarkMode
            ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-700'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-200'
          : 'bg-transparent'
      } animate-fadeIn`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => scrollToSection('#home')}
          className={`text-3xl font-extrabold cursor-pointer hover:scale-105 transition-transform duration-300 ${
            isDarkMode
              ? 'bg-gradient-to-r from-blue-400 via-gray-300 to-gray-400'
              : 'bg-gradient-to-r from-blue-600 via-gray-700 to-black'
          } bg-clip-text text-transparent hover:opacity-80`}
        >
          Amit Baral
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`group text-base font-medium transition duration-300 relative ${
                isDarkMode
                  ? 'text-white hover:text-blue-300'
                  : 'text-gray-800 hover:text-blue-600'
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 bottom-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600'
                }`}
              ></span>
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`ml-6 p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isDarkMode
                ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700'
                : 'bg-gray-200 text-blue-600 hover:bg-gray-300'
            }`}
            aria-label={isDarkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isDarkMode
                ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700'
                : 'bg-gray-200 text-blue-600 hover:bg-gray-300'
            }`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      {isMenuOpen && (
        <>
          <div
            className={`fixed top-0 right-0 h-full w-64 z-50 shadow-lg transition-transform duration-300 ${
              isDarkMode
                ? 'bg-gray-900 text-white border-l border-gray-700'
                : 'bg-white text-gray-900 border-l border-gray-200'
            }`}
          >
            <div className="pt-24 px-6 flex flex-col space-y-5">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left text-base font-medium py-2 px-3 rounded-md hover:translate-x-2 transition-all ${
                    isDarkMode
                      ? 'hover:bg-gray-800 hover:text-blue-300'
                      : 'hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          {/* Mobile Menu Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        </>
      )}

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
