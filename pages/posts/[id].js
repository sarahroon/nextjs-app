// Post Page

// pages/posts/[id].js
import { useState } from "react";
import CommentForm from "../../components/CommentForm";
import CommentList from "../../components/CommentList";

const posts = [
  { id: 1, title: "My First Post About Snakes", content: "snake" },
  { id: 2, title: "What snakes can do", content: "Things snakes can do" },
];

export default function Post({ post }) {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  if (!post) return <p>Post not found!</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <h2>Comments</h2>
      <CommentList comments={comments} />
      <CommentForm onAddComment={addComment} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.id.toString() === params.id);
  return { props: { post: post || null } };
}
