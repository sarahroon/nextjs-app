import Image from "next/image";
import { images } from "../data/images";
import styles from "./ImageGallery.module.css";

export default function ImageGallery() {
  const images = [
    { src: "/images/kayaking.jpg", title: "Kayaking" },
    { src: "/images/knitting.jpg", title: "Knitting" },
    { src: "/images/paragliding.jpg", title: "Paragliding" },
  ];

  return (
    <div className={styles.gallery}>
      {images.map((img, index) => (
        <div key={index} className={styles.card}>
          <Image
            src={img.src}
            alt={img.title}
            width={500}
            height={350}
            className={styles.image}
          />
          <h3>{img.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default function images() {}
