import { useState } from "react";

export default function CommentForm({ id, onAddComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment({ name, comment });
    setName("");
    setComment("");
  };

  return (
    <form id={id} onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ display: "block", marginBottom: "0.5rem", width: "100%" }}
      />
      <textarea
        placeholder="Your Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
        style={{ display: "block", marginBottom: "0.5rem", width: "100%" }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
