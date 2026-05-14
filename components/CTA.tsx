export default function CTA() {
  return (
    <section className="bg-blue-900 text-white section-padding">
      <div className="container-custom text-center">

        <h2 className="text-4xl md:text-5xl font-bold">
          Ready To Grow Your Brand?
        </h2>

        <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
          Contact us today for premium signage, ACP boards,
          LED letters and printing solutions.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <a
            href="tel:+919592338881"
            className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919592338881"
            target="_blank"
            className="bg-green-500 px-8 py-4 rounded-xl font-semibold"
          >
            WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}