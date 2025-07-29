import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Server, Cloud, Smartphone, Globe, Zap, Cpu, Shield, Layers } from 'lucide-react';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delays
          setTimeout(() => {
            const skillElements = document.querySelectorAll('.skill-bar');
            skillElements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-skill-bar');
              }, index * 200);
            });
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: isDarkMode ? "from-blue-600 to-indigo-600" : "from-blue-700 to-indigo-700",
      bgColor: isDarkMode ? "bg-gray-800/50" : "bg-white/80",
      skills: [
        { name: "Laravel", level: 80, color: "bg-gradient-to-r from-red-500 to-orange-500" },
        { name: "PHP", level: 70, color: "bg-gradient-to-r from-purple-600 to-blue-600" },
        // { name: "Node.js", level: 85, color: "bg-gradient-to-r from-green-600 to-green-400" },
        { name: "MySQL", level: 85, color: "bg-gradient-to-r from-blue-600 to-blue-400" },
        // { name: "PostgreSQL", level: 82, color: "bg-gradient-to-r from-blue-700 to-blue-500" }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: isDarkMode ? "from-indigo-600 to-blue-600" : "from-indigo-700 to-blue-700",
      bgColor: isDarkMode ? "bg-gray-700/50" : "bg-blue-50",
      skills: [
        { name: "JavaScript", level: 50, color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
        { name: "React", level: 40, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
        { name: "Vue.js", level: 20, color: "bg-gradient-to-r from-green-500 to-emerald-500" },
        { name: "Tailwind CSS", level: 75, color: "bg-gradient-to-r from-teal-500 to-cyan-500" },
        { name: "Bootstrap", level: 80, color: "bg-gradient-to-r from-purple-500 to-blue-500" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Database className="w-6 h-6" />,
      color: isDarkMode ? "from-blue-700 to-indigo-700" : "from-blue-800 to-indigo-800",
      bgColor: isDarkMode ? "bg-gray-800/30" : "bg-indigo-50",
      skills: [
        { name: "Git", level: 92, color: "bg-gradient-to-r from-orange-600 to-red-500" },
        { name: "Postman", level: 65, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
        // { name: "Docker", level: 78, color: "bg-gradient-to-r from-blue-600 to-blue-400" },
        // { name: "AWS", level: 75, color: "bg-gradient-to-r from-yellow-600 to-orange-500" },
        // { name: "Redis", level: 80, color: "bg-gradient-to-r from-red-500 to-pink-500" },
        // { name: "Elasticsearch", level: 70, color: "bg-gradient-to-r from-yellow-500 to-green-500" }
      ]
    }
  ];

  const technologies = [
    { name: "Laravel", icon: "🔥", position: { top: "15%", left: "10%" } },
    { name: "PHP", icon: "🐘", position: { top: "25%", right: "15%" } },
    { name: "MySQL", icon: "🗄️", position: { top: "45%", left: "8%" } },
    { name: "JavaScript", icon: "⚡", position: { top: "65%", right: "12%" } },
    { name: "React", icon: "⚛️", position: { top: "35%", right: "25%" } },
    { name: "Vue.js", icon: "💚", position: { top: "55%", left: "20%" } },
    { name: "Docker", icon: "🐳", position: { top: "75%", right: "20%" } },
    { name: "AWS", icon: "☁️", position: { top: "20%", left: "25%" } },
  ];

  const expertiseAreas = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Database query optimization, caching strategies, and application performance tuning",
      color: isDarkMode ? "from-yellow-500 to-orange-500" : "from-yellow-600 to-orange-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Best Practices",
      description: "Implementing robust security measures, authentication, and data protection protocols",
      color: isDarkMode ? "from-green-500 to-emerald-500" : "from-green-600 to-emerald-600"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "System Architecture",
      description: "Designing scalable, maintainable system architectures and microservices",
      color: isDarkMode ? "from-blue-500 to-cyan-500" : "from-blue-600 to-cyan-600"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "API Development",
      description: "RESTful APIs, and real-time communication systems",
      color: isDarkMode ? "from-purple-500 to-pink-500" : "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section id="skills" className={`py-20 relative overflow-hidden transition-colors duration-300 ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
    }`} ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute top-10 left-1/4 w-64 h-64 rounded-full blur-3xl animate-float ${
          isDarkMode ? 'bg-blue-600' : 'bg-blue-200'
        }`}></div>
        <div className={`absolute bottom-10 right-1/4 w-80 h-80 rounded-full blur-3xl animate-float-delayed ${
          isDarkMode ? 'bg-indigo-600' : 'bg-indigo-200'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 w-48 h-48 rounded-full blur-3xl animate-pulse-slow ${
          isDarkMode ? 'bg-blue-700' : 'bg-blue-300'
        }`}></div>
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="absolute animate-float-tech opacity-20 hover:opacity-40 transition-opacity duration-300"
            style={{
              ...tech.position,
              animationDelay: `${index * 500}ms`
            }}
          >
            <div className="text-3xl filter drop-shadow-lg">{tech.icon}</div>
          </div>
        ))}
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className={`absolute top-20 right-20 w-8 h-8 border-2 rotate-45 animate-spin-slow ${
          isDarkMode ? 'border-blue-500' : 'border-blue-600'
        }`}></div>
        <div className={`absolute bottom-32 left-16 w-6 h-6 rotate-45 animate-bounce-slow ${
          isDarkMode ? 'bg-indigo-500' : 'bg-indigo-600'
        }`}></div>
        <div className={`absolute top-1/3 right-1/3 w-4 h-4 rounded-full animate-ping ${
          isDarkMode ? 'bg-blue-600' : 'bg-blue-700'
        }`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
              isDarkMode 
                ? 'bg-gray-800/50 text-gray-300 border-gray-600/50' 
                : 'bg-white/80 text-gray-600 border-gray-200/50'
            }`}>
              <Code className="w-4 h-4" />
              <span>Technical Expertise</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Skills & <span className={`text-transparent bg-clip-text ${
                isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-700 to-indigo-700'
              }`}>Expertise</span>
            </h2>
            <div className={`w-20 h-1 mx-auto mb-8 animate-expand-width ${
              isDarkMode ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
            }`}></div>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A comprehensive toolkit for building modern web applications with Laravel and cutting-edge technologies
            </p>
          </div>

          {/* Skill categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className={`group ${category.bgColor} backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up relative overflow-hidden border ${
                  isDarkMode ? 'border-gray-600/50' : 'border-gray-200/50'
                }`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
                onMouseEnter={() => setHoveredSkill(categoryIndex)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Category header */}
                <div className="flex items-center justify-center mb-8 relative z-10">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {category.icon}
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold mb-6 text-center group-hover:text-blue-600 transition-colors duration-300 relative z-10 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
                
                <div className="space-y-6 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between mb-3">
                        <span className={`font-medium group-hover:text-blue-600 transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm font-semibold ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className={`w-full rounded-full h-3 overflow-hidden ${
                          isDarkMode ? 'bg-gray-700/50' : 'bg-gray-200'
                        }`}>
                          <div 
                            className={`skill-bar h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                          >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                            {/* Pulsing glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse-gentle"></div>
                          </div>
                        </div>
                        
                        {/* Skill level indicator */}
                        <div 
                          className={`absolute top-0 w-4 h-4 rounded-full shadow-lg transform -translate-y-0.5 transition-all duration-1000 ease-out border-2 ${
                            isDarkMode ? 'bg-white border-gray-300' : 'bg-white border-gray-400'
                          }`}
                          style={{ left: isVisible ? `calc(${skill.level}% - 8px)` : '-8px' }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-75"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating particles */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-ping ${
                  isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                }`}></div>
                <div className={`absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full opacity-30 group-hover:opacity-80 transition-opacity duration-300 animate-ping delay-1000 ${
                  isDarkMode ? 'bg-indigo-400' : 'bg-indigo-600'
                }`}></div>
              </div>
            ))}
          </div>

          {/* Expertise areas */}
          <div className={`mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className={`text-3xl font-bold mb-12 text-center ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Areas of <span className={`text-transparent bg-clip-text ${
                isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-700 to-indigo-700'
              }`}>Expertise</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertiseAreas.map((area, index) => (
                <div 
                  key={index}
                  className={`group backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up relative overflow-hidden border ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-600/50' 
                      : 'bg-white/80 border-gray-200/50'
                  }`}
                  style={{ animationDelay: `${600 + index * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${area.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    {area.icon}
                  </div>
                  
                  <h4 className={`text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300 relative z-10 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {area.title}
                  </h4>
                  <p className={`text-sm leading-relaxed group-hover:text-blue-600 transition-colors duration-300 relative z-10 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {area.description}
                  </p>
                  
                  {/* Hover effect line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${area.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications section */}
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* <h3 className={`text-3xl font-bold mb-12 text-center ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Certifications & <span className={`text-transparent bg-clip-text ${
                isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-700 to-indigo-700'
              }`}>Achievements</span>
            </h3> */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                // { 
                //   name: "Laravel", 
                //   cert: "Certified Laravel Developer", 
                //   color: "from-red-500 to-orange-500", 
                //   icon: <Server className="w-8 h-8" />,
                //   badge: "Expert Level"
                // },
                // { 
                //   name: "AWS", 
                //   cert: "Cloud Practitioner", 
                //   color: "from-yellow-500 to-orange-500", 
                //   icon: <Cloud className="w-8 h-8" />,
                //   badge: "Certified"
                // },
                // { 
                //   name: "PHP", 
                //   cert: "Advanced PHP Developer", 
                //   color: "from-purple-500 to-blue-500", 
                //   icon: <Code className="w-8 h-8" />,
                //   badge: "Advanced"
                // }
              ].map((cert, index) => (
                <div 
                  key={index}
                  className={`group backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up relative overflow-hidden border ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-600/50' 
                      : 'bg-white/80 border-gray-200/50'
                  }`}
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {cert.badge}
                  </div>
                  
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${cert.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    {cert.icon}
                  </div>
                  
                  <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent relative z-10`}>
                    {cert.name}
                  </div>
                  <p className={`group-hover:text-blue-600 transition-colors duration-300 relative z-10 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {cert.cert}
                  </p>
                  
                  {/* Achievement indicator */}
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;