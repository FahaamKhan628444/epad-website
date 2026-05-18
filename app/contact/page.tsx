// import Image from "next/image";

// export default function ContactPage() {
//   return (
//     <main className="section-padding">

//       <div className="container-custom max-w-4xl">

//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold">
//             Contact Us
//           </h1>

//           <p className="mt-6 text-gray-600">
//             Get in touch for signage, printing and branding solutions.
//           </p>
//         </div>

//         <div className="bg-white shadow-xl rounded-3xl p-10 border">

//           <div className="grid md:grid-cols-2 gap-10">

//             <div>
//               <h2 className="text-3xl font-bold">
//                 Contact Information
//               </h2>

//               <div className="mt-8 space-y-6">

//                 <div>
//                   <p className="font-semibold">Phone</p>
//                   <p className="text-gray-600">+91 95923 38881</p>
//                   <p className="text-gray-600">+91 98154 38881</p>

//                 </div>

//                 {/* <div>
//                   <p className="font-semibold">Email</p>
//                   <p className="text-gray-600">
//                     info@fahaam.in
//                   </p>
//                 </div> */}

//                 <div>
//                   <p className="font-semibold">Address</p>
//                   <p className="text-gray-600">
//                     Main office- Opposite Govt. College, Malerkotla (Pb.) <br />
//                     Branch- Inside Delhi Gate, Malerkotla (Pb.)
//                   </p>
//                 </div>

//               </div>
//             </div>

//             <div className="flex items-center justify-center">

//  <div className="flex items-center justify-center">

//   <a
//     href="https://maps.google.com/?q=Opposite+Govt.+College+Malerkotla+Punjab"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300"
//   >

//     <iframe
//       src="https://www.google.com/maps?q=Opposite+Govt.+College+Malerkotla+Punjab&output=embed"
//       width="350"
//       height="300"
//       loading="lazy"
//       className="rounded-2xl border-0"
//     ></iframe>

//   </a>

// </div>

// </div>

//           </div>

//         </div>

//       </div>

//     </main>
//   );
// }








// import { Phone, MapPin } from "lucide-react";

// export default function ContactPage() {
//   return (
//     <main className="section-padding bg-gradient-to-b from-gray-50 to-white">

//       <div className="container-custom max-w-6xl">

//         {/* HEADING */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
//             Contact Us
//           </h1>

//           <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
//             Get in touch for premium signage, branding,
//             printing and advertising solutions.
//           </p>
//         </div>

//         {/* MAIN CARD */}
//         <div className="bg-white rounded-[35px] shadow-2xl overflow-hidden border border-gray-100">

//           <div className="grid lg:grid-cols-2">

//             {/* LEFT SIDE */}
//             <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white p-10 md:p-14 relative overflow-hidden">

//               {/* BACKGROUND BLUR */}
//               <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
//               <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />

//               <div className="relative z-10">

//                 <span className="bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm tracking-wider uppercase">
//                   Eastpoint Advertising
//                 </span>

//                 <h2 className="mt-8 text-4xl md:text-5xl font-bold leading-tight">
//                   Let’s Build <br />
//                   Your Brand Together
//                 </h2>

//                 <p className="mt-6 text-blue-100 text-lg leading-8">
//                   Trusted signage solutions with premium quality,
//                   modern designs and professional installation
//                   for businesses and brands.
//                 </p>

//                 {/* CONTACT ITEMS */}
//                 <div className="mt-12 space-y-8">

//                   {/* PHONE */}
//                   <div className="flex items-start gap-5">

//                     <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
//                       <Phone className="w-7 h-7 text-cyan-300" />
//                     </div>

//                     <div>
//                       <p className="text-gray-300 text-sm uppercase tracking-wider">
//                         Phone Number
//                       </p>

//                       <a
//                         href="tel:+919592338881"
//                         className="block mt-2 text-2xl font-semibold hover:text-cyan-300 transition"
//                       >
//                         +91 95923 38881
//                       </a>

//                       <a
//                         href="tel:+919815438881"
//                         className="block mt-1 text-2xl text-blue-100 hover:text-cyan-300 transition"
//                       >
//                         +91 98154 38881
//                       </a>
//                     </div>

//                   </div>

//                   {/* ADDRESS */}
//                   <div className="flex items-start gap-5">

//                     <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
//                       <MapPin className="w-7 h-7 text-pink-300" />
//                     </div>

//                     <div>
//                       <p className="text-gray-300 text-sm uppercase tracking-wider">
//                         Our Address
//                       </p>

