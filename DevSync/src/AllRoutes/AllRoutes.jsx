import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { Contact } from "../Pages/Contact";
import CodeEditor from "../Pages/CodeEditor";
import LoginPage from "../Pages/LoginPage";
import About from "../Pages/About";
import { Pricing } from "../Pages/Pricing";
import RegisterPage from "../Pages/RegisterPage";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/codeEditor" element={<CodeEditor />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
