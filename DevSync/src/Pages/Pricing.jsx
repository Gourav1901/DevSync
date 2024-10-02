import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Menu, X } from "lucide-react";
import Navbar from "../Components/Navbar";

// Custom Switch component
const Switch = ({ checked, onChange }) => (
  <div
    className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${
      checked ? "bg-black" : "bg-gray-300"
    }`}
    onClick={() => onChange(!checked)}
  >
    <motion.div
      className="bg-white w-5 h-5 rounded-full shadow-md"
      animate={{ x: checked ? 28 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  </div>
);

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Check if tokens are present in local storage on mount
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");
    if (accessToken || refreshToken) {
      setIsLoggedIn(true); // User is logged in
    } else {
      setIsLoggedIn(false); // User is not logged in
    }
  }, []);

  // Logout function to clear tokens and update login state
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsLoggedIn(false); // Update login state
    // Redirect to login page if needed (e.g., using useNavigate)
  };

  const navItems = [
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    // Only add CodeEditor link if logged in
    ...(isLoggedIn ? [{ name: "CodeEditor", path: "/codeEditor" }] : []),
  ];
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const pricingPlans = [
    {
      name: "Basic",
      monthlyPrice: "$9.99",
      yearlyPrice: "$99.99",
      features: [
        "Up to 5 projects",
        "Basic collaboration tools",
        "10GB storage",
        "Email support",
      ],
      cta: "Get Started",
    },
    {
      name: "Pro",
      monthlyPrice: "$24.99",
      yearlyPrice: "$249.99",
      features: [
        "Unlimited projects",
        "Advanced collaboration tools",
        "50GB storage",
        "Priority email & chat support",
        "API access",
      ],
      cta: "Go Pro",
    },
    {
      name: "Enterprise",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      features: [
        "Unlimited everything",
        "24/7 phone support",
        "Dedicated account manager",
        "Custom integrations",
        "On-premise deployment option",
      ],
      cta: "Contact Sales",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <motion.header
        className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 bg-white shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 bg-black rounded-full flex items-center justify-center"
          >
            <span className="text-white font-bold text-xl">D</span>
          </motion.div>
          <span className="text-xl font-bold text-black">DevSync</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          {navItems.map(({ name, path }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={path}
                className="text-sm font-medium text-black hover:text-grey-800 transition-colors"
              >
                {name}
              </Link>
            </motion.div>
          ))}
          {isLoggedIn ? (
            <motion.button
              className="text-sm font-medium text-black hover:text-grey-800 transition-colors"
              onClick={handleLogout}
            >
              Logout
            </motion.button>
          ) : (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/register"
                className="text-sm font-medium text-black hover:text-grey-800 transition-colors"
              >
                Sign Up
              </Link>
            </motion.div>
          )}
        </nav>
        <button className="ml-auto md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <nav className="flex flex-col items-center py-4">
              {navItems.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className="text-sm font-medium  hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
              {isLoggedIn ? (
                <motion.button
                  className="text-sm font-medium  hover:text-primary transition-colors py-2"
                  onClick={handleLogout}
                >
                  Logout
                </motion.button>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/register"
                    className="text-sm font-medium  hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </motion.div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <motion.div
            className="container px-4 md:px-6 mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white"
                variants={fadeIn}
              >
                Simple, Transparent Pricing
              </motion.h1>
              <motion.p
                className="mx-auto max-w-[700px] text-white text-sm md:text-base lg:text-xl"
                variants={fadeIn}
              >
                Choose the plan that's right for you and start building amazing
                projects with DevSync.
              </motion.p>
            </div>
          </motion.div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            className="container px-4 md:px-6 mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <div className="flex justify-center items-center mb-8 space-x-4">
              <span
                className={`text-sm md:text-lg ${
                  !isYearly ? "text-black font-bold" : "text-gray-500"
                }`}
              >
                Monthly
              </span>
              <Switch checked={isYearly} onChange={setIsYearly} />
              <span
                className={`text-sm md:text-lg ${
                  isYearly ? "text-black font-bold" : "text-gray-500"
                }`}
              >
                Yearly
              </span>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`flex flex-col p-4 md:p-6 bg-white rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${
                    selectedPlan === plan.name
                      ? "ring-2 ring-black transform scale-105"
                      : "hover:shadow-xl"
                  }`}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedPlan(plan.name)}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-2xl md:text-4xl font-bold text-black">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2 text-sm md:text-base">
                      {isYearly ? "/year" : "/month"}
                    </span>
                  </div>
                  <ul className="mb-6 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center mb-2 text-sm md:text-base text-gray-700"
                      >
                        <Check className="mr-2 text-green-500" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`py-2 px-4 rounded text-sm md:text-base ${
                      selectedPlan === plan.name
                        ? "bg-black text-white hover:bg-gray-700"
                        : "bg-gray-100 text-black hover:bg-gray-200"
                    } transition-colors`}
                  >
                    {plan.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <motion.div
            className="container px-4 md:px-6 mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-black"
              variants={fadeIn}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="mx-auto max-w-[700px] text-gray-600 text-sm md:text-base lg:text-xl mb-8"
              variants={fadeIn}
            >
              Can't find the answer you're looking for? Reach out to our
              customer support team.
            </motion.p>
            <Link
              to="/contact"
              className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors text-sm md:text-base"
            >
              Contact Us
            </Link>
          </motion.div>
        </section>
      </main>

      <motion.footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full justify-between">
          <div className="text-gray-500 text-sm md:text-base">
            &copy; {new Date().getFullYear()} DevSync. All rights reserved.
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="text-xs md:text-sm font-medium text-gray-500 hover:text-black transition-colors"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </motion.footer>
    </div>
  );
}
