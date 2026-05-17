export default function Hero() {
  return (
    <section className="bg-gray-100 section-padding">
      <div className="container-custom text-center">

         <h1 className="text-3xl md:text-xl font-bold leading-tight text-red-500">
          Eastpoint Advertising<br /> Since 2002
        </h1>

        <h1 className="text-xl md:text-xl font-bold leading-tight text-gray-900">
          {/* Since 2002<br /> */}
          Premium Signage & Branding Solutions
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Laser Cutting, ACP Boards, LED Acrylic & Steel Letters,
          Flex Glow Signs, Sunboard, Glass OWV & Flex Printing.
        </p>

        <div className="mt-10">

  <a
    href="/services"
    className="inline-block bg-gradient-to-r from-blue-900 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold hover:scale-105 transition"
  >
    Explore Our Services
  </a>

</div>

      </div>
    </section>
  );
}
