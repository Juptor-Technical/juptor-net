import { useEffect, useState } from "react";
import Navbar from "./shared/NavBar";
import Footer from "./shared/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./components/home/home";
import AboutUs from "./components/about/about";
import ContactUs from "./components/contact/contact";
import JuptorNetworks from "./components/juptor_networks/landing";
import NetworkSubpage from "./components/juptor_networks/NetworkSubpage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/networks" element={<JuptorNetworks />} />
          <Route path="/networks/:id" element={<NetworkSubpage />} />
          <Route path="*" element={<HomePage />} />
          {/* <Hero />
      <CoreSegments />
      <WhyChooseJuptor /> */}
          {/* <AboutUs /> */}
          {/* <ContactUs /> */}
          {/* <JuptorNetworks /> */}
          {/* <Surveillance /> */}
          {/* <Fibernetics /> */}
          {/* <Equipment /> */}

          {/* We'll add more sections here as we build them */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
