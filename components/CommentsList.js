"use client";

import { useEffect, useState } from "react";

export default function CommentsList({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comments?postId=${postId}`);
        const data = await res.json();

        // Make sure we always set an array
        setComments(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch comments:", err);
        setComments([]);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <div style={{ marginTop: "0.5rem" }}>
      <h4>Comments ({comments.length})</h4>
      {comments.map((c) => (
        <div key={c.comment_id} style={{ marginBottom: "0.5rem" }}>
          <strong>{c.name}</strong> {c.email ? `(${c.email})` : ""}
          <p>{c.comment_text}</p>
          <small>{new Date(c.created_at).toLocaleString()}</small>
          <hr />
        </div>
      ))}
    </div>
  );
}
