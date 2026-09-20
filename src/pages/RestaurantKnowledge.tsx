import React from 'react';
import { motion } from 'framer-motion';
import {
  UtensilsCrossed,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';

const RestaurantKnowledge: React.FC = () => {
  const features = [
    {
      title: 'Online Ordering & Delivery Management',
      desc: 'Provide customers with a fast and convenient online ordering experience for pickup and delivery while managing incoming orders through a streamlined restaurant workflow.'
    },
    {
      title: 'Online Table Reservation System',
      desc: 'Allow customers to reserve tables online while helping restaurants organize bookings, reduce waiting times, and manage seating more efficiently.'
    },
    {
      title: 'Digital Menu Management',
      desc: 'Create, organize, and update restaurant menus with categories, pricing, product options, and availability from a centralized management system.'
    },
    {
      title: 'Multi-Location Restaurant Management',
      desc: 'Manage multiple restaurant branches from one platform while maintaining location-specific menus, orders, settings, and operational workflows.'
    },
    {
      title: 'Order & Kitchen Workflow Management',
      desc: 'Improve restaurant operations by organizing incoming orders and kitchen workflows, helping teams process orders efficiently and reduce unnecessary delays.'
    },
    {
      title: 'Flexible Online Payment Options',
      desc: 'Support online payments, cash on delivery, and compatible payment gateway integrations to provide customers with a smooth and flexible checkout experience.'
    },
    {
      title: 'Customer Loyalty & Promotions',
      desc: 'Strengthen customer retention with discount codes, promotional campaigns, loyalty offers, and targeted incentives for repeat customers.'
    },
    {
      title: 'Delivery Zone & Fee Management',
      desc: 'Configure restaurant delivery areas, service zones, and delivery charges to support efficient local food delivery operations.'
    },
    {
      title: 'Customer Reviews & Feedback',
      desc: 'Collect customer ratings and feedback to understand customer experiences, build trust, and identify opportunities to improve restaurant service quality.'
    },
    {
      title: 'Multilingual & Customizable Platform',
      desc: 'Customize the restaurant ordering platform to match your brand while supporting multiple languages for a more accessible customer experience.'
    }
  ];

  const businessTypes = [
    'Restaurants',
    'Cloud Kitchens',
    'Food Delivery Businesses',
    'Cafes & Bistros',
    'Fast Food Chains',
    'Multi-Location Restaurants',
    'Catering Businesses'
  ];

  const benefits = [
    'Simplify Restaurant Operations',
    'Improve Online Ordering Experience',
    'Reduce Manual Order Management',
    'Strengthen Customer Engagement',
    'Manage Multiple Locations Efficiently',
    'Support Business Growth'
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
            className="inline-block p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full mb-6"
          >
            <UtensilsCrossed className="w-8 h-8 text-orange-400" />
          </motion.div>

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
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Restaurant Management
            </span>

            <br />

            <span className="text-white">
              & Online Ordering Software
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
            A customizable restaurant management platform designed to
            simplify online ordering, table reservations, digital menu
            management, kitchen workflows, payments, delivery operations,
            and multi-location restaurant management from one integrated
            system.
          </motion.p>

        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Main Article */}
          <div className="lg:col-span-3">

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
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-orange-500/20 p-8 mb-8"
            >

              {/* Intro */}
              <div className="mb-10">

                <h2 className="text-3xl font-bold text-white mb-5">
                  All-in-One Restaurant Management Platform
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed mb-5">
                  PikFusion's restaurant management software is designed
                  for restaurants, cloud kitchens, cafes, food delivery
                  businesses, and multi-location food brands that want to
                  manage digital operations through a centralized platform.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  The platform combines online food ordering, restaurant
                  reservations, digital menu management, kitchen workflows,
                  delivery management, payment options, customer engagement,
                  and location management to create a smoother experience
                  for both restaurant teams and customers.
                </p>

              </div>

              {/* Features */}
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Restaurant Management Software Features
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

                {features.map((feature, index) => (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.07
                    }}
                    className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-orange-500/20 p-6 hover:border-orange-500/40 transition-all duration-300"
                  >

                    <h3 className="text-lg font-semibold text-orange-400 mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.desc}
                    </p>

                  </motion.div>

                ))}

              </div>

              {/* Additional SEO Content */}
              <div className="space-y-8">

                <section>

                  <h2 className="text-2xl font-bold text-white mb-4">
                    Online Ordering System for Restaurants
                  </h2>

                  <p className="text-gray-300 leading-relaxed">
                    Give customers a convenient way to browse your digital
                    menu and place pickup or delivery orders online. A
                    restaurant online ordering system helps businesses
                    create a direct digital ordering experience while
                    keeping menu, order, delivery, and customer workflows
                    organized.
                  </p>

                </section>

                <section>

                  <h2 className="text-2xl font-bold text-white mb-4">
                    Restaurant Reservation & Customer Experience
                  </h2>

                  <p className="text-gray-300 leading-relaxed">
                    Online table reservations make it easier for customers
                    to plan their visits and help restaurant teams organize
                    bookings more efficiently. Combined with customer
                    feedback, promotions, and loyalty features, the
                    platform supports a more connected restaurant customer
                    experience.
                  </p>

                </section>

                <section>

                  <h2 className="text-2xl font-bold text-white mb-4">
                    Multi-Location Restaurant Management
                  </h2>

                  <p className="text-gray-300 leading-relaxed">
                    Restaurant chains and growing food brands can manage
                    multiple locations through a centralized system while
                    maintaining individual menus, orders, delivery settings,
                    and operational requirements for each restaurant
                    location.
                  </p>

                </section>

                <section>

                  <h2 className="text-2xl font-bold text-white mb-4">
                    Restaurant Delivery Management
                  </h2>

                  <p className="text-gray-300 leading-relaxed">
                    Configure delivery areas and delivery charges based on
                    your restaurant's service requirements. Flexible
                    delivery zone management helps restaurants organize
                    local delivery operations while providing customers
                    with clearer ordering options.
                  </p>

                </section>

              </div>

              {/* Highlight Box */}
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
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-500/30 mt-10"
              >

                <h3 className="text-xl font-semibold text-white mb-3">
                  Built for Modern Food Businesses
                </h3>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether you operate a single restaurant, cloud kitchen,
                  cafe, food delivery business, or multiple restaurant
                  locations, the platform can be customized around your
                  menu, ordering process, delivery model, branding, and
                  operational requirements.
                </p>

              </motion.div>

            </motion.div>

            {/* Demo Request */}
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
              className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl border border-orange-500/30 p-8 text-center"
            >

              <h2 className="text-3xl font-bold text-white mb-4">
                Looking for Restaurant Management Software?
              </h2>

              <p className="text-gray-300 max-w-2xl mx-auto mb-7 leading-relaxed">
                Discuss your restaurant, cloud kitchen, online ordering,
                delivery, reservation, or multi-location management
                requirements with PikFusion and explore a solution tailored
                to your business.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >

                <MessageCircle className="w-5 h-5 mr-2" />

                Request a Restaurant Software Demo

                <ArrowRight className="w-5 h-5 ml-2" />

              </motion.button>

            </motion.div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">

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
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-orange-500/20 p-6 sticky top-24"
            >

              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <UtensilsCrossed className="w-5 h-5 mr-2 text-orange-400" />
                Designed For
              </h3>

              <div className="space-y-4">

                {businessTypes.map((item, index) => (

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
                      duration: 0.3,
                      delay: 0.5 + index * 0.08
                    }}
                    className="flex items-center text-gray-300"
                  >

                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0" />

                    <span className="text-sm">
                      {item}
                    </span>

                  </motion.div>

                ))}

              </div>

              {/* Benefits */}
              <div className="mt-8 pt-6 border-t border-gray-700">

                <h4 className="text-lg font-semibold text-orange-400 mb-4">
                  Business Benefits
                </h4>

                <div className="space-y-3">

                  {benefits.map((benefit, index) => (

                    <div
                      key={index}
                      className="flex items-start text-gray-300 text-sm"
                    >

                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />

                      <span>
                        {benefit}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* Keywords / Solutions */}
              <div className="mt-8 pt-6 border-t border-gray-700">

                <h4 className="text-lg font-semibold text-orange-400 mb-4">
                  Restaurant Solutions
                </h4>

                <div className="flex flex-wrap gap-2">

                  {[
                    'Online Ordering',
                    'Digital Menu',
                    'Reservations',
                    'Kitchen Management',
                    'Delivery Management',
                    'Multi-Location',
                    'Customer Loyalty'
                  ].map((item, index) => (

                    <span
                      key={index}
                      className="px-3 py-1.5 text-xs text-gray-300 bg-gray-800/70 border border-gray-700 rounded-full"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </div>

        {/* Feedback Section */}
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

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl border border-orange-500/20 p-8">

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

              <p className="text-white font-medium">
                Was this restaurant management software guide helpful?
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

export default RestaurantKnowledge;