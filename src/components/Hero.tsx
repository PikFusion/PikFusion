import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: [-20, 20, -20] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-4 h-4 bg-purple-500 rounded-full opacity-60"
      />

      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 right-20 w-6 h-6 bg-pink-500 rounded-full opacity-40"
      />

      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-40 left-20 w-3 h-3 bg-blue-500 rounded-full opacity-50"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">

        {/* Top Icon */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}
          className="mb-6"
        >
          <motion.div
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="inline-block p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6"
          >
            <Zap className="w-8 h-8 text-purple-400" />
          </motion.div>
        </motion.div>

        {/* Small Brand Label */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7,
            delay: 0.1
          }}
          className="flex items-center justify-center gap-2 mb-5"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />

          <span className="text-purple-300 font-semibold tracking-wide">
            PikFusion Digital Solutions
          </span>

          <Sparkles className="w-5 h-5 text-pink-400" />
        </motion.div>

        {/* SEO Focused H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Build Better. Rank Higher.
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Grow Faster.
          </span>
        </motion.h1>

        {/* Keyword Rich Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 50
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          className="text-xl md:text-2xl text-gray-300 mb-5 max-w-5xl mx-auto leading-relaxed"
        >
          PikFusion is a web development and SEO company helping businesses
          build fast, scalable, search-optimized digital products that improve
          online visibility, customer experience, and long-term business growth.
        </motion.p>

        {/* Supporting Service Keywords */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.5
          }}
          className="text-base md:text-lg text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed"
        >
          From custom website development and SEO services to mobile apps,
          CRM solutions, SaaS platforms, eCommerce development, UI/UX design,
          digital marketing, and business automation — we create technology
          solutions designed around your business goals.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        >

          {/* Primary CTA */}
          <Link to="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                y: -5
              }}
              whileTap={{
                scale: 0.95
              }}
              className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg flex items-center space-x-3 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <span className="relative z-10">
                Discuss Your Project
              </span>

              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </motion.button>
          </Link>

          {/* Secondary CTA */}
          <Link to="/services">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -5
              }}
              whileTap={{
                scale: 0.95
              }}
              className="group px-10 py-5 border-2 border-purple-500/50 rounded-full text-white font-semibold text-lg flex items-center space-x-3 hover:bg-purple-500/10 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 backdrop-blur-sm"
            >
              <span>
                Explore Our Services
              </span>

              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;