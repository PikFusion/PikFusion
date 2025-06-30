import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Github, Zap, ArrowUp } from 'lucide-react';
import logo from '../public/logo_1.png';
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      icon: <Instagram size={20} />, 
      href: "https://www.instagram.com/pikfusion?igsh=MXIzYmMyOXNweXhyeA==", 
      color: "hover:bg-pink-600",
      label: "Instagram"
    },
    { 
      icon: <Linkedin size={20} />, 
      href: "https://www.linkedin.com/in/pikfusion-digital-studio", 
      color: "hover:bg-blue-700",
      label: "LinkedIn"
    },
    { 
      icon: <Facebook size={20} />, 
      href: "#", 
      color: "hover:bg-blue-600",
      label: "Facebook"
    },
    { 
      icon: <Twitter size={20} />, 
      href: "#", 
      color: "hover:bg-sky-500",
      label: "Twitter"
    },
    { 
      icon: <Github size={20} />, 
      href: "#", 
      color: "hover:bg-gray-700",
      label: "GitHub"
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: 'Web Development', path: '/services' },
    { name: 'Mobile Applications', path: '/services' },
    { name: 'UI/UX Design', path: '/services' },
    { name: 'Digital Marketing', path: '/services' },
    { name: 'Brand Strategy', path: '/services' },
    { name: 'Consulting', path: '/services' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
      />
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
           {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-6">
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
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                PikFusion
              </span>
            </div>

            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming digital landscapes through innovative design and cutting-edge technology. 
              We create extraordinary experiences that drive business success.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 bg-gray-800 rounded-full ${social.color} transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 group`}
                  title={social.label}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    {social.icon}
                  </motion.div>
                </motion.a>
              ))}
            </div>
            
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6"
            >
              <p className="text-sm text-gray-400 mb-2">Follow us for updates:</p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full text-xs text-pink-300 border border-pink-500/30">
                  @pikfusion
                </span>
              </div>
            </motion.div> */}
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link to={item.path}>
                    <motion.div
                      whileHover={{ x: 5, color: '#a855f7' }}
                      className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center group cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item.name}
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link to={service.path}>
                    <motion.div
                      whileHover={{ x: 5, color: '#a855f7' }}
                      className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer"
                    >
                      {service.name}
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h4>
            <address className="not-italic text-gray-300 space-y-3">
              <p className="flex items-start">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2" />
                PIKFUSION PRIVATE LIMITED <br />Sy No 135/1, <br />Maruthi industrial Estate, <br />Rajapalya, Hoody, Bangalore, <br />KA – 560048.
              </p>
              <p className="flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                +91 94942 09449 <br /> +91 89195 31591
              </p>
              <p className="flex items-center">
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                admin@pikfusion.com
              </p>
            </address>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              &copy; {new Date().getFullYear()} PikFusion. All rights reserved. Crafted with ❤️ for innovation.
            </motion.p>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ color: '#a855f7' }}
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ color: '#a855f7' }}
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
                >
                  Terms of Service
                </motion.a>
              </div>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
