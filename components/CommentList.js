export default function CommentList({ comments }) {
  if (!comments || comments.length === 0) return <p>No comments yet.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
      {comments.map((c, index) => (
        <li
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <strong>{c.name}</strong>
          <p>{c.comment}</p>
        </li>
      ))}
    </ul>
  );
}
