// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const rotatingTexts = [
//   "Laser Cutting",
//   "ACP Boards",
//   "LED Acrylic Letters",
//   "Steel Letters",
//   "Glow Sign Board",
//   "Indoor Branding",
//   "Glass OWV & Vinyl",
//   "Neon Signage",
//   "Flex Printing",
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % rotatingTexts.length);
//     }, 2100);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-gray-100 section-padding overflow-hidden">
//       <div className="container-custom text-center">

//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8, y: -20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center mb-6"
//         >
//           <Image
//             src="/Logo main.png"
//             alt="Eastpoint Advertising Logo"
//             width={280}
//             height={280}
//             priority
//             className="
//               w-[150px]
//               sm:w-[280px]
//               md:w-[280px]
//               lg:w-[380px]
//               xl:w-[430px]
//               h-auto
//               object-contain
//               drop-shadow-2xl
//               transition-all
//               duration-500
//               hover:scale-105
//             "
//           />
//         </motion.div>

//         {/* Main Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           className="
//             text-2xl
//             md:text-3xl
//             font-bold
//             text-gray-900
//           "
//         >
//           Premium Signage & Branding Solutions
//         </motion.h2>

//         {/* Since 2002 */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-6"
//         >
//           <span className="text-red-500 text-xl md:text-2xl font-bold">
//             Since 2002
//           </span>
//         </motion.div>

//         {/* Rotating Animated Text */}
//         <div className="h-[100px] flex items-center justify-center mt-8 overflow-hidden">
//           <AnimatePresence mode="wait">
//             <motion.h3
//               key={rotatingTexts[index]}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.5 }}
//               className="
//                 text-4xl
//                 sm:text-4xl
//                 md:text-5xl
//                 font-extrabold
//                 bg-gradient-to-r
//                 from-blue-900
//                 via-blue-600
//                 to-cyan-500
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               {rotatingTexts[index]}
//             </motion.h3>
//           </AnimatePresence>
//         </div>

//         {/* Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="mt-12"
//         >
//           <motion.a
//             href="/services"
//             whileHover={{
//               scale: 1.05,
//               y: -3,
//             }}
//             whileTap={{
//               scale: 0.95,
//             }}
//             className="
//               inline-block
//               bg-gradient-to-r
//               from-blue-900
//               to-blue-700
//               text-white
//               px-12
//               py-5
//               rounded-2xl
//               text-lg
//               md:text-xl
//               font-bold
//               shadow-2xl
//             "
//           >
//             Explore Our Services
//           </motion.a>
//         </motion.div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const rotatingTexts = [
//   "Laser Cutting",
//   "ACP Boards",
//   "LED Acrylic Letters",
//   "Steel Letters",
//   "Glow Sign Board",
//   "Indoor Branding",
//   "Glass OWV & Vinyl",
//   "Neon Signage",
//   "Flex Printing",
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % rotatingTexts.length);
//     }, 2100);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-gray-100 section-padding overflow-hidden">
//       <div className="container-custom text-center">

//         {/* Logo */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8, y: -20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center mb-5"
//         >
//           <Image
//   src="/Logo main.png"
//   alt="Eastpoint Advertising Logo"
//   width={400}
//   height={400}
//   priority
//   className="
//     w-[320px]
//     sm:w-[360px]
//     md:w-[380px]
//     lg:w-[450px]
//     xl:w-[520px]
//     h-auto
//     object-contain
//     drop-shadow-2xl
//     transition-all
//     duration-500
//     hover:scale-105
//   "
// />
//         </motion.div>

//         {/* Main Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           className="
//   text-lg
//   sm:text-xl
//   md:text-3xl
//   font-bold
//   text-gray-900
//   leading-snug
// "
//         >
//           Premium Signage & Branding Solutions
//         </motion.h2>

//         {/* Since 2002 */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="mt-5"
//         >
//           <span className="text-red-500 text-lg md:text-2xl font-bold">
//             Since 2002
//           </span>
//         </motion.div>

//         {/* Rotating Animated Text */}
//         <div className="h-[100px] flex items-center justify-center mt-8 overflow-hidden">
//           <AnimatePresence mode="wait">
//             <motion.h3
//               key={rotatingTexts[index]}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.5 }}
//               className="
//                 text-3xl
//                 sm:text-4xl
//                 md:text-5xl
//                 font-extrabold
//                 bg-gradient-to-r
//                 from-blue-900
//                 via-blue-600
//                 to-cyan-500
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               {rotatingTexts[index]}
//             </motion.h3>
//           </AnimatePresence>
//         </div>

