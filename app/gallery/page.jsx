import Image from "next/image";

const images = [
  { src: "/gallery/gallery1.jpg", alt: "Gallery image 1" },
  { src: "/gallery/gallery2.jpg", alt: "Gallery image 2" },
  { src: "/gallery/gallery3.jpg", alt: "Gallery image 3" },
  { src: "/gallery/gallery4.jpg", alt: "Gallery image 4" },
  { src: "/gallery/gallery5.jpg", alt: "Gallery image 5" },
  { src: "/gallery/gallery6.jpg", alt: "Gallery image 6" },
  { src: "/gallery/gallery7.jpg", alt: "Gallery image 7" },
  { src: "/gallery/gallery8.jpg", alt: "Gallery image 8" },
  { src: "/gallery/gallery9.jpg", alt: "Gallery image 9" },
  { src: "/gallery/gallery10.jpg", alt: "Gallery image 10" },
];

export const metadata = {
  title: "Gallery",
  description: "A collage of moments, highlights, and visuals.",
};

export default function GalleryPage() {
  return (
    <div className="card">
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 className="h1" style={{ marginBottom: 12 }}>
          Gallery
        </h1>

        <p
          className="muted"
          style={{
            maxWidth: 760,
            margin: "0 auto 32px auto",
          }}
        >
          A collage of moments, highlights, and visuals from across the brand.
        </p>

        <div className="masonry-gallery">
          {images.map((image, index) => (
            <div
              key={index}
              className={`masonry-item ${
                index % 5 === 0 ? "tilt-left" : index % 4 === 0 ? "tilt-right" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={1200}
                className="gallery-image"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .masonry-gallery {
          column-count: 1;
          column-gap: 18px;
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 18px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .masonry-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 38px rgba(0, 0, 0, 0.3);
        }

        .gallery-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .tilt-left {
          transform: rotate(-1deg);
        }

        .tilt-right {
          transform: rotate(1deg);
        }

        .tilt-left:hover,
        .tilt-right:hover {
          transform: translateY(-4px) rotate(0deg);
        }

        @media (min-width: 640px) {
          .masonry-gallery {
            column-count: 2;
          }
        }

        @media (min-width: 1024px) {
          .masonry-gallery {
            column-count: 3;
          }
        }
      `}</style>
    </div>
  );
}