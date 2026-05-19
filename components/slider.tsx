// "use client"

// import Image from "next/image"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Autoplay, Pagination } from "swiper/modules"

// import "swiper/css"
// import "swiper/css/pagination"

// const slides = [
//   "/banner.png",
//   "/laser.jpg",
//   "/banner2.png",
//   "/a.jpeg",
//   "/b.jpeg",
//   "/c.jpeg",
//   "/d.jpeg",
//   "/e.jpeg",
//   "/f.jpeg",
//   "/g.jpeg",
//   "/banner 3.png",
// ]

// export default function Slider() {
//   return (
//     <section className="relative w-full overflow-hidden bg-black">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         speed={1000}
//         loop
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-[70vh] overflow-hidden">

//               {/* BLURRED BACKGROUND */}
//               <Image
//                 src={slide}
//                 alt="background"
//                 fill
//                 priority
//                 sizes="100vw"
//                 className="object-cover blur-2xl scale-110 opacity-350"
//               />

//               {/* DARK OVERLAY */}
//               <div className="absolute inset-0 bg-black/40 z-10" />

//               {/* MAIN IMAGE */}
//               <div className="relative z-20 flex items-center justify-center w-full h-full p-4">
//                 <div className="relative w-full h-full max-w-6xl">

//                   <Image
//                     src={slide}
//                     alt="slide"
//                     fill
//                     priority
//                     sizes="100vw"
//                     className="object-contain"
//                   />

//                 </div>
//               </div>

//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   )
// }



"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const slides = [
  // "/banner.png",
  // "/laser.jpg",
  // "/banner2.png",
  "/a1.jpeg",
  "/go.jpeg",
  "/hz.jpeg",
  "/b.jpeg",
  "/adh.jpeg",
  "/d.jpeg",
  "/ka.jpeg",
  "/f.jpeg",     
  "/g.jpeg",
  "/wo.jpeg",
  "/do.jpeg",
  "/co.jpeg",
  "/sps.jpeg",
]

export default function Slider() {
  return (
    <section className="relative w-full overflow-hidden bg-black">

      {/* HEADING */}
      <div className="relative z-30 py-8 bg-white text-center">

        <h2
          className="
            text-xl 
            md:text-2xl
            font-bold
            italic
            tracking-wide
            text-gray-900
          "
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Some Of Our{" "}
          <span className="text-blue-600">
            Best Works...
          </span>
        </h2>

        <div className="flex items-center justify-center mt-4 gap-3">
          <div className="w-16 h-[2px] bg-blue-600 rounded-full" />
          <div className="w-3 h-3 rounded-full bg-blue-600" />
          <div className="w-16 h-[2px] bg-blue-600 rounded-full" />
        </div>

        {/* <p
          className="
            mt-4
            text-gray-600
            text-sm
            md:text-lg
            tracking-[3px]
            uppercase
          "
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Premium Signage & Creative Branding
        </p> */}

      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[70vh] overflow-hidden">

              {/* BLURRED BACKGROUND */}
              <Image
                src={slide}
                alt="background"
                fill
                priority
                sizes="100vw"
                className="object-cover blur-2xl scale-110 opacity-40"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 z-10" />

              {/* MAIN IMAGE */}
              <div className="relative z-20 flex items-center justify-center w-full h-full p-4">
                <div className="relative w-full h-full max-w-6xl">

                  <Image
                    src={slide}
                    alt="slide"
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain"
                  />

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}