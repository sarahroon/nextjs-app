import { useState } from "react";
import CommentForm from "../../components/CommentForm";
import CommentList from "../../components/CommentList";

const posts = [
  {
    id: 1,
    title: "Write a Post About Your Favourite Animal",
    content:
      "Here you can submit your name and post a comment about your favourite animal",
  },
  {
    id: 2,
    title: "Where Your Favourite Animal Is Originally From",
    content:
      "Here you can submit your name and post a comment about where your favourite animal is from",
  },
];

export default function Post({ post }) {
  const [comments, setComments] = useState([]);

  // Add a new comment
  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  };

  if (!post) return <p>Post not found!</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <h2>Comments</h2>
      <CommentList comments={comments} />

      <h3>Leave a Comment</h3>
      <CommentForm onAddComment={handleAddComment} />

      {/* Link to scroll to comment form */}
      <p style={{ marginTop: "1rem" }}>
        <a href="#comment-form">Jump to comment form</a>
      </p>
    </div>
  );
}

// Generate static paths
export async function getStaticPaths() {
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
  return { paths, fallback: false };
}

// Generate static props
export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.id.toString() === params.id);
  return { props: { post: post || null } };
}
