export default function CommentList({ comments }) {
  if (!comments || comments.length === 0)
    return <p>No comments yet. Be the first!</p>;

  return (
    <ul>
      {comments.map((c, i) => (
        <li key={i}>
          <strong>{c.name}</strong>: {c.text}
        </li>
      ))}
    </ul>
  );
}
