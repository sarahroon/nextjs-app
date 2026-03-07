import Image from "next/image";
import styles from "./PostCard.module.css";

export default function PostCard({ title, excerpt, image, link }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={800}
          height={500}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{excerpt}</p>
        <a href={link} className={styles.readMore}>
          Read More →
        </a>
      </div>
    </article>
  );
}
