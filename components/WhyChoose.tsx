// const features = [
//   {
//     title: "Premium Quality",
//     desc: "We use high-quality materials with professional finishing.",
//   },
//   {
//     title: "Modern Designs",
//     desc: "Creative signage and branding solutions for every business.",
//   },
//   {
//     title: "Fast Delivery",
//     desc: "Quick production and installation with reliable service.",
//   },
//   {
//     title: "Affordable Pricing",
//     desc: "Competitive pricing without compromising quality.",
//   },
// ];

// export default function WhyChoose() {
//   return (
//     <section className="bg-gray-100 section-padding">
//       <div className="container-custom">

//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold">
//             Why Choose Us
//           </h2>

//           <p className="mt-4 text-gray-600">
//             Trusted, premium quality, and honest service with experience.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((item) => (
//             <div
//               key={item.title}
//               className="bg-white p-8 rounded-2xl shadow-md"
//             >
//               <h3 className="text-2xl font-semibold">
//                 {item.title}
//               </h3>

//               <p className="mt-4 text-gray-600">
//                 {item.desc}
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
  BadgeCheck,
  Palette,
  Truck,
  Wallet,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    title: "Premium Quality",
    desc: "We use top-grade materials with flawless finishing for long-lasting branding solutions.",
    icon: BadgeCheck,
  },
  {
    title: "Modern Designs",
    desc: "Creative and eye-catching signage crafted to elevate your business identity.",
    icon: Palette,
  },
  {
    title: "Fast Delivery",
    desc: "Quick production and timely installation with reliable customer support.",
    icon: Truck,
  },
  {
    title: "Affordable Pricing",
    desc: "Cost-effective solutions with premium quality and professional service.",
    icon: Wallet,
  },
];

export default function WhyChoose() {
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
      className="relative overflow-hidden py-24 bg-[#0b1120]"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <div
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 text-blue-300 text-sm font-medium backdrop-blur-md">
            Why Businesses Trust Us
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Why <span className="text-blue-400">Choose Us</span>
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Delivering innovative signage and branding solutions with quality,
            creativity, and professional service you can rely on.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-700 hover:-translate-y-4 hover:border-blue-400/40 hover:bg-white/10 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-400/10" />

                {/* Number */}
                <span className="absolute top-6 right-6 text-5xl font-black text-white/5">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition duration-500">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-300 leading-relaxed text-[15px]">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="relative z-10 mt-8 flex items-center text-blue-400 font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                  Learn More
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </div>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}