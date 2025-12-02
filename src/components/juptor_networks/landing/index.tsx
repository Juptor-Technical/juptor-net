import React from "react";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChooseUs";
import UseCases from "./UseCases";
import Services from "./Services";
import PricingPlans from "./PricingPlans";
import AvailabilityChecker from "./AvailabilityChecker";
import FAQs from "./FAQs";

const JuptorNetworks: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <HeroSection />
      <WhyChooseUs />
      <UseCases />
      <Services />
      <PricingPlans />
      <AvailabilityChecker />
      <FAQs />
    </div>
  );
};

export default JuptorNetworks;
