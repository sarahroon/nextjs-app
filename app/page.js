"use client";

import { useState, useEffect } from "react";
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";

export default function Home() {
  const [sortOrder, setSortOrder] = useState("desc");
  const [commentsError, setCommentsError] = useState("");

  // ------------------------
  // Blog posts data
  // ------------------------
  const posts = [
    {
      post_id: 1,
      title: "Paragliding",
      content:
        "Post your name, your email and comment if you are interested in Paragliding. Paragliding is a sport where you move through the sky using a paraglider taking place in hills or mountains over thermal currents ridge lifts and wind. It's actually a lot safer than people may think under supervision. I have experience of paragliding in Costa Rica which I found thoroughly enjoyable.",
    },
    {
      post_id: 2,
      title: "Kayaking",
      content:
        "Post your name, your email and comment if you are interested in Kayaking. Kayaking is a water sport where you use a paddle and kayak which is a small narrow boat with a closed top to move over water sitting facing forward in the kayak taking place in rivers, lakes and oceans. It is a tranquil sport and good for beginners. I have experience of kayaking in Costa Rica which I found thoroughly enjoyable.",
    },
    {
      post_id: 3,
      title: "Knitting",
      content:
        "Post your name, your email and comment if you are interested in knitting. Knitting is a fiber technique for producing clothing pieces using lots of different types and colours of wool to produce stretchy and flexible fabric. I have knitted multiple jumpers, scarves and cardigans it is thoroughly enjoyable and peaceful.",
    },
  ];

  // ------------------------
  // Sort posts
  // ------------------------
  const sortedPosts = [...posts].sort((a, b) => {
    return sortOrder === "asc" ? a.post_id - b.post_id : b.post_id - a.post_id;
  });

  // ------------------------
  // Optional: prefetch comments (mock safe)
  // ------------------------
  useEffect(() => {
    async function checkComments() {
      try {
        // Attempt a safe fetch for comments for Post 1 as example
        const res = await fetch("/api/comments?postId=1");
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.warn("Comments API did not return JSON:", await res.text());
          return;
        }
        await res.json(); // discard, just check availability
      } catch (err) {
        console.error("Comments API not available:", err);
        setCommentsError("Comments API not available");
      }
    }
    // Disabled for now to avoid Postgres errors
    // checkComments();
  }, []);

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h1>Blog Posts Expressing Interest in Activities</h1>

      <label htmlFor="sortPosts">Sort posts: </label>
      <select
        id="sortPosts"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="desc">Newest first</option>
        <option value="asc">Oldest first</option>
      </select>

      {commentsError && <p style={{ color: "red" }}>{commentsError}</p>}

      <div id="posts">
        {sortedPosts.map((post) => (
          <div key={post.post_id} className="post" style={{ margin: "2rem 0" }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>

            {/* Comment form and list */}
            <CommentForm postId={post.post_id} />
            <CommentsList postId={post.post_id} />

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
