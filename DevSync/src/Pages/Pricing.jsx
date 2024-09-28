import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LOGODEVSYNC from "../assets/DevSyncLogo.png";
import { Check } from 'lucide-react';

export function Pricing() {
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

  const pricingPlans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "per month",
      features: [
        "Up to 5 projects",
        "Basic collaboration tools",
        "10GB storage",
        "Email support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$24.99",
      period: "per month",
      features: [
        "Unlimited projects",
        "Advanced collaboration tools",
        "50GB storage",
        "Priority email & chat support",
        "API access",
      ],
      cta: "Go Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us for pricing",
      features: [
        "Unlimited everything",
        "24/7 phone support",
        "Dedicated account manager",
        "Custom integrations",
        "On-premise deployment option",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <motion.header
        className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 bg-white shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Link className="flex items-center justify-center" to="/">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <img width={"80px"} src={LOGODEVSYNC} alt="DevSync Logo" />
          </motion.div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
      </motion.header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <motion.div
            className="container px-4 md:px-6 mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                variants={fadeIn}
              >
                Simple, Transparent Pricing
              </motion.h1>
              <motion.p
                className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
                variants={fadeIn}
              >
                Choose the plan that's right for you and start building amazing projects with DevSync.
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
            <div className="grid gap-8 md:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`flex flex-col p-6 bg-white rounded-lg shadow-lg ${
                    plan.highlighted ? 'ring-2 ring-blue-500' : ''
                  }`}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                  <ul className="mb-6 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-2">
                        <Check className="mr-2 text-green-500" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`py-2 px-4 rounded ${
                      plan.highlighted
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    } transition-colors`}
                  >
                    {plan.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <motion.div
            className="container px-4 md:px-6 mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4"
              variants={fadeIn}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-8"
              variants={fadeIn}
            >
              Can't find the answer you're looking for? Reach out to our customer support team.
            </motion.p>
            <Link
              to="/contact"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
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