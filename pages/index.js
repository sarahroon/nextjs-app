"use client";

import { useState } from "react";

export default function Home() {
  const [sortOrder, setSortOrder] = useState("desc");

  const [posts, setPosts] = useState([
    {
      title: "Snakes",
      date: "2024-06-10",
      content:
        "My post about my favourite types of snakes: King Cobra from India, Black Mamba from Africa and Green Anaconda from South America.",
      link: "/snakes",
    },
    {
      title: "Dogs",
      date: "2024-06-12",
      content:
        "My post about my favourite types of dogs: Pomeranian from Poland and Germany, King Charles Spaniel from England and Golden Retriever from Scotland.",
      link: "/dogs",
    },
    {
      title: "Cats",
      date: "2024-06-08",
      content:
        "My post about my favourite types of cats: Maine Coon from USA, Sphynx from Canada and Siamese from Thailand.",
      link: "/cats",
    },
  ]);

  // Delete function
  function deletePost(title) {
    const updatedPosts = posts.filter((post) => post.title !== title);
    setPosts(updatedPosts);
  }

  // Sort posts
  const sortedPosts = [...posts].sort((a, b) => {
    return sortOrder === "asc"
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date);
  });

  return (
    <div>
      <h1>My Blog Posts About My Favourite Animals</h1>

      <label>Sort posts: </label>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="desc">Newest first</option>
        <option value="asc">Oldest first</option>
      </select>

      <div id="posts">
        {sortedPosts.map((post) => (
          <div key={post.title} className="post">
            <h3>{post.title}</h3>
            <small>{post.date}</small>
            <p>{post.content}</p>

            <a href={post.link}>Read more</a>

            <br />

            <button onClick={() => deletePost(post.title)}>Delete Post</button>

            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
