import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
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

  // Logout function to clear tokens and update login state
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setIsLoggedIn(false); // Update login state
    // Redirect to login page if needed (e.g., using useNavigate)
  };

  const navItems = [
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    // Only add CodeEditor link if logged in
    ...(isLoggedIn ? [{ name: "CodeEditor", path: "/codeEditor" }] : []),
  ];



  
  return (
    <nav className="ml-auto hidden md:flex gap-6">
      {navItems.map(({ name, path }) => (
        <motion.div
          key={name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={path}
            className="text-sm font-medium text-black hover:text-grey-800 transition-colors"
          >
            {name}
          </Link>
        </motion.div>
      ))}
      {isLoggedIn ? (
        <motion.button
          className="text-sm font-medium text-black hover:text-grey-800 transition-colors"
          onClick={handleLogout}
        >
          Logout
        </motion.button>
      ) : (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/register"
            className="text-sm font-medium text-black hover:text-grey-800 transition-colors"
          >
            Sign Up
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
