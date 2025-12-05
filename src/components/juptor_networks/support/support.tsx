import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Clock,
  Shield,
  Wifi,
  Cpu,
  Users,
  Zap,
  Check,
  Phone,
  MessageSquare,
  Headphones,
  AlertTriangle,
  Server,
  Database,
  Lock,
  Globe,
  Home,
  Building,
  ArrowRight,
} from "lucide-react";

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const supportServices = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Technical Support",
      description: "Round-the-clock assistance for all your technical issues",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backup & Restoration",
      description:
        "Complete data backup and recovery solutions for all devices",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Solutions",
      description:
        "Firewall, VPN, intrusion detection, and antivirus protection",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Disaster Recovery",
      description:
        "Fault tolerance and disaster recovery for enterprise environments",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const otherServices = [
    {
      title: "Fibernetics",
      description:
        "High-speed fiber internet solutions for homes and businesses",
      icon: <Wifi className="w-6 h-6" />,
      link: "/fibernetics",
    },
    {
      title: "Surveillance",
      description: "Advanced security monitoring and CCTV systems",
      icon: <Shield className="w-6 h-6" />,
      link: "/surveillance",
    },
    {
      title: "Equipment & Accessories",
      description: "Top-quality IT equipment and accessories",
      icon: <Cpu className="w-6 h-6" />,
      link: "/equipment",
    },
    {
      title: "Professionalism",
      description:
        "Expert team handling IT supplies, repairs, and maintenances",
      icon: <Users className="w-6 h-6" />,
      link: "/professional",
    },
  ];

  const supportChannels = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Direct line to our expert technicians",
      availability: "24/7",
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Instant messaging with support agents",
      availability: "24/7",
      color: "bg-green-100 text-green-800",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Remote Assistance",
      description: "Secure remote desktop support",
      availability: "24/7",
      color: "bg-purple-100 text-purple-800",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-site Support",
      description: "Professional technicians at your location",
      availability: "Business Hours",
      color: "bg-orange-100 text-orange-800",
    },
  ];

  const useCases = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Home Users",
      description: "Personal device support and home network setup",
      issues: [
        "WiFi problems",
        "Device setup",
        "Software issues",
        "Virus removal",
      ],
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Businesses",
      description: "Enterprise-level support and network management",
      issues: [
        "Server maintenance",
        "Network security",
        "Data backup",
        "System updates",
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Institutions",
      description: "Dedicated support for schools, hospitals, and government",
      issues: [
        "System integration",
        "User training",
        "Compliance",
        "Emergency response",
      ],
    },
  ];

  const securityServices = [
    {
      title: "Firewall Protection",
      description: "Advanced firewall setup and management",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "VPN Setup",
      description: "Secure virtual private network configuration",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      title: "Intrusion Detection",
      description: "Real-time monitoring and threat detection",
      icon: <AlertTriangle className="w-6 h-6" />,
    },
    {
      title: "Antivirus Protection",
      description: "Installation, updates, and infection cleaning",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const responseTimes = [
    { level: "Critical", time: "15 minutes", color: "bg-red-100 text-red-800" },
    {
      level: "High",
      time: "30 minutes",
      color: "bg-orange-100 text-orange-800",
    },
    {
      level: "Medium",
      time: "2 hours",
      color: "bg-yellow-100 text-yellow-800",
    },
    { level: "Low", time: "4 hours", color: "bg-green-100 text-green-800" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 bg-linear-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-12 h-12 text-blue-400 mr-4" />
                <h1 className="text-3xl lg:text-5xl font-bold">
                  <span className="bg-linear-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    24/7 Support
                  </span>
                </h1>
              </div>
              <p className="text-2xl lg:text-3xl font-bold mb-4">
                We Fix, You Focus
              </p>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                We handle your technology challenges so you can concentrate on
                what truly matters. Whether you're working from home, running a
                business, or just need help with personal devices, our dedicated
                support team provides swift, reliable solutions tailored to your
                needs.
              </p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl mx-auto"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Here..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 pl-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-5 top-4 w-5 h-5 text-white/70" />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-2 top-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded-xl transition-all duration-200"
                  >
                    Search
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Tech Issues? Consider Them Solved with Juptor Networks' Expert
                Support Team!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                From minor glitches to major system failures, Our Tech Support
                has you covered. Our team of experienced professionals is ready
                to troubleshoot, diagnose, and resolve your technical challenges
                quickly and efficiently.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Whether it's network connectivity, software issues, hardware
                repairs, or IT security, we provide reliable solutions to keep
                your business and home running smoothly.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border-l-4 border-blue-500">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Perfect for</span> any
                  technical issues in businesses, homes, and institutions. No
                  stress, no downtime—just expert support when you need it most.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Our Support Services
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Provide 24/7 support service to enable smooth operations
                      of their businesses
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Backup / Restoration (for laptops, desktops & Servers)
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Fault Tolerance and Disaster Recovery Solutions (for
                      Enterprise & server-based environments)
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-green-300 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      Internet Access, Firewall, VPN and Intrusion Security
                      (Gateway Security)
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 24/7 Assistance Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white mb-16"
          >
            <div className="flex items-center mb-6">
              <Clock className="w-10 h-10 mr-4" />
              <h3 className="text-2xl lg:text-3xl font-bold">
                24/7 Assistance, Zero Downtime
              </h3>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              You can rely on us to keep your systems running smoothly around
              the clock. Our 24/7 assistance ensures that any technical issue
              you encounter—no matter the time or day—is resolved swiftly,
              minimizing disruptions and eliminating downtime.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                  <p className="text-blue-100 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Security Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Security & Protection
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Support Channels */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Multiple Support Channels
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                      {channel.icon}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${channel.color}`}
                    >
                      {channel.availability}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {channel.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {channel.description}
                  </p>
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                    Get Help →
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Response Times */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Guaranteed Response Times
            </h3>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {responseTimes.map((response, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div
                      className={`py-3 px-4 rounded-xl mb-2 ${response.color}`}
                    >
                      <div className="font-bold text-lg">{response.level}</div>
                    </div>
                    <div className="text-gray-900 dark:text-white font-semibold">
                      {response.time}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      Response Time
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
                *Response times are measured from initial contact to first
                response
              </div>
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Who We Support
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                      {useCase.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {useCase.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {useCase.issues.map((issue, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-600 dark:text-gray-400 text-sm"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                        {issue}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stay Connected Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 lg:p-12 text-white"
          >
            <div className="flex items-center mb-6">
              <Headphones className="w-10 h-10 mr-4" />
              <h3 className="text-2xl lg:text-3xl font-bold">
                Stay Connected, Stay Productive
              </h3>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              We understand that uninterrupted connectivity is key to
              productivity. Our team of skilled professionals is dedicated to
              providing fast, reliable solutions to keep your devices and
              systems running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Support Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Live Chat
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Other{" "}
              <span className="text-blue-600 dark:text-blue-400">Services</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of IT and network solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform duration-200">
                  <span>Blog →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kobe Steel Reference */}
      <section className="py-12 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Enterprise Grade Support
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Major Organizations
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our support services meet the highest industry standards, trusted
              by facilities like the Kobe Steel plant that supplied materials
              for major infrastructure projects worldwide.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support;
