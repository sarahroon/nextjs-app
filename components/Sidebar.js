import { useEffect, useRef } from "react";
import styles from "./Sidebar.module.css";

export default function Sidebar({ links }) {
  const linkRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 },
    );

    linkRefs.current.forEach((link) => link && observer.observe(link));
    return () =>
      linkRefs.current.forEach((link) => link && observer.unobserve(link));
  }, []);

  return (
    <nav className={styles.sidebar}>
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          ref={(el) => (linkRefs.current[idx] = el)}
          className={styles.link}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
