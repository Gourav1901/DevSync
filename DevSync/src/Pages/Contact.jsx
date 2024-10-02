import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Navbar from "../Components/Navbar";

export function Contact() {
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

  // Logout function to clear tokens and redirect to login
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsLoggedIn(false); // Update login state
    // Redirect to login page
  };
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

  const navItems = [
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    ...(isLoggedIn ? [{ name: "CodeEditor", path: "/codeEditor" }] : []),
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
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
        <Navbar />
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
           <nav className="flex flex-col gap-2 p-4">
              {navItems.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
              {isLoggedIn ? (
                <motion.button
                  className="text-sm font-medium text-black hover:text-grey-800 transition-colors"
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
                    className="text-sm font-medium text-black hover:text-grey-800 transition-colors"
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <motion.div
            className="container max-w-6xl px-4 md:px-6 mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                variants={fadeIn}
              >
                Get in Touch
              </motion.h1>
              <motion.p
                className="mx-auto max-w-[700px]  text-black md:text-xl "
                variants={fadeIn}
              >
                We would love to hear from you! Whether you have a question,
                feedback, or need assistance, feel free to reach out to us.
              </motion.p>
            </div>
          </motion.div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            className="container max-w-4xl px-4 md:px-6 mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              variants={fadeIn}
            >
              Contact Form
            </motion.h2>
            <motion.form
              className="flex flex-col max-w-lg mx-auto space-y-4"
              variants={stagger}
            >
              <motion.input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
                variants={fadeIn}
                required
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
                variants={fadeIn}
                required
              />
              <motion.textarea
                placeholder="Your Message"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 h-32"
                variants={fadeIn}
                required
              />
              <motion.button
                type="submit"
                className="bg-black text-white py-2 rounded hover:bg-white hover:text-black border border-black transition-colors"
                variants={fadeIn}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <motion.div
            className="container max-w-4xl px-4 md:px-6 mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              variants={fadeIn}
            >
              Contact Information
            </motion.h2>
            <motion.p
              className="text-lg  text-black text-center mb-4"
              variants={fadeIn}
            >
              Email:{" "}
              <a className="underline" href="mailto:support@devsync.com">
                support@devsync.com
              </a>
            </motion.p>
            <motion.p
              className="text-lg  text-black text-center mb-4"
              variants={fadeIn}
            >
              Phone:{" "}
              <a className="underline" href="tel:+1234567890">
                9111733035,9009060724
              </a>
            </motion.p>
            <motion.p
              className="text-lg  text-black text-center"
              variants={fadeIn}
            >
              Address: 123 DevSync Machal, Dhar Road Indore, 453001
            </motion.p>
          </motion.div>
        </section>
      </main>

      <motion.footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xs text-black ">
          © 2024 DevSync. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </motion.footer>
    </div>
  );
}
