import Image from "next/image";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
];

export default function GalleryPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Our Recent Work
          </h2>

          <p className="mt-4 text-gray-600">
            Some of our latest signage and branding projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={img}
                alt="gallery"
                width={500}
                height={500}
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}