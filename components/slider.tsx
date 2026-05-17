"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const slides = [
  "/banner.png",
  "/laser.jpg",
  "/banner2.png",
  "/banner 3.png",
]

export default function Slider() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
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
                className="object-cover blur-2xl scale-110 opacity-350"
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