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

        <div
          style={{
            columnCount: 1,
            columnGap: "18px",
          }}
          className="gallery-masonry"
        >
          {images.map((image, index) => {
            const rotation =
              index % 5 === 0 ? "-1deg" : index % 4 === 0 ? "1deg" : "0deg";

            return (
              <div
                key={index}
                style={{
                  breakInside: "avoid",
                  WebkitColumnBreakInside: "avoid",
                  marginBottom: "18px",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.22)",
                  transform: `rotate(${rotation})`,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={1200}
                  priority={index < 3}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 640px) {
          .gallery-masonry {
            column-count: 2 !important;
          }
        }

        @media (min-width: 1024px) {
          .gallery-masonry {
            column-count: 3 !important;
          }
        }
      `}</style>
    </div>
  );
}