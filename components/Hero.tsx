"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rotatingTexts = [
  "Laser Cutting",
  "ACP Boards",
  "LED Acrylic Letters",
  "Steel Letters",
  "Glow Sign Board",
  "Indoor Branding",
  "Glass OWV & Vinyl",
  "Neon Signage",
  "Flex Printing",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 section-padding overflow-hidden">
      <div className="container-custom text-center">

        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-3xl font-bold leading-tight text-red-500"
        >
          Eastpoint Advertising
          <br />
          <span className="text-red-500 text-xl md:text-xl">
            Since 2002
          </span>
        </motion.h1>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-2xl md:text-3xl font-bold text-gray-900"
        >
          Premium Signage & Branding Solutions
        </motion.h2>

        {/* Rotating Animated Text */}
        <div className="h-[80px] flex items-center justify-center mt-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h3
              key={rotatingTexts[index]}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="
                text-3xl
                md:text-4xl
                font-bold
                bg-gradient-to-r
                from-blue-900
                via-blue-600
                to-cyan-500
                bg-clip-text
                text-transparent
              "
            >
              {rotatingTexts[index]}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* Description */}
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-4 text-lg text-gray-600 max-w-xl mx-auto"
        >
          Laser Cutting, ACP Boards, LED Acrylic & Steel Letters,
          Flex Glow Signs, Sunboard, Glass OWV & Flex Printing.
        </motion.p> */}

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
        >
          <motion.a
            href="/services"
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              inline-block
              bg-gradient-to-r
              from-blue-900
              to-blue-700
              text-white
              px-10
              py-4
              rounded-2xl
              font-semibold
              shadow-xl
            "
          >
            Explore Our Services
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}