// const services = [
//   "Laser Cutting",
//   "ACP Boards",
//   "LED Acrylic Letters",
//   "Steel Letters",
//   "Flex Glow Signs",
//   "NL Boards",
//   "Sunboard Printing",
//   "Glass OWV",
//   "Flex Printing",
// ];

// export default function Services() {
//   return (
//     <section className="section-padding">
//       <div className="container-custom">

//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold">
//             Our Services
//           </h2>

//           <p className="text-gray-600 mt-4">
//             Complete branding and signage solutions for your business.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div
//               key={service}
//               className="bg-white rounded-2xl shadow-md p-8 border hover:shadow-xl transition"
//             >
//               <h3 className="text-2xl font-semibold">
//                 {service}
//               </h3>

//               <p className="mt-4 text-gray-600">
//                 High quality {service.toLowerCase()} services
//                 with premium finishing and modern designs.
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }






"use client";

import { useEffect, useState, useRef } from "react";

const services = [
  "Laser Cutting",
  "ACP Boards",
  "LED Acrylic Letters",
  "Steel Letters",
  "Flex Glow Signs",
  "NL Boards",
  "Sunboard Printing",
  "Glass OWV",
  "Flex Printing",
];

export default function Services() {
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
    <section ref={sectionRef} className="section-padding bg-gray-50">
      <div className="container-custom">

        {/* HEADER */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold">Our Services</h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Complete branding and signage solutions for your business.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service}
              className={`bg-white p-8 rounded-2xl border shadow-sm
              transition-all duration-700 ease-out
              hover:-translate-y-3 hover:shadow-2xl hover:border-gray-300
              ${
                visible
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-90 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <h3 className="text-xl font-semibold text-gray-800 transition">
                {service}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                High-quality {service.toLowerCase()} with premium finishing and modern design.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}