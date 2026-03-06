import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [comments, setComments] = useState([]);

  // Fetch posts from Supabase
  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase.from("posts").select("*");
      if (error) console.error(error);
      else setPosts(data);
    }
    fetchPosts();
  }, []);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  const selectedPost = posts.find((p) => p.post_id === selectedPostId);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Blog Posts Forms</h1>
      <p>
        Welcome! Click a post title to leave comments about your favourite
        animals and where they are from.
      </p>

      {/* List all posts */}
      {posts.map((post) => (
        <div key={post.post_id} style={{ marginBottom: "1rem" }}>
          <h2
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => {
              setSelectedPostId(post.post_id);
              setComments([]); // reset comments when switching posts
              // scroll to comment form
              setTimeout(() => {
                const el = document.getElementById("comment-form");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }}
          >
            {post.title}
          </h2>
          <p>{post.content}</p>
        </div>
      ))}

      {/* Show selected post with comments and form */}
      {selectedPost && (
        <div
          style={{
            marginTop: "2rem",
            borderTop: "1px solid #ccc",
            paddingTop: "1rem",
          }}
        >
          <h1>{selectedPost.title}</h1>
          <p>{selectedPost.content}</p>

          <h2>Comments</h2>
          <CommentList comments={comments} />

          <h3>Leave a Comment</h3>
          <CommentForm id="comment-form" onAddComment={addComment} />
        </div>
      )}
    </div>
  );
}
