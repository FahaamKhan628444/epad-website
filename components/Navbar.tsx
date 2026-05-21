// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 bg-white bg-white/90 backdrop-blur-md shadow-sm"> 
//       <div className="container-custom flex items-center justify-between py-4">

//         {/* LOGO */}
//         <Link href="/" className="flex items-center gap-3">
//   <Image
//     src="/logo.png"
//     alt="logo"
//     width={170}
//     height={170}
//     className="object-contain"
//   />

//   <div className="flex flex-col">
//   {/* <span className="text-2xl font-bold tracking-wide text-blue-900">
//     Eastpoint Advertising
//   </span> */}

//   {/* <span className="mt-1 text-sm font-medium tracking-[0.2em] text-red-500 uppercase">
//     One Small Destination for Complete Advertising
//   </span> */}
// </div>
// </Link>

//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex items-center gap-8 font-medium">
//           <Link href="/">Home</Link>
//           <Link href="/services">Services</Link>
//           {/* <Link href="/gallery">Gallery</Link> */}
//           <Link href="/about">About</Link>
//           <Link href="/contact">Contact</Link>
//         </div>

//         {/* MOBILE BUTTON */}
//         <button
//           className="md:hidden text-3xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="flex flex-col p-4 gap-4">
//             <Link href="/" onClick={() => setMenuOpen(false)}>
//               Home
//             </Link>

//             <Link href="/services" onClick={() => setMenuOpen(false)}>
//               Services
//             </Link>
// {/* 
//             <Link href="/gallery" onClick={() => setMenuOpen(false)}>
//               Gallery
//             </Link> */}

//             <Link href="/about" onClick={() => setMenuOpen(false)}>
//               About
//             </Link>

//             <Link href="/contact" onClick={() => setMenuOpen(false)}>
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }






// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { Menu, X, Phone } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">

//       <div className="container-custom">

//         <div className="flex items-center justify-between py-4">

//           {/* LOGO */}
//           <Link
//             href="/"
//             className="flex items-center gap-3 group"
//           >
//             <Image
//               src="/Logo.png"
//               alt="logo"
//               width={170}
//               height={170}
//               className="object-contain transition duration-300 group-hover:scale-105"
//             />

//             {/* TEXT */}
//             {/* 
//             <div className="hidden lg:block">
//               <h2 className="text-2xl font-bold text-blue-900">
//                 Eastpoint Advertising
//               </h2>

//               <p className="text-xs tracking-[0.2em] uppercase text-red-500 mt-1">
//                 Complete Advertising Solutions
//               </p>
//             </div>
//             */}
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-2 bg-gray-100/80 p-2 rounded-full border border-gray-200">

//             <Link
//               href="/"
//               className="px-5 py-2 rounded-full font-medium text-gray-700 hover:bg-blue-900 hover:text-white transition duration-300"
//             >
//               Home
//             </Link>

//             <Link
//               href="/services"
//               className="px-5 py-2 rounded-full font-medium text-gray-700 hover:bg-blue-900 hover:text-white transition duration-300"
//             >
//               Services
//             </Link>

//             <Link
//               href="/about"
//               className="px-5 py-2 rounded-full font-medium text-gray-700 hover:bg-blue-900 hover:text-white transition duration-300"
//             >
//               About
//             </Link>

//             <Link
//               href="/contact"
//               className="px-5 py-2 rounded-full font-medium text-gray-700 hover:bg-blue-900 hover:text-white transition duration-300"
//             >
//               Contact
//             </Link>

//           </div>

//           {/* CALL BUTTON */}
//           <div className="hidden md:flex items-center gap-4">

//             <a
//               href="tel:+919592338881"
//               className="flex items-center gap-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300"
//             >
//               <Phone className="w-5 h-5" />

//               <span>
//                 Call Now
//               </span>
//             </a>

//           </div>

//           {/* MOBILE BUTTON */}
//           <button
//             className="md:hidden bg-blue-900 text-white p-3 rounded-xl shadow-lg"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>

//         </div>

//       </div>

//       {/* MOBILE MENU */}
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">

