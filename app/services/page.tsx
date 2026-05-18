// import Image from "next/image";

// const services = [
//   {
//     title: "Laser Cutting",
//     desc: "Precision laser cutting solutions for modern signage and industrial branding.",
//     image: "/services/laser.jpg",
//   },
//   {
//     title: "ACP Boards",
//     desc: "Premium ACP board installation for shops, offices and showrooms.",
//     image: "/services/acp.jpeg",
//   },
//   {
//     title: "LED Acrylic Letters",
//     desc: "Modern illuminated acrylic signage with premium finishing.",
//     image: "/services/led.png",
//   },
//   {
//     title: "Steel Letters",
//     desc: "Durable stainless steel signage for luxury branding.",
//     image: "/services/steel.jpg",
//   },
//   {
//     title: "Glow Sign Board",
//     desc: "Bright and attractive glow sign boards for business visibility.",
//     image: "/services/glow.jpeg",
//   },
//   {
//     title: "Indoor Branding",
//     desc: "High-quality branding solutions for interiors and promotions.",
//     image: "/services/indoor.jpg",
//   },
//   {
//     title: "Glass OWV & Vinyl",
//     desc: "Glass branding and one-way vision sticker solutions.",
//     image: "/services/glass.jpeg",
//   },
//   {
//     title: "Neon Signage",
//     desc: "Eye-catching neon signs for modern branding and advertising.",
//     image: "/services/neon.jpeg",
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <main className="section-padding bg-gray-50">

//       <div className="container-custom">

//         {/* HEADING */}
//         <div className="text-center mb-16">

//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
//             Our Services
//           </h1>

//           <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
//             Complete signage and branding solutions designed
//             to help your business stand out with premium quality
//             and modern finishing.
//           </p>

//         </div>

//         {/* SERVICES GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {services.map((service) => (
//             <div
//               key={service.title}
//               className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
//             >

//               {/* IMAGE */}
//               <div className="relative w-full h-64 overflow-hidden">

//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   sizes="100vw"
//                   className="object-cover hover:scale-110 transition duration-500"
//                 />

//                 {/* OVERLAY */}
//                 <div className="absolute inset-0 bg-black/10" />

//               </div>

//               {/* CONTENT */}
//               <div className="p-8">

//                 <h2 className="text-2xl font-bold text-gray-900">
//                   {service.title}
//                 </h2>

//                 <p className="mt-4 text-gray-600 leading-7">
//                   {service.desc}
//                 </p>

//                 <a
//                   href="tel:+91959233881"
//                   className="mt-6 inline-block bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
//                 >
//                   Call Us for more details
//                 </a>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>

//     </main>
//   );
// }



// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const services = [
//   {
//     title: "Laser Cutting",
//     desc: "Precision laser cutting solutions for modern signage and industrial branding.",
//     images: [
//       "/services/laser.jpg",
//       "/services/laser1.jpeg",
//       "/services/laser2.jpeg",
//       "/services/laser3.jpeg",
//       "/services/laser4.jpeg",
//       // "/services/laser5.jpeg",
//       "/services/laser6.jpg",
//     ],
//   },
//   {
//     title: "ACP Boards",
//     desc: "Premium ACP board installation for shops, offices and showrooms.",
//     images: [
//       "/services/acp.jpeg",
//       "/services/acp2.jpg",
//       "/services/acp3.jpg",
//     ],
//   },
//   {
//     title: "LED Acrylic Letters",
//     desc: "Modern illuminated acrylic signage with premium finishing.",
//     images: [
//       "/services/led.png",
//       "/services/led2.jpg",
//       "/services/led3.jpg",
//     ],
//   },
//   {
//     title: "Glow Sign Board",
//     desc: "Durable stainless steel signage for luxury branding.",
//     images: [
//       "/services/steel.jpg",
//       "/services/steel2.jpg",
//       "/services/steel3.jpg",
//     ],
//   },
//   {
//     title: "Indoor Branding",
//     desc: "Durable stainless steel signage for luxury branding.",
//     images: [
//       "/services/steel.jpg",
//       "/services/steel2.jpg",
//       "/services/steel3.jpg",
//     ],
//   },
//   {
//     title: "Glass OWV & Vinyl",
//     desc: "Durable stainless steel signage for luxury branding.",
//     images: [
//       "/services/steel.jpg",
//       "/services/steel2.jpg",
//       "/services/steel3.jpg",
//     ],
//   },
//   {
//     title: "Neon Signage",
//     desc: "Durable stainless steel signage for luxury branding.",
//     images: [
//       "/services/neon1.jpeg",
//       "/services/neon2.jpeg",
//       "/services/neon3.jpeg",
//       "/services/neon4.jpeg",
//       "/services/neon5.jpeg",
//       "/services/neon6.jpeg",
//     ],
//   },
// ];

