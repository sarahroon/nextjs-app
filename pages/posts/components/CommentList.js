// List which displays comments

export default function CommentList({ comments }) {
  if (!comments.length) return <p>No comments yet.</p>;

  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>
          <p>
            <strong>{comment.name}</strong> ({comment.date})
          </p>
          <p>{comment.text}</p>
        </li>
      ))}
    </ul>
  );
}
