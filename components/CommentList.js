"use client";

import { useEffect, useState } from "react";

export default function CommentsList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let isMounted = true; // flag to avoid updating unmounted component

    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comments?postId=${postId}`);
        const data = await res.json();
        if (isMounted) setComments(data); // only update state if still mounted
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    fetchComments();

    return () => {
      isMounted = false; // cleanup if component unmounts
    };
  }, [postId]); // runs only when postId changes

  const deleteComment = async (commentId) => {
    if (!confirm("Are you sure you want to delete this comment?")) return;
    await fetch(`/api/comments/${commentId}`, { method: "DELETE" });
    setComments((prev) => prev.filter((c) => c.comment_id !== commentId));
  };

  return (
    <div style={{ marginTop: "0.5rem" }}>
      <h4>Comments ({comments.length})</h4>
      {comments.map((c) => (
        <div key={c.comment_id} style={{ marginBottom: "0.5rem" }}>
          <strong>{c.name}</strong> {c.email ? `(${c.email})` : ""}
          <p>{c.comment_text}</p>
          <small>{new Date(c.created_at).toLocaleString()}</small>
          <br />
          <button onClick={() => deleteComment(c.comment_id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}
