import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Components/Navbar";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants for transitions
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
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(isLoggedIn, "login state");
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <motion.header
        className="px-4 lg:px-6 h-20 flex items-center sticky top-0 z-50 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-md"
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
          <span className="text-xl font-bold bg-clip-text text-transparent bg-black ">
            DevSync
          </span>
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

        <motion.button
          className="ml-auto md:hidden p-2 rounded-md hover:bg-gray-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </motion.button>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg rounded-b-lg overflow-hidden"
          >
            <nav className="flex flex-col items-center py-4">
              {navItems.map(({ name, path }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-medium  hover:text-primary transition-colors py-2"
                  >
                    {name}
                  </Link>
                </motion.div>
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
        <section className="w-full py-20 md:py-32 lg:py-44">
          <motion.div
            className="container px-4 md:px-6 mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <div className="flex flex-col items-center space-y-8 text-center">
              <motion.div className="space-y-4" variants={fadeIn}>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-black">
                  About DevSync
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-2xl">
                  Empowering developers to write, share, and collaborate on code
                  seamlessly. Our platform brings teams together in real-time,
                  making coding a truly collaborative experience.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="w-full py-20 md:py-32">
          <motion.div
            className="container px-4 md:px-6 mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-black"
              variants={fadeIn}
            >
              Our Mission
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              variants={fadeIn}
            >
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  Our mission is to create a powerful, user-friendly coding
                  platform that fosters collaboration and innovation in software
                  development.
                </p>
                <p className="text-lg text-gray-600">
                  We believe that great ideas come from collaboration, and
                  DevSync is here to facilitate that.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-full h-auto text-indigo-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16L16 12L12 8M8 12H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="w-full py-20 md:py-32 bg-white">
          <motion.div
            className="container px-4 md:px-6 mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-black"
              variants={fadeIn}
            >
              Our Values
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={stagger}
            >
              {[
                {
                  title: "Collaboration",
                  description:
                    "We value teamwork and the collective effort of our users.",
                  icon: "👥",
                },
                {
                  title: "Innovation",
                  description:
                    "We are dedicated to continuous improvement and innovation.",
                  icon: "💡",
                },
                {
                  title: "User-Centric",
                  description:
                    "Our platform is designed with the user in mind.",
                  icon: "🎯",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="w-full py-20 md:py-32">
          <motion.div
            className="container px-4 md:px-6 mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-black"
              variants={fadeIn}
            >
              Join Us
            </motion.h2>
            <motion.div className="text-center" variants={fadeIn}>
              <p className="text-lg text-gray-600 mb-8">
                Ready to join a community of passionate developers? Sign up
                today and start collaborating with us!
              </p>
              <motion.button
                className="bg-black text-white py-2 px-6 rounded hover:bg-white hover:text-black border border-black transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <motion.footer
        className="py-8 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2024 DevSync. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-500"
              to="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-500"
              to="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </motion.footer>
    </div>
  );
}
