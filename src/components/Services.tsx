import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Code, 
  Smartphone, 
  Globe, 
  Zap, 
  Target,
  ArrowRight,
  Layers,
  TrendingUp,
  Shield
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -15, scale: 1.02 }}
      className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated background pattern */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
      />
      
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl inline-block mb-6 shadow-lg shadow-purple-500/25"
      >
        {icon}
      </motion.div>
      
      <h3 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="relative z-10 text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>
      
      <ul className="relative z-10 space-y-2 mb-6">
        {features.map((feature, featureIndex) => (
          <motion.li
            key={featureIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
            className="flex items-center text-gray-400 text-sm"
          >
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
            {feature}
          </motion.li>
        ))}
      </ul>
      
      <motion.div
        whileHover={{ x: 5 }}
        className="relative z-10 flex items-center text-purple-400 font-medium cursor-pointer group-hover:text-pink-400 transition-colors duration-300"
      >
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </motion.div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: "Creative Design",
      description: "Stunning visual designs that capture your brand essence and engage your audience with modern aesthetics.",
      features: ["UI/UX Design", "Brand Identity", "Visual Design", "Design Systems"]
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies, optimized for performance and scalability.",
      features: ["Frontend Development", "Backend Systems", "API Integration", "Performance Optimization"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile applications that deliver seamless functionality across all devices.",
      features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization"]
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that boost your online presence and drive meaningful engagement.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"]
    },
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      title: "Brand Strategy",
      description: "Comprehensive brand strategy and identity solutions that make your business stand out in the market.",
      features: ["Brand Positioning", "Logo Design", "Brand Guidelines", "Market Research"]
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Consulting & Support",
      description: "Expert consulting services to help you navigate digital transformation and achieve business objectives.",
      features: ["Technical Consulting", "Project Management", "24/7 Support", "Training & Documentation"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
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
            <TrendingUp className="w-6 h-6 text-purple-400" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            We offer comprehensive digital solutions designed to transform your business 
            and create exceptional experiences that drive growth and success.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;