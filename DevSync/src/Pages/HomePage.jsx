import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Code, Github, Layers, Zap, Users, Cloud, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
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
                  className="text-sm font-medium hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
          <motion.div
            className="container px-4 md:px-6"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div className="space-y-2" variants={fadeIn}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to DevSync
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your powerful, collaborative code editor in the cloud. Write,
                  share, and execute code in real-time.
                </p>
              </motion.div>
              <motion.div className="space-x-4" variants={fadeIn}>
                <button
                  onClick={handleLoginPage}
                  className="bg-black text-white py-2 px-6 rounded hover:bg-white hover:text-black border border-black transition-colors"
                >
                  Get Started
                </button>

                <button
                  className="bg-white text-black py-2 px-6 rounded border border-black hover:bg-black hover:text-white transition-colors"
                  variant="outline"
                >
                  Learn More
                </button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Key Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            className="container px-4 md:px-6"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              variants={fadeIn}
            >
              Key Features
            </motion.h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Code,
                  title: "Multiple Languages",
                  description:
                    "Support for various programming languages and syntax highlighting.",
                },
                {
                  icon: Layers,
                  title: "Real-time Collaboration",
                  description:
                    "Work together with your team in real-time, see live changes.",
                },
                {
                  icon: Github,
                  title: "Version Control",
                  description:
                    "Integrated version control to track changes and manage your code.",
                },
                {
                  icon: Zap,
                  title: "Fast Execution",
                  description:
                    "Run your code quickly with our optimized execution engine.",
                },
                {
                  icon: Users,
                  title: "Team Management",
                  description:
                    "Easily manage permissions and collaborate with your team.",
                },
                {
                  icon: Cloud,
                  title: "Cloud Storage",
                  description:
                    "Your projects are safely stored and accessible from anywhere.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-2 border p-4 rounded-lg"
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <feature.icon className="h-8 w-8 mb-2" />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <motion.div
            className="container px-4 md:px-6"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              variants={fadeIn}
            >
              How It Works
            </motion.h2>
            <motion.div
              className="grid gap-6 md:grid-cols-3"
              variants={stagger}
            >
              {[
                {
                  step: "1",
                  title: "Create a Project",
                  description:
                    "Start by creating a new project or importing an existing one.",
                },
                {
                  step: "2",
                  title: "Write Your Code",
                  description:
                    "Use our powerful editor to write and edit your code with ease.",
                },
                {
                  step: "3",
                  title: "Collaborate and Execute",
                  description:
                    "Invite team members, collaborate in real-time, and run your code.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  variants={fadeIn}
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to start coding?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of developers who trust CodeCraft for their
                  coding needs.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    placeholder="Enter your email"
                    type="email"
                    className="flex-grow px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
                  />
                  <button
                    className="bg-black text-white py-2 px-6 rounded hover:bg-white hover:text-black border border-black transition-colors"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" to="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <motion.div
            className="container px-4 md:px-6"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8"
              variants={fadeIn}
            >
              What Our Users Say
            </motion.h2>
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={stagger}
            >
              {[
                {
                  name: "Alex Johnson",
                  role: "Full Stack Developer",
                  quote:
                    "DevSync has revolutionized the way our team collaborates on projects. It's an indispensable tool for us.",
                },
                {
                  name: "Samantha Lee",
                  role: "Data Scientist",
                  quote:
                    "The ability to run and share my analysis in real-time has greatly improved my workflow. Highly recommended!",
                },
                {
                  name: "Michael Chen",
                  role: "Student",
                  quote:
                    "As a computer science student, DevSync has been invaluable for my group projects and learning journey.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center p-4 border rounded-lg"
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    "{testimonial.quote}"
                  </p>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>

      <motion.footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 DevSync. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </motion.footer>
    </div>
  );
}