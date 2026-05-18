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

const features = [
  {
    title: "Premium Quality",
    desc: "We use high-quality materials with professional finishing.",
  },
  {
    title: "Modern Designs",
    desc: "Creative signage and branding solutions for every business.",
  },
  {
    title: "Fast Delivery",
    desc: "Quick production and installation with reliable service.",
  },
  {
    title: "Affordable Pricing",
    desc: "Competitive pricing without compromising quality.",
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
    <section ref={sectionRef} className="bg-gray-100 section-padding">
      <div className="container-custom">

        {/* HEADER */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold">Why Choose Us</h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trusted quality, modern designs, and fast service for your business growth.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={item.title}
              className={`bg-white p-8 rounded-2xl border shadow-sm
              transition-all duration-700 ease-out
              hover:-translate-y-3 hover:shadow-2xl hover:border-gray-300
              ${
                visible
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-90 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}