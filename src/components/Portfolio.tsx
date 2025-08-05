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

  const categories = ['All', 'E-commerce', 'Education', 'Beauty & Wellness', 'Technology', 'Food & Beverage'];

  const projects: Project[] = [
    {

      id: 0,
      title: "House Of Soham",
      category: "Lifestyle & Fashion",
      image: "../public/hos.jpg",
      description: "House of Soham blends traditional Indian block printing with modern, sustainable design to create handcrafted fashion and home decor.",
      technologies: ["WordPress", "WooCommerce", "Figma", "HTML5", "CSS3"],
      featured: true,
      url: "https://houseofsoham.com/"
    },
    {
      id: 2,
      title: "NexSense - Digital Marketing Agency",
      category: "Technology",
      image: "../public/ns.jpg",
      description: "Performance marketing agency specializing in brand growth, lead generation, and strategic digital solutions.",
      technologies: ["Next.js", "Tailwind CSS", "Vercel", "Framer Motion", "Web3Forms"],
      featured: true,
      url: "https://www.nexsensemarketing.com/"
    },
    {
      id: 3,
      title: "Campicar - Car Rental Platform",
      category: "E-commerce",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
      description: "Modern car rental platform with advanced booking system, fleet management, and seamless user experience for French market",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Google Maps API"],
      featured: true,
      url: "https://campicar.fr"
    },
    {
      id: 4,
      title: "ArowMall - Multi-Vendor Marketplace",
      category: "E-commerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      description: "Comprehensive multi-vendor e-commerce marketplace with vendor management, payment processing, and inventory tracking",
      technologies: ["PHP", "Laravel", "MySQL", "PayPal", "Bootstrap"],
      featured: true,
      url: "https://arowmall.com"
    },
    {
      id: 5,
      title: "Edulec - Educational Platform",
      category: "Education",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
      description: "Interactive educational platform with course management, student tracking, and online learning tools for modern education",
      technologies: ["Vue.js", "Django", "PostgreSQL", "WebRTC", "AWS"],
      featured: false,
      url: "https://edulec.in"
    },
    // {
    //   id: 4,
    //   title: "Lullaby Beauty Salon",
    //   category: "Beauty & Wellness",
    //   image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
    //   description: "Elegant beauty salon website with appointment booking, service showcase, and customer management system",
    //   technologies: ["WordPress", "PHP", "MySQL", "jQuery", "CSS3"],
    //   featured: true,
    //   url: "https://lullabybeautysalon.com"
    // },
    {
      id: 6,
      title: "SuperMaxTech - Technology Solutions",
      category: "Technology",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      description: "Corporate technology solutions website showcasing services, portfolio, and client testimonials with modern design",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      featured: false,
      url: "https://supermaxtech.com"
    },
    {
      id: 7,
      title: "Panipuri Paradise - Online Ordering",
      category: "Food & Beverage",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      description: "Food ordering platform with menu management, real-time order tracking, and integrated payment system for restaurant chain",
      technologies: ["React Native", "Node.js", "Express", "MongoDB", "Razorpay"],
      featured: true,
      url: "https://order.panipuri-paradise.com"
    }
  ];
  const [showAll, setShowAll] = useState(false);


  const filteredProjects = activeCategory === 'All'
    ? projects.filter((project, index) => showAll || index < 6)
    : projects.filter(project => project.category === activeCategory);


  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />

      {/* Background Animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6"
          >
            <Eye className="w-6 h-6 text-purple-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Explore our successful projects showcasing innovative solutions across various industries,
            from e-commerce platforms to educational systems and beyond.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center mb-16 gap-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-purple-500/20 hover:border-purple-500/40'
                }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border transition-all duration-500 ${project.featured
                  ? 'border-purple-500/40 hover:border-purple-500/60'
                  : 'border-purple-500/20 hover:border-purple-500/40'
                  }`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xs font-bold text-white shadow-lg"
                    >
                      FEATURED
                    </motion.div>
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-white/20 backdrop-blur-lg rounded-full text-white hover:bg-white/30 transition-colors duration-300 border border-white/20"
                      title="Visit Website"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/50 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/30 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-purple-400 font-medium hover:text-pink-400 transition-colors duration-300 text-sm"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              View All Projects
            </motion.button>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;