// function ServiceCard({ service }: any) {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % service.images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [service.images.length]);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % service.images.length);
//   };

//   const prevSlide = () => {
//     setCurrent(
//       (prev) => (prev - 1 + service.images.length) % service.images.length
//     );
//   };

//   return (
//     <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">

//       {/* IMAGE SLIDER */}
//       <div className="relative w-full h-64 overflow-hidden">

//         <div
//           className="flex h-full transition-transform duration-700 ease-in-out"
//           style={{
//             transform: `translateX(-${current * 100}%)`,
//           }}
//         >
//           {service.images.map((img: string, index: number) => (
//             <div key={index} className="relative min-w-full h-64">
//               <Image
//                 src={img}
//                 alt={service.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* OVERLAY */}
//         <div className="absolute inset-0 bg-black/10" />

//         {/* LEFT BUTTON */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition z-10"
//         >
//           <ChevronLeft className="w-5 h-5 text-black" />
//         </button>

//         {/* RIGHT BUTTON */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition z-10"
//         >
//           <ChevronRight className="w-5 h-5 text-black" />
//         </button>

//         {/* DOTS */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
//           {service.images.map((_: any, index: number) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`transition-all duration-300 rounded-full ${
//                 current === index
//                   ? "w-6 h-2 bg-white"
//                   : "w-2 h-2 bg-white/60"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="p-8">
//         <h2 className="text-2xl font-bold text-gray-900">
//           {service.title}
//         </h2>

//         <p className="mt-4 text-gray-600 leading-7">
//           {service.desc}
//         </p>

//         <a
//           href="tel:+91959233881"
//           className="mt-6 inline-block bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
//         >
//           More details
//         </a>
//       </div>
//     </div>
//   );
// }

// export default function ServicesPage() {
//   return (
//     <main className="section-padding bg-gray-50">
//       <div className="container-custom">

//         {/* HEADING */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
//             Explore our work
//           </h1>

//           <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
//             Complete signage and branding solutions designed
//             to help your business stand out with premium quality
//             and modern finishing.
//           </p>
//         </div>

//         {/* SERVICES GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <ServiceCard key={index} service={service} />
//           ))}
//         </div>

//       </div>
//     </main>
//   );
// }









"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Laser Cutting",
    desc: "Precision laser cutting solutions for modern signage and industrial branding.",
    image: "/services/laser.jpg",
  },
  {
    title: "ACP Boards",
    desc: "Premium ACP board installation for shops, offices and showrooms.",
    image: "/services/acp.jpeg",
  },
  {
    title: "LED Acrylic Letters",
    desc: "Modern illuminated acrylic signage with premium finishing.",
    image: "/services/led.png",
  },
  {
    title: "Steel Letters",
    desc: "Durable stainless steel signage for luxury branding.",
    image: "/services/steel.jpg",
  },
  {
    title: "Glow Sign Board",
    desc: "Bright and attractive glow sign boards for business visibility.",
    image: "/services/glow.jpeg",
  },
  {
    title: "Indoor Branding",
    desc: "High-quality branding solutions for interiors and promotions.",
    image: "/services/indoor.jpg",
  },
  {
    title: "Glass OWV & Vinyl",
    desc: "Glass branding and one-way vision sticker solutions.",
    image: "/services/glass.jpeg",
  },
  {
    title: "Neon Signage",
    desc: "Eye-catching neon signs for modern branding and advertising.",
    image: "/services/neon.jpeg",
  },
];

export default function ServicesPage() {
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
    <main ref={sectionRef} className="section-padding bg-gray-50">

      <div className="container-custom">

        {/* HEADING */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Complete signage and branding solutions designed to help your business
            stand out with premium quality and modern finishing.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white rounded-3xl overflow-hidden shadow-md border
              transition-all duration-700 ease-out
              hover:-translate-y-3 hover:shadow-2xl hover:border-gray-300
              ${
                visible
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-90 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >

              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h2>

                <p className="mt-4 text-gray-600 leading-7">
                  {service.desc}
                </p>

                <a
                  href="tel:+91959233881"
                  className="mt-6 inline-block bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                  Call Us for more details
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}