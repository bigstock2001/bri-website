import Image from "next/image";
import styles from "./gallery.module.css";

const images = [
  { src: "/gallery/gallery1.jpg", alt: "Gallery image 1", cls: "a" },
  { src: "/gallery/gallery2.jpg", alt: "Gallery image 2", cls: "b" },
  { src: "/gallery/gallery3.jpg", alt: "Gallery image 3", cls: "c" },
  { src: "/gallery/gallery4.jpg", alt: "Gallery image 4", cls: "d" },
  { src: "/gallery/gallery5.jpg", alt: "Gallery image 5", cls: "e" },
  { src: "/gallery/gallery6.jpg", alt: "Gallery image 6", cls: "f" },
  { src: "/gallery/gallery7.jpg", alt: "Gallery image 7", cls: "g" },
  { src: "/gallery/gallery8.jpg", alt: "Gallery image 8", cls: "h" },
  { src: "/gallery/gallery9.jpg", alt: "Gallery image 9", cls: "i" },
  { src: "/gallery/gallery10.jpg", alt: "Gallery image 10", cls: "j" },
];

export const metadata = {
  title: "Gallery",
  description: "A scrapbook-style gallery of moments, highlights, and visuals.",
};

export default function GalleryPage() {
  return (
    <div className="card">
      <div className={styles.wrap}>
        <div className={styles.header}>
          <h1 className="h1">Gallery</h1>
          <p className={`muted ${styles.intro}`}>
            A collage of moments, highlights, and visuals from across the brand.
          </p>
        </div>

        <div className={styles.grid}>
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`${styles.tile} ${styles[image.cls]}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={1600}
                priority={index < 3}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}