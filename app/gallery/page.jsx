import Image from "next/image";

const images = [
  { src: "/gallery/gallery1.jpg", alt: "Gallery image 1", className: "tile tile-a" },
  { src: "/gallery/gallery2.jpg", alt: "Gallery image 2", className: "tile tile-b" },
  { src: "/gallery/gallery3.jpg", alt: "Gallery image 3", className: "tile tile-c" },
  { src: "/gallery/gallery4.jpg", alt: "Gallery image 4", className: "tile tile-d" },
  { src: "/gallery/gallery5.jpg", alt: "Gallery image 5", className: "tile tile-e" },
  { src: "/gallery/gallery6.jpg", alt: "Gallery image 6", className: "tile tile-f" },
  { src: "/gallery/gallery7.jpg", alt: "Gallery image 7", className: "tile tile-g" },
  { src: "/gallery/gallery8.jpg", alt: "Gallery image 8", className: "tile tile-h" },
  { src: "/gallery/gallery9.jpg", alt: "Gallery image 9", className: "tile tile-i" },
  { src: "/gallery/gallery10.jpg", alt: "Gallery image 10", className: "tile tile-j" },
];

export const metadata = {
  title: "Gallery",
  description: "A scrapbook-style gallery of moments, highlights, and visuals.",
};

export default function GalleryPage() {
  return (
    <div className="card gallery-page-shell">
      <div className="gallery-page-header">
        <h1 className="h1">Gallery</h1>
        <p className="muted gallery-intro">
          A collage of moments, highlights, and visuals from across the brand.
        </p>
      </div>

      <div className="scrapbook-grid">
        {images.map((image, index) => (
          <div key={index} className={image.className}>
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={1600}
              priority={index < 3}
              className="scrapbook-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}