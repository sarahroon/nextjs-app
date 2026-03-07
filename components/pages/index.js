import Head from "next/head";
import Hero from "../components/Hero";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import styles from "../styles/Home.module.css";

export default function Home() {
  // Sample posts
  const posts = [
    {
      title: "Paragliding",
      excerpt: "This is a blog post about paragliding.",
      link: "#",
      image: "/images/post1.jpg",
    },
    {
      title: "Kayaking",
      excerpt: "This is a blog post about kayaking.",
      link: "#",
      image: "/images/post2.jpg",
    },
    {
      title: "Knitting",
      excerpt: "This is a blog post about knitting.",
      link: "#",
      image: "/images/post3.jpg",
    },
  ];

  // Sidebar links
  const sidebarLinks = [
    { label: "Home", href: "#" },
    { label: "Blog", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Leisure Activities Blog" />
      </Head>

      <ThemeToggle />

      <div className={styles.container}>
        <Hero />

        <main className={styles.mainContent}>
          <div className={styles.postGrid}>
            {posts.map((post, idx) => (
              <PostCard key={idx} index={idx} {...post} />
            ))}
          </div>

          <aside className={styles.sidebar}>
            <Sidebar links={sidebarLinks} />
          </aside>
        </main>

        <Footer />
      </div>
    </>
  );
}
