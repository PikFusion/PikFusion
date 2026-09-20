import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ArrowUp
} from 'lucide-react';

import logo from '../public/logo_1.png';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: <Instagram size={20} />,
      href: 'https://www.instagram.com/pikfusion?igsh=MXIzYmMyOXNweXhyeA==',
      color: 'hover:bg-pink-600',
      label: 'PikFusion Instagram'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/pikfusion-digital-studio',
      color: 'hover:bg-blue-700',
      label: 'PikFusion LinkedIn'
    },
    {
      icon: <Facebook size={20} />,
      href: '#',
      color: 'hover:bg-blue-600',
      label: 'PikFusion Facebook'
    },
    {
      icon: <Twitter size={20} />,
      href: '#',
      color: 'hover:bg-sky-500',
      label: 'PikFusion Twitter'
    },
    {
      icon: <Github size={20} />,
      href: '#',
      color: 'hover:bg-gray-700',
      label: 'PikFusion GitHub'
    }
  ];

  const quickLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About PikFusion',
      path: '/about'
    },
    {
      name: 'Our Services',
      path: '/services'
    },
    {
      name: 'Web Development Portfolio',
      path: '/portfolio'
    },
    {
      name: 'Contact Us',
      path: '/contact'
    }
  ];

  const services = [
    {
      name: 'Web Development',
      path: '/services'
    },
    {
      name: 'SEO Services',
      path: '/services'
    },
    {
      name: 'Mobile App Development',
      path: '/services'
    },
    {
      name: 'UI/UX Design',
      path: '/services'
    },
    {
      name: 'Digital Marketing',
      path: '/services'
    },
    {
      name: 'Brand Strategy & Identity',
      path: '/services'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Information */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="lg:col-span-1"
          >

            <Link
              to="/"
              className="flex items-center mb-6"
              aria-label="PikFusion Web Development and SEO Company"
            >

              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5
                }}
                whileTap={{
                  scale: 0.95
                }}
                transition={{
                  duration: 0.3
                }}
                className="mr-3 p-1"
              >

                <img
                  src={logo}
                  alt="PikFusion Web Development and SEO Company"
                  className="w-9 h-9 object-contain"
                />

              </motion.div>

              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                PikFusion
              </span>

            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              PikFusion is a web development and SEO company delivering
              custom websites, mobile applications, UI/UX design, digital
              marketing, eCommerce solutions, and scalable digital products
              designed to improve online visibility and support business
              growth.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">

              {socialLinks.map((social, index) => (

                <motion.a
                  key={index}
                  href={social.href}
                  target={
                    social.href.startsWith('http')
                      ? '_blank'
                      : '_self'
                  }
                  rel={
                    social.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  whileHover={{
                    scale: 1.1,
                    y: -2
                  }}
                  whileTap={{
                    scale: 0.9
                  }}
                  className={`p-3 bg-gray-800 rounded-full ${social.color} transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40`}
                  title={social.label}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>

              ))}

            </div>

          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
          >

            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Explore PikFusion
            </h4>

            <ul className="space-y-3">

              {quickLinks.map((item, index) => (

                <motion.li
                  key={item.name}
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08
                  }}
                >

                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center group"
                  >

                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {item.name}

                  </Link>

                </motion.li>

              ))}

            </ul>

          </motion.div>

          {/* Services */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
          >

            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Services
            </h4>

            <ul className="space-y-3">

              {services.map((service, index) => (

                <motion.li
                  key={service.name}
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08
                  }}
                >

                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300"
                  >
                    {service.name}
                  </Link>

                </motion.li>

              ))}

            </ul>

          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.3
            }}
          >

            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Start Your Digital Project
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Looking for web development, SEO, mobile app development,
              UI/UX design, eCommerce development, or digital marketing
              services? Talk to the PikFusion team about your project.
            </p>

            <address className="not-italic text-gray-300 space-y-4">

              <div className="flex items-start">

                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0" />

                <p className="text-sm leading-relaxed">
                  <strong className="text-white">
                    PIKFUSION PRIVATE LIMITED
                  </strong>
                  <br />
                  Sy No 135/1,
                  <br />
                  Maruthi Industrial Estate,
                  <br />
                  Rajapalya, Hoody,
                  <br />
                  Bangalore, Karnataka – 560048
                </p>

              </div>

              <div className="flex items-start">

                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0" />

                <div className="text-sm">

                  <a
                    href="tel:+919494209449"
                    className="hover:text-purple-400 transition-colors"
                  >
                    +91 94942 09449
                  </a>

                  <br />

                  <a
                    href="tel:+918919531591"
                    className="hover:text-purple-400 transition-colors"
                  >
                    +91 89195 31591
                  </a>

                </div>

              </div>

              <div className="flex items-center">

                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 flex-shrink-0" />

                <a
                  href="mailto:admin@pikfusion.com"
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  admin@pikfusion.com
                </a>

              </div>

            </address>

            <Link to="/contact">

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Discuss Your Project
              </motion.button>

            </Link>

          </motion.div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 relative z-10">

        <div className="container mx-auto px-4 md:px-8 py-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-5">

            <motion.p
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              &copy; {new Date().getFullYear()} PikFusion Private Limited.
              All rights reserved.
            </motion.p>

            <div className="flex items-center space-x-6">

              <div className="flex space-x-4">

                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/terms-and-conditions"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300"
                >
                  Terms of Service
                </Link>

              </div>

              {/* Back To Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{
                  scale: 1.1,
                  y: -2
                }}
                whileTap={{
                  scale: 0.9
                }}
                aria-label="Back to top"
                title="Back to top"
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