import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FileCode } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { toast, Toaster } from "react-hot-toast";

const RegisterPage = () => {
  const canvasRef = useRef(null);
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const particles = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200, 200, 255, 0.5)";
        ctx.fill();
      });
    }

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to handle the form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://devsync-backend.onrender.com/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
          credentials: "include", // To include cookies
        }
      );

      const result = await response.json();
      console.log(result, "result after the register");

      if (response.ok && result.msg === "User has been created successfully") {
        toast.success(result.msg); // Success toast
        // Navigate to the desired page on successful registration
        setTimeout(() => {
          navigate("/login"); // Navigate to login page after showing toast
        }, 2000); // Example route after registration
      } else if (
        result.msg ===
        "Password must have at least one uppercase character, one number, one special character, and be at least 8 characters long."
      ) {
        toast.error(result.msg); // Error toast for password validation
      } else {
        toast.error(result.msg); // Generic error toast for other issues
      }
    } catch (error) {
      toast.error("An error occurred. Please try again."); // Error for request failure
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 relative overflow-hidden p-4">
      <Toaster position="top-right" reverseOrder={false} />{" "}
      {/* Add toaster component */}
      <canvas ref={canvasRef} className="absolute inset-0" />
      <motion.div
        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center justify-center mb-6 sm:mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <FileCode className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
          <h1 className="text-2xl sm:text-3xl font-bold mt-4 text-primary text-center">
            Welcome to DevSync
          </h1>
        </motion.div>
        <motion.p
          className="text-center text-black mb-6 sm:mb-8 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your collaborative coding journey begins here
        </motion.p>
        <motion.form
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onSubmit={handleRegister} // Submit form handler
        >
          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update state
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state
          />
          <button
            type="submit"
            className="w-full bg-primary text-black px-4 py-2 rounded border border-slate-950 text-base sm:text-xl transition-all duration-300 hover:bg-black hover:text-white"
          >
            Sign Up
          </button>
        </motion.form>
        <motion.div
          className="mt-6 sm:mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xs sm:text-sm text-black">
            By continuing, you agree to DevSync's{" "}
            <Link to="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
