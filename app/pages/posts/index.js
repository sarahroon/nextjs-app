import { useEffect, useState } from "react";
import Link from "next/link";
import ImageGallery from "../components/ImageGallery";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
      <h1>All Posts</h1>
      <Link href="/posts/create">
        <button>Create New Post</button>
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1>My Blog</h1>
      <img src="/images/kayaking.jpg" alt="Kayaking" width={400} />
      <img src="/images/knitting.jpg" alt="Knitting" width={400} />
      <img src="/images/paragliding.jpg" alt="Paragliding" width={400} />
    </div>
  );
}
