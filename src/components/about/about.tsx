import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Eye,
  Heart,
  ArrowRight,
  Check,
  Globe,
  Shield,
  Zap,
  MapPin,
  Star,
  Lightbulb,
  Rocket,
} from "lucide-react";

const AboutUs: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const coreValues = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Inclusivity",
      description: "Ensuring our solutions are accessible to everyone.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Accessibility",
      description: "Making technology available across communities.",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Dedication",
      description: "Committed to socio-economic development.",
    },
  ];

  const managementTeam = [
    {
      name: "Technology Director",
      role: "Digital Solutions & IT Management",
      expertise: "15+ years in enterprise technology",
    },
    {
      name: "Business Development",
      role: "B2B Enterprise Marketing",
      expertise: "Extensive market relations",
    },
    {
      name: "Operations Manager",
      role: "Regional Operations",
      expertise: "Multi-country business management",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Juptor
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 max-w-4xl mx-auto">
              A Digital Technology Company specializing in Networks, Visual and
              Mobile solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Connect{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Easily
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Juptor Innovations is a Digital Technology Company
                  specializing in Networks, Visual and Mobile. Incorporated in
                  Uganda and legally operates other branches in Tanzania, South
                  Sudan, and Rwanda.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Our operations are driven by commitment to quality, value
                  addition, fair prices and satisfaction to all our customers.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 flex items-center space-x-2"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl h-40 lg:h-48 overflow-hidden shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Juptor team collaboration"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl h-28 lg:h-32 overflow-hidden shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Technology infrastructure"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-3 pt-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl h-28 lg:h-32 overflow-hidden shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Digital solutions"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl h-40 lg:h-48 overflow-hidden shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Business meeting"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-12 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Our{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Foundation
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Built on strong principles that guide our innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400 flex-grow">
                To provide our customers with innovations that simplify lives
                through cutting-edge digital solutions.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-400 flex-grow">
                To empower communities through unique digital innovations that
                drive socio-economic development.
              </p>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Core Values
              </h3>
              <div className="space-y-3 flex-grow">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-gray-600 dark:text-gray-400 flex-shrink-0 mt-0.5">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Uganda Presence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">🇺🇬</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Proudly Serving Uganda
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Headquarters & Main Operations
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  As our home base, Uganda is where Juptor Innovations was
                  founded and continues to drive digital transformation across
                  the nation.
                </p>

                <div className="flex space-x-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      5+
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-xs">
                      Years Serving
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      100+
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-xs">
                      Ugandan Clients
                    </div>
                  </div>
                </div>
              </div>

              {/* Uganda Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src="https://www.safarisrwandasafari.com/wp-content/uploads/2020/01/Kampala-1.jpg"
                  alt="Kampala city skyline"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-12 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Management{" "}
                  <span className="text-blue-600 dark:text-blue-400">Team</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our management team has an excellent background in digital
                  solutions, IT management, and extensive business relations
                  across East Africa.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We understand the ICT business environment and are committed
                  to offering quality services.
                </p>
              </motion.div>

              {/* Team Highlights */}
              <motion.div variants={fadeInUp} className="space-y-3">
                {managementTeam.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                  >
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {member.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Team Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Leadership team meeting"
                  className="w-full h-48 lg:h-56 object-cover"
                />
              </motion.div>
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1551836026-d5c88ac5c73d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Team collaboration"
                    className="w-full h-24 lg:h-28 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Strategic planning"
                    className="w-full h-24 lg:h-28 object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Join businesses across East Africa that trust Juptor for digital
              transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200"
              >
                Contact Our Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-2 px-6 rounded-lg transition-all duration-200"
              >
                View Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
