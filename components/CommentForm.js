import { useState } from "react";

export default function CommentForm({ onAddComment }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !text) return;
    onAddComment({ name, text, date: new Date().toLocaleString() });
    setName("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Your Comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
}
