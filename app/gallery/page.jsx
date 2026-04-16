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
          maxWidth: "1200px",
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
            maxWidth: "760px",
            margin: "0 auto 32px auto",
          }}
        >
          A collage of moments, highlights, and visuals from across the brand.
        </p>

        <div
          style={{
            columnCount: 1,
            columnGap: "20px",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                breakInside: "avoid",
                WebkitColumnBreakInside: "avoid",
                marginBottom: "20px",
                borderRadius: "16px",
                overflow: "hidden",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.22)",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={1600}
                priority={index < 3}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}