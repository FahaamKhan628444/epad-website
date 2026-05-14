import Image from "next/image";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
];

export default function GalleryPage() {
  return (
    <main className="section-padding">

      <div className="container-custom">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">
            Our Gallery
          </h1>

          <p className="mt-6 text-gray-600">
            Explore our latest signage and branding projects.
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
                className="w-full h-80 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>

    </main>
  );
}