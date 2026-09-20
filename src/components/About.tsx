import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Award,
  Clock,
  Heart,
  Target,
  Lightbulb,
  Rocket,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "50+",
      label: "Clients Served",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "70+",
      label: "Digital Projects Delivered",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "2+",
      label: "Years of Industry Experience",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: "99%",
      label: "Client Satisfaction",
      color: "from-red-500 to-rose-500"
    }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven Solutions",
      description:
        "We create digital solutions focused on measurable business outcomes, stronger online visibility, improved efficiency, and sustainable business growth."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Technology & Innovation",
      description:
        "We combine modern web technologies, scalable software architecture, automation, and creative problem-solving to build reliable digital products."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Built for Business Growth",
      description:
        "From high-performance websites and SEO strategies to CRM, SaaS, eCommerce, and business automation solutions, we build technology designed to scale."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality & Transparency",
      description:
        "We maintain clear communication, secure development practices, reliable delivery, and consistent quality throughout every stage of your project."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/20" />

      {/* Animated Background Element */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity
        }}
        className="absolute top-1/4 left-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
      />

      {/* Animated Background Element */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity
        }}
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">

          {/* Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
          >

            {/* Icon */}
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
              <Users className="w-6 h-6 text-purple-400" />
            </motion.div>

            {/* Heading */}
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
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Your Digital Growth
              </span>

              <br />

              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Partner — PikFusion
              </span>
            </motion.h2>

            {/* Paragraph 1 */}
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
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              PikFusion is a web development and digital solutions company
              helping businesses build fast, scalable, secure, and
              growth-focused digital products. We specialize in custom
              website development, web application development, CRM
              solutions, SaaS platforms, eCommerce development, UI/UX
              design, SEO services, digital marketing, and business
              automation.
            </motion.p>

            {/* Paragraph 2 */}
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
                delay: 0.4
              }}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              Our team combines modern technology, strategic planning,
              performance-focused development, search engine optimization,
              and user-centered design to create digital solutions that
              improve customer experiences, strengthen online visibility,
              streamline business operations, and support long-term growth.
            </motion.p>

            {/* Paragraph 3 */}
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
                delay: 0.5
              }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              Whether you need a professional business website, custom
              software solution, SEO strategy, CRM platform, SaaS product,
              eCommerce store, or digital transformation solution,
              PikFusion provides end-to-end technology services designed
              around your business goals.
            </motion.p>

            {/* Partnership */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
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
                delay: 0.6
              }}
              className="mb-8"
            >
              <p className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                PikFusion is proud to be an{' '}
                <span className="underline underline-offset-4">
                  official partner of
                </span>{' '}

                <a
                  href="https://krispire.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline font-bold"
                >
                  Krispire
                </a>

                , strengthening our ability to deliver scalable web
                development, software solutions, digital transformation,
                and business technology services.
              </p>
            </motion.div>

            {/* CTA */}
            <Link to="/contact">
              <motion.button
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
                  delay: 0.7
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Discuss Your Project
              </motion.button>
            </Link>

          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="grid grid-cols-2 gap-6"
          >

            {stats.map((stat, index) => (
              <motion.div
                key={index}
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
                  delay: index * 0.1
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10
                }}
                className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-purple-500/20 text-center group hover:border-purple-500/40 transition-all duration-500"
              >

                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{
                    duration: 0.5
                  }}
                  className={`inline-block p-4 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 text-white group-hover:shadow-lg transition-all duration-300`}
                >
                  {stat.icon}
                </motion.div>

                <motion.h3
                  className="text-4xl font-bold text-white mb-2"
                  initial={{
                    scale: 1
                  }}
                  whileInView={{
                    scale: [1, 1.1, 1]
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                >
                  {stat.number}
                </motion.h3>

                <p className="text-gray-300 font-medium">
                  {stat.label}
                </p>

              </motion.div>
            ))}

          </motion.div>
        </div>

        {/* Values Heading */}
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
          className="text-center mb-16"
        >

          <motion.h3
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
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              How We Build Better Digital Solutions
            </span>
          </motion.h3>

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
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Our approach combines technology, strategy, performance,
            innovation, and transparent collaboration to deliver reliable
            digital solutions for modern businesses.
          </motion.p>

        </motion.div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((value, index) => (
            <motion.div
              key={index}
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
                delay: index * 0.1
              }}
              whileHover={{
                y: -10,
                scale: 1.02
              }}
              className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 text-center group"
            >

              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{
                  duration: 0.5
                }}
                className="inline-block p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 text-white group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
              >
                {value.icon}
              </motion.div>

              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                {value.title}
              </h4>

              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;