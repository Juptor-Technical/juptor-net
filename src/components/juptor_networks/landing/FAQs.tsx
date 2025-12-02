import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import type { FAQ } from "../types";
const FAQs: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Does Juptor Network provide installation services?",
      answer:
        "Yes, Juptor Network offers professional installation services to ensure a seamless connection experience.",
    },
    {
      question: "How can I subscribe to Juptor Network services?",
      answer:
        "You can subscribe by contacting our sales team or filling out the subscription form on our website.",
    },
    {
      question:
        "How does fiber-optic internet differ from traditional broadband?",
      answer:
        "Fiber-optic internet uses light signals through glass fibers, providing faster speeds and more reliable connections than traditional copper-based broadband.",
    },
    {
      question: "What speeds does Fibernetics offer?",
      answer:
        "We offer speeds ranging from 10 Mbps to over 60 Mbps depending on your selected package.",
    },
    {
      question: "How do I check if Fibernetics is available in my area?",
      answer:
        "Use our availability checker above or contact our support team with your location details.",
    },
    {
      question: "Can I upgrade my internet package later?",
      answer:
        "Yes, you can upgrade your package at any time by contacting our customer support.",
    },
    {
      question: "What support does Juptor Network provide?",
      answer:
        "We provide 24/7 technical support, equipment maintenance, and professional IT consulting services.",
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="py-12 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked{" "}
            <span className="text-blue-600 dark:text-blue-400">Questions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about Juptor Networks
          </p>
        </motion.div>

        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
          {faqs.slice(0, 6).map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-5 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                <div className="grow">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:hidden space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-4 py-3 flex items-center justify-between text-left"
              >
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    expandedFaq === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {expandedFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 pb-4"
                >
                  <p className="text-gray-600 dark:text-gray-400 text-sm pl-8">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-xl p-8 lg:p-10 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-blue-100 mb-6">
                Our support team is here to help you 24/7. Contact us for
                personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Contact Support
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  View All FAQs
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;
