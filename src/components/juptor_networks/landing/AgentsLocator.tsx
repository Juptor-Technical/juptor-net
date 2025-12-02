import React from "react";
import { motion } from "framer-motion";
import { Navigation, Phone, User, MapPin } from "lucide-react";
import type { Agent } from "../types";

interface AgentsLocatorProps {
  selectedArea: string;
}

const AgentsLocator: React.FC<AgentsLocatorProps> = ({ selectedArea }) => {
  const agents: Agent[] = [
    {
      id: 1,
      name: "David Ochieng",
      phone: "+256 772 123 456",
      area: "Banda",
      distance: "0.5km",
      rating: "4.8",
      coordinates: [0.3476, 32.5825],
    },
    {
      id: 2,
      name: "Sarah Nakato",
      phone: "+256 752 987 654",
      area: "Banda",
      distance: "1.2km",
      rating: "4.9",
      coordinates: [0.348, 32.583],
    },
    {
      id: 3,
      name: "Robert Musoke",
      phone: "+256 782 456 789",
      area: "Banda",
      distance: "0.8km",
      rating: "4.7",
      coordinates: [0.347, 32.581],
    },
    {
      id: 4,
      name: "Grace Atim",
      phone: "+256 712 345 678",
      area: "Kireka",
      distance: "0.3km",
      rating: "4.8",
      coordinates: [0.34, 32.59],
    },
    {
      id: 5,
      name: "John Okello",
      phone: "+256 762 234 567",
      area: "Kampala CBD",
      distance: "0.7km",
      rating: "4.9",
      coordinates: [0.3136, 32.5811],
    },
  ];

  const areaAgents = agents.filter((agent) => agent.area === selectedArea);

  if (areaAgents.length === 0) return null;

  const coordinates = areaAgents[0]?.coordinates || [0.3136, 32.5811];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
            Agents in {selectedArea}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Contact our certified agents for installation and support
          </p>
        </div>
        <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
          <Navigation className="w-4 h-4" />
          <span className="text-sm font-medium">
            {areaAgents.length} agents nearby
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full">
            <div className="h-64 lg:h-full relative">
              <iframe
                src={`https://maps.google.com/maps?q=${coordinates[0]},${coordinates[1]}&z=14&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Juptor Networks Agents in ${selectedArea}`}
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-900 rounded-lg px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Agents in {selectedArea}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {areaAgents.map((agent) => (
            <motion.div
              key={agent.id}
              whileHover={{ y: -2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <User className="w-5 h-5" />
                </div>
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {agent.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {agent.phone}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {agent.distance}
                      </div>
                      <div className="flex items-center text-yellow-500 text-xs">
                        ★ {agent.rating}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Now</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Navigate</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AgentsLocator;
