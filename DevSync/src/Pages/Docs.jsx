import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {  Code, Play, Layout, Moon, Sun, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Documentation() {
  const [activeSection, setActiveSection] = useState("");

  const features = [
    {
      icon: Code,
      title: "Multi-language Support",
      description:
        "Write and execute code in HTML, CSS, and JavaScript, all in one place.",
    },
    {
      icon: Play,
      title: "Instant Execution",
      description:
        "Run your code instantly and see the results in real-time, right in your browser.",
    },
    {
      icon: Layout,
      title: "Responsive Design",
      description:
        "Create and test responsive layouts with ease using the built-in preview.",
    },
    {
      icon: Moon,
      title: "Dark Mode",
      description:
        "Switch between light and dark themes for comfortable coding in any environment.",
    },
  ];

  const sections = [
    { id: "getting-started", title: "Getting Started" },
    { id: "features", title: "Features" },
    { id: "usage", title: "Usage Guide" },
    { id: "faq", title: "FAQ" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">D</span>
            </motion.div>
            <span className="text-xl font-bold text-black">DevSync Docs</span>
          </Link>
          <nav className="space-x-4 flex flex-wrap justify-center">
            {sections.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-gray-600 hover:text-black transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </motion.a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.section id="getting-started" className="mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4 text-black">
              Getting Started with DevSync
            </h2>
            <p className="mb-4 text-gray-700">
              DevSync is an online code editor that allows you to write and
              execute HTML, CSS, and JavaScript code in real-time. Follow these
              steps to get started:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                Visit{" "}
                <a
                  href="https://devsynceditors.netlify.app/"
                  className="text-black font-semibold hover:underline"
                >
                  DevSync
                </a>
                .
              </li>
              <li>
                You'll see three code editor panels for HTML, CSS, and
                JavaScript.
              </li>
              <li>Start coding in any of the panels.</li>
              <li>
                Your code will automatically be executed and displayed in the
                preview panel.
              </li>
              <li>
                Use the "Run" button to manually update the preview if needed.
              </li>
            </ol>
          </motion.section>

          <motion.section id="features" className="mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4 text-black">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                  whileHover={{ scale: 1.02 }}
                  variants={itemVariants}
                >
                  <feature.icon className="h-8 w-8 text-black mb-2" />
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section id="usage" className="mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4 text-black">Usage Guide</h2>
            <div className="space-y-4">
              {[
                { title: "Writing Code", content: "Use the three code editor panels to write your HTML, CSS, and JavaScript code. Each panel is dedicated to its respective language." },
                { title: "Previewing Your Code", content: "As you type, the preview panel on the right will automatically update to show the result of your code. You can also click the \"Run\" button to manually update the preview." },
                { title: "Using External Resources", content: "You can include external CSS and JavaScript files by adding the appropriate link and script tags in your HTML code." },
                { title: "Switching Themes", content: "Toggle between light and dark themes using the theme switch button in the top right corner of the application." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.01 }}
                >
                  <h3 className="text-2xl font-semibold mb-2 text-black">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section id="faq" className="mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4 text-black">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                { question: "Can I save my projects?", answer: "Currently, DevSync does not support saving projects. This feature is coming soon!" },
                { question: "Is there a way to collaborate with others?", answer: "Collaboration features are not available at the moment, but we're working on implementing them in the near future." },
                { question: "Can I use DevSync offline?", answer: "DevSync requires an internet connection to function. We currently don't have an offline mode." },
                { question: "Are there keyboard shortcuts available?", answer: "Currently, DevSync uses standard text editor shortcuts. We're planning to add more specific shortcuts in future updates." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.01 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    Q: {item.question}
                  </h3>
                  <p className="text-gray-700">A: {item.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>

      <footer className="bg-white shadow-md p-4 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2024 DevSync. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              to="https://devsynceditors.netlify.app/"
              className="flex items-center text-sm text-gray-600 hover:text-black transition-colors duration-200"
            >
              Visit DevSync
            </Link>
            <motion.button
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Feedback
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  );
}