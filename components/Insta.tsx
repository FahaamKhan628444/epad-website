// import Image from "next/image";

// export default function Insta() {
//   return (
//     <section className="bg-pink-700 text-white section-padding">
//       <div className="container-custom text-center">

//         {/* HEADING */}
//         <h2 className="text-xl md:text-3xl font-bold">
//           Follow us on social media
//         </h2>

//         {/* INSTAGRAM ICON */}
//         <div className="mt-10 flex justify-center">

//           <a
//             href="https://www.instagram.com/epad_mlk?igsh=NGltMmoyeTQ2ZnUx"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:scale-110 transition duration-300"
//           >
//             <Image
//               src="/instagram.png"
//               alt="Instagram"
//               width={270}
//               height={160}
//               className="object-contain"
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

export default function Insta() {
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
      className="relative bg-pink-700 text-white section-padding overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-800 via-pink-700 to-pink-900 opacity-80" />

      {/* CONTENT */}
      <div className="relative container-custom text-center">

        {/* HEADING */}
        <h2
          className={`text-xl md:text-3xl font-bold transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Follow us on social media
        </h2>

        <p
          className={`mt-3 text-pink-100 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          See our latest signage work, designs & installations
        </p>

        {/* INSTAGRAM LINK CARD */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://www.instagram.com/epad_mlk?igsh=NGltMmoyeTQ2ZnUx"
            target="_blank"
            rel="noopener noreferrer"
            className={`group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6
              shadow-lg transition-all duration-700
              hover:scale-105 hover:bg-white/20 hover:shadow-2xl
              ${
                visible
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-90 translate-y-10"
              }
            `}
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={220}
              height={140}
              className="object-contain transition-transform duration-500 group-hover:rotate-3"
            />

            <p className="mt-4 font-semibold text-white">
              @epad_mlk
            </p>
          </a>
        </div>

      </div>
    </section>
  );
}