import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Star, CheckCircle, ArrowRight, MessageCircle, ThumbsUp, ThumbsDown } from 'lucide-react';

const RestaurantKnowledge: React.FC = () => {
  const features = [
    {
      title: 'Online Ordering & Delivery',
      desc: 'Enable customers to place orders for pickup or delivery with a seamless and intuitive ordering system.'
    },
    {
      title: 'Table Reservations',
      desc: 'Let customers book tables online, reducing wait times and optimizing restaurant seating management.'
    },
    {
      title: 'Menu Management',
      desc: 'Easily create, update, and manage digital menus with pricing, categories, and customization options.'
    },
    {
      title: 'Multi-Location Support',
      desc: 'Manage multiple restaurant locations from a single dashboard, each with its own menu, orders, and settings.'
    },
    {
      title: 'Order & Kitchen Management',
      desc: 'Streamline order processing with automated kitchen workflows, ensuring efficiency and reducing delays.'
    },
    {
      title: 'Flexible Payment Options',
      desc: 'Accept online payments, cash on delivery, and integrate with various payment gateways for a smooth checkout experience.'
    },
    {
      title: 'Loyalty & Promotions',
      desc: 'Increase customer retention with discount codes, loyalty programs, and promotional campaigns.'
    },
    {
      title: 'Delivery Zone & Fee Management',
      desc: 'Set up delivery zones with flexible pricing to optimize costs and improve service efficiency.'
    },
    {
      title: 'Customer Reviews & Feedback',
      desc: 'Allow customers to leave reviews and ratings, helping build trust and improve service quality.'
    },
    {
      title: 'Multilingual & Customizable',
      desc: 'Supports multiple languages and provides full customization to match branding needs.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full mb-6"
          >
            <UtensilsCrossed className="w-8 h-8 text-orange-400" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Restaurant Management Software
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Powerful Restaurant Management & Online Ordering System
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Article */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-orange-500/20 p-8 mb-8"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Our all-in-one restaurant management platform is designed to help food businesses streamline operations, boost customer engagement, and increase revenue. It provides a fully customizable online ordering system, allowing restaurants to manage orders, deliveries, and reservations effortlessly.
              </p>

              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Key Features:
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-orange-500/20 p-6 hover:border-orange-500/40 transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-orange-400 mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-500/30 mb-8"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  This platform is the perfect solution for restaurants, cloud kitchens, and food delivery businesses looking to scale operations and enhance customer experience.
                </p>
              </motion.div>
            </motion.div>

            {/* Demo Request */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl border border-orange-500/30 p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Want a free demo?</h3>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                I want a demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-orange-500/20 p-6 sticky top-24"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <UtensilsCrossed className="w-5 h-5 mr-2 text-orange-400" />
                Perfect For:
              </h3>
              <div className="space-y-4">
                {[
                  'Restaurants',
                  'Cloud Kitchens',
                  'Food Delivery Services',
                  'Cafes & Bistros',
                  'Fast Food Chains',
                  'Catering Services'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-orange-400 mb-4">Key Benefits:</h4>
                <div className="space-y-3">
                  {[
                    'Increase Revenue',
                    'Streamline Operations',
                    'Enhance Customer Experience',
                    'Reduce Manual Work',
                    'Scale Your Business'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-orange-500/20 p-8">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <p className="text-white font-medium">Did you find this article useful?</p>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center px-6 py-3 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 hover:bg-green-500/30 transition-all duration-300"
                >
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Yes
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center px-6 py-3 bg-red-500/20 text-red-400 rounded-full border border-red-500/30 hover:bg-red-500/30 transition-all duration-300"
                >
                  <ThumbsDown className="w-4 h-4 mr-2" />
                  No
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RestaurantKnowledge;