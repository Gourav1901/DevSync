import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html as htmlExtension } from "@codemirror/lang-html";
import { css as cssExtension } from "@codemirror/lang-css";
import { autocompletion } from "@codemirror/autocomplete";

const CodeEditor = () => {
  const [htmlCode, setHtmlCode] = useState("<h1>Hello, DevSync!</h1>");
  const [cssCode, setCssCode] = useState("body { font-family: sans-serif; }");
  const [jsCode, setJsCode] = useState('console.log("Welcome to DevSync!");');
  const [output, setOutput] = useState("");
  const [activeTab, setActiveTab] = useState("html");

  useEffect(() => {
    updateOutput();
  }, [htmlCode, cssCode, jsCode]);

  const updateOutput = () => {
    const combinedOutput = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;
    setOutput(combinedOutput);
  };

  const htmlExtensions = useMemo(() => [htmlExtension(), autocompletion()], []);
  const cssExtensions = useMemo(() => [cssExtension(), autocompletion()], []);
  const jsExtensions = useMemo(() => [javascript(), autocompletion()], []);

  const getExtensions = (language) => {
    switch (language) {
      case "html":
        return htmlExtensions;
      case "css":
        return cssExtensions;
      case "js":
        return jsExtensions;
      default:
        return [];
    }
  };

  function showToast(
    message = "Your operation was successful!",
    type = "success"
  ) {
    const toast = document.getElementById("toast");

    // Change color based on the type of message
    if (type === "success") {
      toast.classList.add("bg-green-500");
      toast.classList.remove("bg-red-500");
    } else if (type === "error") {
      toast.classList.add("bg-red-500");
      toast.classList.remove("bg-green-500");
    }

    // Update the message text
    document.getElementById("toast-message").textContent = message;
    if (message === "Google OAuth authentication successful") {
      localStorage.setItem("access_token", "true");
    }
    // Show the toast
    toast.classList.remove("hidden");

    // Hide the toast after 3 seconds
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 3000);
  }

  // Extract success message from URL if it exists
  function checkForToastMessage() {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get("message");

    if (message) {
      // If a message exists in the URL, show the toast
      showToast(decodeURIComponent(message), "success");
    }
  }

  // Check for toast message when the page loads
  window.onload = checkForToastMessage;

  // New function to handle saving the project
  const saveProject = () => {
    const combinedCode = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;
    
    const blob = new Blob([combinedCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "project.html"; // File name for the download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Project saved successfully!", "success");
  };

  return (
    <>
      <div
        id="toast"
        className="fixed bottom-1 left-1/2 transform -translate-x-1/2 w-96 p-2 bg-green-500 text-white rounded-lg shadow-lg hidden"
      >
        <div className="flex items-center">
          <div className="mr-4">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12a9.75 9.75 0 1118.253 3.608 9.75 9.75 0 01-18.253-3.608zm14.73-2.47a.75.75 0 10-1.06-1.06L10.5 13.44l-1.97-1.97a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l5.03-5.03z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="font-bold">Success!</p>
            <p id="toast-message">Your operation was successful.</p>
          </div>
        </div>
      </div>

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
            <button
              onClick={saveProject}
              className="px-4 py-2 border border-black rounded hover:bg-gray-800 hover:text-white transition-colors"
            >
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
                          : "text-gray-500 hover:text-black  "
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="flex justify-start mt-4">
                <CodeMirror
                  value={
                    activeTab === "html"
                      ? htmlCode
                      : activeTab === "css"
                      ? cssCode
                      : jsCode
                  }
                  height="calc(100vh - 300px)"
                  extensions={getExtensions(activeTab)}
                  onChange={(value) => {
                    if (activeTab === "html") setHtmlCode(value);
                    else if (activeTab === "css") setCssCode(value);
                    else setJsCode(value);
                  }}
                  className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-full text-start "
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
              {/* Output iframe remains the same */}
              <div className="bg-gray-100 p-3 flex items-center justify-between">
                <span className="font-semibold text-black">Output</span>
                <button className="text-gray-500 hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
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
    </>
  );
};

export default CodeEditor;
