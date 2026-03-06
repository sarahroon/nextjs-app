"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(document.title);
  }, []);

  return <div>My Forms Blog</div>;
}

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
  { title: "Post 1", date: "2024-06-10", content: "First post content" },
  { title: "Post 2", date: "2024-06-12", content: "Second post content" },
  { title: "Post 3", date: "2024-06-08", content: "Third post content" },
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
