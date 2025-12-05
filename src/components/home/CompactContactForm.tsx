import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Service {
  id: string;
  name: string;
}

const services: Service[] = [
  { id: "networks", name: "Juptor Networks" },
  { id: "mobile", name: "Juptor Mobile" },
];

const CompactContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      onSubmit={handleSubmit}
      className="w-full bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-xl"
    >
      <h3 className="text-xl font-bold text-white mb-4 text-center">
        Start Your Project
      </h3>

      <div className="space-y-3">
        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm text-sm"
            required
          >
            <option value="" className="text-gray-900">
              Select a Service
            </option>
            {services.map((service) => (
              <option
                key={service.id}
                value={service.id}
                className="text-gray-900"
              >
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm text-sm"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm text-sm"
          required
        />

        <textarea
          name="message"
          placeholder="Tell us about your project..."
          rows={2}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm text-sm resize-none"
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg text-sm"
        >
          <span>Get Started</span>
          <ArrowRight className="w-3 h-3" />
        </motion.button>
      </div>
    </motion.form>
  );
};

export default CompactContactForm;
