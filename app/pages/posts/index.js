"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["kayaking.jpg", "knitting.jpg", "paragliding.jpg"];

export default function HomePage() {
  const [comments, setComments] = useState({});
  const [error, setError] = useState("");

  // ----------------------
  // Safe comments fetch (optional)
  // ----------------------
  useEffect(() => {
    async function fetchComments(postId) {
      try {
        const res = await fetch(`/api/comments?postId=${postId}`);
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.warn(
            `Comments API did not return JSON for postId ${postId}:`,
            await res.text(),
          );
          return;
        }
        const data = await res.json();
        setComments((prev) => ({ ...prev, [postId]: data }));
      } catch (err) {
        console.error("Failed to fetch comments:", err);
        setError("Comments API not available");
      }
    }

    // TEMPORARILY DISABLE COMMENTS FETCH TO SHOW GALLERY
    // [1, 2, 3].forEach(fetchComments);
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>My Blog</h1>

      {/* Image Gallery */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        {images.map((img) => (
          <div key={img} style={{ textAlign: "center" }}>
            <Image
              src={`/images/${img}`}
              alt={img.replace(/\.[^/.]+$/, "")}
              width={400}
              height={300}
              style={{ borderRadius: "12px" }}
            />
            <h3>{img.replace(/\.[^/.]+$/, "")}</h3>
          </div>
        ))}
      </div>

      {/* Comments Section Placeholder */}
      <div style={{ marginTop: "60px" }}>
        <h2>Comments</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {[1, 2, 3].map((postId) => (
          <div key={postId} style={{ marginBottom: "40px" }}>
            <h3>Post {postId} Comments</h3>
            <p>No comments yet or API unavailable.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
