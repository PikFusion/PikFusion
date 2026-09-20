import React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Star,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';

const EcommerceKnowledge: React.FC = () => {
  const features = [
    {
      title: 'Custom eCommerce Storefront',
      desc: 'Create a professional, responsive, and fully customizable online store designed around your brand, products, customer journey, and business requirements.'
    },
    {
      title: 'Product & Inventory Management',
      desc: 'Manage products, categories, pricing, stock levels, product variations, and availability through a centralized eCommerce management system.'
    },
    {
      title: 'Multi-Store eCommerce Management',
      desc: 'Operate multiple online stores from one management platform while maintaining independent products, branding, pricing, and business settings.'
    },
    {
      title: 'Advanced Order Management',
      desc: 'Manage customer orders, order statuses, invoices, refunds, fulfillment, and shipment tracking through an organized back-office workflow.'
    },
    {
      title: 'Payment Gateway Integration',
      desc: 'Integrate secure online payment options including compatible credit card, debit card, digital payment, bank transfer, and third-party payment gateways.'
    },
    {
      title: 'Shipping & Tax Configuration',
      desc: 'Configure shipping methods, delivery zones, carriers, shipping charges, and applicable tax rules according to your eCommerce business requirements.'
    },
    {
      title: 'SEO-Friendly eCommerce Platform',
      desc: 'Build search-optimized product and category pages with SEO-friendly structure, metadata support, indexing capabilities, and marketing tools to improve online visibility.'
    },
    {
      title: 'Customer Accounts & Loyalty',
      desc: 'Allow customers to create accounts, review order history, manage personal information, save products, and participate in loyalty or reward programs where configured.'
    },
    {
      title: 'Multi-Language & Multi-Currency',
      desc: 'Support international customers with multiple language and currency options, helping your online store serve broader markets.'
    },
    {
      title: 'Secure & Scalable Architecture',
      desc: 'Build your eCommerce platform with security-focused development practices and scalable architecture designed to support increasing products, customers, and transactions.'
    }
  ];

  const techStack = [
    {
      name: 'Frontend',
      tech: 'HTML, CSS, JavaScript'
    },
    {
      name: 'Backend',
      tech: 'PHP - Symfony Framework'
    },
    {
      name: 'Security & Network',
      tech: 'Cloudflare'
    }
  ];

  const included = [
    'Complete eCommerce store with source code',
    'Payment gateway integration',
    'Shipping module integration',
    'SSL certificate configuration',
    'Basic technical SEO and search engine indexing setup',
    'Product and store indexing configuration',
    '1 year technical support'
  ];

  const excluded = [
    'Domain registration',
    'Third-party hosting fees'
  ];

  const businessTypes = [
    'Retail Businesses',
    'D2C Brands',
    'Online Retailers',
    'Growing Startups',
    'Multi-Store Businesses',
    'Product-Based Companies'
  ];

  const benefits = [
    'Launch a Professional Online Store',
    'Manage Products Efficiently',
    'Accept Online Payments',
    'Improve Search Visibility',
    'Streamline Order Management',
    'Scale Your eCommerce Business'
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">

      <div className="container mx-auto px-4 md:px-8 py-16">

        {/* Header */}
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
          className="text-center mb-16"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.6
            }}
            className="inline-block p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6"
          >
            <ShoppingCart className="w-8 h-8 text-purple-400" />
          </motion.div>

          {/* SEO Focused H1 */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Custom eCommerce
            </span>

            <br />

            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Website Development
            </span>
          </motion.h1>

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
              duration: 0.6,
              delay: 0.2
            }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Build a secure, scalable, and SEO-friendly eCommerce platform
            with product management, online payments, order processing,
            shipping integration, customer accounts, multi-store support,
            and the tools required to manage and grow your online business.
          </motion.p>

        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Article */}
          <div className="lg:col-span-2">

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
                delay: 0.3
              }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-purple-500/20 p-8 mb-8"
            >

              {/* Introduction */}
              <section className="mb-10">

                <h2 className="text-3xl font-bold text-white mb-5">
                  Professional eCommerce Development for Growing Businesses
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed mb-5">
                  PikFusion provides custom eCommerce development solutions
                  for businesses looking to launch, manage, and scale
                  professional online stores. Our eCommerce platform combines
                  storefront design, product management, online payments,
                  order processing, shipping, customer management, and
                  SEO-ready architecture within one scalable solution.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether you are launching a new online store or building
                  a more advanced eCommerce operation, the platform can be
                  customized around your product catalog, brand identity,
                  customer experience, payment requirements, shipping model,
                  and business workflow.
                </p>

              </section>

              {/* Features */}
              <h2 className="text-3xl font-bold mb-7 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                eCommerce Platform Features
              </h2>

              <div className="space-y-7 mb-10">

                {features.map((feature, index) => (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -20
                    }}
                    animate={{
                      opacity: 1,
                      x: 0
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.07
                    }}
                    className="border-l-4 border-purple-500/50 pl-6"
                  >

                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {feature.desc}
                    </p>

                  </motion.div>

                ))}

              </div>

              {/* Additional SEO Content */}
              <div className="space-y-9">

                <section>

                  <h2 className="text-2xl font-bold text-white mb-4">
                    SEO-Friendly Online Store Development
                  </h2>

                  <p className="text-gray-300 leading-relaxed">
                    An eCommerce website needs more than an attractive
                    storefront. PikFusion builds online stores with a
                    search-friendly structure that supports product indexing,
                    category optimization, metadata, internal linking, and
                    technical SEO requirements to help search engines
                    discover and understand your store.
                  </p>

                </section>

                <section>

                  <h2 className="text-2xl font-bold text-white mb-4">
                    Product & Inventory Management
                  </h2>

                  <p className="text-gray-300 leading-relaxed">
                    Manage your product catalog from a centralized system.
                    Organize products into categories, update pricing,
                    maintain inventory, manage product availability, and
                    keep your online store information accurate as your
                    catalog grows.
                  </p>

                </section>

                <section>

                  <h2 className="text-2xl font-bold text-white mb-4">
                    eCommerce Payment Gateway Integration
                  </h2>

                  <p className="text-gray-300 leading-relaxed">
                    Provide customers with convenient online payment options
                    through compatible payment gateway integrations. The
                    platform can support payment workflows based on your
                    target market, business model, and checkout requirements.
                  </p>

                </section>

                <section>

                  <h2 className="text-2xl font-bold text-white mb-4">
                    Order, Shipping & Fulfillment Management
                  </h2>

                  <p className="text-gray-300 leading-relaxed">
                    Manage orders from purchase through fulfillment with
                    organized order statuses, shipment information, invoices,
                    refunds, and configurable shipping options. This creates
                    a smoother workflow for both store administrators and
                    customers.
                  </p>

                </section>

                <section>

                  <h2 className="text-2xl font-bold text-white mb-4">
                    Multi-Store eCommerce Solutions
                  </h2>

                  <p className="text-gray-300 leading-relaxed">
                    Businesses operating multiple brands or storefronts can
                    manage multiple stores through a centralized eCommerce
                    platform while maintaining store-specific products,
                    pricing, branding, and configuration.
                  </p>

                </section>

              </div>

              {/* Ownership Highlight */}
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
                  duration: 0.6,
                  delay: 0.8
                }}
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30 mt-10 mb-4"
              >

                <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-2" />
                  Own Your eCommerce Platform
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  The solution includes the complete eCommerce store source
                  code. This provides businesses with greater control over
                  their platform and reduces dependence on recurring
                  software subscription models for the core application.
                  Third-party infrastructure and services may still have
                  their own applicable charges.
                </p>

              </motion.div>

            </motion.div>

            {/* Demo CTA */}
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
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl border border-purple-500/30 p-8 text-center"
            >

              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Build Your Online Store?
              </h2>

              <p className="text-gray-300 max-w-2xl mx-auto mb-7 leading-relaxed">
                Discuss your products, payment requirements, shipping
                workflow, design preferences, and eCommerce business goals
                with PikFusion and explore a custom online store solution
                built around your requirements.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >

                <MessageCircle className="w-5 h-5 mr-2" />

                Request an eCommerce Demo

                <ArrowRight className="w-5 h-5 ml-2" />

              </motion.button>

            </motion.div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">

            {/* Designed For */}
            <motion.div
              initial={{
                opacity: 0,
                x: 50
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.35
              }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-purple-500/20 p-6"
            >

              <h3 className="text-xl font-bold text-white mb-5">
                Designed For
              </h3>

              <div className="space-y-3">

                {businessTypes.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center text-gray-300 text-sm"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0" />
                    {item}
                  </div>

                ))}

              </div>

            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{
                opacity: 0,
                x: 50
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.4
              }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl border border-purple-500/20 p-6"
            >

              <h3 className="text-xl font-bold text-purple-400 mb-5">
                Business Benefits
              </h3>

              <div className="space-y-3">

                {benefits.map((benefit, index) => (

                  <div
                    key={index}
                    className="flex items-start text-gray-300 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    {benefit}
                  </div>

                ))}

              </div>

            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{
                opacity: 0,
                x: 50
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.45
              }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-purple-500/20 p-6"
            >

              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                Technology Stack
              </h3>

              <div className="space-y-4">

                {techStack.map((item, index) => (

                  <div
                    key={index}
                    className="flex flex-col"
                  >
                    <span className="text-purple-400 font-medium">
                      {item.name}
                    </span>

                    <span className="text-gray-300 text-sm">
                      {item.tech}
                    </span>
                  </div>

                ))}

              </div>

            </motion.div>

            {/* Included */}
            <motion.div
              initial={{
                opacity: 0,
                x: 50
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.5
              }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl border border-green-500/20 p-6"
            >

              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                What's Included
              </h3>

              <ul className="space-y-3">

                {included.map((item, index) => (

                  <li
                    key={index}
                    className="flex items-start text-gray-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0" />

                    {item}
                  </li>

                ))}

              </ul>

            </motion.div>

            {/* Excluded */}
            <motion.div
              initial={{
                opacity: 0,
                x: 50
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.55
              }}
              className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl border border-red-500/20 p-6"
            >

              <h3 className="text-xl font-bold text-red-400 mb-4">
                Not Included
              </h3>

              <ul className="space-y-3">

                {excluded.map((item, index) => (

                  <li
                    key={index}
                    className="flex items-start text-gray-300 text-sm"
                  >
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
            delay: 0.7
          }}
          className="mt-16 text-center"
        >

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-purple-500/20 p-8">

            <h2 className="text-2xl font-bold text-white mb-4">
              Build a Scalable eCommerce Business with PikFusion
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              Our custom eCommerce development solution combines online
              store design, product management, secure payment integration,
              shipping configuration, SEO-ready architecture, and scalable
              technology to help businesses create professional digital
              commerce experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

              <p className="text-white font-medium">
                Was this eCommerce development guide helpful?
              </p>

              <div className="flex space-x-4">

                <motion.button
                  whileHover={{
                    scale: 1.1
                  }}
                  whileTap={{
                    scale: 0.9
                  }}
                  className="flex items-center px-6 py-3 bg-green-500/20 text-green-400 rounded-full border border-green-500/30 hover:bg-green-500/30 transition-all duration-300"
                >
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Yes
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.1
                  }}
                  whileTap={{
                    scale: 0.9
                  }}
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