"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Log browser document
    console.log(document.title);

    // Create sort dropdown
    const sortLabel = document.createElement("label");
    sortLabel.textContent = "Sort posts: ";

    const sortSelect = document.createElement("select");
    sortSelect.id = "sortPosts";

    const newestOption = document.createElement("option");
    newestOption.value = "desc";
    newestOption.textContent = "Newest first";

    const oldestOption = document.createElement("option");
    oldestOption.value = "asc";
    oldestOption.textContent = "Oldest first";

    sortSelect.appendChild(newestOption);
    sortSelect.appendChild(oldestOption);

    // Create posts container
    const postsContainer = document.createElement("div");
    postsContainer.id = "posts";

    // Add elements to page
    document.body.appendChild(sortLabel);
    document.body.appendChild(sortSelect);
    document.body.appendChild(postsContainer);

    // Example posts
    const posts = [
      {
        title: "Snakes",
        date: "2024-06-10",
        content: "My post about my favourite types of snakes.",
      },
      {
        title: "Dogs",
        date: "2024-06-12",
        content: "My post about my favourite types of dogs.",
      },
      {
        title: "Cats",
        date: "2024-06-08",
        content: "My post about my favourite types of cats.",
      },
    ];

    // Function to display posts
    function displayPosts(order = "desc") {
      const sortedPosts = [...posts].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return order === "asc" ? dateA - dateB : dateB - dateA;
      });

      postsContainer.innerHTML = "";

      sortedPosts.forEach((post) => {
        const postDiv = document.createElement("div");
        postDiv.innerHTML = `
          <h3>${post.title}</h3>
          <small>${post.date}</small>
          <p>${post.content}</p>
          <hr>
        `;
        postsContainer.appendChild(postDiv);
      });
    }

    // Sort event
    sortSelect.addEventListener("change", (e) => {
      displayPosts(e.target.value);
    });

    // Show posts on load
    displayPosts("desc");
  }, []); // Empty dependency array => runs only in browser

  return <div>My Blog Posts About My Favourite Animals</div>;
}
