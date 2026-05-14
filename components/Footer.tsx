import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#07122b] text-white py-16">
      <div className="container-custom">

        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* LEFT SIDE */}
          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/image.png"
                alt="logo"
                width={80}
                height={80}
                className="rounded-lg object-contain"
              />

              <div>
                <h2 className="text-3xl font-bold">
                  Eastpoint Advertising
                </h2>

                <p className="text-gray-400 mt-1">
                  One small destination for a complete advertising
                </p>
              </div>

            </div>

            {/* <div className="mt-8 space-y-4 text-gray-300">

              <p>
                Main office- Opposite Govt. College,
                Malerkotla (Pb.)
              </p>

              <p>
                Workshop- Inside Delhi Gate,
                Malerkotla (Pb.)
              </p>

            </div> */}

          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Laser Cutting</li>
              <li>ACP Boards</li>
              <li>LED Acrylic Letters</li>
              <li>Steel Letters</li>
              <li>Flex Printing</li>
              <li>Glow Sign Boards</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Contact us
            </h3>

            <div className="space-y-4 text-gray-300">

              <a
  href="tel:+91959233881"
  className="block hover:text-green-400 transition"
>
  📞 +91 95923 3881
</a>
              {/* <p>📞 +91 98154 3881</p> */}

             <div className="mt-8 space-y-4 text-gray-300">

              <p>
                Main office- Opposite Govt. College,
                Malerkotla (Pb.)
              </p>

              <p>
                Workshop- Inside Delhi Gate,
                Malerkotla (Pb.)
              </p>

            </div>
{/* 
              <p>
                🌐 fahaam.in
              </p> */}

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          © 2026 Eastpoint Advertising — All Rights Reserved
        </div>

      </div>
    </footer>
  );
}