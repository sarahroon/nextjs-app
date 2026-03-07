"use client";

import { useState } from "react";
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";

export default function Home() {
  const [sortOrder, setSortOrder] = useState("desc");

  const posts = [
    {
      post_id: 1,
      title: "Snakes",
      content:
        "My favourite snakes: King Cobra (India), Black Mamba (Africa), Green Anaconda (South America)",
    },
    {
      post_id: 2,
      title: "Dogs",
      content:
        "My favourite dogs: Pomeranian (Poland/Germany), King Charles Spaniel (England), Golden Retriever (Scotland)",
    },
    {
      post_id: 3,
      title: "Cats",
      content:
        "My favourite cats: Maine Coon (USA), Sphynx (Canada), Siamese (Thailand)",
    },
  ];

  const sortedPosts = [...posts].sort((a, b) => {
    return sortOrder === "asc"
      ? new Date(a.post_id) - new Date(b.post_id)
      : new Date(b.post_id) - new Date(a.post_id);
  });

  return (
    <div style={{ padding: "1rem" }}>
      <h1>My Blog Posts About My Favourite Animals</h1>

      <label>Sort posts: </label>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="desc">Newest first</option>
        <option value="asc">Oldest first</option>
      </select>

      <div id="posts">
        {sortedPosts.map((post) => (
          <div key={post.post_id} className="post" style={{ margin: "1rem 0" }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <CommentForm postId={post.post_id} />
            <CommentsList postId={post.post_id} />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
