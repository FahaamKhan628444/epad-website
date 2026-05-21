// // export default function CTA() {
// //   return (
// //     <section className="bg-blue-900 text-white section-padding">
// //       <div className="container-custom text-center">

// //         <h2 className="text-4xl md:text-5xl font-bold">
// //           Ready To Grow Your Brand?
// //         </h2>

// //         {/* <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
// //           Contact us today for premium signage, ACP boards,
// //           LED letters and printing solutions.
// //         </p> */}

// //         <div className="mt-8 flex justify-center gap-4 flex-wrap">

// //           <a
// //             href="tel:+919592338881"
// //             className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold"
// //           >
// //             Call Now
// //           </a>

// //           <a
// //             href="https://wa.me/919592338881"
// //             target="_blank"
// //             className="bg-green-500 px-8 py-4 rounded-xl font-semibold"
// //           >
// //             WhatsApp
// //           </a>

// //         </div>

// //       </div>
// //     </section>
// //   );
// // }






// import Image from "next/image";

// export default function CTA() {
//   return (
//     <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white section-padding overflow-hidden relative">

//       {/* BACKGROUND BLUR */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />

//       <div className="container-custom text-center relative z-10">

//         {/* HEADING */}
//         <h2 className="text-4xl md:text-6xl font-bold leading-tight">
//           Ready To Grow Your Brand?
//         </h2>

//         <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-8">
//           Contact us today.
//         </p>

//         {/* BUTTON IMAGES */}
//         <div className="mt-12 flex justify-center items-center gap-8 flex-wrap">

//           {/* CALL BUTTON */}
//           <a
//             href="tel:+919592338881"
//             className="hover:scale-110 transition duration-300"
//           >
//             <Image
//               src="/call8.png"
//               alt="Call Now"
//               width={130}
//               height={130}
//               className="object-contain drop-shadow-2xl"
//             />
//           </a>

//           {/* WHATSAPP BUTTON */}
//           <a
//             href="https://wa.me/919592338881"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:scale-110 transition duration-300"
//           >
//             <Image
//               src="/whats.png"
//               alt="WhatsApp"
//               width={80}
//               height={80}
//               className="object-contain drop-shadow-2xl"
//             />
//           </a>

//         </div>

//       </div>

//     </section>
//   );
// }




"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function CTA() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white section-padding overflow-hidden"
    >

      {/* BACKGROUND BLUR EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />

      <div className="container-custom text-center relative z-10">

        {/* HEADING */}
        <h2
          className={`text-3xl md:text-4xl font-bold leading-tight transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Ready To Grow Your Brand?
        </h2>

        {/* SUBTEXT */}
        <p
          className={`mt-6 text-sm md:text-lg text-blue-100 max-w-2xl mx-auto leading-8 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Contact us today for premium signage, ACP boards, LED letters and printing solutions.
        </p>

        {/* BUTTONS */}
        <div className="mt-12 flex justify-center items-center gap-20 flex-wrap">

          {/* CALL */}
          <a
            href="tel:+919592338881"
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="hover:scale-110 transition-all duration-300 active:scale-95 drop-shadow-2xl">
              <Image
                src="/calling.png"
                alt="Call Now"
                width={80}
                height={80}
                className="object-contain w-20 h-20"
              />
            </div>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919592338881"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="hover:scale-110 transition duration-300 active:scale-95 drop-shadow-2xl">
              <Image
                src="/whats.png"
                alt="WhatsApp"
                width={90}
                height={90}
                className="object-contain"
              />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}