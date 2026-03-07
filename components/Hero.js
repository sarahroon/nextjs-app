import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const elements = [
      headingRef.current,
      paragraphRef.current,
      buttonRef.current,
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 200);
          }
        });
      },
      { threshold: 0.3 },
    );
    elements.forEach((el) => el && observer.observe(el));
    return () => elements.forEach((el) => el && observer.unobserve(el));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setOffsetY(rect.top * 0.2);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className={styles.hero}
      style={{ transform: `translateY(${offsetY}px)` }}
    >
      <h1 ref={headingRef}>{`Welcome to My  Blog`}</h1>
      <p ref={paragraphRef}>
        Discover posts on Paragliding, Kayaking and Knitting.
      </p>
      <button ref={buttonRef}>Read Featured Post</button>
    </section>
  );
}
