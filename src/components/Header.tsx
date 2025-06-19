import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../public/logo_1.png';
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isKnowledgeBaseOpen, setIsKnowledgeBaseOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  const knowledgeBaseItems = [
    { name: 'Ecommerce Store', path: '/knowledge-base/ecommerce' },
    { name: 'Restaurant Management', path: '/knowledge-base/restaurant' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-gray-900/95 backdrop-blur-lg border-b border-purple-500/20 py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="mr-3 p-1"
            >
              <img
                src={logo}
                alt="PikFusion Logo"
                className="w-8 h-8 object-contain"
              />
            </motion.div>
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              PikFusion
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative py-2 transition-colors duration-300 hover:text-purple-400 ${location.pathname === item.path ? 'text-purple-400' : 'text-white'
                  }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                )}
              </Link>
            ))}

            {/* Knowledge Base Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => setIsKnowledgeBaseOpen(!isKnowledgeBaseOpen)}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-1 py-2 text-white hover:text-purple-400 transition-colors duration-300"
              >
                <span>Knowledge Base</span>
                <motion.div
                  animate={{ rotate: isKnowledgeBaseOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isKnowledgeBaseOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-lg rounded-xl border border-purple-500/20 shadow-xl overflow-hidden"
                  >
                    {knowledgeBaseItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsKnowledgeBaseOpen(false)}
                          className="block px-6 py-4 text-white hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300 border-b border-gray-800/50 last:border-b-0"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-purple-400 rounded-full" />
                            <span className="font-medium">{item.name}</span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Get Started
            </motion.button>
          </Link>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-gray-800/95 backdrop-blur-lg rounded-lg border border-purple-500/20 overflow-hidden"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="block py-3 px-4 text-white hover:text-purple-400 hover:bg-purple-500/10 transition-colors duration-300 border-b border-gray-700/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Knowledge Base */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <button
                  onClick={() => setIsKnowledgeBaseOpen(!isKnowledgeBaseOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 text-white hover:text-purple-400 hover:bg-purple-500/10 transition-colors duration-300 border-b border-gray-700/50"
                >
                  <span>Knowledge Base</span>
                  <motion.div
                    animate={{ rotate: isKnowledgeBaseOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isKnowledgeBaseOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-gray-900/50"
                    >
                      {knowledgeBaseItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={item.path}
                            className="block py-3 px-8 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-colors duration-300"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsKnowledgeBaseOpen(false);
                            }}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                              <span>{item.name}</span>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;