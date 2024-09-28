import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LOGODEVSYNC from "../assets/DevSyncLogo.png";

export function About() {
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

  return (
    <div className="flex flex-col min-h-screen">
      <motion.header
        className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 bg-white shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Link className="flex items-center justify-center" href="#">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <img width={"80px"} src={LOGODEVSYNC} alt="" />
          </motion.div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {["Features", "Pricing", "About", "Contact"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className="text-sm font-medium hover:text-primary transition-colors"
                href="#"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.header>

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
                  About DevSync
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  At DevSync, we strive to empower developers to write, share,
                  and collaborate on code seamlessly. Our platform is designed
                  to bring teams together in real-time, making coding a truly
                  collaborative experience.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

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
              Our Mission
            </motion.h2>
            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 text-center mb-4"
              variants={fadeIn}
            >
              Our mission is to create a powerful, user-friendly coding platform
              that fosters collaboration and innovation in software development.
            </motion.p>
            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 text-center"
              variants={fadeIn}
            >
              We believe that great ideas come from collaboration, and DevSync
              is here to facilitate that.
            </motion.p>
          </motion.div>
        </section>

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
              Our Values
            </motion.h2>
            <motion.ul
              className="list-disc list-inside space-y-4 max-w-[600px] mx-auto"
              variants={stagger}
            >
              {[
                "Collaboration: We value teamwork and the collective effort of our users.",
                "Innovation: We are dedicated to continuous improvement and innovation.",
                "User-Centric: Our platform is designed with the user in mind.",
              ].map((value, index) => (
                <motion.li
                  key={index}
                  variants={fadeIn}
                  className="text-gray-500 dark:text-gray-400"
                >
                  {value}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </section>

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
              Join Us
            </motion.h2>
            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 text-center mb-4"
              variants={fadeIn}
            >
              Ready to join a community of passionate developers? Sign up today
              and start collaborating with us!
            </motion.p>
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
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </motion.footer>
    </div>
  );
}
