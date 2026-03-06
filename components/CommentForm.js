import { useState } from "react";

export default function CommentForm({ onAddComment }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment({ name, text });
    setName("");
    setText("");
  };

  return (
    <form
      id="comment-form"
      onSubmit={handleSubmit}
      style={{ marginTop: "1rem" }}
    >
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ display: "block", marginBottom: "0.5rem" }}
      />
      <textarea
        placeholder="Your Comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        style={{ display: "block", marginBottom: "0.5rem" }}
      />
      <button type="submit">Submit Comment</button>
    </form>
  );
}
