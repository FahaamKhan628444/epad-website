// export default function AboutPage() {
//   return (
//     <main className="section-padding">

//       <div className="container-custom max-w-5xl">

//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold">
//             About Us
//           </h1>

//           <p className="mt-6 text-gray-600">
//             Professional signage and branding solutions, serving since 2002.
//           </p>
//         </div>

//         <div className="bg-white border rounded-3xl p-10 shadow-lg">

//           <p className="text-lg leading-9 text-gray-700">
//             We specialize in premium signage, ACP boards,
//             LED acrylic letters, steel letters, flex printing,
//             glow signs and branding solutions for businesses.
//             Our goal is to deliver high-quality work with
//             modern designs and professional finishing.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8 mt-14">

//             <div className="text-center">
//               <h3 className="text-4xl font-bold text-blue-900">
//                 1000+
//               </h3>

//               <p className="mt-2 text-gray-600">
//                 Projects Completed
//               </p>
//             </div>

//             <div className="text-center">
//               <h3 className="text-4xl font-bold text-blue-900">
//                 24+
//               </h3>

//               <p className="mt-2 text-gray-600">
//                 Years Experience
//               </p>
//             </div>

//             <div className="text-center">
//               <h3 className="text-4xl font-bold text-blue-900">
//                 100%
//               </h3>

//               <p className="mt-2 text-gray-600">
//                 Client Satisfaction
//               </p>
//             </div>

//           </div>

//         </div>

//       </div>

//     </main>
//   );
// }






import {
  Award,
  Briefcase,
  Star,
  Users,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white section-padding overflow-hidden">

      <div className="container-custom max-w-6xl">

        {/* HEADING */}
        <div className="text-center mb-20">

          <span className="bg-blue-100 text-blue-900 px-5 py-2 rounded-full font-semibold text-sm tracking-wide">
            ABOUT EASTPOINT ADVERTISING
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Crafting Premium <br />
            Branding Since 2002
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            We deliver premium signage, ACP boards,
            LED letters, glow signs, steel letters
            and complete branding solutions with
            modern designs and professional finishing.
          </p>

        </div>

        {/* MAIN SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* OWNER SECTION */}
          <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-black text-white p-10 md:p-14 rounded-[35px] shadow-2xl relative overflow-hidden">

            {/* BLUR EFFECTS */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">

              <span className="bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm tracking-wider uppercase">
                Founder & Owner
              </span>

              <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight">
                Mr. Adil Khan
              </h2>

              <p className="mt-8 text-blue-100 text-lg leading-9">
                Leading Eastpoint Advertising with creativity,
                premium craftsmanship and trusted branding
                solutions for businesses since 2002.
              </p>

              {/* STATS */}
              <div className="mt-12 grid grid-cols-2 gap-6">

                <div className="bg-white/10 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <h3 className="text-4xl font-bold">
                    24+
                  </h3>

                  <p className="mt-2 text-blue-100">
                    Years Experience
                  </p>
                </div>

                <div className="bg-white/10 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <h3 className="text-4xl font-bold">
                    1K+
                  </h3>

                  <p className="mt-2 text-blue-100">
                    Projects Completed
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <span className="bg-pink-100 text-pink-700 px-5 py-2 rounded-full font-semibold text-sm tracking-wide">
              WHY CHOOSE US
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Trusted Signage <br />
              Solutions For Brands
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-9">
              Our mission is to help businesses grow with
              eye-catching, durable and modern branding
              solutions. We combine creativity, premium
              materials and expert craftsmanship to deliver
              outstanding results for every project.
            </p>

            {/* FEATURES */}
            <div className="mt-12 grid sm:grid-cols-2 gap-6">

              <div className="bg-white p-7 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">

                <Award className="w-12 h-12 text-blue-900" />

                <h3 className="mt-5 text-2xl font-bold">
                  Premium Quality
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  High-quality materials with modern
                  finishing and durability.
                </p>

              </div>

              <div className="bg-white p-7 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">

                <Briefcase className="w-12 h-12 text-pink-600" />

                <h3 className="mt-5 text-2xl font-bold">
                  Honest Service
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Trusted service with transparent pricing
                  and timely project delivery.
                </p>

              </div>

              <div className="bg-white p-7 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">

                <Users className="w-12 h-12 text-cyan-600" />

                <h3 className="mt-5 text-2xl font-bold">
                  1000+ Clients
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Trusted by shops, offices,
                  showrooms and brands.
                </p>

              </div>

              <div className="bg-white p-7 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">

                <Star className="w-12 h-12 text-yellow-500" />

                <h3 className="mt-5 text-2xl font-bold">
                  Client Satisfaction
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  Professional support and quality
                  craftsmanship in every project.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}