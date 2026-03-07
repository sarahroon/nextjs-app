import { useState } from "react";
import { useRouter } from "next/router";
import { posts } from "../../data/posts";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return; // simple validation

    // Create new post
    const newPost = {
      id: Date.now().toString(), // simple ID
      title,
      content,
    };

    posts.push(newPost);

    // Redirect to posts page with query param to show success message
    router.push("/posts?created=true");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: "100%", padding: "0.5rem", height: "120px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            cursor: "pointer",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
          }}
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
