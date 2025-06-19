import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Heart, Target, Lightbulb, Rocket, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "50+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
    { icon: <Award className="w-8 h-8" />, number: "70+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
    { icon: <Clock className="w-8 h-8" />, number: "2+", label: "Years Experience", color: "from-green-500 to-emerald-500" },
    { icon: <Heart className="w-8 h-8" />, number: "99%", label: "Client Satisfaction", color: "from-red-500 to-rose-500" }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission-Driven",
      description: "We're committed to delivering exceptional results that exceed expectations and drive business growth."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to stay ahead of industry trends."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Growth Focused",
      description: "Our strategies are designed to accelerate your business growth and market presence."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Quality",
      description: "We build lasting relationships through transparency, reliability, and uncompromising quality."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/20" />

      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/4 left-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6"
            >
              <Users className="w-6 h-6 text-purple-400" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                PikFusion
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              At PikFusion, we're passionate about transforming digital landscapes through innovative
              design and cutting-edge technology. Our team of creative professionals combines artistic
              vision with technical expertise to deliver solutions that not only meet but exceed expectations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              We believe in the power of collaboration, innovation, and attention to detail.
              Every project is an opportunity to push boundaries, challenge conventions, and
              create extraordinary digital experiences that drive business success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                We are proud to be an <span className="underline underline-offset-4">official partner of</span>{' '}
                <a
                  href="https://krispire.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline font-bold"
                >
                  Krispire
                </a>{' '}
                - a collaboration that empowers us to deliver even more innovative and scalable digital solutions.
              </p>
            </motion.div>

            <Link to="/contact">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Discover Our Story
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-purple-500/20 text-center group hover:border-purple-500/40 transition-all duration-500"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-block p-4 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 text-white group-hover:shadow-lg transition-all duration-300`}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            These principles guide everything we do and shape how we approach every project and client relationship.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
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