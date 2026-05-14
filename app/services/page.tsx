const services = [
  {
    title: "Laser Cutting",
    desc: "Precision laser cutting solutions for modern signage and industrial branding.",
  },
  {
    title: "ACP Boards",
    desc: "Premium ACP board installation for shops, offices and showrooms.",
  },
  {
    title: "LED Acrylic Letters",
    desc: "Modern illuminated acrylic signage with premium finishing.",
  },
  {
    title: "Steel Letters",
    desc: "Durable stainless steel signage for luxury branding.",
  },
  {
    title: "Flex Glow Signs",
    desc: "Bright and attractive glow sign boards for business visibility.",
  },
  {
    title: "NL Boards",
    desc: "Professional branding boards for commercial businesses.",
  },
  {
    title: "Sunboard Printing",
    desc: "High-quality sunboard printing for advertising and promotions.",
  },
  {
    title: "Glass OWV",
    desc: "Glass branding and one-way vision sticker solutions.",
  },
  {
    title: "Flex Printing",
    desc: "Large format flex printing with vibrant colors and premium quality.",
  },
];

export default function ServicesPage() {
  return (
    <main className="section-padding">

      <div className="container-custom">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">
            Our Services
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Complete signage and branding solutions designed
            to help your business stand out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <h2 className="text-2xl font-bold">
                {service.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                {service.desc}
              </p>

              <a
  href="tel:+91959233881"
  className="mt-6 inline-block bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
>
  Call Us for more details
</a>
            </div>
          ))}
        </div>

      </div>

    </main>
  );
}