//         {/* Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="mt-10"
//         >
//           <motion.a
//             href="/services"
//             whileHover={{
//               scale: 1.05,
//               y: -3,
//             }}
//             whileTap={{
//               scale: 0.95,
//             }}
//             className="
//               inline-block
//               bg-gradient-to-r
//               from-blue-900
//               to-blue-700
//               text-white
//               px-10
//               py-4
//               rounded-2xl
//               text-base
//               md:text-xl
//               font-bold
//               shadow-2xl
//             "
//           >
//             Explore Our Services
//           </motion.a>
//         </motion.div>

//       </div>
//     </section>
//   );
// }






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
    <section className="bg-gray-100 section-padding overflow-hidden relative">

      {/* TOP LEFT FEATHER */}
      <motion.div
        initial={{ opacity: 0, x: -80, y: -80 }}
        animate={{ opacity: 0.9, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        className="
          absolute
          top-0
          left-0
          z-10
          pointer-events-none
        "
      >
        <Image
          src="/fl3.png"
          alt="Feather"
          width={320}
          height={320}
          className="
            w-[140px]
            sm:w-[180px]
            md:w-[240px]
            lg:w-[300px]
            h-auto
            object-contain
            rotate-[-18deg]
            opacity-80
          "
        />
      </motion.div>

      {/* BOTTOM RIGHT FEATHER */}
      <motion.div
        initial={{ opacity: 0, x: 80, y: 80 }}
        animate={{ opacity: 0.9, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        className="
          absolute
          bottom-0
          right-0
          z-10
          pointer-events-none
        "
      >
        <Image
          src="/fl2.png"
          alt="Feather"
          width={340}
          height={340}
          className="
            w-[150px]
            sm:w-[200px]
            md:w-[260px]
            lg:w-[320px]
            h-auto
            object-contain
            rotate-[18deg]
            opacity-80
          "
        />
      </motion.div>

      <div className="container-custom relative">

        {/* CENTER CONTENT */}
        <div className="text-center max-w-5xl mx-auto relative z-20">

          {/* MAIN LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-5"
          >
            <Image
              src="/Logo main.png"
              alt="Eastpoint Advertising Logo"
              width={500}
              height={500}
              priority
              className="
                w-[220px]
                sm:w-[260px]
                md:w-[320px]
                lg:w-[380px]
                xl:w-[460px]
                h-auto
                object-contain
                drop-shadow-2xl
                transition-all
                duration-500
                hover:scale-105
              "
            />
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="
              text-lg
              sm:text-xl
              md:text-xl
              lg:text-2xl
              text-gray-900
              leading-snug
              px-6
              md:px-16
            "
          >
            Oldest & Famous Signages Specialists in Town
          </motion.h2>

          {/* SINCE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4"
          >
            <span className="text-red-500 text-lg md:text-2xl font-bold">
              Since 2002
            </span>
          </motion.div>

          {/* ROTATING TEXT */}
          <div className="h-[100px] flex items-center justify-center mt-6 overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.h3
                key={rotatingTexts[index]}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  font-extrabold
                  bg-gradient-to-r
                  from-blue-900
                  via-blue-600
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                {rotatingTexts[index]}
              </motion.h3>
            </AnimatePresence>
          </div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6"
          >
            <motion.a
              href="/services"
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                inline-flex
                items-center
                justify-center
                bg-gradient-to-r
                from-blue-900
                to-blue-600
                text-white
                px-7
                md:px-10
                py-3
                rounded-2xl
                text-sm
                md:text-lg
                font-bold
                shadow-[0_15px_40px_rgba(37,99,235,0.35)]
                transition-all
                duration-300
              "
            >
              Explore Our Services
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}






// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const rotatingTexts = [
//   "Laser Cutting",
//   "ACP Boards",
//   "LED Acrylic Letters",
//   "Steel Letters",
//   "Glow Sign Board",
//   "Indoor Branding",
//   "Glass OWV & Vinyl",
//   "Neon Signage",
//   "Flex Printing",
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % rotatingTexts.length);
//     }, 2100);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-gray-100 section-padding overflow-hidden relative">
//       <div className="container-custom relative">

//         {/* CENTER CONTENT */}
//         <div className="text-center max-w-5xl mx-auto relative z-20">

//           {/* MAIN LOGO WITH FEATHERS */}
//           <div className="relative flex justify-center items-center mb-5">

//             {/* LEFT FEATHER */}
//             <motion.div
//               animate={{
//                 y: [0, -12, 8, -6, 0],
//                 x: [0, 10, -6, 5, 0],
//                 rotate: [-6, 3, -2, 2, -6],
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="
//                 absolute
//                 left-[0%]
//                 sm:left-[5%]
//                 md:left-[8%]
//                 lg:left-[10%]
//                 top-1/2
//                 -translate-y-1/2
//                 z-0
//                 pointer-events-none
//               "
//             >
//               <Image
//                 src="/fl2.png"
//                 alt="Left Feather"
//                 width={360}
//                 height={360}
//                 priority
//                 className="
//                   w-[120px]
//                   sm:w-[150px]
//                   md:w-[220px]
//                   xl:w-[300px]
//                   2xl:w-[360px]
//                   h-auto
//                   object-contain
//                   opacity-90
//                   drop-shadow-[0_0_25px_rgba(255,180,0,0.18)]
//                 "
//               />
//             </motion.div>

//             {/* RIGHT FEATHER */}
//             <motion.div
//               animate={{
//                 y: [0, 12, -8, 6, 0],
//                 x: [0, -10, 6, -5, 0],
//                 rotate: [6, -3, 2, -2, 6],
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="
//                 absolute
//                 right-[0%]
//                 sm:right-[5%]
//                 md:right-[8%]
//                 lg:right-[10%]
//                 top-1/2
//                 -translate-y-1/2
//                 z-0
//                 pointer-events-none
//               "
//             >
//               <Image
//                 src="/fl3.png"
//                 alt="Right Feather"
//                 width={360}
//                 height={360}
//                 priority
//                 className="
//                   w-[120px]
//                   sm:w-[150px]
//                   md:w-[220px]
//                   xl:w-[300px]
//                   2xl:w-[360px]
//                   h-auto
//                   object-contain
//                   opacity-90
//                   drop-shadow-[0_0_25px_rgba(0,180,255,0.18)]
//                 "
//               />
//             </motion.div>

//             {/* MAIN LOGO */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.85, y: -20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="relative z-20"
//             >
//               <Image
//                 src="/Logo main.png"
//                 alt="Eastpoint Advertising Logo"
//                 width={500}
//                 height={500}
//                 priority
//                 className="
//                   w-[300px]
//                   sm:w-[360px]
//                   md:w-[430px]
//                   lg:w-[520px]
//                   xl:w-[620px]
//                   h-auto
//                   object-contain
//                   drop-shadow-2xl
//                   transition-all
//                   duration-500
//                   hover:scale-105
//                 "
//               />
//             </motion.div>

//           </div>

//           {/* HEADING */}
//           <motion.h2
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="
//               text-xl
//               sm:text-2xl
//               md:text-3xl
//               lg:text-4xl
//               text-gray-900
//               leading-snug
//               px-8
//               md:px-16
//             "
//           >
//             Premium Signage & Branding Solutions
//           </motion.h2>

//           {/* SINCE */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="mt-5"
//           >
//             <span className="text-red-500 text-xl md:text-3xl font-bold">
//               Since 2002
//             </span>
//           </motion.div>

//           {/* ROTATING TEXT */}
//           <div className="h-[120px] flex items-center justify-center mt-8 overflow-hidden px-4">
//             <AnimatePresence mode="wait">
//               <motion.h3
//                 key={rotatingTexts[index]}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -40 }}
//                 transition={{ duration: 0.5 }}
//                 className="
//                   text-4xl
//                   sm:text-5xl
//                   md:text-6xl
//                   font-extrabold
//                   bg-gradient-to-r
//                   from-blue-900
//                   via-blue-600
//                   to-cyan-400
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 {rotatingTexts[index]}
//               </motion.h3>
//             </AnimatePresence>
//           </div>

//           {/* BUTTON */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="mt-8"
//           >
//             <motion.a
//               href="/services"
//               whileHover={{
//                 scale: 1.05,
//                 y: -4,
//               }}
//               whileTap={{
//                 scale: 0.95,
//               }}
//               className="
//                 inline-flex
//                 items-center
//                 justify-center
//                 bg-gradient-to-r
//                 from-blue-900
//                 to-blue-600
//                 text-white
//                 px-8
//                 md:px-10
//                 py-4
//                 rounded-2xl
//                 text-base
//                 md:text-xl
//                 font-bold
//                 shadow-[0_15px_40px_rgba(37,99,235,0.35)]
//                 transition-all
//                 duration-300
//               "
//             >
//               Explore Our Services
//             </motion.a>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }