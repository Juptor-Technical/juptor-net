import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface Service {
  id: string;
  name: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    id: "networks",
    name: "Juptor Networks",
    description: "Broadband & Enterprise Solutions",
    href: "/networks",
  },
  {
    id: "mobile",
    name: "Juptor Mobile",
    description: "Medical Ecommerce Platform",
    href: "/mobile",
  },
];

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [segmentsOpen, setSegmentsOpen] = useState(false);
  const segmentsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState<"left" | "right">(
    "left"
  );
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Calculate dropdown position based on available space
  useEffect(() => {
    const updateDropdownPosition = () => {
      if (buttonRef.current && window.innerWidth >= 768) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const dropdownWidth = 256; // w-64 = 256px

        // Check if dropdown would overflow on the right
        if (buttonRect.left + dropdownWidth > viewportWidth - 20) {
          setDropdownPosition("right");
        } else {
          setDropdownPosition("left");
        }
      }
    };

    if (segmentsOpen) {
      updateDropdownPosition();
      window.addEventListener("resize", updateDropdownPosition);
    }

    return () => {
      window.removeEventListener("resize", updateDropdownPosition);
    };
  }, [segmentsOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        segmentsRef.current &&
        !segmentsRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setSegmentsOpen(false);
      }
    };

    if (segmentsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scrolling when dropdown is open on mobile
      if (window.innerWidth < 768) {
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [segmentsOpen]);

  // Handle mobile menu open/close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    navigate(href);

    // Close menus
    setIsOpen(false);
    setSegmentsOpen(false);

    // Reset body overflow
    document.body.style.overflow = "auto";
  };

  const handleSegmentsToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSegmentsOpen(!segmentsOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="shrink-0 flex items-center cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="Juptor Logo"
                className="h-10 w-auto max-w-[180px] object-contain"
              />
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                {item.name}
              </motion.a>
            ))}

            {/* Segments Dropdown */}
            <div className="relative" ref={segmentsRef}>
              <motion.button
                ref={buttonRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -2 }}
                onClick={handleSegmentsToggle}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 whitespace-nowrap"
                aria-expanded={segmentsOpen}
                aria-haspopup="true"
              >
                Segments
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    segmentsOpen ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {segmentsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className={`absolute top-full w-64 bg-white dark:bg-gray-800 shadow-xl rounded-xl py-3 border border-gray-200 dark:border-gray-700 mt-2 z-50 ${
                      dropdownPosition === "right" ? "right-0" : "left-0"
                    }`}
                    style={{
                      maxHeight: "calc(100vh - 80px)",
                      overflowY: "auto",
                    }}
                  >
                    {services.map((service) => (
                      <motion.a
                        key={service.id}
                        whileHover={{ x: 5 }}
                        href={service.href}
                        onClick={(e) => handleLinkClick(e, service.href)}
                        className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      >
                        <div className="font-semibold">{service.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {service.description}
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <ThemeToggle
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-700 overflow-hidden"
              style={{ maxHeight: "calc(100vh - 64px)", overflowY: "auto" }}
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="block py-3 px-4 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}

                {/* Mobile Segments */}
                <div className="py-2 px-4">
                  <button
                    onClick={() => setSegmentsOpen(!segmentsOpen)}
                    className="flex items-center justify-between w-full py-3 text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                  >
                    <span>Segments</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        segmentsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {segmentsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-1 mt-2 ml-4">
                          {services.map((service) => (
                            <a
                              key={service.id}
                              href={service.href}
                              onClick={(e) => handleLinkClick(e, service.href)}
                              className="block py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                            >
                              <div className="font-medium">{service.name}</div>
                              <div className="text-sm mt-1 text-gray-500 dark:text-gray-400">
                                {service.description}
                              </div>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
