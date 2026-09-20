import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  featured: boolean;
  url: string;
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    'All',
    'E-commerce',
    'Healthcare',
    'Social Impact',
    'Education',
    'Technology',
    'Food & Beverage'
  ];

  const projects: Project[] = [
    {
      id: 0,
      title: 'NexSense - Digital Marketing Agency',
      category: 'Technology',
      image: '/ns.jpg',
      description:
        'A modern digital marketing agency website designed to showcase performance marketing, lead generation, brand growth, and digital strategy services through a fast, conversion-focused user experience.',
      technologies: [
        'Next.js',
        'Tailwind CSS',
        'Vercel',
        'Framer Motion',
        'Web3Forms'
      ],
      featured: true,
      url: 'https://www.nexsensemarketing.com/'
    },

    {
      id: 1,
      title: 'Manodhairya Samsthan - NGO Website',
      category: 'Social Impact',
      image: '/manodhairya.png',
      description:
        'A purpose-driven NGO website developed to communicate social-impact initiatives, support visually impaired individuals, showcase achievements, improve donor engagement, and create a clear digital presence for community programs.',
      technologies: [
        'Responsive Web Design',
        'SEO',
        'Content Architecture',
        'Donation-Focused UX'
      ],
      featured: true,
      url: 'https://www.manodhairyasamsthan.com/'
    },

    {
      id: 2,
      title: 'Shri Radha Raman Store - eCommerce Platform',
      category: 'E-commerce',
      image: '/krishna.jpg',
      description:
        'A complete eCommerce website for devotional products, spiritual merchandise, puja essentials, and religious items, designed with secure payments, responsive shopping experiences, and streamlined product discovery.',
      technologies: [
        'Shopify',
        'Liquid',
        'JavaScript',
        'CSS',
        'Razorpay'
      ],
      featured: true,
      url: 'https://shop.shriradharaman.com/in'
    },

    {
      id: 3,
      title: 'SvastaCare - Healthcare Consultation Platform',
      category: 'Healthcare',
      image:
        'https://images.pexels.com/photos/6129054/pexels-photo-6129054.jpeg',
      description:
        'A responsive healthcare web platform created to simplify doctor consultations, appointment requests, patient communication, and access to healthcare services through a clean and user-friendly digital experience.',
      technologies: [
        'React',
        'Tailwind CSS',
        'Vercel',
        'Web3Forms'
      ],
      featured: true,
      url: 'https://svasthacare.in/'
    },

    {
      id: 4,
      title: 'The Indian Feast - Restaurant Website',
      category: 'Food & Beverage',
      image:
        'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
      description:
        'A modern restaurant website featuring digital menu presentation, reservation requests, online order enquiries, responsive design, and automated email communication to improve the customer experience.',
      technologies: [
        'React',
        'FormSubmit',
        'Tailwind CSS',
        'Bootstrap',
        'Vercel'
      ],
      featured: true,
      url: 'https://www.theindianfeast.co.uk/'
    },

    {
      id: 5,
      title: 'Scoops and Sips Desserts - Brand Website',
      category: 'Food & Beverage',
      image:
        'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg',
      description:
        'A visually engaging dessert brand website designed to showcase menus, products, offers, and contact information with a responsive interface and modern customer-focused design.',
      technologies: [
        'React',
        'Bootstrap',
        'Framer Motion',
        'Vercel',
        'FormSubmit'
      ],
      featured: true,
      url: 'https://www.scoopsandsipsdesserts.co.uk/'
    },

    {
      id: 6,
      title: 'Campicar - Car Rental Booking Platform',
      category: 'E-commerce',
      image:
        'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      description:
        'A custom car rental platform built for the French market with vehicle discovery, booking workflows, fleet management, online payments, location integration, and a seamless responsive user experience.',
      technologies: [
        'React',
        'Node.js',
        'MongoDB',
        'Stripe',
        'Google Maps API'
      ],
      featured: true,
      url: 'https://campicar.fr'
    },

    {
      id: 7,
      title: 'ArowMall - Multi-Vendor eCommerce Marketplace',
      category: 'E-commerce',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      description:
        'A scalable multi-vendor eCommerce marketplace supporting vendor management, online payments, inventory tracking, product management, and customer shopping workflows within a unified platform.',
      technologies: [
        'PHP',
        'Laravel',
        'MySQL',
        'PayPal',
        'Bootstrap'
      ],
      featured: true,
      url: 'https://arowmall.com'
    },

    {
      id: 8,
      title: 'Edulec - Online Education Platform',
      category: 'Education',
      image:
        'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg',
      description:
        'An interactive education platform developed for digital learning, course management, student progress tracking, communication, and modern online education experiences.',
      technologies: [
        'Vue.js',
        'Django',
        'PostgreSQL',
        'WebRTC',
        'AWS'
      ],
      featured: false,
      url: 'https://edulec.in'
    },

    {
      id: 9,
      title: 'SuperMaxTech - Technology Solutions Website',
      category: 'Technology',
      image:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      description:
        'A professional technology company website built to present IT services, business solutions, project expertise, client information, and digital capabilities through a modern responsive interface.',
      technologies: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'Framer Motion',
        'Vercel'
      ],
      featured: false,
      url: 'https://supermaxtech.com'
    }
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects.filter((project, index) => showAll || index < 6)
      : projects.filter(
        project => project.category === activeCategory
      );

  return (
    <section className="py-24 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />

      {/* Background Effects */}
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />

      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Portfolio Header */}
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
            duration: 0.8
          }}
          className="text-center mb-20"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="inline-block p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6"
          >
            <Eye className="w-6 h-6 text-purple-400" />
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 30
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
            className="text-4xl md:text-6xl font-bold mb-6"
          >

            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Web Development
            </span>

            <br />

            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects & Portfolio
            </span>

          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 30
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
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Explore PikFusion's web development portfolio,
            featuring eCommerce platforms, healthcare websites,
            NGO and social-impact projects, restaurant websites,
            educational platforms, digital marketing websites,
            and custom business solutions built for performance,
            usability, and growth.
          </motion.p>

        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
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
          className="flex flex-wrap justify-center mb-16 gap-4"
        >

          {categories.map(category => (

            <motion.button
              key={category}
              whileHover={{
                scale: 1.05,
                y: -2
              }}
              whileTap={{
                scale: 0.95
              }}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-7 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-purple-500/20 hover:border-purple-500/40'
                }`}
            >
              {category}
            </motion.button>

          ))}

        </motion.div>

        {/* Projects */}
        <AnimatePresence mode="wait">

          <motion.div
            key={`${activeCategory}-${showAll}`}
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{
              duration: 0.4
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >

            {filteredProjects.map(
              (project, index) => (

                <motion.article
                  key={project.id}
                  initial={{
                    opacity: 0,
                    y: 40
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08
                  }}
                  whileHover={{
                    y: -8
                  }}
                  className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border transition-all duration-500 ${project.featured
                    ? 'border-purple-500/40 hover:border-purple-500/60'
                    : 'border-purple-500/20 hover:border-purple-500/40'
                    }`}
                >

                  {/* Featured Tag */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold text-white shadow-lg">
                        FEATURED
                      </span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative overflow-hidden">

                    <img
                      src={project.image}
                      alt={`${project.title} - PikFusion web development project`}
                      loading="lazy"
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Image CTA */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">

                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          scale: 1.1
                        }}
                        whileTap={{
                          scale: 0.95
                        }}
                        className="p-4 bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/30 transition-colors duration-300 border border-white/20"
                        aria-label={`Visit ${project.title}`}
                        title={`Visit ${project.title}`}
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>

                    </div>

                  </div>

                  {/* Project Content */}
                  <div className="p-8">

                    <div className="flex items-start justify-between gap-3 mb-4">

                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 leading-snug">
                        {project.title}
                      </h3>

                      <span className="shrink-0 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                        {project.category}
                      </span>

                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-5">

                      {project.technologies.map(
                        (tech, techIndex) => (

                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/50 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/30 transition-all duration-300"
                          >
                            {tech}
                          </span>

                        )
                      )}

                    </div>

                    {/* Link */}
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        x: 5
                      }}
                      className="inline-flex items-center text-purple-400 font-medium hover:text-pink-400 transition-colors duration-300 text-sm"
                    >
                      <span>
                        View Live Project
                      </span>

                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.a>

                  </div>

                </motion.article>

              )
            )}

          </motion.div>

        </AnimatePresence>

        {/* View All */}
        {activeCategory === 'All' && !showAll && (

          <motion.div
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
            className="text-center mt-16"
          >

            <motion.button
              onClick={() =>
                setShowAll(true)
              }
              whileHover={{
                scale: 1.04,
                y: -3
              }}
              whileTap={{
                scale: 0.96
              }}
              className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Explore All Projects
            </motion.button>

          </motion.div>

        )}

      </div>

    </section>
  );
};

export default Portfolio;