//           <div className="container-custom py-6 flex flex-col gap-3">

//             <Link
//               href="/"
//               onClick={() => setMenuOpen(false)}
//               className="bg-gray-50 hover:bg-blue-900 hover:text-white px-5 py-4 rounded-2xl font-semibold transition duration-300"
//             >
//               Home
//             </Link>

//             <Link
//               href="/services"
//               onClick={() => setMenuOpen(false)}
//               className="bg-gray-50 hover:bg-blue-900 hover:text-white px-5 py-4 rounded-2xl font-semibold transition duration-300"
//             >
//               Services
//             </Link>

//             <Link
//               href="/about"
//               onClick={() => setMenuOpen(false)}
//               className="bg-gray-50 hover:bg-blue-900 hover:text-white px-5 py-4 rounded-2xl font-semibold transition duration-300"
//             >
//               About
//             </Link>

//             <Link
//               href="/contact"
//               onClick={() => setMenuOpen(false)}
//               className="bg-gray-50 hover:bg-blue-900 hover:text-white px-5 py-4 rounded-2xl font-semibold transition duration-300"
//             >
//               Contact
//             </Link>

//             {/* MOBILE CALL BUTTON */}
//             <a
//               href="tel:+919592338881"
//               className="mt-3 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 rounded-2xl font-bold shadow-lg"
//             >
//               <Phone className="w-5 h-5" />

//               Call Now
//             </a>

//           </div>

//         </div>
//       )}
//     </nav>
//   );
// }





// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { Menu, X, Phone } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">

//       <div className="container-custom">

//         <div className="flex items-center justify-between py-3 md:py-4">

//           {/* LOGO */}
//           <Link
//             href="/"
//             className="flex items-center gap-3 group max-h-[60px]"
//           >
//             <Image
//               src="/Logo.png"
//               alt="logo"
//               width={170}
//               height={170}
//               className="w-[110px] sm:w-[140px] md:w-[170px] h-auto object-contain transition duration-300 group-hover:scale-105"
//             />
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-2 bg-gray-100/80 p-2 rounded-full border border-gray-200">

//             <Link
//               href="/"
//               className="px-5 py-2 rounded-full font-medium text-gray-700 hover:bg-blue-900 hover:text-white transition duration-300"
//             >
//               Home
//             </Link>

//             <Link
//               href="/services"
//               className="px-5 py-2 rounded-full font-medium text-gray-700 hover:bg-blue-900 hover:text-white transition duration-300"
//             >
//               Services
//             </Link>

//             <Link
//               href="/about"
//               className="px-5 py-2 rounded-full font-medium text-gray-700 hover:bg-blue-900 hover:text-white transition duration-300"
//             >
//               About
//             </Link>

//             <Link
//               href="/contact"
//               className="px-5 py-2 rounded-full font-medium text-gray-700 hover:bg-blue-900 hover:text-white transition duration-300"
//             >
//               Contact
//             </Link>

//           </div>

//           {/* CALL BUTTON (DESKTOP) */}
//           <div className="hidden md:flex items-center gap-4">

//             <a
//               href="tel:+919592338881"
//               className="flex items-center gap-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300"
//             >
//               <Phone className="w-5 h-5" />
//               <span>Call Now</span>
//             </a>

//           </div>

//           {/* MOBILE BUTTON */}
//           <button
//             className="md:hidden bg-blue-900 text-white p-2.5 rounded-xl shadow-lg"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>

//         </div>

//       </div>

//       {/* MOBILE MENU */}
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">

//           <div className="container-custom py-5 flex flex-col gap-3">

//             <Link
//               href="/"
//               onClick={() => setMenuOpen(false)}
//               className="bg-gray-50 hover:bg-blue-900 hover:text-white px-5 py-4 rounded-2xl font-semibold transition duration-300"
//             >
//               Home
//             </Link>

//             <Link
//               href="/services"
//               onClick={() => setMenuOpen(false)}
//               className="bg-gray-50 hover:bg-blue-900 hover:text-white px-5 py-4 rounded-2xl font-semibold transition duration-300"
//             >
//               Services
//             </Link>

