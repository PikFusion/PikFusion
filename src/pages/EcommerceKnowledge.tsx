import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, CheckCircle, ArrowRight, MessageCircle, ThumbsUp, ThumbsDown } from 'lucide-react';

const EcommerceKnowledge: React.FC = () => {
  const features = [
    'Customizable Storefront',
    'Product & Inventory Management',
    'Multi-Store Functionality',
    'Advanced Order Management',
    'Flexible Payment Options',
    'Shipping & Tax Configuration',
    'SEO & Marketing Tools',
    'Customer Accounts & Loyalty Programs',
    'Multi-Language & Multi-Currency Support',
    'Secure & Scalable'
  ];

  const techStack = [
    { name: 'Frontend', tech: 'HTML, CSS, Javascript' },
    { name: 'Backend', tech: 'PHP (Symfony Framework)' },
    { name: 'Network Security', tech: 'Cloudflare (cloudflare.com)' }
  ];

  const included = [
    'Full fledged e-commerce store with complete source code',
    'Payment gateway integration',
    'Shipping module integration',
    'SSL Certificate',
    'Basic SEO - Google site indexing (we will submit your website and all of its products to Google and other search engines like Yahoo!, Bing etc.)',
    '1 year technical support'
  ];

  const excluded = [
    'Domain registration',
    'Hosting fees (~ ₹3000 per year but we can provide coupon codes for additional discount)'
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
            className="inline-block p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6"
          >
            <ShoppingCart className="w-8 h-8 text-purple-400" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ecommerce Store
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Feature-Rich E-Commerce Platform for Scalable Online Stores
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-purple-500/20 p-8 mb-8"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Our powerful e-commerce platform is designed to help businesses create, manage, and scale their online stores with ease. It offers a comprehensive set of tools for product management, customer engagement, and seamless transactions, making it an ideal solution for businesses of all sizes.
              </p>

              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Key Features:
              </h2>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Customizable Storefront',
                    desc: 'Build a fully personalized online store with a wide range of themes, design options, and customization tools to match your brand identity.'
                  },
                  {
                    title: 'Product & Inventory Management',
                    desc: 'Easily add, edit, and categorize unlimited products, manage stock levels, and automate inventory tracking to avoid overselling.'
                  },
                  {
                    title: 'Multi-Store Functionality',
                    desc: 'Manage multiple stores from a single admin panel, each with unique products, branding, and pricing strategies.'
                  },
                  {
                    title: 'Advanced Order Management',
                    desc: 'Process orders efficiently, handle refunds, track shipments, and manage invoices with an intuitive back-office system.'
                  },
                  {
                    title: 'Flexible Payment Options',
                    desc: 'Integrate with various payment gateways, including credit/debit cards, PayPal, bank transfers, and more for secure transactions.'
                  },
                  {
                    title: 'Shipping & Tax Configuration',
                    desc: 'Set up shipping zones, carriers, and automated tax calculations based on customer location.'
                  },
                  {
                    title: 'SEO & Marketing Tools',
                    desc: 'Optimize product pages for search engines, run promotions, create discount codes, and engage customers with email marketing campaigns.'
                  },
                  {
                    title: 'Customer Accounts & Loyalty Programs',
                    desc: 'Allow customers to create accounts, track their orders, save wishlists, and participate in reward programs (paid plugin) to enhance retention.'
                  },
                  {
                    title: 'Multi-Language & Multi-Currency Support',
                    desc: 'Sell globally with built-in translation tools and automatic currency conversion for international customers.'
                  },
                  {
                    title: 'Secure & Scalable',
                    desc: 'Built with security best practices, this platform offers robust protection against fraud and supports business growth with scalable features.'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="border-l-4 border-purple-500/50 pl-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30 mb-8"
              >
                <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-2" />
                  No Monthly Subscription Fees
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Unlike other service providers, we don't charge any subscriptions fees. If you have paid for the software, you should own it completely! No hidden fees, no subscription fees.
                </p>
              </motion.div>
            </motion.div>

            {/* Demo Request */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl border border-purple-500/30 p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Want a free demo?</h3>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                I want a demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-purple-500/20 p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                Tech Stack:
              </h3>
              <div className="space-y-3">
                {techStack.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-purple-400 font-medium">{item.name}</span>
                    <span className="text-gray-300 text-sm">{item.tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Included */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl border border-green-500/20 p-6"
            >
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Included:
              </h3>
              <ul className="space-y-2">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Excluded */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl border border-red-500/20 p-6"
            >
              <h3 className="text-xl font-bold text-red-400 mb-4">Excluded:</h3>
              <ul className="space-y-2">
                {excluded.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
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
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-purple-500/20 p-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Our all-in-one e-commerce solution empowers businesses to create professional online stores with minimal effort while ensuring a smooth shopping experience for customers.
            </p>
            
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

export default EcommerceKnowledge;