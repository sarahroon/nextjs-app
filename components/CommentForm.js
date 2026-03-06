import { useState } from "react";

export default function CommentForm({ id, onAddComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !comment) return;
    onAddComment({ name, comment });
    setName("");
    setComment("");
  };

  return (
    <form
      id="comment-form"
      onSubmit={handleSubmit}
      style={{ marginTop: "1rem" }}
    >
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginLeft: "1rem" }}
        />
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
        />
      </div>
      <button type="submit" style={{ marginTop: "0.5rem" }}>
        Submit
      </button>
    </form>
  );
}