//                       <p className="mt-2 text-lg leading-8 text-blue-100">
//                         Office – Opposite Govt. College,
//                         Malerkotla (Pb.)
//                         <br />
//                         Production unit – Inside Delhi Gate,
//                         Malerkotla (Pb.)
//                       </p>
//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>

//             {/* RIGHT SIDE GOOGLE MAP */}
//             <div className="p-6 md:p-8 bg-gray-50 flex items-center justify-center">

//               <a
//                 href="https://maps.google.com/?q=Opposite+Govt.+College+Malerkotla+Punjab"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-full group"
//               >

//                 <div className="bg-white p-4 rounded-[30px] shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2">

//                   <iframe
//                     src="https://www.google.com/maps?q=Opposite+Govt.+College+Malerkotla+Punjab&output=embed"
//                     width="100%"
//                     height="500"
//                     loading="lazy"
//                     className="rounded-[25px] border-0"
//                   ></iframe>

//                   <div className="mt-5 text-center">
//                     <span className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-2xl font-semibold group-hover:scale-105 transition">
//                       📍 Open in Google Maps
//                     </span>
//                   </div>

//                 </div>

//               </a>

//             </div>

//           </div>

//         </div>

//       </div>

//     </main>
//   );
// }





"use client";

import { useEffect, useState, useRef } from "react";
import { Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <main
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container-custom max-w-6xl">

        {/* HEADING */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Get in touch for premium signage, branding, printing and advertising solutions.
          </p>
        </div>

        {/* MAIN CARD */}
        <div
          className={`bg-white rounded-[35px] shadow-2xl overflow-hidden border border-gray-100
          transition-all duration-700 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="grid lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white p-10 md:p-14 relative overflow-hidden">

              {/* BACKGROUND BLUR */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" />

              <div className="relative z-10">

                <span className="bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm tracking-wider uppercase">
                  Eastpoint Advertising
                </span>

                <h2 className="mt-8 text-4xl md:text-5xl font-bold leading-tight">
                  Let’s Build <br />
                  Your Brand Together
                </h2>

                <p className="mt-6 text-blue-100 text-lg leading-8">
                  Trusted signage solutions with premium quality,
                  modern designs and professional installation.
                </p>

                {/* CONTACT ITEMS */}
                <div className="mt-12 space-y-8">

                  {/* PHONE */}
                  <div
                    className={`flex items-start gap-5 transition-all duration-700 delay-100 ${
                      visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                    }`}
                  >
                    <div className="bg-white/10 p-4 rounded-2xl border border-white/10 transition hover:scale-105">
                      <Phone className="w-7 h-7 text-cyan-300" />
                    </div>

                    <div>
                      <p className="text-gray-300 text-sm uppercase tracking-wider">
                        Phone Number
                      </p>

                      <a
                        href="tel:+919592338881"
                        className="block mt-2 text-xl font-semibold hover:text-cyan-300 transition"
                      >
                        +91 95923 38881
                      </a>

                      <a
                        href="tel:+919815438881"
                        className="block mt-1 text-xl text-blue-100 hover:text-cyan-300 transition"
                      >
                        +91 98154 38881
                      </a>
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div
                    className={`flex items-start gap-5 transition-all duration-700 delay-200 ${
                      visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                    }`}
                  >
                    <div className="bg-white/10 p-4 rounded-2xl border border-white/10 transition hover:scale-105">
                      <MapPin className="w-7 h-7 text-pink-300" />
                    </div>

                    <div>
                      <p className="text-gray-300 text-sm uppercase tracking-wider">
                        Our Address
                      </p>

                      <p className="mt-2 text-lg leading-8 text-white-100">
                        Office – Opposite Govt. College, Malerkotla (Pb.)
                        <br />
                        Production unit – Inside Delhi Gate, Malerkotla (Pb.)
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* RIGHT SIDE MAP */}
            <div className="p-6 md:p-8 bg-gray-50 flex items-center justify-center">

              <a
                href="https://maps.google.com/?q=Opposite+Govt.+College+Malerkotla+Punjab"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full group transition-all duration-700 delay-300 ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="bg-white p-4 rounded-[30px] shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2">

                  <iframe
                    src="https://www.google.com/maps?q=Opposite+Govt.+College+Malerkotla+Punjab&output=embed"
                    width="100%"
                    height="500"
                    loading="lazy"
                    className="rounded-[25px] border-0"
                  ></iframe>

                  <div className="mt-5 text-center">
                    <span className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-2xl font-semibold group-hover:scale-105 transition">
                      📍 Open in Google Maps
                    </span>
                  </div>

                </div>
              </a>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
}