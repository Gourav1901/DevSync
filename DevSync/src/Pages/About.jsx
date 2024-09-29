import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LOGODEVSYNC from "../assets/DevSyncLogo.png";

export default function About() {
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
    { name: "Login", path: "/login" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "CodeEditor", path: "/codeEditor" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <motion.header
        className="px-4 lg:px-6 h-20 flex items-center sticky top-0 z-50 bg-white shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Link className="flex items-center justify-center" to="/">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <img className="w-16 h-16" src={LOGODEVSYNC} alt="DevSync Logo" />
          </motion.div>
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
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </nav>
        <motion.button
          className="ml-auto md:hidden p-2 rounded-md hover:bg-gray-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </motion.button>
      </motion.header>

      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-44 bg-gray-100">
          <motion.div
            className="container px-4 md:px-6 mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <div className="flex flex-col items-center space-y-8 text-center">
              <motion.div className="space-y-4" variants={fadeIn}>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl/none">
                  About DevSync
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl lg:text-2xl">
                  Empowering developers to write, share, and collaborate on code seamlessly.
                  Our platform brings teams together in real-time, making coding a truly collaborative experience.
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
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
              variants={fadeIn}
            >
              Our Mission
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              variants={fadeIn}
            >
              <div className="space-y-4">
                <p className="text-lg text-gray-500">
                  Our mission is to create a powerful, user-friendly coding platform
                  that fosters collaboration and innovation in software development.
                </p>
                <p className="text-lg text-gray-500">
                  We believe that great ideas come from collaboration, and DevSync
                  is here to facilitate that.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <svg className="w-full h-auto text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16L16 12L12 8M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="w-full py-20 md:py-32 bg-gray-100">
          <motion.div
            className="container px-4 md:px-6 mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
              variants={fadeIn}
            >
              Our Values
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={stagger}
            >
              {[
                { title: "Collaboration", description: "We value teamwork and the collective effort of our users." },
                { title: "Innovation", description: "We are dedicated to continuous improvement and innovation." },
                { title: "User-Centric", description: "Our platform is designed with the user in mind." },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-gray-500">{value.description}</p>
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
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
              variants={fadeIn}
            >
              Join Us
            </motion.h2>
            <motion.div
              className="text-center"
              variants={fadeIn}
            >
              <p className="text-lg text-gray-500 mb-8">
                Ready to join a community of passionate developers? Sign up today
                and start collaborating with us!
              </p>
              <motion.button
                className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 transition-colors duration-300"
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
            <Link className="text-sm hover:underline underline-offset-4 text-gray-500" to="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4 text-gray-500" to="#">
              Privacy
            </Link>
          </nav>
        </div>
      </motion.footer>
    </div>
  );
}