import Image from "next/image";

const column1 = [
  { src: "/gallery/gallery1.jpg", alt: "Gallery image 1", size: "large" },
  { src: "/gallery/gallery4.jpg", alt: "Gallery image 4", size: "small" },
  { src: "/gallery/gallery7.jpg", alt: "Gallery image 7", size: "medium" },
  { src: "/gallery/gallery10.jpg", alt: "Gallery image 10", size: "small" },
];

const column2 = [
  { src: "/gallery/gallery2.jpg", alt: "Gallery image 2", size: "small" },
  { src: "/gallery/gallery5.jpg", alt: "Gallery image 5", size: "medium" },
  { src: "/gallery/gallery8.jpg", alt: "Gallery image 8", size: "large" },
];

const column3 = [
  { src: "/gallery/gallery3.jpg", alt: "Gallery image 3", size: "medium" },
  { src: "/gallery/gallery6.jpg", alt: "Gallery image 6", size: "large" },
  { src: "/gallery/gallery9.jpg", alt: "Gallery image 9", size: "small" },
];

function GalleryCard({ src, alt, size, priority = false }) {
  const sizeClass =
    size === "large"
      ? "gallery-card-large"
      : size === "medium"
      ? "gallery-card-medium"
      : "gallery-card-small";

  return (
    <div className={`gallery-card ${sizeClass}`}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={1600}
        priority={priority}
        className="gallery-image"
      />
    </div>
  );
}

export const metadata = {
  title: "Gallery",
  description: "A scrapbook-style gallery of moments, highlights, and visuals.",
};

export default function GalleryPage() {
  return (
    <div className="card">
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 className="h1" style={{ marginBottom: "12px" }}>
          Gallery
        </h1>

        <p
          className="muted"
          style={{
            maxWidth: "820px",
            margin: "0 auto 36px auto",
          }}
        >
          A collage of moments, highlights, and visuals from across the brand.
        </p>

        <div className="scrapbook-grid">
          <div className="scrapbook-column scrapbook-offset-1">
            {column1.map((image, index) => (
              <GalleryCard
                key={image.src}
                src={image.src}
                alt={image.alt}
                size={image.size}
                priority={index === 0}
              />
            ))}
          </div>

          <div className="scrapbook-column scrapbook-offset-2">
            {column2.map((image, index) => (
              <GalleryCard
                key={image.src}
                src={image.src}
                alt={image.alt}
                size={image.size}
                priority={index === 0}
              />
            ))}
          </div>

          <div className="scrapbook-column scrapbook-offset-3">
            {column3.map((image, index) => (
              <GalleryCard
                key={image.src}
                src={image.src}
                alt={image.alt}
                size={image.size}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}