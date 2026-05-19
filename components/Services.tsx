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






// "use client";

// import { useEffect, useState, useRef } from "react";

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
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className="section-padding bg-gray-50">
//       <div className="container-custom">

//         {/* HEADER */}
//         <div
//           className={`text-center mb-14 transition-all duration-700 ${
//             visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <h2 className="text-4xl font-bold">Our Services</h2>

//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             Complete branding and signage solutions for your business.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={service}
//               className={`bg-white p-8 rounded-2xl border shadow-sm
//               transition-all duration-700 ease-out
//               hover:-translate-y-3 hover:shadow-2xl hover:border-gray-300
//               ${
//                 visible
//                   ? "opacity-100 scale-100 translate-y-0"
//                   : "opacity-0 scale-90 translate-y-10"
//               }`}
//               style={{
//                 transitionDelay: `${index * 100}ms`,
//               }}
//             >
//               <h3 className="text-xl font-semibold text-gray-800 transition">
//                 {service}
//               </h3>

//               <p className="mt-4 text-gray-600 leading-relaxed">
//                 High-quality {service.toLowerCase()} with premium finishing and modern design.
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
import {
  Sparkles,
  PenTool,
  Layers3,
  Lightbulb,
  ScanLine,
  ShieldCheck,
  Printer,
  GlassWater,
  Paintbrush,
} from "lucide-react";

const services = [
  {
    title: "Laser Cutting",
    icon: ScanLine,
    desc: "Precision laser cutting solutions with clean finishing and modern detailing.",
  },
  {
    title: "ACP Boards",
    icon: Layers3,
    desc: "Premium ACP signage boards designed for durability and elegant branding.",
  },
  {
    title: "LED Acrylic Letters",
    icon: Lightbulb,
    desc: "Bright illuminated acrylic letters that enhance visibility and style.",
  },
  {
    title: "Steel Letters",
    icon: ShieldCheck,
    desc: "Elegant stainless steel lettering crafted for premium commercial branding.",
  },
  {
    title: "Flex Glow Signs",
    icon: Sparkles,
    desc: "High-impact glow sign boards with vibrant lighting and strong presence.",
  },
  {
    title: "NL Boards",
    icon: PenTool,
    desc: "Creative neon-light boards customized for shops and businesses.",
  },
  {
    title: "Sunboard Printing",
    icon: Printer,
    desc: "High-resolution sunboard printing for advertisements and promotions.",
  },
  {
    title: "Glass OWV",
    icon: GlassWater,
    desc: "Professional one-way vision glass graphics for branding and privacy.",
  },
  {
    title: "Flex Printing",
    icon: Paintbrush,
    desc: "Premium quality flex printing with vivid colors and long-lasting finish.",
  },
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
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200/30 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <div
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium tracking-wide shadow-md">
            Premium Signage Solutions
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Our <span className="text-blue-600">Services</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We create modern branding, printing, and signage solutions that
            help businesses stand out with premium quality and impactful design.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-xl p-8 shadow-lg transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-300 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                {/* Gradient Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition duration-300">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Glow Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}