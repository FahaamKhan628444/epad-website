import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="section-padding">

      <div className="container-custom max-w-4xl">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-gray-600">
            Get in touch for signage, printing and branding solutions.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-3xl p-10 border">

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <h2 className="text-3xl font-bold">
                Contact Information
              </h2>

              <div className="mt-8 space-y-6">

                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+91 95923 3881</p>
                </div>

                {/* <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">
                    info@fahaam.in
                  </p>
                </div> */}

                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">
                    Main office- Opposite Govt. College, Malerkotla (Pb.) <br />
                    Workshop- Inside Delhi Gate, Malerkotla (Pb.)
                  </p>
                </div>

              </div>
            </div>

            <div className="flex items-center justify-center">

  <Image
    src="/image.png"
    alt="logo"
    width={350}
    height={350}
    className="object-contain"
  />

</div>

          </div>

        </div>

      </div>

    </main>
  );
}