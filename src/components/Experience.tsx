import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Briefcase, Award, TrendingUp, Users, Code, GraduationCap } from 'lucide-react';

interface ExperienceProps {
  isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const experiences = [
    {
      title: 'Laravel Developer',
      company: 'XAV Technology',
      location: 'Pokhara, Nepal',
      duration: 'Feburary-2025 - September-2025',
      type: 'Full-time',
      description:
        'Currently developing robust web applications using Laravel framework, implementing RESTful APIs, and collaborating with cross-functional teams to deliver high-quality software solutions for diverse clients.',
      achievements: [
        'Building and maintaining Laravel applications serving thousands of users',
        'Implementing modern PHP practices and clean architecture patterns',
        'Developing RESTful APIs and integrating third-party services',
        'Collaborating with frontend developers and designers for seamless user experiences',
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'Vue.js', 'JavaScript', 'Git'],
      current: true,
    },
    // {
    //   title: 'Web Developer',
    //   company: 'Freelance Projects',
    //   location: 'Remote',
    //   duration: '2021 - 2022',
    //   type: 'Freelance',
    //   description:
    //     'Provided web development services to small businesses and startups. Specialized in Laravel development, custom PHP solutions, and responsive web design using modern technologies.',
    //   achievements: [
    //     'Completed 15+ freelance projects with excellent client satisfaction',
    //     'Built custom web applications and e-commerce solutions',
    //     'Established expertise in Laravel framework and PHP development',
    //     'Developed responsive designs and user-friendly interfaces',
    //   ],
    //   technologies: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    //   current: false,
    // },
    // {
    //   title: 'Junior Developer',
    //   company: 'Local Tech Company',
    //   location: 'Kathmandu, Nepal',
    //   duration: '2020 - 2021',
    //   type: 'Full-time',
    //   description:
    //     'Started career as a junior developer working on various web projects. Gained foundational experience in PHP, web development, and modern development practices while contributing to team projects.',
    //   achievements: [
    //     'Contributed to multiple web development projects',
    //     'Learned Laravel framework and modern PHP development',
    //     'Gained experience in database design and optimization',
    //     'Developed skills in version control and team collaboration',
    //   ],
    //   technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap'],
    //   current: false,
    // },
  ];

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: 'Pokhara University',
      location: 'Pokhara, Nepal',
      duration: '2021 - 2025',
      type: "Bachelor's Degree",
      description:
        'Comprehensive study of computer science fundamentals including programming, algorithms, data structures, database systems, and software engineering principles.',
      achievements: [
        'Graduated with distinction in Computer Science',
        'Specialized in web development and database systems',
        'Completed final year project on web application development',
        'Active participation in coding competitions and tech events',
      ],
      subjects: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Development', 'Software Engineering', 'Computer Networks'],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800'
          : 'bg-gradient-to-br from-gray-50 via-blue-50/50 to-gray-50'
      }`}
      ref={sectionRef}
    >
      {/* Background elements */}
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
          {/* Section Header */}
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
              <Briefcase className="w-4 h-4 animate-pulse" />
              <span>Career Journey</span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-extrabold mb-6 tracking-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Experience &{' '}
              <span
                className={`text-transparent bg-clip-text ${
                  isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                }`}
              >
                Education
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
              My journey through the tech industry, building expertise in Laravel and web development
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-20">
            <h3
              className={`text-3xl font-extrabold mb-12 text-center tracking-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Professional{' '}
              <span
                className={`text-transparent bg-clip-text ${
                  isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                }`}
              >
                Experience
              </span>
            </h3>

            <div className="relative">
              <div
                className={`absolute left-8 top-0 bottom-0 w-1 rounded-full hidden md:block ${
                  isDarkMode
                    ? 'bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-600'
                    : 'bg-gradient-to-b from-blue-600 via-indigo-600 to-blue-700'
                }`}
              ></div>

              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <div
                    key={index}
                    className={`relative transform transition-all duration-700 ease-out ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div
                      className={`absolute left-6 w-6 h-6 rounded-full hidden md:block transform translate-x-[-50%] shadow-md border-4 z-10 ${
                        experience.current
                          ? 'bg-gradient-to-r from-green-400 to-emerald-400 border-green-300 animate-pulse'
                          : isDarkMode
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-500 border-gray-800'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 border-white'
                      }`}
                    >
                      {experience.current && (
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-ping opacity-75"
                        ></div>
                      )}
                    </div>

                    <div
                      className={`md:ml-20 backdrop-blur-lg rounded-3xl shadow-md p-8 hover:shadow-xl transition-all duration-500 border relative overflow-hidden group ${
                        isDarkMode ? 'bg-gray-800/40 border-gray-600/40' : 'bg-white/70 border-gray-200/50'
                      }`}
                    >
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                          isDarkMode
                            ? 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20'
                            : 'bg-gradient-to-r from-blue-100/50 to-indigo-100/50'
                        }`}
                      ></div>

                      <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                          <div className="flex-1">
                            <h4
                              className={`text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300 tracking-tight ${
                                isDarkMode ? 'text-white' : 'text-gray-900'
                              }`}
                            >
                              {experience.title}
                              {experience.current && (
                                <span
                                  className="ml-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-400/20 text-green-400"
                                >
                                  Current
                                </span>
                              )}
                            </h4>
                            <div
                              className={`flex items-center font-semibold mb-2 ${
                                isDarkMode ? 'text-blue-300' : 'text-blue-600'
                              }`}
                            >
                              <Briefcase className="w-4 h-4 mr-2" />
                              {experience.company}
                            </div>
                          </div>

                          <div className="flex flex-col lg:text-right space-y-2">
                            <div
                              className={`flex items-center lg:justify-end ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}
                            >
                              <Calendar className="w-4 h-4 mr-2" />
                              {experience.duration}
                            </div>
                            <div
                              className={`flex items-center lg:justify-end ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}
                            >
                              <MapPin className="w-4 h-4 mr-2" />
                              {experience.location}
                            </div>
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-sm font-medium self-start lg:self-end border ${
                                isDarkMode
                                  ? 'bg-gradient-to-r from-blue-600/50 to-indigo-600/50 text-blue-300 border-blue-500/30'
                                  : 'bg-gradient-to-r from-blue-100/80 to-indigo-100/80 text-blue-600 border-blue-300/30'
                              }`}
                            >
                              {experience.type}
                            </span>
                          </div>
                        </div>

                        <p
                          className={`mb-6 leading-relaxed font-light group-hover:text-blue-500 transition-colors duration-300 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          {experience.description}
                        </p>

                        <div className="mb-6">
                          <h5
                            className={`font-semibold mb-3 flex items-center ${
                              isDarkMode ? 'text-blue-200' : 'text-blue-600'
                            }`}
                          >
                            <Code className="w-4 h-4 mr-2" />
                            Technologies Used:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-all duration-200 border ${
                                  isDarkMode
                                    ? 'bg-gradient-to-r from-gray-600/50 to-gray-500/50 text-gray-300 hover:from-blue-500/50 hover:to-indigo-500/50 hover:text-white border-gray-500/30'
                                    : 'bg-gradient-to-r from-gray-100/80 to-gray-200/80 text-gray-700 hover:from-blue-200/80 hover:to-indigo-200/80 hover:text-blue-900 border-gray-300/30'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5
                            className={`font-semibold mb-3 flex items-center ${
                              isDarkMode ? 'text-blue-200' : 'text-blue-600'
                            }`}
                          >
                            <Award className="w-4 h-4 mr-2" />
                            Key Achievements:
                          </h5>
                          <ul className="space-y-3">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start group/item">
                                <div
                                  className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 ${
                                    isDarkMode
                                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                                      : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                                  }`}
                                ></div>
                                <span
                                  className={`font-light group-hover/item:text-blue-500 transition-colors duration-300 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                  }`}
                                >
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
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
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h3
              className={`text-3xl font-extrabold mb-12 text-center tracking-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              <span
                className={`text-transparent bg-clip-text ${
                  isDarkMode ? 'bg-gradient-to-r from-green-400 to-emerald-400' : 'bg-gradient-to-r from-green-600 to-emerald-600'
                }`}
              >
                Education
              </span>
            </h3>

            <div className="relative">
              <div
                className={`absolute left-8 top-0 bottom-0 w-1 rounded-full hidden md:block ${
                  isDarkMode
                    ? 'bg-gradient-to-b from-green-500 via-emerald-500 to-green-600'
                    : 'bg-gradient-to-b from-green-600 via-emerald-600 to-green-700'
                }`}
              ></div>

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`relative transform transition-all duration-700 ease-out ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}
                    style={{ animationDelay: `${(experiences.length + index) * 150}ms` }}
                  >
                    <div
                      className={`absolute left-6 w-6 h-6 rounded-full hidden md:block transform translate-x-[-50%] shadow-md border-4 z-10 ${
                        isDarkMode
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-gray-800'
                          : 'bg-gradient-to-r from-green-600 to-emerald-600 border-white'
                      }`}
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-ping opacity-75"
                      ></div>
                    </div>

                    <div
                      className={`md:ml-20 backdrop-blur-lg rounded-3xl shadow-md p-8 hover:shadow-xl transition-all duration-500 border relative overflow-hidden group ${
                        isDarkMode ? 'bg-gray-800/40 border-gray-600/40' : 'bg-white/70 border-gray-200/50'
                      }`}
                    >
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                          isDarkMode
                            ? 'bg-gradient-to-r from-green-600/20 to-emerald-600/20'
                            : 'bg-gradient-to-r from-green-100/50 to-emerald-100/50'
                        }`}
                      ></div>

                      <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                          <div className="flex-1">
                            <h4
                              className={`text-xl md:text-2xl font-bold mb-2 group-hover:text-green-500 transition-colors duration-300 tracking-tight ${
                                isDarkMode ? 'text-white' : 'text-gray-900'
                              }`}
                            >
                              {edu.degree}
                            </h4>
                            <div
                              className={`flex items-center font-semibold mb-2 ${
                                isDarkMode ? 'text-green-300' : 'text-green-600'
                              }`}
                            >
                              <GraduationCap className="w-4 h-4 mr-2" />
                              {edu.institution}
                            </div>
                          </div>

                          <div className="flex flex-col lg:text-right space-y-2">
                            <div
                              className={`flex items-center lg:justify-end ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}
                            >
                              <Calendar className="w-4 h-4 mr-2" />
                              {edu.duration}
                            </div>
                            <div
                              className={`flex items-center lg:justify-end ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}
                            >
                              <MapPin className="w-4 h-4 mr-2" />
                              {edu.location}
                            </div>
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-sm font-medium self-start lg:self-end border ${
                                isDarkMode
                                  ? 'bg-gradient-to-r from-green-600/50 to-emerald-600/50 text-green-300 border-green-500/30'
                                  : 'bg-gradient-to-r from-green-100/80 to-emerald-100/80 text-green-600 border-green-300/30'
                              }`}
                            >
                              {edu.type}
                            </span>
                          </div>
                        </div>

                        <p
                          className={`mb-6 leading-relaxed font-light group-hover:text-green-500 transition-colors duration-300 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          {edu.description}
                        </p>

                        <div className="mb-6">
                          <h5
                            className={`font-semibold mb-3 flex items-center ${
                              isDarkMode ? 'text-green-200' : 'text-green-600'
                            }`}
                          >
                            <GraduationCap className="w-4 h-4 mr-2" />
                            Key Subjects:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.subjects.map((subject, subjectIndex) => (
                              <span
                                key={subjectIndex}
                                className={`px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-all duration-200 border ${
                                  isDarkMode
                                    ? 'bg-gradient-to-r from-green-600/50 to-emerald-500/50 text-green-300 hover:from-green-500/50 hover:to-emerald-400/50 hover:text-white border-green-500/30'
                                    : 'bg-gradient-to-r from-green-100/80 to-emerald-200/80 text-green-600 hover:from-green-200/80 hover:to-emerald-300/80 hover:text-green-900 border-green-300/30'
                                }`}
                              >
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5
                            className={`font-semibold mb-3 flex items-center ${
                              isDarkMode ? 'text-green-200' : 'text-green-600'
                            }`}
                          >
                            <Award className="w-4 h-4 mr-2" />
                            Academic Achievements:
                          </h5>
                          <ul className="space-y-3">
                            {edu.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start group/item">
                                <div
                                  className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 ${
                                    isDarkMode
                                      ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                                      : 'bg-gradient-to-r from-green-600 to-emerald-600'
                                  }`}
                                ></div>
                                <span
                                  className={`font-light group-hover/item:text-green-500 transition-colors duration-300 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                  }`}
                                >
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div
                        className={`absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                          isDarkMode
                            ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-green-600'
                            : 'bg-gradient-to-r from-green-600 via-emerald-600 to-green-700'
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
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
              <div className="relative z-10">
                <h3
                  className={`text-2xl font-bold mb-4 tracking-tight ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Ready to Work Together?
                </h3>
                <p
                  className={`mb-6 font-light ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  I'm always open to discussing new opportunities and exciting Laravel projects
                </p>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl"
                >
                  <span className="flex items-center">
                    Let's Connect
                    <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
