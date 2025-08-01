
import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '' });
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init('TQSFQCRdF50CNGhl4');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors = { name: '', email: '', subject: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    try {
      await emailjs.sendForm('service_bcevon8', 'template_0a7hxfk', formRef.current!, 'TQSFQCRdF50CNGhl4');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'baralamit881@gmail.com',
      link: 'mailto:baralamit881@gmail.com',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+977 9867647812',
      link: 'tel:+9779867647812',
      color: 'from-green-400 to-emerald-400',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Pokhara, Nepal',
      link: '#',
      color: 'from-purple-400 to-pink-400',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/brlamit',
      color: isDarkMode ? 'hover:text-gray-200' : 'hover:text-gray-700',
      bgColor: isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/brlamit',
      color: 'hover:text-blue-400',
      bgColor: isDarkMode ? 'hover:bg-blue-900/30' : 'hover:bg-blue-100/80',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://twitter.com/baralamit',
      color: 'hover:text-cyan-400',
      bgColor: isDarkMode ? 'hover:bg-cyan-900/30' : 'hover:bg-cyan-100/80',
    },
  ];

  const quickStats = [
    { label: 'Response Time', value: '< 24h', icon: <Clock className="w-5 h-5" /> },
    { label: 'Projects Completed', value: '5+', icon: <CheckCircle className="w-5 h-5" /> },
    // { label: 'Client Satisfaction', value: '100%', icon: <MessageCircle className="w-5 h-5" /> },
  ];

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800'
          : 'bg-gradient-to-br from-gray-50 via-blue-50/50 to-gray-50'
      }`}
      ref={sectionRef}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ zIndex: 0 }}>
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
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ zIndex: 0 }}>
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
              <MessageCircle className="w-4 h-4 animate-pulse" />
              <span>Let's Connect</span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-extrabold mb-6 tracking-tight ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Get In{' '}
              <span
                className={`text-transparent bg-clip-text ${
                  isDarkMode ? 'bg-gradient-to-r from-blue-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                }`}
              >
                Touch
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
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.
            </p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transform transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className={`backdrop-blur-lg rounded-xl p-6 text-center border hover:shadow-xl transition-all duration-300 group ${
                  isDarkMode ? 'bg-gray-800/40 border-gray-600/40 hover:bg-gray-700/50' : 'bg-white/70 border-gray-200/50 hover:bg-white/90'
                }`}
              >
                <div
                  className={`flex items-center justify-center mb-3 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300 ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                  } text-white`}
                >
                  {stat.icon}
                </div>
                <div
                  className={`text-2xl font-bold mb-1 group-hover:text-blue-500 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {stat.value}
                </div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div
              className={`transform transition-all duration-1000 ease-out delay-500 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <div
                className={`backdrop-blur-lg rounded-3xl p-8 border relative overflow-hidden group ${
                  isDarkMode ? 'bg-gray-800/40 border-gray-600/40' : 'bg-white/70 border-gray-200/50'
                }`}
                style={{ zIndex: 10 }}
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20'
                      : 'bg-gradient-to-r from-blue-100/50 to-indigo-100/50'
                  }`}
                  style={{ zIndex: 0 }}
                ></div>
                <h3
                  className={`text-2xl font-bold mb-6 flex items-center tracking-tight relative z-10 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  <Send className="w-6 h-6 mr-3 animate-pulse" />
                  Send Message
                </h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className={`block text-sm font-medium mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 focus:shadow-md ${
                          isDarkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                        } ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="Your name"
                        aria-required="true"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-medium mb-2 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 focus:shadow-md ${
                          isDarkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                        } ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="your@email.com"
                        aria-required="true"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className={`block text-sm font-medium mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 focus:shadow-md ${
                        isDarkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                        } ${errors.subject ? 'border-red-500' : ''}`}
                      placeholder="Project inquiry"
                      aria-required="true"
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none placeholder-gray-400 focus:shadow-md ${
                        isDarkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
                      } ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Tell me about your project..."
                      aria-required="true"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center shadow-md hover:shadow-xl ${
                      submitStatus === 'success'
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : submitStatus === 'error'
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white'
                    } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    aria-label={isSubmitting ? 'Sending message' : submitStatus === 'success' ? 'Message sent' : 'Send message'}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent!
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <div className="w-5 h-5 mr-2">✖</div>
                        Failed to Send
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
            <div
              className={`space-y-8 transform transition-all duration-1000 ease-out delay-700 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <div>
                <h3
                  className={`text-2xl font-bold mb-6 tracking-tight ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Contact Information
                </h3>
                <p
                  className={`mb-8 leading-relaxed font-light ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  Feel free to reach out through any of these channels. I typically respond within 24 hours and I'm always excited to discuss new opportunities.
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <a
                      href={info.link}
                      className={`flex items-start space-x-4 p-4 backdrop-blur-lg rounded-xl hover:shadow-xl transition-all duration-300 border ${
                        isDarkMode ? 'bg-gray-800/30 border-gray-600/30 hover:bg-gray-700/40' : 'bg-white/50 border-gray-200/30 hover:bg-white/80'
                      }`}
                      aria-label={`${info.title}: ${info.value}`}
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <h4
                          className={`font-semibold mb-1 group-hover:text-blue-500 transition-colors duration-300 ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {info.title}
                        </h4>
                        <span
                          className={`group-hover:text-blue-500 transition-colors duration-300 ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          {info.value}
                        </span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              <div
                className={`pt-8 border-t ${
                  isDarkMode ? 'border-gray-600/40' : 'border-gray-200/50'
                }`}
              >
                <h3
                  className={`font-semibold mb-4 tracking-tight ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg ${social.bgColor} transition-all duration-300 transform hover:scale-110 border ${
                        isDarkMode ? `bg-gray-800/50 text-gray-400 ${social.color} border-gray-600/40` : `bg-white/50 text-gray-600 ${social.color} border-gray-200/50`
                      }`}
                      aria-label={`Visit my ${social.name} profile`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;