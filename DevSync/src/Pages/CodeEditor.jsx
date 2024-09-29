import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CodeEditor = () => {
  const [html, setHtml] = useState("<h1>Hello, DevSync!</h1>");
  const [css, setCss] = useState("body { font-family: sans-serif; }");
  const [js, setJs] = useState('console.log("Welcome to DevSync!");');
  const [output, setOutput] = useState("");
  const [activeTab, setActiveTab] = useState("html");

  useEffect(() => {
    updateOutput();
  }, [html, css, js]);

  const updateOutput = () => {
    const combinedOutput = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;
    setOutput(combinedOutput);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
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
          <button className="px-4 py-2 border border-black rounded hover:bg-gray-800 hover:text-white transition-colors">
            Save Project
          </button>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <div className="space-y-4">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                {["html", "css", "js"].map((tab) => (
                  <button
                    key={tab}
                    className={`uppercase py-2 px-4 text-sm font-medium ${
                      activeTab === tab
                        ? "border-b-2 border-black text-black"
                        : "text-gray-500 hover:text-black"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
            <div className="mt-4">
              <textarea
                className="w-full h-[calc(100vh-300px)] p-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                value={activeTab === "html" ? html : activeTab === "css" ? css : js}
                onChange={(e) => {
                  if (activeTab === "html") setHtml(e.target.value);
                  else if (activeTab === "css") setCss(e.target.value);
                  else setJs(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={updateOutput}
                className="px-4 py-2 border border-black rounded hover:bg-gray-800 hover:text-white transition-colors"
              >
                Run
              </button>
            </div>
          </div>
          <div className="bg-white border border-gray-300 rounded-md overflow-hidden shadow-lg">
            <div className="bg-gray-100 p-3 flex items-center justify-between">
              <span className="font-semibold text-black">Output</span>
              <button className="text-gray-500 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <iframe
              title="output"
              srcDoc={output}
              className="w-full h-[calc(100vh-250px)] border-none"
            />
          </div>
        </motion.div>
      </main>

      <footer className="bg-white shadow-md py-4 mt-8">
        <div className="container mx-auto text-center text-sm text-black">
          © 2024 DevSync. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CodeEditor;