const features = [
  {
    title: "Premium Quality",
    desc: "We use high-quality materials with professional finishing.",
  },
  {
    title: "Modern Designs",
    desc: "Creative signage and branding solutions for every business.",
  },
  {
    title: "Fast Delivery",
    desc: "Quick production and installation with reliable service.",
  },
  {
    title: "Affordable Pricing",
    desc: "Competitive pricing without compromising quality.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-gray-100 section-padding">
      <div className="container-custom">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Why Choose Us
          </h2>

          <p className="mt-4 text-gray-600">
            Trusted, premium quality, and honest service with experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}