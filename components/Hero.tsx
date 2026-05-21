"use client";

import Image from "next/image";
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

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <Image
            src="/Logo main.png"
            alt="Eastpoint Advertising Logo"
            width={280}
            height={280}
            priority
            className="
              w-[150px]
              sm:w-[280px]
              md:w-[280px]
              lg:w-[380px]
              xl:w-[430px]
              h-auto
              object-contain
              drop-shadow-2xl
              transition-all
              duration-500
              hover:scale-105
            "
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="
            text-2xl
            md:text-3xl
            font-bold
            text-gray-900
          "
        >
          Premium Signage & Branding Solutions
        </motion.h2>

        {/* Since 2002 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6"
        >
          <span className="text-red-500 text-xl md:text-2xl font-bold">
            Since 2002
          </span>
        </motion.div>

        {/* Rotating Animated Text */}
        <div className="h-[100px] flex items-center justify-center mt-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h3
              key={rotatingTexts[index]}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="
                text-4xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
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

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12"
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
              px-12
              py-5
              rounded-2xl
              text-lg
              md:text-xl
              font-bold
              shadow-2xl
            "
          >
            Explore Our Services
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}