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
  {
    image: "/happy.jpeg",
    title: "NL Acrlyic Letter",
    subtitle: "Without Light Acrlyic Steel Look Letters.",
  },
  {
    image: "/go.jpeg",
    title: "Steel Letters",
    subtitle: "NL 304 Steel Letters",
  },
  {
    image: "/hz1.jpeg",
    title: "LED Acrylic Letter",
    subtitle: "LED Acrylic Letter With ACP Board",
  },
  {
    image: "/optstore.jpeg",
    title: "NL Acrlyic Letters",
    subtitle: "Without Light Acrlyic Letters With ACP Background",
  },
  {
    image: "/uq.jpeg",
    title: "Golden Acrlyic Letters",
    subtitle: "Golden Finish Acrlyic Letters With Light",
  },
  {
    image: "/vh.jpeg",
    title: "Front Printing Acrlyic Letters",
    subtitle: "Front Printing On Acrlyic Letters With Back Light",
  },
  {
    image: "/kanew.jpeg",
    title: "Outdoor Branding With ACP Panels",
    subtitle: "Front Elevation ACP Panels With LED Letters",
  },
  {
    image: "/kaled.jpeg",
    title: "LED Clip ON Boards",
    subtitle: "LED Clip on Boards with digital Printing",
  },
  {
    image: "/gsuper.jpeg",
    title: "ACP Board with Lighting",
    subtitle: "Commercial Branding With ACP and Letters",
  },
  {
    image: "/basic.jpeg",
    title: "Main Board with your Branding",
    subtitle: "Main Board With ACP Background",
  },
  {
    image: "/predu.jpeg",
    title: "Golden Front Letters With Warm Light",
    subtitle: "Premium Gold finish with Acrylic Letters",
  },
  {
    image: "/rs.jpeg",
    title: "Golden Steel Letters",
    subtitle: "With Acrlyic Letters",
  },
  {
    image: "/heri.jpeg",
    title: "Golden Steel Letters",
    subtitle: "For Receptions and Offices",
  },
  {
    image: "/f.jpeg",
    title: "Letters on Wall",
    subtitle: "LED Letters direct installed on Wall",
  },
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

      </div>

      {/* SLIDER */}
      <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{
    delay: 5000, // stays longer on each slide
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  speed={1000} // smoother/slower transition
  loop
>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[70vh] overflow-hidden">

              {/* BLURRED BACKGROUND */}
              <Image
                src={slide.image}
                alt="background"
                fill
                priority
                sizes="100vw"
                className="object-cover blur-2xl scale-110 opacity-40"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/45 z-10" />

              {/* MAIN IMAGE */}
              <div className="relative z-20 flex items-center justify-center w-full h-full p-4">
                <div className="relative w-full h-full max-w-6xl">

                  <Image
                    src={slide.image}
                    alt="slide"
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain"
                  />

                </div>
              </div>

              {/* BOTTOM LEFT TEXT */}
              <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8 z-30">

                <div
                  className="
                    max-w-[260px]
                    sm:max-w-sm
                    bg-black/35
                    backdrop-blur-md
                    border
                    border-white/10
                    rounded-2xl
                    px-4
                    py-3
                    shadow-2xl
                  "
                >

                  {/* SMALL LABEL */}
                  {/* <p
                    className="
                      text-[10px]
                      sm:text-xs
                      uppercase
                      tracking-[3px]
                      text-blue-300
                      font-semibold
                      mb-2
                    "
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    EastPoint Advertising
                  </p> */}

                  {/* TITLE */}
                  <h2
                    className="
                      text-lg
                      sm:text-2xl
                      md:text-3xl
                      font-bold
                      leading-tight
                      text-white
                      drop-shadow-lg
                    "
                    style={{
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {slide.title}
                  </h2>

                  {/* SUBTITLE */}
                  <p
                    className="
                      mt-2
                      text-[11px]
                      sm:text-sm
                      md:text-base
                      leading-relaxed
                      text-gray-200
                      font-medium
                    "
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {slide.subtitle}
                  </p>

                  {/* LINE */}
                  <div className="mt-4 w-14 h-[2px] bg-blue-400 rounded-full" />

                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}