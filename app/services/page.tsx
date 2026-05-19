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
                  href="tel:+919592338881"
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








// "use client";

// import { useEffect, useState, useRef } from "react";
// import Image from "next/image";
// import {
//   ChevronLeft,
//   ChevronRight,
//   X,
// } from "lucide-react";

// const services = [
//   {
//     title: "Laser Cutting",
//     desc: "Precision laser cutting solutions for modern signage and industrial branding.",
//     images: [
//       "/services/laser.jpg",
//       "/services/laser2.jpg",
//       "/services/laser3.jpg",
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
//     title: "Steel Letters",
//     desc: "Durable stainless steel signage for luxury branding.",
//     images: [
//       "/services/steel.jpg",
//       "/services/steel2.jpg",
//       "/services/steel3.jpg",
//     ],
//   },
//   {
//     title: "Glow Sign Board",
//     desc: "Bright and attractive glow sign boards for business visibility.",
//     images: [
//       "/services/glow.jpeg",
//       "/services/glow2.jpg",
//       "/services/glow3.jpg",
//     ],
//   },
//   {
//     title: "Indoor Branding",
//     desc: "High-quality branding solutions for interiors and promotions.",
//     images: [
//       "/services/indoor.jpg",
//       "/services/indoor2.jpg",
//       "/services/indoor3.jpg",
//     ],
//   },
//   {
//     title: "Glass OWV & Vinyl",
//     desc: "Glass branding and one-way vision sticker solutions.",
//     images: [
//       "/services/glass.jpeg",
//       "/services/glass2.jpg",
//       "/services/glass3.jpg",
//     ],
//   },
//   {
//     title: "Neon Signage",
//     desc: "Eye-catching neon signs for modern branding and advertising.",
//     images: [
//       "/services/neon3 copy.jpeg",
//       "/services/neon4 copy.jpg",
//       "/services/neon1 copy.jpg",
//       "/services/neon2 copy.jpeg"
//     ],
//   },
// ];

// export default function ServicesPage() {
//   const sectionRef = useRef(null);

//   const [visible, setVisible] = useState(false);

//   const [selectedService, setSelectedService] = useState<any>(null);
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   const nextImage = () => {
//     setCurrentImage((prev: number) =>
//       prev === selectedService.images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImage((prev: number) =>
//       prev === 0 ? selectedService.images.length - 1 : prev - 1
//     );
//   };

//   return (
//     <>
//       <main
//         ref={sectionRef}
//         className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-gray-50 to-white"
//       >
//         {/* BACKGROUND EFFECTS */}
//         <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/20 blur-3xl rounded-full" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 blur-3xl rounded-full" />

//         <div className="container mx-auto px-4 relative z-10">
//           {/* HEADING */}
//           <div
//             className={`text-center mb-20 transition-all duration-700 ${
//               visible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-10"
//             }`}
//           >
//             <span className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium shadow-md">
//               Premium Branding Solutions
//             </span>

//             <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-gray-900">
//               Our <span className="text-blue-600">Services</span>
//             </h1>

//             <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
//               Complete signage and branding solutions designed to help your
//               business stand out with premium quality and modern finishing.
//             </p>
//           </div>

//           {/* SERVICES GRID */}
//           <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
//             {services.map((service, index) => (
//               <div
//                 key={service.title}
//                 className={`group bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200 shadow-lg transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:border-blue-300 ${
//                   visible
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-12"
//                 }`}
//                 style={{
//                   transitionDelay: `${index * 120}ms`,
//                 }}
//               >
//                 {/* IMAGE */}
//                 <div className="relative w-full h-72 overflow-hidden">
//                   <Image
//                     src={service.images[0]}
//                     alt={service.title}
//                     fill
//                     className="object-cover transition duration-700 group-hover:scale-110"
//                   />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-8">
//                   <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition">
//                     {service.title}
//                   </h2>

//                   <p className="mt-4 text-gray-600 leading-7">
//                     {service.desc}
//                   </p>

//                   {/* BUTTON OPENS SLIDER */}
//                   <button
//                     onClick={() => {
//                       setSelectedService(service);
//                       setCurrentImage(0);
//                     }}
//                     className="mt-6 inline-flex items-center justify-center bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
//                   >
//                     View Gallery
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       {/* FULL SCREEN GALLERY MODAL */}
//       {selectedService && (
//         <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
//           {/* CLOSE BUTTON */}
//           <button
//             onClick={() => setSelectedService(null)}
//             className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition duration-300"
//           >
//             <X className="w-6 h-6" />
//           </button>

//           {/* LEFT BUTTON */}
//           <button
//             onClick={prevImage}
//             className="absolute left-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition duration-300"
//           >
//             <ChevronLeft className="w-7 h-7" />
//           </button>

//           {/* IMAGE */}
//           <div className="relative w-full max-w-6xl h-[80vh] rounded-3xl overflow-hidden">
//             <Image
//               src={selectedService.images[currentImage]}
//               alt={selectedService.title}
//               fill
//               className="object-contain"
//             />
//           </div>

//           {/* RIGHT BUTTON */}
//           <button
//             onClick={nextImage}
//             className="absolute right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition duration-300"
//           >
//             <ChevronRight className="w-7 h-7" />
//           </button>

//           {/* TITLE */}
//           <div className="absolute top-6 left-6 text-white">
//             <h2 className="text-3xl font-bold">
//               {selectedService.title}
//             </h2>
//           </div>

//           {/* THUMBNAILS */}
//           <div className="absolute bottom-8 flex gap-3 overflow-x-auto px-4">
//             {selectedService.images.map((img: string, index: number) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentImage(index)}
//                 className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition duration-300 ${
//                   currentImage === index
//                     ? "border-blue-500 scale-105"
//                     : "border-white/20"
//                 }`}
//               >
//                 <Image
//                   src={img}
//                   alt="thumbnail"
//                   fill
//                   className="object-cover"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }