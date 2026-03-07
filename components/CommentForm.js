"use client";

import { useState } from "react";

export default function CommentForm({ postId, onAddComment }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postId,
        name,
        email,
        comment_text: commentText,
      }),
    });

    if (onAddComment) onAddComment({ name, email, comment_text: commentText });

    setName("");
    setEmail("");
    setCommentText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "0.5rem" }}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ display: "block", marginBottom: "0.25rem", width: "100%" }}
      />
      <input
        type="email"
        placeholder="Your Email (optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "0.25rem", width: "100%" }}
      />
      <textarea
        placeholder="Your Comment"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        required
        style={{ display: "block", marginBottom: "0.25rem", width: "100%" }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
