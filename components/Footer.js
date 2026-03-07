import { useEffect, useRef } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
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

  const footerLinks = [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <footer className={styles.footer}>
      <p>© 2026 My Modern Blog</p>
      <div className={styles.links}>
        {footerLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            ref={(el) => (linkRefs.current[idx] = el)}
            className={styles.link}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
