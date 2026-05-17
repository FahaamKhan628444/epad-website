// export default function CTA() {
//   return (
//     <section className="bg-blue-900 text-white section-padding">
//       <div className="container-custom text-center">

//         <h2 className="text-4xl md:text-5xl font-bold">
//           Ready To Grow Your Brand?
//         </h2>

//         {/* <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
//           Contact us today for premium signage, ACP boards,
//           LED letters and printing solutions.
//         </p> */}

//         <div className="mt-8 flex justify-center gap-4 flex-wrap">

//           <a
//             href="tel:+919592338881"
//             className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold"
//           >
//             Call Now
//           </a>

//           <a
//             href="https://wa.me/919592338881"
//             target="_blank"
//             className="bg-green-500 px-8 py-4 rounded-xl font-semibold"
//           >
//             WhatsApp
//           </a>

//         </div>

//       </div>
//     </section>
//   );
// }






import Image from "next/image";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white section-padding overflow-hidden relative">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="container-custom text-center relative z-10">

        {/* HEADING */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Ready To Grow Your Brand?
        </h2>

        <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-8">
          Contact us today.
        </p>

        {/* BUTTON IMAGES */}
        <div className="mt-12 flex justify-center items-center gap-8 flex-wrap">

          {/* CALL BUTTON */}
          <a
            href="tel:+919592338881"
            className="hover:scale-110 transition duration-300"
          >
            <Image
              src="/call8.png"
              alt="Call Now"
              width={130}
              height={130}
              className="object-contain drop-shadow-2xl"
            />
          </a>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/919592338881"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300"
          >
            <Image
              src="/whats.png"
              alt="WhatsApp"
              width={80}
              height={80}
              className="object-contain drop-shadow-2xl"
            />
          </a>

        </div>

      </div>

    </section>
  );
}