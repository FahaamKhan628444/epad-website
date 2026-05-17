import Image from "next/image";

export default function Insta() {
  return (
    <section className="bg-pink-700 text-white section-padding">
      <div className="container-custom text-center">

        {/* HEADING */}
        <h2 className="text-xl md:text-3xl font-bold">
          Follow us on social media
        </h2>

        {/* INSTAGRAM ICON */}
        <div className="mt-10 flex justify-center">

          <a
            href="https://www.instagram.com/epad_mlk?igsh=NGltMmoyeTQ2ZnUx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300"
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={270}
              height={160}
              className="object-contain"
            />
          </a>

        </div>

      </div>
    </section>
  );
}