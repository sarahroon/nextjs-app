import { useEffect, useRef, useState } from "react";
import styles from "./PostCard.module.css";

export default function PostCard({ title, excerpt, link, image, index }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
            if (imageRef.current) imageRef.current.classList.add("visible");
          }, index * 150);
        }
      },
      { threshold: 0.3 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imageRef.current || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (y - 0.5) * 6;
      const rotateY = (x - 0.5) * 6;
      imageRef.current.style.transform = `scale(1.05) translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const handleMouseLeave = () => {
      if (imageRef.current)
        imageRef.current.style.transform =
          "scale(1.05) translateY(-5px) rotateX(0deg) rotateY(0deg)";
    };
    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={`${styles.card} ${visible ? "visible" : ""}`}>
      {image && (
        <div ref={imageRef} className={styles.imageWrapper}>
          <img src={image} alt={title} />
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.excerpt}>{excerpt}</p>
      <a className={styles.readMore} href={link}>
        Read More
      </a>
    </div>
  );
}
