import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const { postid } = router.query;
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (!postid) return;

    const fetchPost = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPost(data.find((p) => p.id === parseInt(postid)));
    };

    const fetchComments = async () => {
      const res = await fetch(`/api/comments?postId=${postid}`);
      const data = await res.json();
      setComments(data);
    };

    fetchPost();
    fetchComments();
  }, [postid]);

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
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <h2>Comments</h2>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>{c.text}</li>
        ))}
      </ul>

      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
}
