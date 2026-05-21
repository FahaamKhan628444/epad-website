"use client";

import { motion } from "framer-motion";

const videos = [
  {
  title: "Laser Cutting",
  desc: "High-precision laser cutting process designed for modern signage, branding and premium finishing.",
  video: "/videos/work1.mp4",
},
  {
    title: "Professional Installation Process",
    desc: "Carefully crafted branding and installation workflow for modern businesses.",
    video: "/videos/work2.mp4",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100 overflow-hidden">

      <div className="container-custom">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How We Work
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            From precision manufacturing to premium installation,
            we create modern branding solutions with attention to every detail.
          </p>
        </motion.div>

        {/* VIDEOS */}
        <div className="grid lg:grid-cols-2 gap-10">

          {videos.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                bg-white/70
                backdrop-blur-xl
                border
                border-white/30
                shadow-2xl
              "
            >

              {/* VIDEO */}
              <div className="relative overflow-hidden">

                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="
                    w-full
                    h-[300px]
                    md:h-[420px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/20" />

              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}