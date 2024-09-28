import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileCode, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CodeEditor() {
  const [html, setHtml] = useState('<h1>Hello, CodeCraft!</h1>');
  const [css, setCss] = useState('body { font-family: sans-serif; }');
  const [js, setJs] = useState('console.log("Welcome to CodeCraft!");');
  const [output, setOutput] = useState('');

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
            <FileCode className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold text-primary">CodeCraft</span>
          </Link>
          <button className="bg-primary text-black px-4 py-2 rounded">Save Project</button>
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
                <button className="tab" onClick={() => setHtml(html)}>HTML</button>
                <button className="tab" onClick={() => setCss(css)}>CSS</button>
                <button className="tab" onClick={() => setJs(js)}>JS</button>
              </div>
              <div className="tab-content">
                <textarea
                  className="w-full h-64 p-2 bg-white  border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={html}
                  onChange={(e) => setHtml(e.target.value)}
                />
                <textarea
                  className="w-full h-64 p-2 bg-white  border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={css}
                  onChange={(e) => setCss(e.target.value)}
                />
                <textarea
                  className="w-full h-64 p-2 bg-white  border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={js}
                  onChange={(e) => setJs(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={updateOutput} className="bg-primary text-white flex items-center px-4 py-2 rounded">
                <Play className="mr-2 h-4 w-4" /> Run
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
