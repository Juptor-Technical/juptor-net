import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";
import type { Area } from "../types";
import AgentsLocator from "./AgentsLocator";

const AvailabilityChecker: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState("Banda");
  const [searchInput, setSearchInput] = useState("");

  const allAreas: Area[] = [
    {
      name: "Banda",
      available: true,
      coordinates: [0.3476, 32.5825],
      agents: 3,
    },
    { name: "Kireka", available: true, coordinates: [0.34, 32.59], agents: 2 },
    {
      name: "Bweyogerere",
      available: true,
      coordinates: [0.365, 32.605],
      agents: 1,
    },
    {
      name: "Kasokoso",
      available: true,
      coordinates: [0.35, 32.595],
      agents: 1,
    },
    {
      name: "Kikoni",
      available: true,
      coordinates: [0.355, 32.585],
      agents: 2,
    },
    { name: "Nakawa", available: true, coordinates: [0.33, 32.61], agents: 4 },
    { name: "Bukoto", available: false, coordinates: [0.34, 32.6], agents: 0 },
    {
      name: "Kampala CBD",
      available: true,
      coordinates: [0.3136, 32.5811],
      agents: 5,
    },
    { name: "Ntinda", available: true, coordinates: [0.36, 32.62], agents: 2 },
    { name: "Najjera", available: true, coordinates: [0.37, 32.63], agents: 1 },
    {
      name: "Kyebando",
      available: false,
      coordinates: [0.345, 32.615],
      agents: 0,
    },
    { name: "Muyenga", available: true, coordinates: [0.3, 32.615], agents: 3 },
  ];

  const filteredAreas = allAreas.filter((area) =>
    area.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const selectedAreaDetails =
    allAreas.find((area) => area.name === selectedArea) || allAreas[0];

  const handleAreaSelect = (areaName: string) => {
    const area = allAreas.find((a) => a.name === areaName);
    if (area) {
      setSelectedArea(areaName);
      setSearchInput("");
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);

    const matchingArea = allAreas.find(
      (area) => area.name.toLowerCase() === value.toLowerCase()
    );
    if (matchingArea) {
      setSelectedArea(matchingArea.name);
    }
  };

  return (
    <section className="py-12 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Internet Availability Search
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            Check if Juptor Networks is available in your area and find local
            agents
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8 shadow-lg"
          >
            <div className="mb-6">
              <label
                htmlFor="areaSearch"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Search your area
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="areaSearch"
                  className="w-full px-4 py-3 pl-11 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your area (e.g., Banda, Kireka)"
                  value={searchInput}
                  onChange={handleSearch}
                />
                <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Quick select:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Banda",
                  "Kireka",
                  "Bweyogerere",
                  "Kampala CBD",
                  "Ntinda",
                ].map((area) => (
                  <motion.button
                    key={area}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAreaSelect(area)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedArea === area
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    {area}
                  </motion.button>
                ))}
              </div>
            </div>

            {searchInput && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                {filteredAreas.length > 0 ? (
                  <div className="max-h-60 overflow-y-auto">
                    {filteredAreas.map((area) => (
                      <button
                        key={area.name}
                        onClick={() => handleAreaSelect(area.name)}
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                      >
                        <div className="flex items-center">
                          <MapPin
                            className={`w-4 h-4 mr-3 ${
                              area.available
                                ? "text-green-500"
                                : "text-gray-400"
                            }`}
                          />
                          <span className="font-medium text-gray-900 dark:text-white">
                            {area.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              area.available
                                ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                            }`}
                          >
                            {area.available ? "Available" : "Coming Soon"}
                          </span>
                          {area.available && (
                            <span className="text-xs text-blue-600 dark:text-blue-400">
                              {area.agents} agent{area.agents !== 1 ? "s" : ""}
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-3 text-center text-gray-500 dark:text-gray-400">
                    No areas found matching "{searchInput}"
                  </div>
                )}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-4 rounded-lg ${
                selectedAreaDetails.available
                  ? "bg-green-50 dark:bg-green-900/20"
                  : "bg-yellow-50 dark:bg-yellow-900/20"
              }`}
            >
              <div className="flex items-start">
                {selectedAreaDetails.available ? (
                  <Check className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5" />
                ) : (
                  <div className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3 mt-0.5">
                    !
                  </div>
                )}
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {selectedAreaDetails.available ? (
                      <>Juptor Networks is available in {selectedArea}</>
                    ) : (
                      <>
                        Juptor Networks is not yet available in {selectedArea}
                      </>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {selectedAreaDetails.available ? (
                      <>
                        Great news! We have {selectedAreaDetails.agents} agent
                        {selectedAreaDetails.agents !== 1 ? "s" : ""} serving
                        your area. Find agents below.
                      </>
                    ) : (
                      <>
                        We're expanding! Check back soon or contact us to
                        request service in your area.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {selectedAreaDetails.available && (
            <AgentsLocator selectedArea={selectedArea} />
          )}

          {!selectedAreaDetails.available && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-linear-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center"
            >
              <h3 className="text-xl font-bold mb-4">
                Service Not Available Yet in {selectedArea}
              </h3>
              <p className="text-blue-100 mb-6">
                We're continuously expanding our network coverage. You can help
                us prioritize your area by requesting service below.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Request Service
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Check Other Areas
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AvailabilityChecker;
