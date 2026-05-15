export default function AboutPage() {
  return (
    <main className="section-padding">

      <div className="container-custom max-w-5xl">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">
            About Us
          </h1>

          <p className="mt-6 text-gray-600">
            Professional signage and branding solutions, serving since 2002.
          </p>
        </div>

        <div className="bg-white border rounded-3xl p-10 shadow-lg">

          <p className="text-lg leading-9 text-gray-700">
            We specialize in premium signage, ACP boards,
            LED acrylic letters, steel letters, flex printing,
            glow signs and branding solutions for businesses.
            Our goal is to deliver high-quality work with
            modern designs and professional finishing.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-900">
                1000+
              </h3>

              <p className="mt-2 text-gray-600">
                Projects Completed
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-900">
                24+
              </h3>

              <p className="mt-2 text-gray-600">
                Years Experience
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-900">
                100%
              </h3>

              <p className="mt-2 text-gray-600">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