//             <Link
//               href="/about"
//               onClick={() => setMenuOpen(false)}
//               className="bg-gray-50 hover:bg-blue-900 hover:text-white px-5 py-4 rounded-2xl font-semibold transition duration-300"
//             >
//               About
//             </Link>

//             <Link
//               href="/contact"
//               onClick={() => setMenuOpen(false)}
//               className="bg-gray-50 hover:bg-blue-900 hover:text-white px-5 py-4 rounded-2xl font-semibold transition duration-300"
//             >
//               Contact
//             </Link>

//             {/* MOBILE CALL BUTTON */}
//             <a
//               href="tel:+919592338881"
//               className="mt-3 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 rounded-2xl font-bold shadow-lg"
//             >
//               <Phone className="w-5 h-5" />
//               Call Now
//             </a>

//           </div>
//         </div>
//       )}

//     </nav>
//   );
// }



"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500
          backdrop-blur-2xl
          border-b

          ${
            scrolled
              ? "bg-white/75 shadow-xl border-white/20 py-1"
              : "bg-white/40 border-transparent py-3"
          }
        `}
      >

        <div className="container-custom">

          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3 group max-h-[60px]"
            >
              <Image
  src="/epadnew.png"
  alt="logo"
  width={280}
  height={280}
  className="
    w-[220px]
    sm:w-[250px]  
    md:w-[250px]
    lg:w-[250px]  
    h-auto
    object-contain
    transition-all
    duration-500
    group-hover:scale-105
  "
/>
            </Link>

            {/* DESKTOP MENU */}
            <div
              className="
                hidden
                md:flex
                items-center
                gap-2
                bg-white/50
                backdrop-blur-xl
                border
                border-white/30
                shadow-lg
                px-2
                py-2
                rounded-full
              "
            >

              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <Link
                    href={item.href}
                    className="
                      relative
                      px-5
                      py-2.5
                      rounded-full
                      font-medium
                      text-gray-700
                      hover:text-white
                      transition-all
                      duration-300
                      hover:bg-gradient-to-r
                      hover:from-blue-900
                      hover:to-blue-700
                    "
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

            </div>

            {/* DESKTOP CALL BUTTON */}
            <div className="hidden md:flex items-center gap-4">

              <motion.a
                href="tel:+919592338881"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  bg-gradient-to-r
                  from-blue-900
                  to-blue-700
                  text-white
                  px-6
                  py-3
                  rounded-full
                  font-semibold
                  shadow-xl
                "
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </motion.a>

            </div>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="
                md:hidden
                bg-gradient-to-r
                from-blue-900
                to-blue-700
                text-white
                p-2.5
                rounded-2xl
                shadow-lg
              "
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>

          </div>

        </div>

      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              top-[80px]
              left-0
              w-full
              z-40
              md:hidden
              px-4
            "
          >

            <div
              className="
                bg-white/80
                backdrop-blur-2xl
                border
                border-white/20
                shadow-2xl
                rounded-3xl
                overflow-hidden
                p-4
              "
            >

              <div className="flex flex-col gap-3">

                {[
                  { name: "Home", href: "/" },
                  { name: "Services", href: "/services" },
                  { name: "About", href: "/about" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      bg-white/60
                      hover:bg-gradient-to-r
                      hover:from-blue-900
                      hover:to-blue-700
                      hover:text-white
                      px-5
                      py-4
                      rounded-2xl
                      font-semibold
                      transition-all
                      duration-300
                    "
                  >
                    {item.name}
                  </Link>
                ))}

                {/* MOBILE CALL BUTTON */}
                <motion.a
                  href="tel:+919592338881"
                  whileTap={{ scale: 0.95 }}
                  className="
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-3
                    bg-gradient-to-r
                    from-blue-900
                    to-blue-700
                    text-white
                    px-6
                    py-4
                    rounded-2xl
                    font-bold
                    shadow-xl
                  "
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.a>

              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR SPACING */}
      <div className="h-[90px]" />
    </>
  );
}