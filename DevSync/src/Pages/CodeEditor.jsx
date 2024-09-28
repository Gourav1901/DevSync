import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LOGODEVSYNC from "../assets/DevSyncLogo.png";
import { Link } from "react-router-dom";

export default function CodeEditor() {
  const [html, setHtml] = useState("<h1>Hello, CodeCraft!</h1>");
  const [css, setCss] = useState("body { font-family: sans-serif; }");
  const [js, setJs] = useState('console.log("Welcome to CodeCraft!");');
  const [output, setOutput] = useState("");

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
    <div className="min-h-screen flex flex-col bg-gray-100 ">
      <header className="bg-white  shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img  width={"80px"} src={LOGODEVSYNC} alt="" />
            {/* <span className="text-xl font-bold text-primary">DevSync</span> */}
          </Link>
          <button  className="bg-white text-black py-2 px-6 rounded border border-black hover:bg-black hover:text-white transition-colors">
            Save Project
          </button>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="space-y-4">
            <div className="tabs">
              <div className="tab-list grid w-full grid-cols-3">
              
              
              
              </div>
              <div className="tab-content">
              <button className="tab  text-left w-full font-bold" onClick={() => setHtml(html)}>
                  HTML
                </button>
                <textarea
                  className="w-full h-64 p-2 bg-white  border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={html}
                  onChange={(e) => setHtml(e.target.value)}
                />
                  <button className="tab text-left w-full font-bold" onClick={() => setCss(css)}>
                  CSS
                </button>
                <textarea
                  className="w-full h-64 p-2 bg-white  border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={css}
                  onChange={(e) => setCss(e.target.value)}
                />
                  <button className="tab text-left w-full font-bold" onClick={() => setJs(js)}>
                  JS
                </button>
                <textarea
                  className="w-full h-64 p-2 bg-white  border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={js}
                  onChange={(e) => setJs(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={updateOutput}
                className="bg-white text-black py-2 px-6 rounded border border-black hover:bg-black hover:text-white transition-colors"
              >
                Run
              </button>
            </div>
          </div>
          <div className="bg-white  border-neutral-950  rounded-md overflow-hidden">
            <div className="bg-gray-200  p-2 font-semibold ">Output</div>
            <iframe
              title="output"
              srcDoc={output}
              className="w-full h-[calc(100%-2rem)] border-none"
            />
          </div>
        </motion.div>
      </main>

      <footer className="bg-white  shadow-md p-4 mt-8">
        <div className="container mx-auto text-center text-sm text-black ">
          © 2024 CodeCraft. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
