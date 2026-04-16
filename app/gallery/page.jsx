import Image from "next/image";

const images = [
  { src: "/gallery/gallery1.jpg", alt: "Gallery image 1", className: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/gallery2.jpg", alt: "Gallery image 2", className: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/gallery3.jpg", alt: "Gallery image 3", className: "md:col-span-1 md:row-span-2" },
  { src: "/gallery/gallery4.jpg", alt: "Gallery image 4", className: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/gallery5.jpg", alt: "Gallery image 5", className: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/gallery6.jpg", alt: "Gallery image 6", className: "md:col-span-1 md:row-span-2" },
  { src: "/gallery/gallery7.jpg", alt: "Gallery image 7", className: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/gallery8.jpg", alt: "Gallery image 8", className: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/gallery9.jpg", alt: "Gallery image 9", className: "md:col-span-1 md:row-span-2" },
  { src: "/gallery/gallery10.jpg", alt: "Gallery image 10", className: "md:col-span-2 md:row-span-1" },
];

export const metadata = {
  title: "Gallery",
  description: "A collage-style gallery showcasing featured images.",
};

export default function GalleryPage() {
  return (
    <main className="w-full bg-black text-white">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300 sm:text-base">
            A collage of moments, highlights, and visuals from across the brand.
          </p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[220px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-xl ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority={index < 4}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}