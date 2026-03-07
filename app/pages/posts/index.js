import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function PostsPage() {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState("");
  const [posts, setPosts] = useState([]);

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Failed to fetch posts", err);
      }
    };
    fetchPosts();
  }, []);

  // Show success message once
  useEffect(() => {
    if (!router.isReady) return; // wait for router
    if (router.query.created) {
      // defer state update to next tick
      const id = setTimeout(() => {
        setSuccessMessage("Post created successfully!");
        router.replace({ pathname: router.pathname, query: {} }, undefined, {
          shallow: true,
        });
      }, 0);
      return () => clearTimeout(id);
    }
  }, [router.isReady, router.query, router.pathname]);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1>All Posts</h1>

      {successMessage && (
        <p style={{ color: "green", fontWeight: "bold" }}>{successMessage}</p>
      )}

      <div style={{ margin: "1rem 0" }}>
        <Link href="/posts/create" passHref>
          <button style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
            Create New Post
          </button>
        </Link>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id} style={{ margin: "0.5rem 0" }}>
            <Link href={`/posts/${post.id}`}>
              <a style={{ textDecoration: "underline", color: "blue" }}>
                {post.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
