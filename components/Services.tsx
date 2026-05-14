const services = [
  "Laser Cutting",
  "ACP Boards",
  "LED Acrylic Letters",
  "Steel Letters",
  "Flex Glow Signs",
  "NL Boards",
  "Sunboard Printing",
  "Glass OWV",
  "Flex Printing",
];

export default function Services() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Our Services
          </h2>

          <p className="text-gray-600 mt-4">
            Complete branding and signage solutions for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white rounded-2xl shadow-md p-8 border hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold">
                {service}
              </h3>

              <p className="mt-4 text-gray-600">
                High quality {service.toLowerCase()} services
                with premium finishing and modern designs.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}