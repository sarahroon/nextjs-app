export default function CommentList({ comments }) {
  if (!comments.length) return <p>No comments yet. Be the first!</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {comments.map((c, i) => (
        <li
          key={i}
          style={{
            borderBottom: "1px solid #ccc",
            padding: "0.5rem 0",
          }}
        >
          <strong>{c.name}:</strong> {c.comment}
        </li>
      ))}
    </ul>
  );
}
