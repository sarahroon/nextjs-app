import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const { postid } = router.query;
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Fetch post & comments once router is ready
  useEffect(() => {
    if (!router.isReady || !postid) return;

    const fetchPost = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      const found = data.find((p) => p.id === postid);
      setPost(found);
    };

    const fetchComments = async () => {
      const res = await fetch(`/api/comments?postId=${postid}`);
      const data = await res.json();
      setComments(data);
    };

    fetchPost();
    fetchComments();
  }, [router.isReady, postid]);

  const handleAddComment = async () => {
    if (!newComment) return;
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId: postid, text: newComment }),
    });
    if (res.ok) {
      const saved = await res.json();
      setComments((prev) => [...prev, saved]);
      setNewComment("");
    }
  };

  if (!post) return <p>Loading post...</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <h2>Comments</h2>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>{c.text}</li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          style={{ width: "80%", padding: "0.5rem" }}
        />
        <button
          onClick={handleAddComment}
          style={{
            padding: "0.5rem 1rem",
            marginLeft: "0.5rem",
            cursor: "pointer",
          }}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}
