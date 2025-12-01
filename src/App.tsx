import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import CoreSegments from "./components/CoreSegments";
import WhyChooseJuptor from "./components/WhyChooseJuptor";
import Footer from "./components/Footer";
import AboutUs from "./components/about/about";
import ContactUs from "./components/contact/contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference or saved theme
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
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
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* <Hero />
      <CoreSegments />
      <WhyChooseJuptor /> */}
      <AboutUs />
      {/* <ContactUs /> */}
      <Footer />
      {/* We'll add more sections here as we build them */}
    </div>
  );
}

export default App;
